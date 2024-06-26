# CO2 Daily Mean Concentrations at Mauna Loa

## Overview
This project involves the inspection and basic cleaning of a dataset containing daily mean CO2 concentrations at Mauna Loa. The dataset includes daily measurements of CO2 concentrations along with the corresponding year, month, day, and decimal year.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**: The dataset did not include headers, so the following headers were manually defined:
    - year
    - month
    - day
    - decimal_year
    - co2_concentration
3. **Data Type Conversion**: The `year`, `month`, `day`, `decimal_year`, and `co2_concentration` columns were converted to numeric types using `pandas`' `to_numeric` method. 

The script `inspect_and_clean.py` was used to perform these steps. The cleaned dataset was saved to a new CSV file, and an inspection report was generated to provide an overview of the data.

## Dataset Source

The dataset used in this project is sourced from the NOAA Global Monitoring Laboratory (GML). For additional details and to access the original dataset, visit NOAA GML CO2 Trends. (https://gml.noaa.gov/ccgg/trends/)

## Credits

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov) and Ralph Keeling (rkeeling@ucsd.edu)."
  - "Dr. Xin Lan, NOAA/GML (https://gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (https://scrippsco2.ucsd.edu/)."
