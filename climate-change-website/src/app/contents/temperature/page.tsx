"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import FooterNav from '../../../components/FooterNav';
import LandOcean from './LandOcean.tsx';

const TemperaturePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#b2c3ee]">
      <NavBar />
      <div className="w-full max-w-full mx-auto text-center flex-grow">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">04</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '3rem', sm: { height: '4rem' }, md: { height: '6rem' }}}></div>
          <h1 className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">TEMPERATURE</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <blockquote className="text-3xl text-gray-500 mb-8">
            &quot;How have the land-ocean temperature anomalies changed globally, in the Northern Hemisphere, 
            and in the Southern Hemisphere over the past century, and what significant trends can be observed from these changes?&quot;
          </blockquote>
          <h2 id="why-land-ocean-temp" className="text-2xl font-bold mb-4">Why Land-Ocean Temperature Anomalies?</h2>
          <p className="text-left text-lg mb-4">
              &emsp;&emsp;Tracking land-ocean temperature anomalies is important for understanding how climate change is affecting our planet. 
              By keeping an eye on global temperature changes, we get a big picture of how our climate is shifting and how well we&apos;re 
              doing in reducing greenhouse gas emissions. 
              Looking at different regions, like the northern and southern hemispheres, helps us see unique patterns. 
              The northern hemisphere, with more land, heats up faster than the southern, leading to more noticeable 
              temperature rises. <br />
              &emsp;&emsp;The Arctic in the north is warming quickly, which impacts sea levels and weather everywhere. 
              Watching temperature changes also helps us predict and prepare for extreme weather like heatwaves and heavy rain, 
              which affect our food, water, and health. Different ecosystems, like those in the southern oceans, 
              respond differently to temperature changes, so tracking these anomalies helps us protect biodiversity and natural resources.
              <br /> &emsp;&emsp;In short, keeping track of temperature changes around the world and in specific regions helps us understand 
              climate change better and come up with smart ways to deal with its impacts.
          </p>
          <LandOcean />
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-2">Sources</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <a href="https://www.ncei.noaa.gov/access/monitoring/global-temperature-anomalies" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  NCEI - Global Surface Temperature Anomalies (NCEI)
                </a>
              </li>
              <li>
                <a href="https://svs.gsfc.nasa.gov/4765" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  NASA - Sea Surface Temperature Anomalies (NASA Scientific Visualization Studio)
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

export default TemperaturePage;
