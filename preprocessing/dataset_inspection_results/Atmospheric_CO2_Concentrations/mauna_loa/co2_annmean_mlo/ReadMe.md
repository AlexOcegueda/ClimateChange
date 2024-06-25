# CO2 Annual Mean Concentrations at Mauna Loa

## Overview
This project involves the inspection and basic cleaning of a dataset containing annual mean CO2 concentrations at Mauna Loa. The dataset spans from 1959 to 2023 and includes the annual mean CO2 concentrations along with their uncertainties. The primary goal was to ensure that the `year`, `mean`, and `unc` columns are correctly formatted as numeric types to maintain data integrity and enable accurate analysis.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Data Type Conversion**: The `year`, `mean`, and `unc` columns were converted to numeric types using `pandas`' `to_numeric` method. 

## Dataset Source

The dataset used in this project is sourced from the NOAA Global Monitoring Laboratory (GML). For additional details and to access the original dataset, visit NOAA GML CO2 Trends. (https://gml.noaa.gov/ccgg/trends/)

## Credits

These data are made freely available to the public and the scientific community by NOAA GML. The data from March 1958 through April 1974 were obtained by C. David Keeling of the Scripps Institution of Oceanography (SIO) and are available from the Scripps website.

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov)."
  - TODO: Update citation when cite is not down.
  - For further inquiries or detailed information about the measurements, contact Xin Lan at xin.lan@noaa.gov.
