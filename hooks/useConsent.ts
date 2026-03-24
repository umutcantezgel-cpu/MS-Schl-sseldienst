"use client";

/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 — Consent Management Hook
 * ══════════════════════════════════════════════════════════════
 * Reads/writes the consent_status cookie.
 * Used by CookieConsent banner AND by analytics.ts.
 * ══════════════════════════════════════════════════════════════
 */

import { useState, useCallback, useEffect } from "react";
import {
  CONSENT_COOKIE_NAME,
  CONSENT_COOKIE_MAX_AGE_DAYS,
  CONSENT_VERSION,
  type ConsentState,
  type ConsentCategory,
} from "@/lib/cookie-inventory";

// ─── Default state (before any consent is given) ───
const DEFAULT_CONSENT: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: "",
  version: CONSENT_VERSION,
};

// ─── Cookie helpers ───

function readConsentCookie(): ConsentState | null {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${CONSENT_COOKIE_NAME}=`));
    if (!match) return null;
    const json = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(json) as ConsentState;
    // Force essential to always be true
    parsed.essential = true;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsentCookie(state: ConsentState): void {
  if (typeof document === "undefined") return;
  const maxAge = CONSENT_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  const value = encodeURIComponent(JSON.stringify(state));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`;
}

function deleteConsentCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE_NAME}=; path=/; max-age=0`;
}

// ─── Delete cookies by category ───
function deleteCookiesByCategory(category: ConsentCategory): void {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const name = cookie.split("=")[0];
    // GA4 cookies
    if (category === "analytics" && (name === "_ga" || name.startsWith("_ga_"))) {
      document.cookie = `${name}=; path=/; max-age=0; domain=${window.location.hostname}`;
      document.cookie = `${name}=; path=/; max-age=0`; // Without domain for safety
    }
  }
}

// ─── Hook ───

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Read consent on mount
  useEffect(() => {
    const stored = readConsentCookie();
    if (stored && stored.version === CONSENT_VERSION) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
      setShowBanner(false);
    } else {
      // No consent or outdated version → show banner
      if (stored) deleteConsentCookie(); // Clear outdated consent
      setConsent(null);
      setShowBanner(true);
    }
  }, []);

  const updateConsent = useCallback(
    (updates: Partial<Pick<ConsentState, "analytics" | "marketing">>) => {
      const newState: ConsentState = {
        essential: true,
        analytics: updates.analytics ?? consent?.analytics ?? false,
        marketing: updates.marketing ?? consent?.marketing ?? false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
      };

      // If a category was revoked, delete its cookies
      if (consent?.analytics && !newState.analytics) {
        deleteCookiesByCategory("analytics");
      }
      if (consent?.marketing && !newState.marketing) {
        deleteCookiesByCategory("marketing");
      }

      writeConsentCookie(newState);
      setConsent(newState);
      setShowBanner(false);
    },
    [consent]
  );

  const acceptAll = useCallback(() => {
    updateConsent({ analytics: true, marketing: true });
  }, [updateConsent]);

  const acceptEssentialOnly = useCallback(() => {
    updateConsent({ analytics: false, marketing: false });
  }, [updateConsent]);

  const openSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  return {
    consent,
    showBanner,
    acceptAll,
    acceptEssentialOnly,
    updateConsent,
    openSettings,
    setShowBanner,
  };
}

// ─── Standalone consent check (for analytics.ts and other modules) ───

/**
 * Check if consent has been given for a specific category.
 * Can be called from non-React code (e.g., analytics.ts).
 */
export function hasConsent(category: ConsentCategory): boolean {
  if (category === "essential") return true;
  const stored = readConsentCookie();
  if (!stored) return false;
  if (stored.version !== CONSENT_VERSION) return false;
  return stored[category] === true;
}
