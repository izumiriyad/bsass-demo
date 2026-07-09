import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

// Create pool only if URL is available
let pool: Pool | undefined;
let db: ReturnType<typeof drizzle>;

if (databaseUrl) {
  pool =
    globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({
      connectionString: databaseUrl,
    });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
  }

  db = drizzle(pool);
} else {
  // Mock drizzle instance for build when no database is available
  db = drizzle({} as Pool);
}

export { pool, db };
