"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";

interface TemperatureData {
  year: number;
  anomaly: number;
}

const LandOceanTemperatureAnomalies: React.FC = () => {
  const [globalData, setGlobalData] = useState<TemperatureData[]>([]);
  const [nhData, setNhData] = useState<TemperatureData[]>([]);
  const [shData, setShData] = useState<TemperatureData[]>([]);
  const [showGlobal, setShowGlobal] = useState(true);
  const [showNH, setShowNH] = useState(true);
  const [showSH, setShowSH] = useState(true);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [globalRes, nhRes, shRes] = await Promise.all([
          axios.get("/api/LandOceanGlobalMean/"),
          axios.get("/api/LandOceanNHMean/"),
          axios.get("/api/LandOceanSHMean/")
        ]);

        setGlobalData(processData(globalRes.data.data));
        setNhData(processData(nhRes.data.data));
        setShData(processData(shRes.data.data));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const processData = (data: any[]): TemperatureData[] => {
    return data.map(d => ({
      year: d.Year,
      anomaly: parseFloat(d.J_D)
    })).filter(d => !isNaN(d.anomaly));
  };

  useEffect(() => {
    if (globalData.length > 0 && nhData.length > 0 && shData.length > 0) {
      drawGraph(globalData, nhData, shData);
    }
  }, [globalData, nhData, shData, showGlobal, showNH, showSH]);

  const drawGraph = (globalData: TemperatureData[], nhData: TemperatureData[], shData: TemperatureData[]) => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();

    const margin = { top: 50, right: 30, bottom: 70, left: 50 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = d3.scaleTime()
      .domain(d3.extent(globalData, (d) => new Date(d.year, 0, 1)) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([
        d3.min([...globalData, ...nhData, ...shData], (d) => d.anomaly) || 0,
        d3.max([...globalData, ...nhData, ...shData], (d) => d.anomaly) || 0
      ])
      .range([height, 0]);

    const line = d3.line<TemperatureData>()
      .x((d) => x(new Date(d.year, 0, 1)))
      .y((d) => y(d.anomaly));

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    if (showGlobal) {
      g.append("path")
        .datum(globalData)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    }

    if (showNH) {
      g.append("path")
        .datum(nhData)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    }

    if (showSH) {
      g.append("path")
        .datum(shData)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    }

    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("padding", "5px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("pointer-events", "none")
      .style("display", "none");

    const mouseover = (event: MouseEvent, d: TemperatureData) => {
      const year = d.year;
      const globalPoint = globalData.find(p => p.year === year);
      const nhPoint = nhData.find(p => p.year === year);
      const shPoint = shData.find(p => p.year === year);
      tooltip
        .html(
          `Year: ${year}<br/>Global: ${globalPoint ? globalPoint.anomaly.toFixed(3) : "N/A"} °C<br/>NH: ${nhPoint ? nhPoint.anomaly.toFixed(3) : "N/A"} °C<br/>SH: ${shPoint ? shPoint.anomaly.toFixed(3) : "N/A"} °C`
        )
        .style("display", "block");

      d3.selectAll(`circle[data-year="${year}"]`)
        .attr("r", 5)
        .attr("fill", "yellow");
    };

    const mousemove = (event: MouseEvent) => {
      tooltip
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px");
    };

    const mouseout = () => {
      tooltip.style("display", "none");
      d3.selectAll("circle").attr("r", 3).attr("fill", (d: TemperatureData) => {
        if (globalData.includes(d)) return "red";
        if (nhData.includes(d)) return "blue";
        return "green";
      });
    };

    const drawPoints = (data: TemperatureData[], color: string, className: string) => {
      g.selectAll(`.${className}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("class", className)
        .attr("cx", (d) => x(new Date(d.year, 0, 1)))
        .attr("cy", (d) => y(d.anomaly))
        .attr("r", 3)
        .attr("fill", color)
        .attr("data-year", d => d.year)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);
    };

    if (showGlobal) {
      drawPoints(globalData, "red", "global-point");
    }

    if (showNH) {
      drawPoints(nhData, "blue", "nh-point");
    }

    if (showSH) {
      drawPoints(shData, "green", "sh-point");
    }

    g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(y));

    svg.append("text")
      .attr("x", width / 2 + margin.left)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Land-Ocean Temperature Anomalies (Global, NH, SH)");

    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width / 2 - 100},${height + margin.top + 60})`);

    if (showGlobal) {
      legend.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "red");

      legend.append("text")
        .attr("x", 20)
        .attr("y", 10)
        .text("Global")
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle");
    }

    if (showNH) {
      legend.append("rect")
        .attr("x", 80)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "blue");

      legend.append("text")
        .attr("x", 100)
        .attr("y", 10)
        .text("Northern Hemisphere")
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle");
    }

    if (showSH) {
      legend.append("rect")
        .attr("x", 220)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", "green");

      legend.append("text")
        .attr("x", 240)
        .attr("y", 10)
        .text("Southern Hemisphere")
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle");
    }
  };

  return (
    <div>
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={showGlobal}
            onChange={() => setShowGlobal(!showGlobal)}
          />
          Global
        </label>
        <label>
          <input
            type="checkbox"
            checked={showNH}
            onChange={() => setShowNH(!showNH)}
          />
          Northern Hemisphere
        </label>
        <label>
          <input
            type="checkbox"
            checked={showSH}
            onChange={() => setShowSH(!showSH)}
          />
          Southern Hemisphere
        </label>
      </div>
      <div className="svg-container">
        <svg ref={svgRef} viewBox="0 0 800 500" preserveAspectRatio="xMinYMin meet" className="svg-content"></svg>
        <div className="tooltip" />
      </div>
      <style jsx>{`
        .checkboxes {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
        .checkboxes label {
          margin-right: 15px;
        }
        .svg-container {
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 62.5%;
          vertical-align: top;
          overflow: hidden;
        }
        .svg-content {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .tooltip {
          position: absolute;
          background: white;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          display: none;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default LandOceanTemperatureAnomalies;
