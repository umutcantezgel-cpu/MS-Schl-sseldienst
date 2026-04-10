"use client";

/**
 * ══════════════════════════════════════════════════════════════
 * DSGVO + TTDSG Cookie-Consent Banner (Rechtssicher)
 * ══════════════════════════════════════════════════════════════
 * Compliance-Checkliste:
 * ✅ "Alle ablehnen" gleichwertig prominent wie "Alle akzeptieren" (§25 TTDSG)
 * ✅ Keine vorangekreuzten nicht-essentiellen Checkboxen (Art. 7 DSGVO)
 * ✅ Schließen = "Nur Essentiell" (kein Default-Opt-In)
 * ✅ Klare Zweckbeschreibung pro Cookie-Kategorie
 * ✅ Link zu Datenschutzerklärung + Impressum
 * ✅ Consent-Timestamp in Cookie gespeichert
 * ✅ Widerruf jederzeit über Footer-Link "Cookie-Einstellungen"
 * ✅ Banner blockiert keinen Inhalt (fixed bottom, nicht modal)
 * ══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from "react";
import { useConsent } from "@/hooks/useConsent";
import { CONSENT_CATEGORY_INFO, type ConsentCategory } from "@/lib/cookie-inventory";
import { Shield, X, Cookie, ExternalLink } from "lucide-react";
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
  if (!showBanner || !isDelayComplete) return null;

  const handleSaveSettings = () => {
    updateConsent({
      analytics: analyticsChecked,
      marketing: marketingChecked,
    });
    setShowSettings(false);
  };

  const handleClose = () => {
    // Schließen = "Nur Essentiell" (DSGVO-konform, kein Default-Opt-In)
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
      aria-modal="false"
      aria-label="Cookie-Einwilligungsbanner gemäß DSGVO und TTDSG"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-[9998] p-3 sm:p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_-4px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {!showSettings ? (
          /* ── Banner View ── */
          <div className="p-5 sm:p-6 md:p-6 relative">
            {/* Close button = Nur Essentiell */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Cookie-Banner schließen – nur essentielle Cookies werden gesetzt"
              title="Schließen = Nur essentielle Cookies"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-[var(--color-red-500)]/10 items-center justify-center">
                <Cookie className="w-5 h-5 text-[var(--color-red-500)]" />
              </div>
              <div className="flex-1 pr-6">
                <h2 className="text-base font-bold text-[color:var(--text-primary)] mb-1.5">
                  🔒 Wir respektieren Ihre Privatsphäre
                </h2>
                <p id="cookie-consent-description" className="text-sm text-[color:var(--text-secondary)] leading-relaxed mb-4">
                  Wir verwenden Cookies und ähnliche Technologien auf unserer Website.
                  Einige sind <strong>technisch notwendig</strong> (essentiell), andere helfen uns, 
                  die Website zu verbessern (Analyse). Nicht-essentielle Cookies werden 
                  erst nach Ihrer ausdrücklichen Einwilligung gesetzt (§25 TTDSG, Art. 6 Abs. 1 lit. a DSGVO).{" "}
                  <Link
                    href="/datenschutz"
                    className="underline hover:text-[color:var(--text-primary)] transition-colors inline-flex items-center gap-1"
                    aria-label="Datenschutzerklärung lesen"
                  >
                    Datenschutzerklärung
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                  {" · "}
                  <Link
                    href="/impressum"
                    className="underline hover:text-[color:var(--text-primary)] transition-colors"
                  >
                    Impressum
                  </Link>
                </p>

                {/* Action Buttons — DSGVO: "Ablehnen" muss gleichwertig zu "Akzeptieren" sein */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm min-h-[44px]"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptEssentialOnly}
                    className="px-5 py-2.5 bg-white border-2 border-[var(--border-subtle)] hover:border-[var(--text-tertiary)] hover:bg-gray-50 text-[color:var(--text-primary)] text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px]"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={handleOpenSettings}
                    className="px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-sm font-medium transition-colors underline-offset-2 hover:underline min-h-[44px]"
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── Settings View (Granulare Einwilligung) ── */
          <div className="p-5 sm:p-6 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-[var(--color-red-500)] shrink-0" />
              <h2 className="text-base font-bold text-[color:var(--text-primary)]">
                Cookie-Einstellungen verwalten
              </h2>
            </div>
            <p className="text-xs text-[color:var(--text-tertiary)] mb-4 leading-relaxed">
              Hier können Sie Ihre Einwilligung für einzelne Cookie-Kategorien erteilen oder widerrufen.
              Technisch notwendige Cookies sind immer aktiv und können nicht deaktiviert werden (§25 Abs. 2 TTDSG).
              {consent?.timestamp && (
                <span className="block mt-1 font-medium">
                  Letzte Einwilligung: {new Date(consent.timestamp).toLocaleString("de-DE")}
                </span>
              )}
            </p>

            <div className="space-y-3 mb-5">
              {(Object.entries(CONSENT_CATEGORY_INFO) as [ConsentCategory, typeof CONSENT_CATEGORY_INFO[ConsentCategory]][]).map(
                ([key, info]) => (
                  <label
                    key={key}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors cursor-pointer ${
                      info.required
                        ? "border-green-200 bg-green-50/30"
                        : "border-[var(--border-subtle)] hover:border-[var(--border-default)]"
                    }`}
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
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[var(--color-red-500)] focus:ring-[var(--color-red-500)] disabled:opacity-60 min-w-[16px]"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-[color:var(--text-primary)] flex items-center gap-2 flex-wrap">
                        {info.label}
                        {info.required && (
                          <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Immer aktiv
                          </span>
                        )}
                      </span>
                      <p className="text-xs text-[color:var(--text-secondary)] mt-1 leading-relaxed">
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
                className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm min-h-[44px]"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-white border border-[var(--border-subtle)] hover:bg-gray-50 text-[color:var(--text-primary)] text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px]"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptEssentialOnly}
                className="px-5 py-2.5 bg-white border border-[var(--border-subtle)] hover:bg-gray-50 text-[color:var(--text-primary)] text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px]"
              >
                Alle ablehnen
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-5 py-2.5 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] text-sm font-medium transition-colors min-h-[44px]"
              >
                Zurück
              </button>
            </div>

            {/* Rechtliche Hinweise */}
            <p className="mt-4 text-[10px] text-[color:var(--text-tertiary)] leading-relaxed">
              Rechtsgrundlagen: §25 TTDSG (Einwilligung für nicht-essentielle Cookies), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), 
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse für essentielle Cookies). 
              Sie können Ihre Einwilligung jederzeit über den Link &bdquo;Cookie-Einstellungen&quot; im Footer widerrufen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
