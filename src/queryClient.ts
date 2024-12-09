import postgres from "postgres"

interface ClientArgs {
  app: string
  url?: string
  max?: number
  pgSSL?: {
    ca: string
    key: string
    cert: string
  }
}

export const queryClient = ({ app, url, max, pgSSL }: ClientArgs) => {
  let ssl:
    | boolean
    | object
    | "prefer"
    | "require"
    | "allow"
    | "verify-full"
    | undefined = "prefer"

  if (Bun.env.DATABASE_CA && Bun.env.DATABASE_CERT && Bun.env.DATABASE_KEY) {
    ssl = {
      rejectUnauthorized: false,
      ca: Bun.env.DATABASE_CA,
      key: Bun.env.DATABASE_KEY,
      cert: Bun.env.DATABASE_CERT,
    }

    console.log("🔐 Running with SSL certificate")
  } else {
    console.log("🔐 Running without SSL certificate")
  }

  if (pgSSL) {
    ssl = {
      rejectUnauthorized: false,
      ca: pgSSL.ca,
      key: pgSSL.key,
      cert: pgSSL.cert,
    }
  }

  const databaseUrl = url ? url : (process.env.DATABASE_URL as string)

  return postgres(databaseUrl, {
    connect_timeout: 15,
    keep_alive: 1,
    idle_timeout: 180,
    max: max ?? 100,
    ssl,
    connection: {
      application_name: app,
    },
  })
}

export default queryClient
