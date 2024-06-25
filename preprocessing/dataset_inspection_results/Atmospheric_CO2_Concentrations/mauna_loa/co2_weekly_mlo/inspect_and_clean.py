import pandas as pd
import os

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
    column_names = ['year', 'month', 'day', 'decimal', 'average', 'ndays', '1_year_ago', '10_years_ago', 'increase_since_1800']
    
    data = pd.read_csv(file_path, names=column_names, comment='#', skiprows=30).dropna(how='all')
    
    data['year'] = pd.to_numeric(data['year'], errors='coerce')
    data['month'] = pd.to_numeric(data['month'], errors='coerce')
    data['day'] = pd.to_numeric(data['day'], errors='coerce')
    data['decimal'] = pd.to_numeric(data['decimal'], errors='coerce')
    data['average'] = pd.to_numeric(data['average'], errors='coerce')
    data['ndays'] = pd.to_numeric(data['ndays'], errors='coerce')
    data['1_year_ago'] = pd.to_numeric(data['1_year_ago'], errors='coerce')
    data['10_years_ago'] = pd.to_numeric(data['10_years_ago'], errors='coerce')
    data['increase_since_1800'] = pd.to_numeric(data['increase_since_1800'], errors='coerce')
    
    # Replace placeholder values with NaN
    placeholder_value = -999.99
    data.replace(placeholder_value, pd.NA, inplace=True)
    
    cleaned_file_path = os.path.join(dataset_dir, f'Cleaned_{dataset_name}.csv')
    data.to_csv(cleaned_file_path, index=False)
    
    inspection_file_path = os.path.join(dataset_dir, f'{dataset_name}_inspection.txt')
    with open(inspection_file_path, 'w') as f:
        f.write("First few rows:\n")
        f.write(data.head().to_string())
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
    file_path = '../../../../data/Atmospheric_CO2_Concentrations/mauna-loa/co2_weekly_mlo.csv'
    
    base_output_dir = '../../mauna_loa'
    dataset_name = 'co2_weekly_mlo'
    dataset_dir = os.path.join(base_output_dir, dataset_name)

    if not os.path.exists(dataset_dir):
        os.makedirs(dataset_dir)

    data = load_clean_and_inspect(file_path, dataset_dir, dataset_name)

if __name__ == "__main__":
    main()
