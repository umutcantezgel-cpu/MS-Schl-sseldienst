/**
 * ══════════════════════════════════════════════════════════════
 * Phase 17 — useFeatureFlag Hook
 * ══════════════════════════════════════════════════════════════
 * Client-side React hook for feature flag checks.
 * Wraps isFeatureEnabled() for use in Client Components.
 * ══════════════════════════════════════════════════════════════
 */

"use client";

import { useMemo } from "react";
import { isFeatureEnabled, type FeatureFlagName } from "@/lib/feature-flags";

/**
 * Check if a feature flag is enabled.
 * Returns a stable boolean value for the lifetime of the component.
 *
 * @example
 * ```tsx
 * const showBanner = useFeatureFlag('exitIntentBanner');
 * if (!showBanner) return null;
 * ```
 */
export function useFeatureFlag(flagName: FeatureFlagName): boolean {
  // Memoize to keep the value stable across re-renders
  // (important for percentage-based flags)
  return useMemo(() => isFeatureEnabled(flagName), [flagName]);
}
