## Land-Ocean: Global Means Dataset

### Overview

The GLB.Ts+dSST dataset contains mean monthly, seasonal, and annual means of historical temperature records on a global scale. 

### Dataset Details

- **Source**: [NASA GISS Surface Temperature Analysis (GISTEMP)](https://data.giss.nasa.gov/gistemp/)
   - Under: Tables of Global and Hemispheric Monthly Means and Zonal Annual Means
      - Name: Global-mean monthly, seasonal, and annual means, 1880-present.
- **File Name**: `GLB.Ts+dSST.csv`
- **Columns**:
  - `Year`: Year of the record
  - `Jan` to `Dec`: Monthly temperature anomalies
  - `J-D`, `D-N`, `DJF`, `MAM`, `JJA`, `SON`: Seasonal and yearly averages

### Data Cleaning Process

#### Handling Missing Values

The dataset contained some missing values (NaNs), particularly in the `D-N` and `DJF` columns. To ensure the dataset is complete and ready for analysis, the following steps were taken to handle these missing values:

1. **Loading the Dataset**:
   - The dataset was loaded with appropriate handling of headers to ensure the data structure was correctly interpreted.

2. **Converting Columns to Numeric**:
   - Columns with temperature data were converted to numeric types to handle any non-numeric values as NaNs.

3. **Interpolation**:
   - Linear interpolation was applied to fill in the missing values. This method was chosen because it estimates missing values by using the linear trend of the available data points. It is particularly useful in time series data, as it maintains the continuity and trend of the dataset without introducing biases that could be caused by other methods like mean or median filling.

#### Why Linear Interpolation?

- **Trend Preservation**: It maintains the temporal trend of the data, which is important for accurate climate analysis.
- **Continuity**: Ensures the dataset remains continuous without abrupt changes or gaps.
- **Minimizing Bias**: Unlike mean or median filling, interpolation uses surrounding data points to estimate the missing values, minimizing the introduction of bias.

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
  