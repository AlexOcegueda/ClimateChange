import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS CO2WeeklyMeanMLO (
        id INTEGER PRIMARY KEY,
        year REAL,
        month REAL,
        day REAL,
        decimal REAL,
        average REAL,
        ndays REAL,
        one_year_ago REAL,
        ten_years_ago REAL,
        increase_since_1800 REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Atmospheric_CO2_Concentrations/mauna_loa/co2_weekly_mlo/Cleaned_co2_weekly_mlo.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO CO2WeeklyMeanMLO (year, month, day, decimal, average, ndays, one_year_ago, ten_years_ago, increase_since_1800)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['year'], row['month'], row['day'], row['decimal'], row['average'], row['ndays'], row['1_year_ago'], row['10_years_ago'], row['increase_since_1800']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
