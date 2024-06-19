## Global Temperature Anomalies (deg C) AIRS v6 vs. 2007-2016 Dataset

### Overview

The "Global Temperature Anomalies (deg C) AIRS v6 vs. 2007-2016" dataset contains historical temperature anomaly records based on the Atmospheric Infrared Sounder (AIRS) version 6 data.

### Dataset Details

- **Source**: NASA AIRS (https://data.giss.nasa.gov/gistemp/)
   - Under: Tables of Global and Hemispheric Monthly Means and Zonal Annual Means
      - Subheading: AIRS v6 and AIRS v7 Temperature Anomalies
      - Global-mean monthly, seasonal, and annual means
- **File Name**: `AIRS_v6_Global_Temperature_Anomalies_vs_2007-2016.csv`
- **Columns**:
  - `Year`: Year of the record
  - `Jan` to `Dec`: Monthly temperature anomalies
  - `J-D`: January to December temperature anomalies
  - `D-N`: December to November temperature anomalies
  - `DJF`: December, January, February (winter) temperature anomalies
  - `MAM`: March, April, May (spring) temperature anomalies
  - `JJA`: June, July, August (summer) temperature anomalies
  - `SON`: September, October, November (fall) temperature anomalies

### Data Cleaning Process

#### Handling Missing Values

The dataset contained some missing values (NaNs), particularly in the monthly, seasonal, and yearly columns. To ensure the dataset is complete and ready for analysis, the following steps were taken to handle these missing values:

1. **Loading the Dataset**:
   - The dataset was loaded with appropriate handling of headers to ensure the data structure was correctly interpreted.

2. **Converting Columns to Numeric**:
   - Columns with temperature data were converted to numeric types to handle any non-numeric values as NaNs.

3. **Interpolation and Additional Filling**:
   - Linear interpolation was applied to fill in the missing values. Additionally, backward fill (`bfill`) methods were used to ensure any remaining NaNs were handled.

#### Why Linear Interpolation and Filling?

- **Trend Preservation**: Maintains the temporal trend of the data.
- **Continuity**: Ensures the dataset remains continuous without abrupt changes or gaps.
- **Minimizing Bias**: Uses surrounding data points to estimate the missing values, minimizing the introduction of bias.

### Inspection Results

- **First Few Rows**: A preview of the initial rows to verify the data structure.
- **Data Structure**: Detailed information about the dataframe, including data types and memory usage.
- **Missing Values**: Summary of missing values to confirm that all NaNs were appropriately handled.
- **Summary Statistics**: Descriptive statistics to provide an overview of the data distribution and ensure that the data cleaning process did not introduce anomalies.

