import { z } from "zod";

const serverEnvironmentSchema = z.object({
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
});

const publicEnvironmentSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export function getServerEnvironment() {
  return serverEnvironmentSchema.parse(process.env);
}

export const publicEnvironment = publicEnvironmentSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
