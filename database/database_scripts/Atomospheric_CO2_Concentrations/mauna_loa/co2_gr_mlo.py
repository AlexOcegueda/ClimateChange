import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS CO2GrowthRateMLO (
        id INTEGER PRIMARY KEY,
        year REAL,
        ann_inc REAL,
        unc REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Atmospheric_CO2_Concentrations/mauna_loa/co2_gr_mlo/Cleaned_co2_gr_mlo.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO CO2GrowthRateMLO (year, ann_inc, unc)
            VALUES (?, ?, ?)
            ''', (row['year'], row['ann_inc'], row['unc']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
