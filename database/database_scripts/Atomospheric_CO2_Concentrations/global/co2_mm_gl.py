import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS GlobalCO2MonthlyMean (
        id INTEGER PRIMARY KEY,
        year REAL,
        month REAL,
        decimal REAL,
        average REAL,
        average_unc REAL,
        trend REAL,
        trend_unc REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Atmospheric_CO2_Concentrations/global/co2_mm_gl/Cleaned_co2_mm_gl.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO GlobalCO2MonthlyMean (year, month, decimal, average, average_unc, trend, trend_unc)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (row['year'], row['month'], row['decimal'], row['average'], row['average_unc'], row['trend'], row['trend_unc']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
