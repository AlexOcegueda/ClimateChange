import pandas as pd
import os

def load_clean_and_inspect(file_path, dataset_dir, dataset_name):
    """
    Load, clean, and inspect the GLB.Ts+dSST dataset.

    Parameters:
    - file_path (str): The file path to the CSV dataset.
    - dataset_dir (str): The directory where inspection results and cleaned data will be saved.
    - dataset_name (str): The name of the dataset.

    Returns:
    - pd.DataFrame: The cleaned dataset.
    """
    data = pd.read_csv(file_path, header=1, sep=',')
    
    columns_to_convert = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'J-D', 'D-N', 'DJF', 'JJA', 'SON']
    for col in columns_to_convert:
        data[col] = pd.to_numeric(data[col], errors='coerce')
    
    data.interpolate(method='linear', inplace=True)
    
    cleaned_file_path = os.path.join(dataset_dir, f'Cleaned_{dataset_name}.csv')
    data.to_csv(cleaned_file_path, index=False)
    
    inspection_file_path = os.path.join(dataset_dir, f'{dataset_name}_inspection.txt')
    with open(inspection_file_path, 'w') as f:
        f.write("First few rows:\n")
        f.write(data.head().to_string())
        f.write("\n\n")
        
        data_info = data.info(buf=None)
        f.write("Data structure:\n")
        f.write(str(data_info))
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
    file_path = '/Users/alexocegueda/Documents/code/python/ClimateChange/preprocessing/data/Historical_Temperature_Records/global/GLB.Ts+dSST.csv'

    base_output_dir = '/Users/alexocegueda/Documents/code/python/ClimateChange/preprocessing/dataset_inspection_results'
    dataset_name = 'GLB.Ts+dSST'
    dataset_dir = os.path.join(base_output_dir, 'Historical_Temperature_Records', 'global', dataset_name)

    if not os.path.exists(dataset_dir):
        os.makedirs(dataset_dir)

    data = load_clean_and_inspect(file_path, dataset_dir, dataset_name)

if __name__ == "__main__":
    main()
