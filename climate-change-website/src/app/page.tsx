'use client';

import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import EarthModel from '../components/EarthModel';
import TableOfContents from '../components/TableOfContents';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const tableOfContentsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLearnMoreClick = () => {
    if (tableOfContentsRef.current) {
      tableOfContentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const earthStyle = {
    transform: windowWidth > 1250 ? `translate(${scrollY * -1.1}px, ${scrollY * 1.1}px)` : 'none',
    transition: 'transform 0.1s linear',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-gradient-to-b from-[#8fa5d5] via-[#8fa5d5] to-[#b2c3ee]">
        <NavBar />
        <main className="flex flex-col items-center justify-center py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
            <div className="ml-4 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">Climate Change</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
                The first step to fighting climate change is to become educated in climate change.
              </p>
              <button
                onClick={handleLearnMoreClick}
                className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow-md"
              >
                Learn More
              </button>
            </div>
            <div style={earthStyle}>
              <EarthModel />
            </div>
          </div>
        </main>
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#b2c3ee"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,90.7C672,117,768,171,864,160C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div ref={tableOfContentsRef}>
        <TableOfContents />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#8fa5d5"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,245.3C672,235,768,181,864,176C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
