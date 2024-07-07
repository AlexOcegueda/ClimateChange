"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as d3 from "d3";

const CO2Statistics = ({ setProjections }) => {
  const [decadeData, setDecadeData] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const fetchDecadeData = async () => {
      try {
        const res = await axios.get("/api/co2statistics");
        const completeDecadeData = res.data.data.filter(d => d.decade <= 2010);
        setDecadeData(completeDecadeData);

        const x = completeDecadeData.map(d => d.decade);
        const y = completeDecadeData.map(d => d.average);

        const n = x.length;
        const sumX = d3.sum(x);
        const sumY = d3.sum(y);
        const sumXY = d3.sum(x.map((xi, i) => xi * y[i]));
        const sumXX = d3.sum(x.map(xi => xi * xi));

        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const projection2020 = slope * 2020 + intercept;
        const projection2030 = slope * 2030 + intercept;
        const projection2040 = slope * 2040 + intercept;
        const projection2050 = slope * 2050 + intercept;

        setProjections([
          { decade: 2020, average: parseFloat(projection2020.toFixed(2)) },
          { decade: 2030, average: parseFloat(projection2030.toFixed(2)) },
          { decade: 2040, average: parseFloat(projection2040.toFixed(2)) },
          { decade: 2050, average: parseFloat(projection2050.toFixed(2)) },
        ]);
      } catch (error) {
        console.error("Error fetching decade data", error);
      }
    };

    fetchDecadeData();
  }, [setProjections]);

  useEffect(() => {
    if (decadeData.length > 0) {
      const svgElement = svgRef.current;
      if (!svgElement) return;

      const svg = d3.select(svgElement);
      svg.selectAll("*").remove();

      const margin = { top: 20, right: 30, bottom: 30, left: 50 };
      const width = +svg.attr("width") - margin.left - margin.right;
      const height = +svg.attr("height") - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .domain(decadeData.map(d => d.decade))
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(decadeData, d => d.average)])
        .range([height, 0]);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

      g.append("g")
        .call(d3.axisLeft(y));

      const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("padding", "5px")
        .style("border", "1px solid #ccc")
        .style("border-radius", "5px")
        .style("pointer-events", "none")
        .style("display", "none");

      const mouseover = (event, d) => {
        tooltip
          .html(`Decade: ${d.decade}<br/>Average Growth: ${d.average.toFixed(2)} ppm`)
          .style("display", "block");
        d3.select(event.currentTarget)
          .attr("fill", "orange");
      };

      const mousemove = (event) => {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      };

      const mouseout = (event) => {
        tooltip.style("display", "none");
        d3.select(event.currentTarget)
          .attr("fill", "steelblue");
      };

      g.selectAll(".bar")
        .data(decadeData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.decade))
        .attr("y", d => y(d.average))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.average))
        .attr("fill", "steelblue")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);
    }
  }, [decadeData]);

  return <svg ref={svgRef} width="800" height="400"></svg>;
};

export default CO2Statistics;
