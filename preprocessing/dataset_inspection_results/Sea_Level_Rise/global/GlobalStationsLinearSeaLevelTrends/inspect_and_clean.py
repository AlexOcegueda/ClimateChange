import pandas as pd
import os
from tabulate import tabulate

def load_clean_and_inspect(file_path, dataset_dir, dataset_name):
    """
    Load, clean, and inspect the dataset.

    Parameters:
    - file_path (str): The file path to the CSV dataset.
    - dataset_dir (str): The directory where inspection results and cleaned data will be saved.
    - dataset_name (str): The name of the dataset.

    Returns:
    - pd.DataFrame: The cleaned dataset.
    """
    column_names = ['Station ID', 'Station Name', 'First Year', 'Last Year', 'Year Range', '% Complete', 
                    'MSL Trends (mm/yr)', '+/- 95% CI (mm/yr)', 'MSL Trend (ft/century)', 
                    '+/- 95% CI (ft/century)', 'Latitude', 'Longitude']
    
    data = pd.read_csv(file_path, names=column_names, comment='#', skiprows=1)
    
    numeric_columns = ['First Year', 'Last Year', 'Year Range', '% Complete', 'MSL Trends (mm/yr)', 
                       '+/- 95% CI (mm/yr)', 'MSL Trend (ft/century)', '+/- 95% CI (ft/century)', 'Latitude', 'Longitude']
    for column in numeric_columns:
        data[column] = pd.to_numeric(data[column], errors='coerce')
    
    cleaned_file_path = os.path.join(dataset_dir, f'Cleaned_{dataset_name}.csv')
    data.to_csv(cleaned_file_path, index=False)
    
    inspection_file_path = os.path.join(dataset_dir, f'{dataset_name}_inspection.txt')
    with open(inspection_file_path, 'w') as f:
        f.write("First few rows:\n")
        f.write(tabulate(data.head(), headers='keys', tablefmt='grid'))
        f.write("\n\n")
        
        f.write("Data structure:\n")
        data.info(buf=f)
        f.write("\n\n")
        
        f.write("Missing values:\n")
        f.write(data.isnull().sum().to_string())
        f.write("\n\n")
        
        f.write("Summary statistics:\n")
        f.write(data.describe().transpose().to_string())
        f.write("\n")
    
    return data

def main():
    """
    Main function to set up paths and run the inspection and cleaning process.
    """
    file_path = '../../../../data/Sea_Level_Rise/global/GlobalStationsLinearSeaLevelTrends.csv'
    
    base_output_dir = '../../global'
    dataset_name = 'GlobalStationsLinearSeaLevelTrends'
    dataset_dir = os.path.join(base_output_dir, dataset_name)

    if not os.path.exists(dataset_dir):
        os.makedirs(dataset_dir)

    data = load_clean_and_inspect(file_path, dataset_dir, dataset_name)

if __name__ == "__main__":
    main()
