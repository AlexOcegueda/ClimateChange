import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'database/climate_change.db');

console.log("Database path: ", dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to the database.");
    }
});

export async function GET(request: Request, { params }: { params: { table: string } }): Promise<Response> {
    const { table } = params;

    if (!table) {
        return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
    }

    return new Promise((resolve) => {
        db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
            if (err) {
                console.error("Error fetching data: ", err);
                resolve(NextResponse.json({ error: err.message }, { status: 500 }));
            } else {
                console.log("Data fetched successfully: ", rows);
                resolve(NextResponse.json({ data: rows }, { status: 200 }));
            }
        });
    });
}
