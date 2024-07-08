"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import SeaLevelTrends from './SeaLevelTrends.tsx';

const SeaLevelsTrendsPage = () => {
  return (
    <div className="bg-[#b2c3ee] mb-16">
      <NavBar />
      <div className="container mx-auto text-center">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">02</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '6rem' }}></div>
          <h1 className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">SEA LEVELS & CO2</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <blockquote className="text-3xl text-gray-500 mb-8">
            "How have global sea levels changed over the past century"
          </blockquote>
          <h2 className="text-2xl font-bold mb-4">Why Sea Levels?</h2>
          <p className="text-left text-lg mb-4">
            This question addresses a critical aspect of climate change that directly impacts ecosystems, weather patterns, and humans. 
            My database includes comprehensive data on global sea levels, CO2 concentrations (both globally and regionally), and temperature anomalies 
            from trustworthy websites like NOAA and NASA (Sources are at the bottom of the page). 
            Understanding the correlations between CO2 levels, sea levels, and temperature anomalies can provide insights into the drivers of climate change.
          </p>
          <SeaLevelTrends /> 
        </main>
      </div>
    </div>
  );
};

export default SeaLevelsTrendsPage;
