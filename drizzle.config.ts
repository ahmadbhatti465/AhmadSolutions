import { defineConfig } from "drizzle-kit";

const dbUrl = process.env.DATABASE_URL || "file:./sqlite.db";
const isTurso = dbUrl.startsWith("libsql://") || dbUrl.startsWith("https://");

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: isTurso ? "turso" : "sqlite",
  dbCredentials: {
    url: dbUrl,
    ...(isTurso && process.env.DATABASE_AUTH_TOKEN
      ? { authToken: process.env.DATABASE_AUTH_TOKEN }
      : {}),
  },
});
