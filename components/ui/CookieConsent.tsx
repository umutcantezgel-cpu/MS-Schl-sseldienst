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
 * ✅ Cookie-Details (Namen, Anbieter, Dauer) pro Kategorie einsehbar
 * ✅ Consent-Proof-Logging via useConsent (Art. 7 Abs. 1 DSGVO)
 * ✅ Slide-up micro-animation
 * ══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from "react";
import { useConsent } from "@/hooks/useConsent";
import { CONSENT_CATEGORY_INFO, COOKIE_INVENTORY, type ConsentCategory } from "@/lib/cookie-inventory";
import { Shield, X, Cookie, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
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
  const [expandedCategory, setExpandedCategory] = useState<ConsentCategory | null>(null);

  // [PERF-FIX] Delay banner mount so it doesn't steal LCP from the hero section.
  const [isDelayComplete, setIsDelayComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayComplete(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Slide-in animation state
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (showBanner && isDelayComplete) {
      // Small delay to trigger CSS transition after mount
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(false);
    return undefined;
  }, [showBanner, isDelayComplete]);

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

  // Don't render anything if delay hasn't completed
  if (!isDelayComplete) return null;

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

  const handleDeclineAll = () => {
    setAnalyticsChecked(false);
    setMarketingChecked(false);
    acceptEssentialOnly();
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    setAnalyticsChecked(true);
    setMarketingChecked(true);
    acceptAll();
    setShowSettings(false);
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Cookie-Einwilligungsbanner gemäß DSGVO und TTDSG"
        aria-describedby="cookie-consent-description"
        className={`fixed bottom-0 left-0 right-0 z-[9999] p-3 sm:p-4 md:p-6 pb-[max(1rem,calc(env(safe-area-inset-bottom)+64px))] sm:pb-6 transition-all duration-500 ease-out ${
          isVisible && showBanner ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
      <div className="mx-auto max-w-4xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_-4px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {!showSettings ? (
          /* ── Banner View ── */
          <div className="p-5 sm:p-6 md:p-6 relative">
            {/* Close button = Nur Essentiell */}
            <button
              type="button"
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

                {/* Current consent status (shown on re-open via Footer link) */}
                {consent && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-4 text-xs text-blue-700">
                    <strong>Aktueller Status:</strong>{" "}
                    {consent.analytics && consent.marketing
                      ? "Alle Cookies akzeptiert"
                      : consent.analytics
                        ? "Analyse erlaubt, Marketing abgelehnt"
                        : consent.marketing
                          ? "Marketing erlaubt, Analyse abgelehnt"
                          : "Nur essentielle Cookies"
                    }
                    {" "}(seit {new Date(consent.timestamp).toLocaleString("de-DE")})
                  </div>
                )}

                {/* Action Buttons DSGVO: "Ablehnen" muss gleichwertig zu "Akzeptieren" sein */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm min-h-[44px] flex-1"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    type="button"
                    onClick={handleDeclineAll}
                    className="px-5 py-2.5 bg-[var(--color-charcoal-800)] hover:bg-[var(--color-charcoal-700)] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] shadow-sm min-h-[44px] flex-1"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    type="button"
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
                ([key, info]) => {
                  const relatedCookies = COOKIE_INVENTORY.filter(c => c.category === key);
                  const isExpanded = expandedCategory === key;
                  const isChecked = key === "essential" ? true : key === "analytics" ? analyticsChecked : marketingChecked;

                  return (
                    <div 
                      key={key} 
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        info.required
                          ? "border-green-200"
                          : isChecked
                            ? "border-[var(--color-red-500)] shadow-sm"
                            : "border-[var(--border-subtle)] hover:border-[var(--border-default)]"
                      }`}
                    >
                      <label
                        className={`flex items-start gap-4 p-3.5 sm:p-4 cursor-pointer transition-colors duration-200 ${
                          info.required
                            ? "bg-green-50/40"
                            : isChecked
                              ? "bg-[var(--color-red-500)]/5"
                              : "hover:bg-gray-50/50"
                        }`}
                      >
                        <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            disabled={info.required}
                            onChange={(e) => {
                              if (key === "analytics") setAnalyticsChecked(e.target.checked);
                              if (key === "marketing") setMarketingChecked(e.target.checked);
                            }}
                            className="peer sr-only"
                            aria-label={`${info.label} aktivieren`}
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            isChecked 
                              ? info.required
                                ? "bg-green-500 border-green-500"
                                : "bg-[var(--color-red-500)] border-[var(--color-red-500)] text-white"
                              : "bg-white border-gray-300 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[var(--color-red-500)] peer-active:border-[var(--color-red-500)]"
                          }`}>
                            {isChecked && (
                              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <span className="text-sm font-semibold flex items-center gap-2 flex-wrap mb-1">
                            <span className={info.required ? "text-green-800" : isChecked ? "text-[color:var(--text-primary)]" : "text-[color:var(--text-secondary)]"}>
                              {info.label}
                            </span>
                            {info.required && (
                              <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Immer aktiv
                              </span>
                            )}
                            {isChecked && !info.required && (
                              <span className="text-[10px] font-bold text-[var(--color-red-600)] bg-[var(--color-red-500)]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Aktiviert
                              </span>
                            )}
                          </span>
                          <p className={`text-xs leading-relaxed ${isChecked ? "text-[color:var(--text-secondary)]" : "text-[color:var(--text-tertiary)]"}`}>
                            {info.description}
                          </p>
                        </div>
                      </label>
                      
                      {/* Cookie Detail Expansion */}
                      {relatedCookies.length > 0 && (
                        <>
                          <button
                            type="button"
                            onClick={() => setExpandedCategory(isExpanded ? null : key)}
                            className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[color:var(--text-tertiary)] hover:text-[color:var(--text-secondary)] hover:bg-gray-50 transition-colors border-t border-gray-100"
                          >
                            <span>{relatedCookies.length} Cookie(s) in dieser Kategorie</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                          {isExpanded && (
                            <div className="px-3.5 pb-3 space-y-2 bg-gray-50/40 border-t border-gray-100">
                              {relatedCookies.map(cookie => (
                                <div key={cookie.name} className="bg-white border border-gray-100 rounded-lg p-2.5 text-xs mt-2">
                                  <div className="flex items-center justify-between mb-0.5">
                                    <code className="font-mono font-bold text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">{cookie.name}</code>
                                    <span className="text-gray-400">{cookie.duration}</span>
                                  </div>
                                  <p className="text-gray-500 mt-0.5">{cookie.purpose}</p>
                                  <p className="text-gray-400 mt-0.5">Anbieter: {cookie.provider}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            {/* Settings Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleSaveSettings}
                className="px-5 py-2.5 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm min-h-[44px] flex-1"
              >
                Auswahl speichern
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2.5 bg-[var(--color-charcoal-800)] hover:bg-[var(--color-charcoal-700)] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm min-h-[44px] flex-1"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={handleDeclineAll}
                className="px-5 py-2.5 bg-white border-2 border-[var(--border-subtle)] hover:border-[var(--text-tertiary)] hover:bg-gray-50 text-[color:var(--text-primary)] text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px] flex-1"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
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

      {/* ── Floating Consent Badge (DSGVO "Einfacher Widerruf") ── */}
      {!showBanner && consent && (
        <button
          type="button"
          onClick={() => {
            setShowBanner(true);
            setShowSettings(true);
            setAnalyticsChecked(consent?.analytics ?? false);
            setMarketingChecked(consent?.marketing ?? false);
          }}
          className="fixed bottom-4 left-4 z-[9998] w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[var(--border-subtle)] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] text-[var(--color-charcoal-700)] group"
          aria-label="Cookie-Einstellungen öffnen"
          title="Cookie-Einstellungen verwalten"
        >
          <div className="relative">
            <Shield className="w-5 h-5 group-hover:text-[var(--color-red-500)] transition-colors" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white shadow-sm" />
          </div>
        </button>
      )}
    </>
  );
}
