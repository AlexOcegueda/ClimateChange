# Climate Change Data Analysis and Visualization

## About This Project

### Overview
This repository contains a comprehensive data analysis and visualization tool designed to track and understand climate change trends. By leveraging historical temperature records and other climate-related datasets, this project aims to provide insights into global warming and its impacts on the environment.

### Objectives
- **Data Collection**: Gather and process historical climate data from reputable sources.
- **Data Cleaning**: Ensure data integrity through thorough cleaning and preprocessing.
- **Visualization**: Create intuitive visualizations to make complex climate data more accessible and understandable.
- **Analysis**: Conduct detailed analysis to identify trends and patterns in climate change data.

### Key Features
- **Historical Temperature Records**: Analysis of global temperature anomalies from various datasets.
- **Data Cleaning Process**: Comprehensive steps to handle missing values and ensure data accuracy.
- **Interactive Visualizations**: User-friendly charts and graphs to illustrate climate trends.
- **Extensible Architecture**: Modular design that allows for easy addition of new datasets and analysis methods.

### Technologies Used
- **Python**: For data processing, analysis, and visualization.
- **Sqlite3**: For holding all datasets for quick access.
- **Shutil**: For making backup databases.
- **Pandas**: For data manipulation and cleaning.
- **Tabulate**: For data formatting in inspection files.
- **Git**: For version control and collaboration.

### Getting Started
1. **Clone the Repository**:
   ```
   git clone https://github.com/AlexOcegueda/ClimateChange.git
   ```

2. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

### Viewing the Database

![Climate Change Database](./assets/images/database.png)

To view the database follow these steps:
  ```
  cd database/database_scripts
  ```
- then run the database.py file
  ```
  python database.py
  ```

How to use database:
- Simply click a table and hit 'View/Reset' to see all columns in table.
- Click on header options to select only the columns you want to see.
- Click on the column names on the table displayed to sort from a-z or highest-lowest. Clicking again will reverse it to z-a or lowest-highest.
- Click the 'View/Reset' if you want it to display without any sorting filter to the table.

## Data Sources
[List of the datasets you are using, with links to their sources]

- **Historical Temperature Records**: 
  - [NASA GISS Temperature Data](https://data.giss.nasa.gov/gistemp/)
- **Atmospheric CO2 Concentrations**: 
  - [Mauna Loa CO2 Data](https://gml.noaa.gov/ccgg/trends/data.html)
  - [Global CO2 Data](https://gml.noaa.gov/ccgg/trends/gl_data.html)
- **Sea Level Rise**:
  - [NOAA Global Mean Sea Level Trends](https://tidesandcurrents.noaa.gov/sltrends/mslGlobalTrendsTable.html)
  - [NOAA US Mean Sea Level Trends](https://tidesandcurrents.noaa.gov/sltrends/mslUSTrendsTable.html)

## Credits
Special thanks to the data providers for making their data publicly available:

- **NASA GISS**: [NASA's Goddard Institute for Space Studies](https://data.giss.nasa.gov/gistemp/)
  - "These data are made freely available to the public and the scientific community in the belief that their wide dissemination will lead to greater understanding and new scientific insights."
  - GISTEMP Team, 2024: GISS Surface Temperature Analysis (GISTEMP), version 4. NASA Goddard Institute for Space Studies. Dataset accessed 2024-06-17 at https://data.giss.nasa.gov/gistemp/.
  - Lenssen, N., G. Schmidt, J. Hansen, M. Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12, 6307-6326, doi:10.1029/2018JD029522. Dataset accessed 2024-06-17 at https://data.giss.nasa.gov/gistemp/.

- **NOAA GML**: [Atmospheric CO2 Concentrations](https://gml.noaa.gov/ccgg/trends/)
  - "These data are made freely available to the public and the scientific community. Contact: Xin Lan (xin.lan@noaa.gov) and Ralph Keeling (rkeeling@ucsd.edu)."
  - "Dr. Xin Lan, NOAA/GML (https://gml.noaa.gov/ccgg/trends/) and Dr. Ralph Keeling, Scripps Institution of Oceanography (https://scrippsco2.ucsd.edu/)."

- **NOAA Tides and Currents**: [Global Linear Relative Sea Level Trends](https://tidesandcurrents.noaa.gov/sltrends/mslGlobalTrendsTable.html)
  - "Data provided by NOAA Tides and Currents. Accessed on 2024-06-17."
  - Contact them: (https://tidesandcurrents.noaa.gov/contact.html)

- **NOAA Tides and Currents**: [US Linear Relative Sea Level Trends](https://tidesandcurrents.noaa.gov/sltrends/mslUSTrendsTable.html)
  - "Data provided by NOAA Tides and Currents. Accessed on 2024-06-17."
  - Contact them: (https://tidesandcurrents.noaa.gov/contact.html)
