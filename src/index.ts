import { sql } from "drizzle-orm"
import { drizzle } from "drizzle-orm/postgres-js"
import queryClient from "./queryClient"

console.log("🔌 Connecting to database...")
const db = drizzle(queryClient({ app: "test" }))
console.log("🆗 Connected to database!")

console.log("🔍 Executing queries...")

for (let i = 0; i < 100; i++) {
  await db.execute(sql`SELECT ${i} as result`).execute()
  console.log(`✅ Query ${i} executed!`)
}

console.log("✅ Done!")
process.exit(0)
