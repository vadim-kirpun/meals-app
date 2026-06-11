import "server-only";

import Database from "better-sqlite3";
import path from "path";

const globalForDb = globalThis as typeof globalThis & {
  db?: Database.Database;
  dbReadWrite?: Database.Database;
};

type GetDbOptions = {
  readonly?: boolean;
};

export function getDb(options: GetDbOptions = {}) {
  const shouldUseReadonly = options.readonly ?? true;

  if (shouldUseReadonly) {
    if (!globalForDb.db) {
      globalForDb.db = new Database(path.join(process.cwd(), "meals.db"), {
        readonly: true,
      });
    }

    return globalForDb.db;
  }

  if (!globalForDb.dbReadWrite) {
    globalForDb.dbReadWrite = new Database(path.join(process.cwd(), "meals.db"), {
      readonly: false,
    });
  }

  return globalForDb.dbReadWrite;
}
