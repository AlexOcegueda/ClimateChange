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
                <Link href="/contents/sealevels&co2">02</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/sealevels&co2">SEA LEVELS & CO2</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/sealevels&co2" className="block">2.1 Why Sea Levels & CO2?</Link>
                <Link href="/contents/sealevels&co2" className="block mb-1">2.2 Global Sea Level Trends</Link>
                <Link href="/contents/sealevels&co2" className="block mb-1">2.3 CO2 Concentrations</Link>
                <Link href="/contents/sealevels&co2" className="block mb-1">2.4 Temperature Anomalies</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/question3">03</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/question3">PROJECTIONS</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/question3" className="block mb-1">12. Entertainment</Link>
                <Link href="/contents/question3" className="block mb-1">13. Professional Fees</Link>
                <Link href="/contents/question3" className="block mb-1">14. Supplies</Link>
                <Link href="/contents/question3" className="block mb-1">15. Telephone</Link>
                <Link href="/contents/question3" className="block">16. Utilities</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/question4">04</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/question4">PROJECT</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/question4" className="block mb-1">18. Github</Link>
                <Link href="/contents/question4" className="block">19. Database Used</Link>
              </div>
            </div>
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">
                <Link href="/contents/question5">05</Link>
              </div>
              <div className="text-[1.5rem] font-bold mb-2">
                <Link href="/contents/question5">Resources</Link>
              </div>
              <div className="text-[1rem] text-left">
                <Link href="/contents/question5" className="block mb-1">22. Datasets</Link>
                <Link href="/contents/question5" className="block">23. Citations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
