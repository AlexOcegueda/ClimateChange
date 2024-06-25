# CO2 Monthly Mean Concentrations at Mauna Loa

## Overview
This project involves the inspection and basic cleaning of a dataset containing the monthly mean CO2 concentrations at Mauna Loa Observatory. The dataset includes monthly measurements of CO2 concentrations along with the corresponding year, month, decimal date, average concentration, deseasonalized concentration, number of days, standard deviation, and uncertainty.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**:The headers were:
    - year
    - month
    - decimal_date
    - average
    - deseasonalized
    - ndays
    - sdev
    - unc
3. **Data Type Conversion**: The `year`, `month`, `decimal_date`, `average`, `deseasonalized`, `ndays`, `sdev`, and `unc` columns were converted to numeric types using `pandas`' `to_numeric` method. 
4. **Identifying Missing Data**: Rows with missing data were identified and logged for review.

The script `inspect_and_clean.py` was used to perform these steps. The cleaned dataset was saved to a new CSV file, and an inspection report was generated to provide an overview of the data.

## Dataset Source

The dataset used in this project is sourced from the NOAA Global Monitoring Laboratory (GML). For additional details and to access the original dataset, visit NOAA GML CO2 Trends. (https://gml.noaa.gov/ccgg/trends/)

## Credits

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov) and Ralph Keeling (rkeeling@ucsd.edu)."
  - "Dr. Xin Lan, NOAA/GML (https://gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (https://scrippsco2.ucsd.edu/)."

## Notes

- Due to the eruption of the Mauna Loa Volcano, measurements from Mauna Loa Observatory were suspended as of Nov. 29, 2022, and resumed in July 2023. Observations starting from December 2022 to July 4, 2023, are from a site at the Maunakea Observatories, approximately 21 miles north of the Mauna Loa Observatory.

## Files

- `co2_mm_mlo.csv`: The original dataset.
- `Cleaned_co2_mm_mlo.csv`: The cleaned dataset.
- `co2_mm_mlo_inspection.txt`: The inspection results.
- `inspect_and_clean.py`: The Python script used for data cleaning and inspection.
