import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS CO2AnnualMeanMLO (
        id INTEGER PRIMARY KEY,
        year INTEGER,
        mean REAL,
        unc REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Atmospheric_CO2_Concentrations/mauna_loa/co2_annmean_mlo/Cleaned_co2_annmean_mlo.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO CO2AnnualMeanMLO (year, mean, unc)
            VALUES (?, ?, ?)
            ''', (row['year'], row['mean'], row['unc']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
