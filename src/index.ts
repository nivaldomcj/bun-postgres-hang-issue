import { Client } from "pg";

console.log("🎉 Initializing client...");

const client = new Client({
  connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
});

// await client.connect()

console.log("🏃 Running query...");
const result = await client.query("SELECT 1+1 AS result");

console.log(`✅ Query run, here is the result: ${JSON.stringify(result)}`);

process.exit(0);
export {};
