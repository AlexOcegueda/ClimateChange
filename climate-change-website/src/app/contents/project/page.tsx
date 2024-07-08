"use client";

import React from 'react';
import NavBar from '../../../components/NavBar';

const ProjectPage = () => {
  return (
    <div className="bg-[#b2c3ee] mb-16">
      <NavBar />
      <div className="container mx-auto text-center">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">05</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '6rem' }}></div>
          <h1 className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">PROJECTS</h1>
        </div>
        <main className="bg-white p-8 mx-auto shadow-lg rounded-lg" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="text-2xl font-bold mb-4">Github</h2>
          <p className="text-left text-lg mb-4"> 
            You can view the code for the this website, database, and dataset processing on my Github page <a className="text-blue-500" href="https://github.com/AlexOcegueda/ClimateChange/">here</a>.
          </p>
          <h2 className="text-2xl font-bold mb-4">Database</h2>
          <p className="text-left text-lg mb-4">
            I used SQLite for the database and I created a GUI for it using tKinter. If you'd like to learn more about the database
            and how to access it, use it in your project, or modify it yourself read the <a className="text-blue-500" href="https://github.com/AlexOcegueda/ClimateChange/blob/master/ReadMe.md">ReadMe</a> on my github  
          </p>
          <p className="text-left text-lg mb-4">
            Below are all the datasets inside the database:
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">GlobalSeaLevelTrends:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global sea level trend data.<br />
            - Data: Includes station IDs, station names, year range, mean sea level trends, confidence intervals, and geographic coordinates.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">USSeaLevelTrends:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains sea level trend data for the United States.<br />
            - Data: Includes station IDs, station names, year range, mean sea level trends, confidence intervals, and geographic coordinates.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">GlobalCO2AnnualGrowth:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global annual growth rates of CO2 concentrations.<br />
            - Data: Includes year, annual increase in CO2, and uncertainty values.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">GlobalCO2AnnualMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global annual mean CO2 concentrations.<br />
            - Data: Includes year, mean CO2 concentrations, and uncertainty values.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">GlobalCO2MonthlyMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global monthly mean CO2 concentrations.<br />
            - Data: Includes year, month, decimal year, monthly average CO2 concentrations, trend values, and uncertainties.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">CO2AnnualMeanMLO:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains annual mean CO2 concentrations from Mauna Loa Observatory.<br />
            - Data: Includes year, mean CO2 concentrations, and uncertainty values.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">CO2DailyMLO:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains daily CO2 concentrations from Mauna Loa Observatory.<br />
            - Data: Includes year, month, day, decimal year, and CO2 concentrations.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">CO2GrowthRateMLO:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains annual CO2 growth rates from Mauna Loa Observatory.<br />
            - Data: Includes year, annual increase in CO2, and uncertainty values.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">CO2MonthlyMeanMLO:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains monthly mean CO2 concentrations from Mauna Loa Observatory.<br />
            - Data: Includes year, month, decimal date, monthly average CO2 concentrations, deseasonalized values, number of days, standard deviations, and uncertainties.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">CO2WeeklyMeanMLO:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains weekly mean CO2 concentrations from Mauna Loa Observatory.<br />
            - Data: Includes year, month, day, decimal year, weekly average CO2 concentrations, number of days, and increases since 1800.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">GlobalAirsTempAnomalies:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global temperature anomalies using Atmospheric Infrared Sounder (AIRS).<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">NHAIRSTempAnomalies:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains Northern Hemisphere temperature anomalies using Atmospheric Infrared Sounder (AIRS).<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">SHAIRSTempAnomalies:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains Southern Hemisphere temperature anomalies using Atmospheric Infrared Sounder (AIRS).<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">ZonAIRSAnnTempAnomalies:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains zonal annual temperature anomalies using Atmospheric Infrared Sounder (AIRS).<br />
            - Data: Includes year, global, hemispheric, and zonal temperature anomalies.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">LandOceanNHMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains Northern Hemisphere land-ocean temperature anomalies.<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">LandOceanSHMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains Southern Hemisphere land-ocean temperature anomalies.<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">LandOceanZonAnnTsMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains zonal annual land-ocean temperature anomalies.<br />
            - Data: Includes year, global, hemispheric, and zonal temperature anomalies.<br />
          </p>

          <h3 className="text-1xl text-left font-bold mb-4">LandOceanGlobalMean:</h3>
          <p className="text-left text-lg mb-4">
            - Description: Contains global land-ocean temperature anomalies.<br />
            - Data: Includes year, monthly temperature anomalies, and seasonal/annual means.<br />
          </p>
        </main>
      </div>
    </div>
  );
};

export default ProjectPage;
