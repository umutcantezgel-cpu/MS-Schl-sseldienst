"use client";

import { X, Phone } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { trackEvent } from "@/lib/analytics";

/**
 * Phase 5 — Dezenter Exit-Intent-Banner (Desktop-only)
 * Erscheint am oberen Bildschirmrand wenn Maus den Viewport nach oben verlässt.
 * NICHT manipulativ, KEIN Popup, KEIN Overlay. Sofort schließbar.
 */
export default function ExitIntentBanner() {
  const { triggered, dismiss } = useExitIntent({ once: true, delay: 5000 });

  if (!triggered) return null;

  // Track show event
  if (typeof window !== "undefined") {
    trackEvent("exit_intent_shown");
  }

  return (
    <div
      role="banner"
      aria-label="Kontaktangebot"
      className="fixed top-0 left-0 right-0 z-[9999] animate-in slide-in-from-top duration-300 bg-[var(--color-charcoal-900)] text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 max-w-5xl">
        <p className="text-[14px] sm:text-[15px] font-medium">
          Haben Sie Fragen? Wir beraten Sie gerne persönlich.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+4964418056544"
            onClick={() => trackEvent("exit_intent_cta_click")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-[13px] font-bold rounded-lg transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">06441 8056544</span>
            <span className="sm:hidden">Anrufen</span>
          </a>

          <button
            onClick={() => {
              trackEvent("exit_intent_dismissed");
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
