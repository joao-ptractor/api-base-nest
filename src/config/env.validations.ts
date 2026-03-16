import z from 'zod';

const envSchema = z.object({
  HOST: z.string().default('0.0.0.0'),
  PORT: z.string().default('3000'),

  DATABASE_URL: z.string(),

  DEFAULT_PASSWORD: z.string().default('user'),
  DRAWING_FOLDER_PATH: z.string(),

  SECRET_KEY: z.string(),
  PUBLIC_KEY: z.string(),

  FIREBIRD_HOST: z.string(),
  FIREBIRD_PORT: z.string(),
  FIREBIRD_USER: z.string(),
  FIREBIRD_PASSWORD: z.string(),
  FIREBIRD_PATH: z.string()
});

export function validate(config: Record<string, unknown>) {
  const result = envSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`Invalid environment variables: ${z.prettifyError(result.error)}`);
  }
  return result.data;
}
