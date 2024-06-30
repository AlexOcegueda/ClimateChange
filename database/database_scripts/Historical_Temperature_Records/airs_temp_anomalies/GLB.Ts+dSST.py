import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS GlobalAIRSTempAnomalies (
        id INTEGER PRIMARY KEY,
        Year REAL,
        Jan REAL,
        Feb REAL,
        Mar REAL,
        Apr REAL,
        May REAL,
        Jun REAL,
        Jul REAL,
        Aug REAL,
        Sep REAL,
        Oct REAL,
        Nov REAL,
        Dec REAL,
        J_D REAL,
        D_N REAL,
        DJF REAL,
        MAM REAL,
        JJA REAL,
        SON REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Historical_Temperature_Records/airs_temp_anomalies/GLB.Ts+dSST/Cleaned_GLB.Ts+dSST.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO GlobalAIRSTempAnomalies (Year, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, J_D, D_N, DJF, MAM, JJA, SON)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['Year'], row['Jan'], row['Feb'], row['Mar'], row['Apr'], row['May'], row['Jun'], row['Jul'], row['Aug'], row['Sep'], row['Oct'], row['Nov'], row['Dec'], row['J-D'], row['D-N'], row['DJF'], row['MAM'], row['JJA'], row['SON']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
