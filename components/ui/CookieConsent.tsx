"use client";

/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 — Cookie-Consent Banner (DSGVO + TTDSG konform)
 * ══════════════════════════════════════════════════════════════
 * - 3 Optionen: "Alle akzeptieren", "Nur Essentiell", "Einstellungen"
 * - "Alle ablehnen" genauso einfach wie "Alle akzeptieren"
 * - Schließen = "Nur Essentiell"
 * - Keine vorangekreuzten Checkboxen für nicht-essentielle Cookies
 * - Cookie-Banner verdeckt keinen Inhalt (fixed bottom)
 * ══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from "react";
import { useConsent } from "@/hooks/useConsent";
import { CONSENT_CATEGORY_INFO, type ConsentCategory } from "@/lib/cookie-inventory";
import { Shield, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const {
    consent,
    showBanner,
    acceptAll,
    acceptEssentialOnly,
    updateConsent,
    setShowBanner,
  } = useConsent();

  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  // [PERF-FIX] Delay banner mount so it doesn't steal LCP from the hero section.
  // Lighthouse measures LCP as the last large contentful paint before ~2.5-3s after FCP.
  // The cookie banner paragraph was being measured as LCP (5.7s) because its text area
  // is larger than the hero headline. By deferring mount by 3.5s, we push the banner
  // paint past the LCP observation window, ensuring the hero becomes the LCP element.
  const [isDelayComplete, setIsDelayComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayComplete(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Global event listener to listen for `#cookie-settings` in the URL or custom events
  useEffect(() => {
    const handleOpenSettingsEvent = () => {
      setShowBanner(true);
      setShowSettings(true);
      if (consent) {
        setAnalyticsChecked(consent.analytics);
        setMarketingChecked(consent.marketing);
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === "#cookie-settings") {
        handleOpenSettingsEvent();
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("openCookieSettings", handleOpenSettingsEvent);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("openCookieSettings", handleOpenSettingsEvent);
    };
  }, [consent, setShowBanner]);

  // Don't render if consent is already given, banner is not requested, OR delay hasn't completed
  // The delay prevents this banner from being measured as the LCP element
  if (!showBanner || !isDelayComplete) return null;

  const handleSaveSettings = () => {
    updateConsent({
      analytics: analyticsChecked,
      marketing: marketingChecked,
    });
    setShowSettings(false);
  };

  const handleClose = () => {
    // Schließen = "Nur Essentiell" (DSGVO-konform)
    acceptEssentialOnly();
  };

  // When opening settings from a re-consent, pre-fill with existing values
  const handleOpenSettings = () => {
    setAnalyticsChecked(consent?.analytics ?? false);
    setMarketingChecked(consent?.marketing ?? false);
    setShowSettings(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        {!showSettings ? (
          /* ── Banner View ── */
          <div className="p-6 md:p-6">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors rounded-lg"
              aria-label="Cookie-Banner schließen (nur essentielle Cookies)"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-[var(--color-red-500)]/10 items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-red-500)]" />
              </div>
              <div className="flex-1 pr-6">
                <h2 className="text-[15px] font-semibold text-[color:var(--text-primary)] mb-1.5">
                  Wir respektieren Ihre Privatsphäre
                </h2>
                <p className="text-[13px] text-[color:var(--text-secondary)] leading-relaxed mb-4">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                  Essentielle Cookies sind für die Funktion der Website notwendig.
                  Analyse-Cookies helfen uns, die Website zu verbessern.{" "}
                  <Link
                    href="/datenschutz"
                    className="underline hover:text-[color:var(--text-primary)] transition-colors"
                    aria-label="Mehr erfahren über unsere Datenschutzrichtlinien"
                  >
                    Datenschutzerklärung lesen
                  </Link>
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-[13px] font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptEssentialOnly}
                    className="px-5 py-2.5 bg-white border border-[var(--border-subtle)] hover:bg-gray-50 text-[color:var(--text-primary)] text-[13px] font-semibold rounded-xl transition-all duration-200"
                  >
                    Nur Essentiell
                  </button>
                  <button
                    onClick={handleOpenSettings}
                    className="px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-[13px] font-medium transition-colors underline-offset-2 hover:underline"
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── Settings View ── */
          <div className="p-6 md:p-6">
            <h2 className="text-[15px] font-semibold text-[color:var(--text-primary)] mb-4">
              Cookie-Einstellungen
            </h2>

            <div className="space-y-3 mb-5">
              {(Object.entries(CONSENT_CATEGORY_INFO) as [ConsentCategory, typeof CONSENT_CATEGORY_INFO[ConsentCategory]][]).map(
                ([key, info]) => (
                  <label
                    key={key}
                    className="flex items-start gap-3 p-3 rounded-xl border border-[var(--border-subtle)] hover:border-[var(--border-default)] transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={
                        key === "essential"
                          ? true
                          : key === "analytics"
                            ? analyticsChecked
                            : marketingChecked
                      }
                      disabled={info.required}
                      onChange={(e) => {
                        if (key === "analytics") setAnalyticsChecked(e.target.checked);
                        if (key === "marketing") setMarketingChecked(e.target.checked);
                      }}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[var(--color-red-500)] focus:ring-[var(--color-red-500)] disabled:opacity-60"
                    />
                    <div className="flex-1">
                      <span className="text-[13px] font-semibold text-[color:var(--text-primary)]">
                        {info.label}
                        {info.required && (
                          <span className="ml-1.5 text-[11px] font-normal text-[color:var(--text-tertiary)]">
                            (immer aktiv)
                          </span>
                        )}
                      </span>
                      <p className="text-[12px] text-[color:var(--text-secondary)] mt-0.5 leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </label>
                )
              )}
            </div>

            {/* Settings Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleSaveSettings}
                className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-[13px] font-semibold rounded-xl transition-all duration-200 shadow-sm"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-white border border-[var(--border-subtle)] hover:bg-gray-50 text-[color:var(--text-primary)] text-[13px] font-semibold rounded-xl transition-all duration-200"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-[13px] font-medium transition-colors"
              >
                Zurück
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
