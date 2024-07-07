import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), '../database/climate_change.db');
const db = new sqlite3.Database(dbPath);

export async function GET(request: Request, { params }: { params: { table: string } }) {
    const { table } = params;

    if (!table) {
        return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
    }

    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
            if (err) {
                reject(NextResponse.json({ error: err.message }, { status: 500 }));
            }
            resolve(NextResponse.json({ data: rows }, { status: 200 }));
        });
    });
}
