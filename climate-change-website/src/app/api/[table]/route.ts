import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const isVercel = process.env.VERCEL_ENV !== undefined;
const dbPath = isVercel ? path.join(process.cwd(), 'database/climate_change.db') : path.join(process.cwd(), '../database/climate_change.db');

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
                resolve(NextResponse.json({ error: err.message }, { status: 500 }));
            } else {
                resolve(NextResponse.json({ data: rows }, { status: 200 }));
            }
        });
    });
}
