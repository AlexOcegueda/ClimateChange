import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const isVercel = process.env.VERCEL_ENV !== undefined;
const dbPath = isVercel ? path.join('/var/task/database', 'climate_change.db') : path.join(process.cwd(), 'database', 'climate_change.db');
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
