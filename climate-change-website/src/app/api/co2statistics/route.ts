import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'database/climate_change.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to the database.");
    }
});

export async function GET(): Promise<Response> {
  return new Promise((resolve, reject) => {
    db.all(`
      SELECT 
        CAST(year / 10 AS INTEGER) * 10 AS decade, 
        AVG(ann_inc) AS average 
      FROM GlobalCO2AnnualGrowthRate 
      WHERE year >= 1959
      GROUP BY decade
      ORDER BY decade
    `, [], (err, rows) => {
      if (err) {
        reject(NextResponse.json({ error: err.message }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ data: rows }, { status: 200 }));
      }
    });
  });
}
