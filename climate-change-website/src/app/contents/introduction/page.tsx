"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import FooterNav from '../../../components/FooterNav';

const IntroductionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#b2c3ee]">
      <NavBar />
      <div className="w-full max-w-full mx-auto text-center flex-grow">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">01</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '3rem', sm: { height: '4rem' }, md: { height: '6rem' }}}></div>
          <h1 className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">INTRODUCTION</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg flex-grow" style={{ maxWidth: '61rem' }}>
          <h2 id="whats-climate-change" className="text-2xl font-bold mb-4">What is Climate Change?</h2>
          <p className="text-left text-lg">
            Climate change is all about big shifts in global temps, weather patterns, and rising sea levels over time. 
            These aren't the only things it affects as Climate Change affects a wide range of things on Earth.
            Climate change can happen naturally, but science says that humans are now speeding things up with all 
            the greenhouse gases we’re pumping into the air. Getting a handle on what climate change is, 
            why it’s happening, and how it affects us is important if we want to tackle it and adjust to 
            what's coming our way.
          </p>
          <h2 id="global-warming" className="text-2xl font-bold mb-4">What happened to Global Warming?</h2>
          <p className="text-left text-lg">
            A lot of people mix up global warming and climate change, but they’re not the same thing. 
            Global warming is just about the Earth getting hotter, while climate change is a bigger deal that covers 
            all kinds of changes happening to our planet. Sure, both are caused by us burning fossil fuels, 
            but climate change also includes stuff like melting glaciers, rising sea levels, and 
            even changes in when flowers bloom. So, think of global warming as just one piece of 
            the climate change puzzle. Below is a cool video I found on NASA's page where they talk about
            the differences in Climate Change vs Global Warming. The video shows the earth and sections that have
            warmed up over time from 1880 - 2022.
          </p>
          <div className="mt-8">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/LwRTw_7NNJs" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-sm text-gray-500 mt-4">
              "Global temperature rise from 1880 to 2022. Higher-than-normal temperatures are shown in red and lower-than-normal temperatures are shown in blue. Each frame represents global temperature anomalies (changes) averaged over the five years previous to that particular year. NASA Goddard Space Flight Center/NASA Scientific Visualization Studio/NASA Goddard Institute for Space Studies"
            </p>
          </div>
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-2">Sources</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <a href="https://science.nasa.gov/climate-change/what-is-climate-change/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  NASA: What is Climate Change?
                </a>
              </li>
              <li>
                <a href="https://science.nasa.gov/climate-change/faq/whats-the-difference-between-climate-change-and-global-warming/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  NASA: What’s the Difference Between Climate Change and Global Warming?
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

export default IntroductionPage;
