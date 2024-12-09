import { sql } from "drizzle-orm"
import { drizzle } from "drizzle-orm/postgres-js"
import queryClient from "./queryClient"

console.log("🔌 Connecting to database...")
const db = drizzle(queryClient({ app: "test" }))
console.log("🆗 Connected to database!")

console.log("🔍 Executing query...")
const result = await db.execute(sql`SELECT 1 as result`).execute()
console.log("✅ Query executed!")

console.log("🧮 Query result:", result)
