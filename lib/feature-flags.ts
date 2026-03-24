/**
 * ══════════════════════════════════════════════════════════════
 * Phase 17 — Feature Flag System
 * ══════════════════════════════════════════════════════════════
 * Self-built, no external services (no LaunchDarkly, no Unleash).
 * Flags are defined in code, overridable via env vars.
 * Kill-Switch pattern: set FEATURE_XYZ=false in Vercel Dashboard
 * for instant deactivation without redeployment (on next request).
 * ══════════════════════════════════════════════════════════════
 */

// ─── Flag Definitions ───

export interface FeatureFlag {
  /** Whether the feature is enabled by default */
  enabled: boolean;
  /** Percentage of users who see this feature (0-100, for gradual rollout) */
  percentage: number;
  /** Human-readable description */
  description: string;
}

export type FeatureFlagName = keyof typeof FEATURE_FLAGS;

/**
 * Add new feature flags here.
 * Each flag can be overridden by a NEXT_PUBLIC_FEATURE_<UPPER_SNAKE_CASE> env var.
 */
const FEATURE_FLAGS = {
  exitIntentBanner: {
    enabled: true,
    percentage: 100,
    description: "Exit-Intent-Banner bei Mauszeiger-Verlassen",
  },
  cookieConsentV2: {
    enabled: false,
    percentage: 0,
    description: "Neues Cookie-Consent-Banner Design (WIP)",
  },
  enhancedContactForm: {
    enabled: false,
    percentage: 0,
    description: "Kontaktformular mit erweiterten Feldern",
  },
} as const satisfies Record<string, FeatureFlag>;

// ─── Core Logic ───

/**
 * Convert camelCase to UPPER_SNAKE_CASE for env var lookup.
 * "exitIntentBanner" → "EXIT_INTENT_BANNER"
 */
function toEnvKey(flagName: string): string {
  return flagName
    .replace(/([A-Z])/g, "_$1")
    .toUpperCase();
}

/**
 * Check if a feature is enabled.
 * Priority: env var override > code definition.
 * Works in both Server Components and Client Components.
 */
export function isFeatureEnabled(flagName: FeatureFlagName): boolean {
  const flag = FEATURE_FLAGS[flagName];
  if (!flag) return false;

  // Check for env var override: NEXT_PUBLIC_FEATURE_EXIT_INTENT_BANNER
  const envKey = `NEXT_PUBLIC_FEATURE_${toEnvKey(flagName)}`;
  const envValue = typeof process !== "undefined"
    ? process.env[envKey]
    : undefined;

  if (envValue !== undefined) {
    return envValue === "true" || envValue === "1";
  }

  // Use code definition
  if (!flag.enabled) return false;
  if (flag.percentage >= 100) return true;

  // Percentage-based: deterministic random (not per-user, per-request)
  return Math.random() * 100 < flag.percentage;
}

/**
 * Get all feature flags with their current states.
 * Useful for debugging/admin panels.
 */
export function getAllFlags(): Record<FeatureFlagName, boolean> {
  const flags = {} as Record<FeatureFlagName, boolean>;
  for (const name of Object.keys(FEATURE_FLAGS) as FeatureFlagName[]) {
    flags[name] = isFeatureEnabled(name);
  }
  return flags;
}
