# US Stations Linear Sea Level Trends

## About This Dataset

### Overview
This dataset contains sea level trends measured at various stations in the US and its territories from 1905 to 2023. The data includes the mean sea level trends in millimeters per year (mm/yr) and feet per century, along with their respective 95% confidence intervals. The dataset also provides the percentage completeness of the data, and geographical coordinates (latitude and longitude) of each station.

## Cleaning Process
The cleaning process involved the following steps:
1. **Loading the Dataset**: The dataset was loaded while skipping initial comment lines to ensure only relevant data was processed.
2. **Defining Headers**: The headers were:
    - `Station ID`: The identifier for the station.
    - `Station Name`: The name of the station.
    - `First Year`: The first year of the measurement period.
    - `Last Year`: The last year of the measurement period.
    - `Year Range`: The total number of years in the measurement period.
    - `% Complete`: The percentage completeness of the data.
    - `MSL Trends (mm/yr)`: Mean sea level trend in millimeters per year.
    - `+/- 95% CI (mm/yr)`: The 95% confidence interval for the sea level trend in mm/yr.
    - `MSL Trend (ft/century)`: Mean sea level trend in feet per century.
    - `+/- 95% CI (ft/century)`: The 95% confidence interval for the sea level trend in ft/century.
    - `Latitude`: The latitude of the station.
    - `Longitude`: The longitude of the station.
3. **Data Type Conversion**: Numeric columns were converted to appropriate data types using `pandas`' `to_numeric` method.
4. **Handling Missing Data**: Rows with all NaN values were dropped to ensure data integrity.

## Dataset Source

The dataset used in this project is sourced from the NOAA Tides and Currents. For additional details and to access the original dataset, visit [NOAA Tides and Currents](https://tidesandcurrents.noaa.gov/sltrends/mslUSTrendsTable.html).

## Credits

- **NOAA Tides and Currents**: [US Linear Relative Sea Level Trends](https://tidesandcurrents.noaa.gov/sltrends/mslUSTrendsTable.html)
  - "Data provided by NOAA Tides and Currents. Accessed on 2024-06-17."
  - Contact them: (https://tidesandcurrents.noaa.gov/contact.html)

## Notes

- The data presented for the last year are subject to change, depending on recalibration of the reference gas mixtures used, and other quality control procedures. Occasionally, earlier years may also be changed for the same reasons. Usually these changes are minor.

## Files

- `USStationsLinearSeaLevelTrends.csv`: The original dataset.
- `Cleaned_USStationsLinearSeaLevelTrends.csv`: The cleaned dataset.
- `USStationsLinearSeaLevelTrends_inspection.txt`: The inspection results.
- `inspect_and_clean.py`: The Python script used for data cleaning and inspection.
