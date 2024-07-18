"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import SeaLevelTrends from './SeaLevelTrends';
import FooterNav from '../../../components/FooterNav';

const SeaLevelsTrendsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#b2c3ee]">
      <NavBar />
      <div className="w-full max-w-full mx-auto text-center flex-grow">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">02</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '3rem', sm: { height: '4rem' }, md: { height: '6rem' }}}></div>
          <h1 className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">SEA LEVELS</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg flex-grow" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <blockquote className="text-3xl text-gray-500 mb-8">
            &quot;How has global sea levels changed over the past century&quot;
          </blockquote>
          <h2 id="why-sea-levels" className="text-2xl font-bold mb-4">Why Sea Levels?</h2>
          <p className="text-left text-lg mb-4">
            &emsp; &emsp;Sea levels are a great way to see how Climate Change has affected our oceans, as the data shows that they have been rising
            over the past centuries. This is because as Global Warming begins to rise the glacier and ice caps melt, which adds more
            water to the oceans. Another explanation to why they are rising is that as the ocean get warmer the water begins to expand.
            <br /> &emsp; &emsp; Many ecosystems, like mangroves and salt marshes, rely on specific sea levels to thrive so changes in sea level can 
            disrupt these ecosystems, affecting the plants and animals that live there.<br /> 
            &emsp; &emsp;Rising sea levels can lead to more frequent and severe coastal flooding. 
            This can affect millions of people living in coastal areas, damaging homes, infrastructure, and even displacing communities.
            By studying sea level trends, scientists can gain insights into broader climate patterns and predict future changes. 
            This helps in planning and implementing measures to mitigate the effects of climate change.
          </p>
          <SeaLevelTrends /> 
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-2">Sources</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <a href="https://www.carbonbrief.org/explainer-how-climate-change-is-accelerating-sea-level-rise/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  How Climate Change is Accelerating Sea Level Rise
                </a>
              </li>
              <li>
                <a href="https://climate.mit.edu/explainers/sea-level-rise" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Sea Level Rise Coastal Effects, Storm Damages, and Displacement
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <FooterNav />
    </div>
  );
};

export default SeaLevelsTrendsPage;
