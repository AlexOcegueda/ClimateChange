'use client';

import Link from 'next/link';

const TableOfContents = () => {
  return (
    <div className="bg-[#b2c3ee] py-16">
      <div className="container mx-auto text-center">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">00</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '6rem' }}></div>
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">CONTENTS</div>
        </div>
        <div className="flex justify-end">
          <div className="grid grid-cols-4 max-w-4xl">
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/introduction">01</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/introduction">INTRODUCTION</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/introduction" className="block mb-1">1.1 What's Climate Change?</Link>
                <Link href="/contents/introduction" className="block">1.2 Global Warming?</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/sealevels">02</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/sealevels">SEA LEVELS</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/sealevels" className="block">2.1 Why Sea Levels Trends?</Link>
                <Link href="/contents/sealevels" className="block mb-1">2.2 Global Sea Level Trends</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/co2">03</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/co2">CO2</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/co2" className="block mb-1">3.1 Why CO2 Concentrations?</Link>
                <Link href="/contents/co2" className="block mb-1">3.2 Global vs Mauna Loa</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/temperature">04</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/temperature">TEMPERATURE</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/temperature" className="block mb-1">4.1 Why Temperature Anomalies?</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/project">05</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/project">PROJECT</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/project" className="block mb-1">5.1 Github</Link>
                <Link href="/contents/project" className="block">5.2 Database</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/resources">06</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/resources">RESOURCES</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/resources" className="block mb-1">6.1 Datasets</Link>
                <Link href="/contents/resources" className="block">6.2 Citations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
