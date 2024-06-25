# CO2 Weekly Mean Concentrations at Mauna Loa

## Overview
This project involves the inspection and basic cleaning of a dataset containing the weekly mean CO2 concentrations at Mauna Loa Observatory. The dataset includes weekly measurements of CO2 concentrations along with the corresponding year, month, day, decimal date, average concentration, number of days, values from 1 year ago, 10 years ago, and increase since 1800.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**: The headers were:
    - year
    - month
    - day
    - decimal
    - average
    - ndays
    - 1_year_ago
    - 10_years_ago
    - increase_since_1800
3. **Data Type Conversion**: The `year`, `month`, `day`, `decimal`, `average`, `ndays`, `1_year_ago`, `10_years_ago`, and `increase_since_1800` columns were converted to numeric types using `pandas`' `to_numeric` method. 
4. **Identifying Missing Data**: Rows with missing data were identified and logged for review.
    - The some rows for 1 year ago and 10 years ago had placeholders of -999.99 so I converted those to NaNs.

## Dataset Source

The dataset used in this project is sourced from the NOAA Global Monitoring Laboratory (GML). For additional details and to access the original dataset, visit NOAA GML CO2 Trends. (https://gml.noaa.gov/ccgg/trends/)

## Credits

These data are made freely available to the public and the scientific community by NOAA GML. 

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov) and Ralph Keeling (rkeeling@ucsd.edu)."
  - "Dr. Xin Lan, NOAA/GML (https://gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (https://scrippsco2.ucsd.edu/)."

## Notes

- Due to the eruption of the Mauna Loa Volcano, measurements from Mauna Loa Observatory were suspended as of Nov. 29, 2022, and resumed in July 2023. Observations starting from December 2022 to July 4, 2023, are from a site at the Maunakea Observatories, approximately 21 miles north of the Mauna Loa Observatory.

## Files

- `co2_weekly_mlo.csv`: The original dataset.
- `Cleaned_co2_weekly_mlo.csv`: The cleaned dataset.
- `co2_weekly_mlo_inspection.txt`: The inspection results.
- `inspect_and_clean_weekly.py`: The Python script used for data cleaning and inspection.
