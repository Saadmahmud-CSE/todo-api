import "dotenv/config"

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "./schema.ts",
  dbCredentials: {
    url: Deno.env.get("DATABASE_URL")!, 
    authToken: Deno.env.get("DATABASE_AUTH_TOKEN"), 
  },
});