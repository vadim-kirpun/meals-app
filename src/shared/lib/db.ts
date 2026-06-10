import "server-only";

import Database from "better-sqlite3";
import path from "path";

const globalForDb = globalThis as typeof globalThis & {
  db?: Database.Database;
};

export function getDb() {
  if (!globalForDb.db) {
    globalForDb.db = new Database(path.join(process.cwd(), "meals.db"), {
      readonly: true,
    });
  }

  return globalForDb.db;
}
