"use client";

import { X, Phone, ShieldCheck } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

/**
 * Phase Supreme — Exit-Intent-Banner (Desktop-only) mit A/B Copy-Rotation
 * 3 Varianten rotieren basierend auf Wochentag (deterministisch, hydration-safe).
 * NICHT manipulativ, KEIN Popup, KEIN Overlay. Sofort schließbar.
 */

const COPY_VARIANTS = [
  { headline: "Haben Sie Fragen? Wir beraten Sie gerne persönlich.", badge: "5.0 ★ Google" },
  { headline: "Ausgesperrt? In 20-30 Min. ist ein Techniker bei Ihnen.", badge: "24/7 Notdienst" },
  { headline: "Keine versteckten Kosten — Festpreis ab 89€ am Telefon.", badge: "Festpreis-Garantie" },
] as const;

export default function ExitIntentBanner() {
  const { triggered, dismiss } = useExitIntent({ once: true, delay: 5000 });
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    // Deterministic rotation based on day-of-week (avoids hydration mismatch)
    setVariantIndex(new Date().getDay() % COPY_VARIANTS.length);
  }, []);

  if (!triggered) return null;

  const variant = COPY_VARIANTS[variantIndex];

  // Track show event with variant
  if (typeof window !== "undefined") {
    trackEvent("exit_intent_shown", { variant: variantIndex });
  }

  return (
    <div
      role="banner"
      aria-label="Kontaktangebot"
      className="fixed top-0 left-0 right-0 z-[9999] animate-in slide-in-from-top duration-300 bg-[var(--color-charcoal-900)] text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 max-w-5xl">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[12px] font-bold tracking-wide shrink-0">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-success)]" />
            <span>{variant.badge}</span>
          </div>
          <p className="text-[14px] sm:text-[15px] font-medium">
            {variant.headline}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+4964418056544"
            onClick={() => trackEvent("exit_intent_cta_click", { variant: variantIndex })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-[13px] font-bold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">06441 8056544</span>
            <span className="sm:hidden">Anrufen</span>
          </a>

          <button
            onClick={() => {
              trackEvent("exit_intent_dismissed", { variant: variantIndex });
              dismiss();
            }}
            className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

