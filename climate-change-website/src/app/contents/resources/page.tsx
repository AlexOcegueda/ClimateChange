"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';
import FooterNav from '../../../components/FooterNav';

const ResourcesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#b2c3ee]">
      <NavBar />
      <div className="w-full max-w-full mx-auto text-center flex-grow">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">06</div>
          <div className="absolute left-0 right-0 bg-white h-12 sm:h-16 md:h-24 -z-10"></div>
          <h1 className="ml-4 text-[2rem] sm:text-[3rem] md:text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">RESOURCES</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg flex-grow" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 id="datasets" className="text-2xl font-bold mb-4">Datasets</h2>
          <h3 className="text-1xl text-left font-bold mb-4">Historical Temperature Records</h3>
          <p className="text-left text-lg mb-4"> 
            <a className="text-blue-500" href="https://data.giss.nasa.gov/gistemp/">[NASA GISS Temperature Data]</a><br />
          </p>
          <h3 className="text-1xl text-left font-bold mb-4">Atmospheric CO2 Concentrations</h3> 
          <p className="text-left text-lg mb-4"> 
            <a className="text-blue-500" href="https://gml.noaa.gov/ccgg/trends/data.html">[Mauna Loa CO2 Data]</a><br />
            <a className="text-blue-500" href="https://gml.noaa.gov/ccgg/trends/gl_data.html">[Global CO2 Data]</a>
          </p>
          <h3 className="text-1xl text-left font-bold mb-4">Sea Level Rise</h3>
          <p className="text-left text-lg mb-4">     
            <a className="text-blue-500" href="https://tidesandcurrents.noaa.gov/sltrends/mslGlobalTrendsTable.html">[NOAA Global Mean Sea Level Trends]</a><br />
            <a className="text-blue-500" href="https://tidesandcurrents.noaa.gov/sltrends/mslUSTrendsTable.html">[NOAA US Mean Sea Level Trends]</a>
          </p>
          <h2 id="citations" className="text-2xl font-bold mb-4">Citations</h2>
          <p className="text-left text-lg mb-4">
            Special thanks to the data providers for making their data publicly available:
          </p>
          <h3 className="text-1xl text-left font-bold mb-4">NASA&apos;s Goddard Institute for Space Studies</h3>   
          <p className="text-left">
            &quot;These data are made freely available to the public and the scientific community in the belief that their wide dissemination will lead to greater understanding and new scientific insights.&quot;<br /><br />
            GISTEMP Team, 2024: GISS Surface Temperature Analysis (GISTEMP), version 4. NASA Goddard Institute for Space Studies. Dataset accessed 2024-06-17 at <a className="text-blue-500" href="https://data.giss.nasa.gov/gistemp/">https://data.giss.nasa.gov/gistemp/</a>.<br /><br />
            Lenssen, N., G. Schmidt, J. Hansen, M. Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12, 6307-6326, doi:10.1029/2018JD029522. Dataset accessed 2024-06-17 at <a className="text-blue-500" href="https://data.giss.nasa.gov/gistemp/">https://data.giss.nasa.gov/gistemp/</a>.
            <br /><br />
          </p>
          <h3 className="text-1xl text-left font-bold mb-4">NOAA GML</h3> 
          <p className="text-left">
            &quot;These data are made freely available to the public and the scientific community.&quot;<br /><br /> 
            US Department of Commerce, N. (2005, October 1). Global Monitoring Laboratory - Carbon Cycle Greenhouse Gases. GML. <a className="text-blue-500" href="https://gml.noaa.gov/ccgg/trends/">https://gml.noaa.gov/ccgg/trends/</a><br /><br />
            <a className="text-blue-500" href="https://scrippsco2.ucsd.edu/">Scripps Institution of Oceanography</a>
            <br /><br /> 
            Contact Them: <br/> Xin Lan (xin.lan@noaa.gov) <br /> Ralph Keeling (rkeeling@ucsd.edu).<br /><br />
          </p>
          <h3 className="text-1xl text-left font-bold mb-4">NOAA Tides and Currents</h3> 
          <p className="text-left">
            NOAA Tides and Currents. Tidesandcurrents.noaa.gov, tidesandcurrents.noaa.gov.<br />
            <a className="text-blue-500" href="https://tidesandcurrents.noaa.gov/contact.html">[Contact them]</a>
          </p>
        </main>
      </div>
      <FooterNav />
    </div>
  );
};

export default ResourcesPage;
