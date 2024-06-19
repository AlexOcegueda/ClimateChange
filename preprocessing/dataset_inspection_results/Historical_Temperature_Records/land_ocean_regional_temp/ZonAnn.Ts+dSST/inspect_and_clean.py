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
    data = pd.read_csv(file_path, sep=',')
    
    data['Year'] = pd.to_numeric(data['Year'], errors='coerce')
    
    columns_to_convert = ['Glob', 'NHem', 'SHem', '24N-90N', '24S-24N', '90S-24S', '64N-90N', '44N-64N', 
                          '24N-44N', 'EQU-24N', '24S-EQU', '44S-24S', '64S-44S', '90S-64S']
    for col in columns_to_convert:
        data[col] = pd.to_numeric(data[col], errors='coerce')
    
    data.interpolate(method='linear', inplace=True)
    data.fillna(method='bfill', inplace=True)
    
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
    file_path = '../../../../data/Historical_Temperature_Records/land_ocean_regional_temp/ZonAnn.Ts+dSST.csv'
    
    base_output_dir = '../../land_ocean_regional_temp'
    dataset_name = 'ZonAnn.Ts+dSST'
    dataset_dir = os.path.join(base_output_dir, dataset_name)

    if not os.path.exists(dataset_dir):
        os.makedirs(dataset_dir)

    data = load_clean_and_inspect(file_path, dataset_dir, dataset_name)

if __name__ == "__main__":
    main()
