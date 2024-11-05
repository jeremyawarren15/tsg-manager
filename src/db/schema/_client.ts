import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
const pool = postgres(process.env.DATABASE_URL, { max: 1 })
export const db = drizzle(pool)