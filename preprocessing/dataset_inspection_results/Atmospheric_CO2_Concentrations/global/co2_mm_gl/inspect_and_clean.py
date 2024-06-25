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
    column_names = ['year', 'month', 'decimal', 'average', 'average_unc', 'trend', 'trend_unc']
    
    data = pd.read_csv(file_path, names=column_names, comment='#', skiprows=24)
    
    data['year'] = pd.to_numeric(data['year'], errors='coerce')
    data['month'] = pd.to_numeric(data['month'], errors='coerce')
    data['decimal'] = pd.to_numeric(data['decimal'], errors='coerce')
    data['average'] = pd.to_numeric(data['average'], errors='coerce')
    data['average_unc'] = pd.to_numeric(data['average_unc'], errors='coerce')
    data['trend'] = pd.to_numeric(data['trend'], errors='coerce')
    data['trend_unc'] = pd.to_numeric(data['trend_unc'], errors='coerce')
    
    data = data.dropna(how='all')

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
    file_path = '../../../../data/Atmospheric_CO2_Concentrations/global/co2_mm_gl.csv'
    
    base_output_dir = '../../global'
    dataset_name = 'co2_mm_gl'
    dataset_dir = os.path.join(base_output_dir, dataset_name)

    if not os.path.exists(dataset_dir):
        os.makedirs(dataset_dir)

    data = load_clean_and_inspect(file_path, dataset_dir, dataset_name)

if __name__ == "__main__":
    main()
