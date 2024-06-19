## Zonal Annual Means

### Overview
This dataset contains temperature anomaly records for global, northern hemispheric, and southern hemispheric means, along with various latitude bands.

### Dataset Details
- **Source**: Historical Temperature Records
- **File Name**: `ZonAnn.Ts+dSST.csv`
- **Columns**:
  - `Year`: Year of the record
  - `Glob`, `NHem`, `SHem`: Global, Northern Hemisphere, and Southern Hemisphere temperature anomalies
  - `24N-90N`, `24S-24N`, `90S-24S`, `64N-90N`, `44N-64N`, `24N-44N`: Temperature anomalies for various latitude bands in the Northern Hemisphere
  - `EQU-24N`, `24S-EQU`, `44S-24S`, `64S-44S`, `90S-64S`: Temperature anomalies for various latitude bands in the Southern Hemisphere

### Data Cleaning Process

#### Handling Missing Values

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

After cleaning, the dataset was inspected to ensure its integrity and readiness for further analysis. The inspection involved the following:

- **First Few Rows**: A preview of the initial rows to verify the data structure.
- **Data Structure**: Detailed information about the dataframe, including data types and memory usage.
- **Missing Values**: Summary of missing values to confirm that all NaNs were appropriately handled.
- **Summary Statistics**: Descriptive statistics to provide an overview of the data distribution and ensure that the data cleaning process did not introduce anomalies.
