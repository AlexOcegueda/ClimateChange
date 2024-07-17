"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

interface SeaLevelData {
  StationName: string;
  MSLTrends: number;
  MSLTrendsFtPerCentury: number;
  YearRange: number;
  FirstYear: number;
  LastYear: number;
}

interface SummaryStats {
  avgTrend: number;
  avgTrendOver100: number;
  avgTrendUnder100: number;
  positiveTrends: number;
  negativeTrends: number;
  totalStations: number;
}

const SeaLevelTrends = () => {
  const [globalSeaLevelData, setGlobalSeaLevelData] = useState<SeaLevelData[]>([]);
  const [usSeaLevelData, setUsSeaLevelData] = useState<SeaLevelData[]>([]);
  const [combinedSeaLevelData, setCombinedSeaLevelData] = useState<SeaLevelData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [summaryStats, setSummaryStats] = useState<SummaryStats>({
    avgTrend: 0,
    avgTrendOver100: 0,
    avgTrendUnder100: 0,
    positiveTrends: 0,
    negativeTrends: 0,
    totalStations: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [globalSeaLevelRes, usSeaLevelRes] = await Promise.all([
          axios.get('/api/GlobalSeaLevelTrends/'),
          axios.get('/api/USSeaLevelTrends/'),
        ]);

        setGlobalSeaLevelData(globalSeaLevelRes.data.data);
        setUsSeaLevelData(usSeaLevelRes.data.data);
        setCombinedSeaLevelData([...globalSeaLevelRes.data.data, ...usSeaLevelRes.data.data]);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (combinedSeaLevelData.length) {
      const filteredDataOver100 = combinedSeaLevelData.filter(d => d.YearRange >= 100);
      const filteredDataUnder100 = combinedSeaLevelData.filter(d => d.YearRange < 100);
      const avgTrend = d3.mean(combinedSeaLevelData, d => d.MSLTrends) || 0;
      const avgTrendOver100 = d3.mean(filteredDataOver100, d => d.MSLTrends) || 0;
      const avgTrendUnder100 = d3.mean(filteredDataUnder100, d => d.MSLTrends) || 0;
      const positiveTrends = combinedSeaLevelData.filter(d => d.MSLTrends > 0).length;
      const negativeTrends = combinedSeaLevelData.filter(d => d.MSLTrends <= 0).length;
      const totalStations = combinedSeaLevelData.length;

      setSummaryStats({
        avgTrendOver100,
        avgTrendUnder100,
        avgTrend,
        positiveTrends,
        negativeTrends,
        totalStations,
      });
    }
  }, [combinedSeaLevelData]);

  const extractCountry = (stationName: string): string => {
    const parts = stationName.split(',');
    const countryOrState = parts.length > 1 ? parts[1].trim().toLowerCase() : 'unknown';
    const usStatesAndTerritories = ["al", "ak", "az", "ar", "ca", "co", "ct", "de", "fl", "ga", "hi", "id", "il", "in", "ia", "ks", "ky", "la", "me", "md", "ma", "mi", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nj", "nm", "ny", "nc", "nd", "oh", "ok", "or", "pa", "ri", "sc", "sd", "tn", "tx", "ut", "vt", "va", "wa", "wv", "wi", "wy", "dc", "pr", "vi"];

    if (usStatesAndTerritories.includes(countryOrState)) {
      return 'usa';
    }
    return countryOrState;
  };

  const uniqueCountries = [...new Set(combinedSeaLevelData.map(station => extractCountry(station.StationName)))].map(country => country.charAt(0).toUpperCase() + country.slice(1));

  const StationDetailsTable: React.FC<{ country: string }> = ({ country }) => {
    const standardizedCountry = country.toLowerCase();
    const stations = combinedSeaLevelData.filter(station => extractCountry(station.StationName) === standardizedCountry);
    const avgTrendForCountry = d3.mean(stations, d => d.MSLTrends) || 0;

    return (
      <div>
        <p className="text-xl font-bold mb-4">Average Sea Level Trend for {country}: {avgTrendForCountry.toFixed(2)} mm/yr</p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Station Name</th>
                <th className="px-4 py-2">MSL Trend (mm/yr)</th>
                <th className="px-4 py-2">MSL Trend (Ft Per Century)</th>
                <th className="px-4 py-2">Years Collected</th>
                <th className="px-4 py-2">Start Year</th>
                <th className="px-4 py-2">End Year</th>
              </tr>
            </thead>
            <tbody>
              {stations.map(station => (
                <tr key={station.StationName}>
                  <td className="border px-4 py-2">{station.StationName.split(',')[0]}</td>
                  <td className="border px-4 py-2">{station.MSLTrends}</td>
                  <td className="border px-4 py-2">{station.MSLTrendsFtPerCentury}</td>
                  <td className="border px-4 py-2">{station.YearRange}</td>
                  <td className="border px-4 py-2">{station.FirstYear}</td>
                  <td className="border px-4 py-2">{station.LastYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 id="global-sea-level" className="text-2xl font-bold mb-4">Global Sea Level Trends</h2>
      <h3 className="text-2xl font-bold mb-4">Summary Statistics</h3>
      {summaryStats.totalStations > 0 ? (
        <>
          <p>Average sea level trend for stations with more than 100 years of data: {summaryStats.avgTrendOver100.toFixed(2)} mm/yr</p>
          <p>Average sea level trend for stations with less than 100 years of data: {summaryStats.avgTrendUnder100.toFixed(2)} mm/yr</p>
          <p>Average sea level trend for all stations: {summaryStats.avgTrend.toFixed(2)} mm/yr</p>
          <p>Number of stations with positive trends: {summaryStats.positiveTrends}</p>
          <p>Number of stations with negative trends: {summaryStats.negativeTrends}</p>
          <p>Total number of stations analyzed: {summaryStats.totalStations}</p>
        </>
      ) : (
        <p>Loading summary statistics...</p>
      )}
      <h3 className="text-2xl font-bold mb-4">Sea Level Trends by Country</h3>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        <option value="">Select a Country</option>
        {uniqueCountries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      {selectedCountry && <StationDetailsTable country={selectedCountry} />}
    </div>
  );
};

export default SeaLevelTrends;
