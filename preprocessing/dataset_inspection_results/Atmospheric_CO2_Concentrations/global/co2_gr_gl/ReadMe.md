# Atmospheric CO2 Concentrations - Global Annual Increase

## About This Dataset

### Overview
This dataset contains the global annual increase in CO2 concentrations, measured in parts per million (ppm), from 1959 to 2023. The data is provided by the NOAA Global Monitoring Laboratory (GML) and includes uncertainty values for each year's increase.

### Data Description
- **Year**: The year of the measurement.
- **Ann Inc**: The annual increase in global CO2 concentration in ppm.
- **Unc**: The uncertainty associated with the annual increase in CO2 concentration.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**: The headers were:
    - Year: The year of the measurement.
    - Ann Inc: The annual increase in global CO2 concentration in ppm.
    - Unc: The uncertainty associated with the annual increase in CO2 concentration.
3. **Data Type Conversion**: The `year`, `ann_inc`, and `unc` columns were converted to numeric types using `pandas`' `to_numeric` method.
4. **Removing Rows with All NaNs**: Rows where all values were NaN were removed from the dataset.

## Dataset Source

The dataset used in this project is sourced from the NOAA Global Monitoring Laboratory (GML). For additional details and to access the original dataset, visit [NOAA GML CO2 Trends](https://gml.noaa.gov/ccgg/trends/).

## Credits

These data are made freely available to the public and the scientific community by NOAA GML.

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov)."
  - "Dr. Xin Lan, NOAA/GML (https://gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (https://scrippsco2.ucsd.edu/)."

## Notes

- Due to the eruption of the Mauna Loa Volcano, measurements from Mauna Loa Observatory were suspended as of Nov. 29, 2022, and resumed in July 2023. Observations starting from December 2022 to July 4, 2023, are from a site at the Maunakea Observatories, approximately 21 miles north of the Mauna Loa Observatory.

## Files

- `co2_gr_gl.csv`: The original dataset.
- `Cleaned_co2_gr_gl.csv`: The cleaned dataset.
- `co2_gr_gl_inspection.txt`: The inspection results.
- `inspect_and_clean.py`: The Python script used for data cleaning and inspection.
