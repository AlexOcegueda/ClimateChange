"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as d3 from "d3";
import CO2Statistics from './CO2Statistics';

interface CO2Data {
  year: number;
  ann_inc: number;
  average: number;
  month: number;
}

interface Projection {
  decade: number;
  average: number;
}

const CO2Graphs: React.FC = () => {
  const [globalAnnualGrowth, setGlobalAnnualGrowth] = useState<CO2Data[]>([]);
  const [mloAnnualGrowth, setMloAnnualGrowth] = useState<CO2Data[]>([]);
  const [globalMonthly, setGlobalMonthly] = useState<CO2Data[]>([]);
  const [mloMonthly, setMloMonthly] = useState<CO2Data[]>([]);
  const [season, setSeason] = useState("Winter");
  const [activeTab, setActiveTab] = useState("annualGrowth");
  const [projections, setProjections] = useState<Projection[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const annualGrowthRef = useRef<SVGSVGElement | null>(null);
  const seasonalRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          globalAnnualGrowthRes,
          mloAnnualGrowthRes,
          globalMonthlyRes,
          mloMonthlyRes,
        ] = await Promise.all([
          axios.get("/api/GlobalCO2AnnualGrowthRate/"),
          axios.get("/api/CO2GrowthRateMLO/"),
          axios.get("/api/GlobalCO2MonthlyMean/"),
          axios.get("/api/CO2MonthlyMeanMLO/"),
        ]);

        setGlobalAnnualGrowth(globalAnnualGrowthRes.data.data);
        setMloAnnualGrowth(mloAnnualGrowthRes.data.data);
        setGlobalMonthly(globalMonthlyRes.data.data);
        setMloMonthly(mloMonthlyRes.data.data);

      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const drawGraphs = (
    globalData: CO2Data[],
    mloData: CO2Data[],
    ref: React.RefObject<SVGSVGElement>,
    xKey: keyof CO2Data,
    yKey: keyof CO2Data,
    yRange: [number, number],
    xDomain: [Date, Date]
  ) => {
    const svgElement = ref.current;
    if (!svgElement) return;

    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const x = d3.scaleTime().domain(xDomain).range([0, width]);

    const y = d3.scaleLinear().domain(yRange).range([height, 0]);

    const lineGlobal = d3.line<CO2Data>()
      .x(d => x(new Date(d[xKey] as number, 0, 1)))
      .y(d => y(d[yKey] as number));

    const lineMLO = d3.line<CO2Data>()
      .x(d => x(new Date(d[xKey] as number, 0, 1)))
      .y(d => y(d[yKey] as number));

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("padding", "5px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("pointer-events", "none")
      .style("display", "none");

    const mouseover = (event: MouseEvent, d: CO2Data) => {
      const year = d[xKey] as number;
      const globalPoint = globalData.find(p => p[xKey] === year);
      const mloPoint = mloData.find(p => p[xKey] === year);
      tooltip
        .html(
          `Year: ${year}<br/>Global: ${
            globalPoint ? globalPoint[yKey].toFixed(3) : "N/A"
          }<br/>MLO: ${mloPoint ? mloPoint[yKey].toFixed(3) : "N/A"}`
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
      d3.selectAll("circle").attr("r", 3).attr("fill", "purple");
    };

    g.append("path")
      .datum(globalData)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", lineGlobal);

    g.selectAll(".dot-global")
      .data(globalData)
      .enter()
      .append("circle")
      .attr("class", "dot-global")
      .attr("cx", d => x(new Date(d[xKey] as number, 0, 1)))
      .attr("cy", d => y(d[yKey] as number))
      .attr("r", 3)
      .attr("fill", "purple")
      .attr("data-year", d => d[xKey] as number)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseout", mouseout);

    g.append("path")
      .datum(mloData)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", lineMLO);

    g.selectAll(".dot-mlo")
      .data(mloData)
      .enter()
      .append("circle")
      .attr("class", "dot-mlo")
      .attr("cx", d => x(new Date(d[xKey] as number, 0, 1)))
      .attr("cy", d => y(d[yKey] as number))
      .attr("r", 3)
      .attr("fill", "purple")
      .attr("data-year", d => d[xKey] as number)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseout", mouseout);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y));
  };

  const drawSeasonalGraphs = (
    globalData: CO2Data[],
    mloData: CO2Data[],
    ref: React.RefObject<SVGSVGElement>,
    xKey: keyof CO2Data,
    yKey: keyof CO2Data,
    yRange: [number, number]
  ) => {
    const seasonMonths = {
      Winter: [12, 1, 2],
      Spring: [3, 4, 5],
      Summer: [6, 7, 8],
      Fall: [9, 10, 11],
    };

    const filteredGlobalData: { year: number; average: number }[] = [];
    const filteredMLOData: { year: number; average: number }[] = [];

    for (let year = 1979; year <= 2023; year++) {
      const globalSeasonData = globalData.filter(
        d => d.year === year && seasonMonths[season].includes(d.month)
      );
      const mloSeasonData = mloData.filter(
        d => d.year === year && seasonMonths[season].includes(d.month)
      );

      if (globalSeasonData.length > 0) {
        const globalAvg = d3.mean(globalSeasonData, d => d[yKey] as number);
        filteredGlobalData.push({
          year,
          average: parseFloat((globalAvg ?? 0).toFixed(3)),
        });
      }

      if (mloSeasonData.length > 0) {
        const mloAvg = d3.mean(mloSeasonData, d => d[yKey] as number);
        filteredMLOData.push({
          year,
          average: parseFloat((mloAvg ?? 0).toFixed(3)),
        });
      }
    }

    drawGraphs(
      filteredGlobalData as CO2Data[],
      filteredMLOData as CO2Data[],
      ref,
      "year",
      "average",
      yRange,
      [new Date(1979, 0, 1), new Date(2023, 11, 31)]
    );
  };

  useEffect(() => {
    if (
      activeTab === "annualGrowth" &&
      globalAnnualGrowth.length &&
      mloAnnualGrowth.length
    ) {
      drawGraphs(
        globalAnnualGrowth,
        mloAnnualGrowth,
        annualGrowthRef,
        "year",
        "ann_inc",
        [0.2, 3.5],
        [new Date(1959, 0, 1), new Date(2023, 11, 31)]
      );
    } else if (
      activeTab === "seasonal" &&
      globalMonthly.length &&
      mloMonthly.length
    ) {
      drawSeasonalGraphs(
        globalMonthly,
        mloMonthly,
        seasonalRef,
        "year",
        "average",
        [320, 420]
      );
    }
  }, [
    activeTab,
    globalAnnualGrowth,
    mloAnnualGrowth,
    globalMonthly,
    mloMonthly,
    season,
    windowWidth
  ]);

  const renderDescription = () => {
    if (activeTab === "annualGrowth") {
      return (
        <>
          <p className="text-left">
            &emsp; &emsp;This graph shows the annual growth rate of CO2 concentrations in PPM. It
            highlights the changes in CO2 levels globally and at Mauna Loa. From the graph we can see 
            that both Mauna Loa and global growth rates for CO2 concentrations have been steadily increasing 
            throughout the years starting with a low .5 ppm rising all the way up to a high of 
            ~2.8 with Mauna Loa reaching over 3 in 2023.
          </p>
          <p className="text-left">
            &emsp; &emsp;Judging off the growth rate of each decade and using a linear regression model, 
            I predict that it will increase to{' '}
            {projections.find(p => p.decade === 2020)?.average} ppm in the 2020s,{' '}
            {projections.find(p => p.decade === 2030)?.average} ppm in the 2030s,{' '}
            {projections.find(p => p.decade === 2040)?.average} ppm in the 2040s, and{' '}
            {projections.find(p => p.decade === 2050)?.average} ppm in the 2050s. 
            Below is a bar graph of the average growth rate for each decade in ppm.
          </p>
          <CO2Statistics setProjections={setProjections} />
        </>
      );
    } else if (activeTab === "seasonal") {
      if (season === "Winter") {
        return (
          <p>
            This graph shows the average CO2 concentrations in PPM for the Winter
            season. The data represents the average CO2 levels from December,
            January, and February. 
          </p>
        );
      } else if (season === "Spring") {
        return (
          <p>
            This graph shows the average CO2 concentrations in PPM for the Spring
            season. The data represents the average CO2 levels from March,
            April, and May.
          </p>
        );
      } else if (season === "Summer") {
        return (
          <p>
            This graph shows the average CO2 concentrations in PPM for the Summer
            season. The data represents the average CO2 levels from June, July,
            and August.
          </p>
        );
      } else if (season === "Fall") {
        return (
          <p>
            This graph shows the average CO2 concentrations in PPM for the Fall season.
            The data represents the average CO2 levels from September, October,
            and November.
          </p>
        );
      }
    }
  };

  return (
    <div>
      <div className="dropdown">
        <label htmlFor="graphType">Select Graph Type: </label>
        <select
          id="graphType"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="annualGrowth">Annual Growth</option>
          <option value="seasonal">Seasonal</option>
        </select>
      </div>
      {activeTab === "seasonal" && (
        <div className="dropdown">
          <label htmlFor="seasonType">Select Season: </label>
          <select
            id="seasonType"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
        </div>
      )}
      {activeTab === "annualGrowth" && (
        <>
          <svg
            ref={annualGrowthRef}
            id="annual-growth-svg"
            width={windowWidth < 820 ? windowWidth - 40 : 800}
            height={windowWidth < 820 ? (windowWidth - 40) * 0.5 : 400}
            className="center-svg"
          ></svg>
          <div className="legend">
            <div>
              <span style={{ color: "red" }}>━</span> Global
            </div>
            <div>
              <span style={{ color: "blue" }}>━</span> Mauna Loa
            </div>
          </div>
        </>
      )}
      {activeTab === "seasonal" && (
        <>
          <svg
            ref={seasonalRef}
            id="seasonal-svg"
            width={windowWidth < 820 ? windowWidth - 40 : 800}
            height={windowWidth < 820 ? (windowWidth - 40) * 0.5 : 400}
            className="center-svg"
          ></svg>
          <div className="legend">
            <div>
              <span style={{ color: "red" }}>━</span> Global
            </div>
            <div>
              <span style={{ color: "blue" }}>━</span> Mauna Loa
            </div>
          </div>
        </>
      )}
      {renderDescription()}
      <style jsx>{`
        .legend {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .legend div {
          margin: 0 15px;
          font-size: 14px;
        }
        .center-svg {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
};

export default CO2Graphs;
