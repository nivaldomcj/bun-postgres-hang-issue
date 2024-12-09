import { defineConfig, type Config } from "drizzle-kit"

export const defaultConfig = defineConfig({
  dialect: "postgresql",
  dbCredentials: { url: Bun.env.DATABASE_URL as string },
  verbose: true,
  schemaFilter: ["public"],
}) satisfies Config

export default defaultConfig
