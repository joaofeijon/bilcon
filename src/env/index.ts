import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  MYSQL_ROOT_PASSWORD: z.string(),
  MYSQL_DATABASE: z.string(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string(),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default("0.0.0.0"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
	console.error("🩸 Invalid environment variables", _env.error.format())

	throw new Error("🩸 Invalid environment variables")
}

export const env = _env.data