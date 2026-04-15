"use client";

/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 und Consent Management Hook
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
  
  const targetCookies = COOKIE_INVENTORY.filter(c => c.category === category);
  if (targetCookies.length === 0) return;

  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const rawName = cookie.split("=")[0] ?? "";
    const name = rawName.trim();
    
    // Check if cookie matches inventory (exact or pattern)
    const shouldDelete = targetCookies.some(tc => {
      if (tc.name.endsWith("*")) {
        const prefix = tc.name.replace("*", "");
        return name.startsWith(prefix);
      }
      return tc.name === name;
    });

    if (shouldDelete) {
      const host = window.location.hostname;
      const domainParts = host.split(".");
      
      // 1. Current host
      document.cookie = `${name}=; path=/; max-age=0; domain=${host}`;
      // 2. No explicit domain
      document.cookie = `${name}=; path=/; max-age=0`; 
      // 3. Root domain (e.g. .example.com) for cross-subdomain cookies
      if (domainParts.length >= 2) {
        const rootDomain = `.${domainParts.slice(-2).join(".")}`;
        document.cookie = `${name}=; path=/; max-age=0; domain=${rootDomain}`;
      }
    }
  }
}

// Helper for UUID Generation (simple crypto fallback)
function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

// ─── Hook ───

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Read consent on mount
  useEffect(() => {
    const stored = readConsentCookie();
    const isSettingsRequested = typeof window !== "undefined" && window.location.hash === "#cookie-settings";
    
    if (stored && stored.version === CONSENT_VERSION) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
      // Don't hide the banner if the user is explicitly requesting it via hash
      if (!isSettingsRequested) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } else {
      // No consent or outdated version → show banner
      if (stored) deleteConsentCookie(); // Clear outdated consent
      setConsent(null);
      setShowBanner(true);
    }
  }, []);

  const updateConsent = useCallback(
    (updates: Partial<Pick<ConsentState, "analytics" | "marketing">>) => {
      const receiptId = consent?.receiptId || generateUUID();
      const newState: ConsentState = {
        essential: true,
        analytics: updates.analytics ?? consent?.analytics ?? false,
        marketing: updates.marketing ?? consent?.marketing ?? false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
        receiptId,
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

      // ── Consent-Proof-Logging (Art. 7 Abs. 1 DSGVO) ──
      // Dispatches a structured event for audit trail. Can be captured
      // by any logging system to prove consent was given/changed.
      if (typeof window !== "undefined") {
        const proofPayload = {
          action: consent ? "update" : "initial",
          consent_receipt_id: receiptId,
          consent: {
            essential: true,
            analytics: newState.analytics,
            marketing: newState.marketing,
          },
          timestamp: newState.timestamp,
          version: newState.version,
          userAgent: navigator.userAgent,
          url: window.location.href,
        };
        
        window.dispatchEvent(
          new CustomEvent("cookie_consent_updated", { detail: newState })
        );
        window.dispatchEvent(
          new CustomEvent("consent_proof_log", { detail: proofPayload })
        );
        
        // Console log for local audit
        // eslint-disable-next-line no-console
        console.info("[CONSENT-PROOF]", JSON.stringify(proofPayload));

        // Submit to Backend API (Vercel KV or Database)
        try {
          if (navigator.sendBeacon) {
            navigator.sendBeacon("/api/consent-audit", JSON.stringify(proofPayload));
          } else {
            // Fallback for browsers without sendBeacon
            fetch("/api/consent-audit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(proofPayload),
              keepalive: true
            }).catch(e => console.warn("Failed to log consent", e));
          }
        } catch (e) {
          console.warn("Error sending consent audit trail", e);
        }
      }
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
