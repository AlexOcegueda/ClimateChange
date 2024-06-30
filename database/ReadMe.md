# Database

## Overview

This contains folders which store backups and scripts related to the database.

## Folders and Database

- `backups`: Holds all the backups which are made using the `backup.py` file in the `database_scripts` folder.
- `database_scripts`: Holds all scripts dealing with `climate_change.db` including populating, setting up tables, creating backups, and viewing the database with a GUI
- `climate_change.db`: This is a Sqlite database which holds all the tables related to the datasets. Can be viewed using a GUI if you run the `database.py` file inside the database_scripts folder.

## Database Data

#### How to use database
- Simply click a table and hit 'View/Reset' to see all columns in table.
- Click on header options to select only the columns you want to see.
- Click on the column names on the table displayed to sort from a-z or highest-lowest. Clicking again will reverse it to z-a or lowest-highest.
- Click the 'View/Reset' if you want it to display without any sorting filter to the table.

#### Tables in Database

GlobalSeaLevelTrends:

    Description: Contains global sea level trend data.
    Data: Includes station IDs, station names, year range, mean sea level trends, confidence intervals, and geographic coordinates.

USSeaLevelTrends:

    Description: Contains sea level trend data for the United States.
    Data: Includes station IDs, station names, year range, mean sea level trends, confidence intervals, and geographic coordinates.

GlobalCO2AnnualGrowth:

    Description: Contains global annual growth rates of CO2 concentrations.
    Data: Includes year, annual increase in CO2, and uncertainty values.

GlobalCO2AnnualMean:

    Description: Contains global annual mean CO2 concentrations.
    Data: Includes year, mean CO2 concentrations, and uncertainty values.

GlobalCO2MonthlyMean:

    Description: Contains global monthly mean CO2 concentrations.
    Data: Includes year, month, decimal year, monthly average CO2 concentrations, trend values, and uncertainties.

CO2AnnualMeanMLO:

    Description: Contains annual mean CO2 concentrations from Mauna Loa Observatory.
    Data: Includes year, mean CO2 concentrations, and uncertainty values.

CO2DailyMLO:

    Description: Contains daily CO2 concentrations from Mauna Loa Observatory.
    Data: Includes year, month, day, decimal year, and CO2 concentrations.

CO2GrowthRateMLO:

    Description: Contains annual CO2 growth rates from Mauna Loa Observatory.
    Data: Includes year, annual increase in CO2, and uncertainty values.

CO2MonthlyMeanMLO:

    Description: Contains monthly mean CO2 concentrations from Mauna Loa Observatory.
    Data: Includes year, month, decimal date, monthly average CO2 concentrations, deseasonalized values, number of days, standard deviations, and uncertainties.

CO2WeeklyMeanMLO:

    Description: Contains weekly mean CO2 concentrations from Mauna Loa Observatory.
    Data: Includes year, month, day, decimal year, weekly average CO2 concentrations, number of days, and increases since 1800.

GlobalAirsTempAnomalies:

    Description: Contains global temperature anomalies using Atmospheric Infrared Sounder (AIRS).
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.

NHAIRSTempAnomalies:

    Description: Contains Northern Hemisphere temperature anomalies using Atmospheric Infrared Sounder (AIRS).
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.

SHAIRSTempAnomalies:

    Description: Contains Southern Hemisphere temperature anomalies using Atmospheric Infrared Sounder (AIRS).
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.

ZonAIRSAnnTempAnomalies:

    Description: Contains zonal annual temperature anomalies using Atmospheric Infrared Sounder (AIRS).
    Data: Includes year, global, hemispheric, and zonal temperature anomalies.

LandOceanNHMean:

    Description: Contains Northern Hemisphere land-ocean temperature anomalies.
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.

LandOceanSHMean:

    Description: Contains Southern Hemisphere land-ocean temperature anomalies.
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.

LandOceanZonAnnTsMean:

    Description: Contains zonal annual land-ocean temperature anomalies.
    Data: Includes year, global, hemispheric, and zonal temperature anomalies.

LandOceanGlobalMean:

    Description: Contains global land-ocean temperature anomalies.
    Data: Includes year, monthly temperature anomalies, and seasonal/annual means.
