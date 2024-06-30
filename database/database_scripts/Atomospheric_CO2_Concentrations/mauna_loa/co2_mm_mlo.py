import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS CO2MonthlyMeanMLO (
        id INTEGER PRIMARY KEY,
        year INTEGER,
        month INTEGER,
        decimal_date REAL,
        average REAL,
        deseasonalized REAL,
        ndays INTEGER,
        sdev REAL,
        unc REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Atmospheric_CO2_Concentrations/mauna_loa/co2_mm_mlo/Cleaned_co2_mm_mlo.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO CO2MonthlyMeanMLO (year, month, decimal_date, average, deseasonalized, ndays, sdev, unc)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['year'], row['month'], row['decimal_date'], row['average'], row['deseasonalized'], row['ndays'], row['sdev'], row['unc']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
