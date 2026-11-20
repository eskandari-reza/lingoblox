import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
/** each service owns exactly one database file (database-per-service) */
export function openDb(file, schema) {
  if (file !== ':memory:') fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new DatabaseSync(file); db.exec('PRAGMA journal_mode=WAL;' + schema);
  return { db, q: (sql) => db.prepare(sql) };
}
