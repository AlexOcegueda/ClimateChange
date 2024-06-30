import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS LandOceanZonAnnTsMean (
        id INTEGER PRIMARY KEY,
        Year REAL,
        Glob REAL,
        NHem REAL,
        SHem REAL,
        N24N_90N REAL,
        S24S_24N REAL,
        S90S_24S REAL,
        N64N_90N REAL,
        N44N_64N REAL,
        N24N_44N REAL,
        EQU_24N REAL,
        S24S_EQU REAL,
        S44S_24S REAL,
        S64S_44S REAL,
        S90S_64S REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Historical_Temperature_Records/land_ocean_regional_temp/ZonAnn.Ts+dSST/Cleaned_ZonAnn.Ts+dSST.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO LandOceanZonAnnTsMean (Year, Glob, NHem, SHem, N24N_90N, S24S_24N, S90S_24S, N64N_90N, N44N_64N, N24N_44N, EQU_24N, S24S_EQU, S44S_24S, S64S_44S, S90S_64S)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['Year'], row['Glob'], row['NHem'], row['SHem'], row['24N-90N'], row['24S-24N'], row['90S-24S'], row['64N-90N'], row['44N-64N'], row['24N-44N'], row['EQU-24N'], row['24S-EQU'], row['44S-24S'], row['64S-44S'], row['90S-64S']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
