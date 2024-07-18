"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import CO2Graphs from './CO2Graphs';
import FooterNav from '../../../components/FooterNav';

const CO2ConcentrationsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#b2c3ee]">
      <NavBar />
      <div className="w-full max-w-full mx-auto text-center flex-grow">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">03</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10 sm:h-[4rem] md:h-[6rem]" style={{ height: '3rem' }}></div>
          <h1 className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">CO2</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg flex-grow" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <blockquote className="text-3xl text-gray-500 mb-8">
            &quot;How has CO2 concentrations changed over the past century?&quot;
          </blockquote>
          <h2 id="why-co2" className="text-2xl font-bold mb-4">Why CO2 Concentrations?</h2>
          <p className="text-left text-lg mb-4">
            &emsp; &emsp; CO2 levels in the atmosphere have risen significantly due to human activities like burning fossil fuels 
            (coal, oil, and natural gas), deforestation, and industrial processes. Monitoring CO2 helps scientists directly 
            link these activities to climate change. <br />
            &emsp; &emsp; CO2 is a major greenhouse gas, meaning it traps heat in the Earth&apos;s atmosphere. This trapped heat leads to 
            global warming, which causes a wide range of environmental impacts, including melting ice caps, rising sea levels, 
            and more frequent extreme weather events.
            High CO2 levels can also trigger feedback loops that makes matters worse for climate change. For instance, as temperatures rise, 
            permafrost melts, releasing more CO2 and methane into the atmosphere, which in turn leads to even higher temperatures.
            CO2 is absorbed by the oceans, where it forms carbonic acid. This process, known as ocean acidification, can harm marine
            life, particularly organisms with calcium carbonate shells or skeletons, like corals and some shellfish. 
            This impacts biodiversity and the health of marine ecosystems.
            <br /> &emsp; &emsp; Lastly, tracking CO2 concentrations informs climate policy and mitigation strategies. Accurate data on CO2 levels help governments 
            and organizations set targets for reducing emissions, develop renewable energy sources, and implement carbon capture technologies.
            Also, by studying ice cores and other geological records, scientists have found that current CO2 levels are higher 
            than they&apos;ve been in at least 800,000 years. This historical context underscores the urgency in creating plans
            to slow down the effects of climate change.
          </p>
          <h2 id="global-mauna-loa" className="text-2xl font-bold mb-4">Global vs Mauna Loa CO2 Concentrations</h2>
          <CO2Graphs />
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-2">Sources</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/?intent=121" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  NASA Climate Change: Vital Signs of the Planet
                </a>
              </li>
              <li>
                <a href="https://wesr.unep.org/climate/essential-climate-variables-ecv/atmospheric-co2-concentration" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  UNEP on Atmospheric CO2 Concentration
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

export default CO2ConcentrationsPage;
