## Land-Ocean: Northern Hemispheric Means

### Overview
This dataset contains temperature anomaly records for the Northern Hemisphere, combining land and ocean measurements. The data helps in analyzing the temperature variations and trends in the Northern Hemisphere, which is crucial for understanding climate change impacts in this region.

### Dataset Details
- **Source**: Historical Temperature Records
- **File Name**: `Land-Ocean_NHMeans.csv`
- **Columns**:
  - `Year`: Year of the record
  - `Jan` to `Dec`: Monthly temperature anomalies
  - `J-D`, `D-N`, `DJF`, `MAM`, `JJA`, `SON`: Seasonal and yearly averages

### Data Cleaning Process

#### Handling Missing Values

The dataset contained some missing values (NaNs), particularly represented as `***`. To ensure the dataset is complete and ready for analysis, the following steps were taken:

1. **Loading the Dataset**:
   - The dataset was loaded with appropriate handling of headers to ensure the data structure was correctly interpreted.

2. **Replacing Placeholder Values**:
   - All instances of `***` were replaced with NaNs to facilitate numerical operations.

3. **Converting Columns to Numeric**:
   - Columns with temperature data were converted to numeric types to handle any non-numeric values as NaNs.

4. **Interpolation and Additional Filling**:
   - Linear interpolation was applied to fill in the missing values. Additionally, backward fill (`bfill`) methods were used to ensure any remaining NaNs were handled.

#### Why Linear Interpolation and Filling?

- **Trend Preservation**: Maintains the temporal trend of the data.
- **Continuity**: Ensures the dataset remains continuous without abrupt changes or gaps.
- **Minimizing Bias**: Uses surrounding data points to estimate the missing values, minimizing the introduction of bias.

### Inspection Results

After cleaning, the dataset was inspected to ensure its integrity and readiness for further analysis. The inspection involved the following:

- **First Few Rows**: A preview of the initial rows to verify the data structure.
- **Data Structure**: Detailed information about the dataframe, including data types and memory usage.
- **Missing Values**: Summary of missing values to confirm that all NaNs were appropriately handled.
- **Summary Statistics**: Descriptive statistics to provide an overview of the data distribution and ensure that the data cleaning process did not introduce anomalies.

## Credits
Special thanks to the data providers for making their data publicly available:

- **NASA GISS**: [NASA's Goddard Institute for Space Studies](https://data.giss.nasa.gov/gistemp/)
  - "These data are made freely available to the public and the scientific community in the belief that their wide dissemination will lead to greater understanding and new scientific insights."
  - GISTEMP Team, 2024: GISS Surface Temperature Analysis (GISTEMP), version 4. NASA Goddard Institute for Space Studies. Dataset accessed 2024-06-17 at https://data.giss.nasa.gov/gistemp/.
  - Lenssen, N., G. Schmidt, J. Hansen, M. Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12, 6307-6326, doi:10.1029/2018JD029522. Dataset accessed 2024-06-17 at https://data.giss.nasa.gov/gistemp/.
  