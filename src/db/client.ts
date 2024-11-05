import { drizzle } from "drizzle-orm/postgres-js"

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");

export const db = drizzle({connection: process.env.DATABASE_URL})
