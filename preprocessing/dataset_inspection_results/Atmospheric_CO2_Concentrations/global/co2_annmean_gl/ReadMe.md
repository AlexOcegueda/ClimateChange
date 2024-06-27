# Atmospheric CO2 Concentrations - Global Annual Mean

## About This Dataset

### Overview
This dataset contains the global annual mean CO2 concentrations, measured in parts per million (ppm), from 1979 to 2023. The data is provided by the NOAA Global Monitoring Laboratory (GML) and includes uncertainty values for each year's mean concentration.

NOTE from dataset creators:
The uncertainty in the global annual mean is estimated using a monte carlo
technique that computes 200 global annual averages, each time using a
slightly different set of measurement records from the NOAA GML cooperative
air sampling network.  The reported uncertainty is the mean of the standard
deviations for each annual average using this technique. Please see
Conway et al., 1994, JGR, vol. 99, no. D11. for a complete discussion.

In general, the data presented for the last year are subject to change,
depending on recalibration of the reference gas mixtures used, and other quality
control procedures. Occasionally, earlier years may also be changed for the same
reasons.  Usually these changes are minor.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**: The headers were:
    - Year: The year of the measurement.
    - Mean: The global annual mean CO2 concentration in ppm.
    - Unc: The uncertainty associated with th emean CO2 concentration.
3. **Data Type Conversion**: The `year`, `Mean`, and `Unc` columns were converted to numeric types using `pandas`' `to_numeric` method. 
4. **Identifying Missing Data**: Rows with missing data were identified and logged for review.

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

- `co2_annmean_gl.csv`: The original dataset.
- `Cleaned_co2_annmean_gl.csv`: The cleaned dataset.
- `co2_annmean_gl_inspection.txt`: The inspection results.
- `inspect_and_clean.py`: The Python script used for data cleaning and inspection.
