import sqlite3
import csv
import os

def create_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS GlobalSeaLevelTrends (
        id INTEGER PRIMARY KEY,
        StationID TEXT,
        StationName TEXT,
        FirstYear INTEGER,
        LastYear INTEGER,
        YearRange INTEGER,
        PercentComplete INTEGER,
        MSLTrends REAL,
        MSLTrendsCI REAL,
        MSLTrendsFtPerCentury REAL,
        MSLTrendsFtPerCenturyCI REAL,
        Latitude REAL,
        Longitude REAL
    )
    ''')

    print("Added Table")

    conn.commit()
    conn.close()

def populate_table():
    conn = sqlite3.connect('../../../climate_change.db')
    cursor = conn.cursor()

    with open('../../../../preprocessing/dataset_inspection_results/Sea_Level_Rise/global/GlobalStationsLinearSeaLevelTrends/Cleaned_GlobalStationsLinearSeaLevelTrends.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            cursor.execute('''
            INSERT INTO GlobalSeaLevelTrends (StationID, StationName, FirstYear, LastYear, YearRange, PercentComplete, MSLTrends, MSLTrendsCI, MSLTrendsFtPerCentury, MSLTrendsFtPerCenturyCI, Latitude, Longitude)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (row['Station ID'], row['Station Name'], row['First Year'], row['Last Year'], row['Year Range'], row['% Complete'], row['MSL Trends (mm/yr)'], row['+/- 95% CI (mm/yr)'], row['MSL Trend (ft/century)'], row['+/- 95% CI (ft/century)'], row['Latitude'], row['Longitude']))

    print("Filled in data")
    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_table()
    populate_table()
    