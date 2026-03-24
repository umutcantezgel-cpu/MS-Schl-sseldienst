/**
 * ══════════════════════════════════════════════════════════════
 * Phase 17 — Environment Validation
 * ══════════════════════════════════════════════════════════════
 * Runtime validation for all required environment variables.
 * All components import from here — never use process.env directly.
 * No external dependencies (no Zod).
 * ══════════════════════════════════════════════════════════════
 */

function getEnvVar(
  key: string,
  options?: { required?: boolean; fallback?: string }
): string {
  const value = process.env[key];
  const { required = false, fallback } = options ?? {};

  if (value) return value;

  if (fallback !== undefined) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[env] ⚠ ${key} not set, using fallback: "${fallback}"`);
    }
    return fallback;
  }

  if (required) {
    // In production build, throw to fail the build
    if (process.env.NODE_ENV === "production") {
      throw new Error(`[env] ❌ Required environment variable ${key} is missing.`);
    }
    // In development, warn loudly but don't crash
    console.error(`[env] ❌ Required variable ${key} missing! Some features may not work.`);
    return "";
  }

  return "";
}

// ─── Exported Environment Object ───

export const env = {
  /** Current Node environment */
  NODE_ENV: process.env.NODE_ENV ?? "development",

  /** True when running in production */
  isProduction: process.env.NODE_ENV === "production",

  /** True when running in development */
  isDevelopment: process.env.NODE_ENV === "development",

  /** Google Maps API Key (public, used in ServicegebietMap) */
  GOOGLE_MAPS_API_KEY: getEnvVar("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", {
    fallback: "",
  }),

  /** App version — set via build pipeline or package.json */
  APP_VERSION: getEnvVar("NEXT_PUBLIC_APP_VERSION", {
    fallback: "0.1.0",
  }),

  /** Base URL for smoke tests and canonical URLs */
  BASE_URL: getEnvVar("NEXT_PUBLIC_BASE_URL", {
    fallback: "http://localhost:3000",
  }),
} as const;

// ─── Type Export ───
export type Env = typeof env;
