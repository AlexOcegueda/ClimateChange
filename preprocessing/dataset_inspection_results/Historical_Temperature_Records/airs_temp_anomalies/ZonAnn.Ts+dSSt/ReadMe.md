## Annual Temperature Anomalies (deg C) AIRS v6 vs. 2007-2016

### Overview
This dataset contains annual temperature anomaly records for different zones, based on the AIRS v6 and v7 measurements compared to the 2007-2016 baseline. The data helps in analyzing the temperature variations and trends across different latitudinal zones, which is crucial for understanding climate change impacts on a global scale.

### Dataset Details
- **Source**: NASA AIRS v6 and v7 vs. 2007-2016
- **File Name**: `Annual_Temperature_Anomalies_deg_C_AIRS_v6_vs_2007-2016.csv`
- **Columns**:
  - `Year`: Year of the record
  - `Glob`, `N.Hemi`, `S.Hemi`, `24N-90N`, `24S-24N`, `90S-24S`, `64N-90N`, `44N-64N`, `24N-44N`, `EQU-24N`, `24S-EQU`, `44S-24S`, `64S-44S`, `90S-64S`: Temperature anomalies for different zones

### Data Cleaning Process

#### Handling Missing Values

The dataset contained some missing values (NaNs), particularly represented as `*******`. To ensure the dataset is complete and ready for analysis, the following steps were taken:

1. **Loading the Dataset**:
   - The dataset was loaded with appropriate handling of headers to ensure the data structure was correctly interpreted.

2. **Replacing Placeholder Values**:
   - All instances of `*******` were replaced with NaNs to facilitate numerical operations.

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
