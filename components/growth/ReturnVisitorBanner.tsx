"use client";

import { X, ArrowRight } from "lucide-react";
import { useVisitorType } from "@/hooks/useVisitorType";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Phase 18 — Return Visitor Re-Engagement Banner
 * Shows a welcome-back banner for returning visitors.
 * Displays once per session via sessionStorage.
 */
export default function ReturnVisitorBanner() {
  const visitorType = useVisitorType();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visitorType !== "returning") return;

    try {
      if (sessionStorage.getItem("return_banner_shown") === "1") return;
    } catch {
      return;
    }

    // Slight delay for smooth appearance
    const timer = setTimeout(() => {
      setVisible(true);
      trackEvent("exit_intent_shown" as Parameters<typeof trackEvent>[0], {
        label: "return_visitor_banner",
      });
      try {
        sessionStorage.setItem("return_banner_shown", "1");
      } catch {
        // Private mode
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [visitorType]);

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Willkommen zurück"
      className="fixed top-0 left-0 right-0 z-[9998] animate-in slide-in-from-top duration-300 bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)] text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 max-w-5xl">
        <p className="text-[14px] sm:text-[15px] font-medium">
          👋 Schön, dass Sie wieder da sind! Haben Sie Fragen zu unseren Leistungen?
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/kontakt"
            onClick={() =>
              trackEvent("hero_cta_click", { label: "return_visitor_banner_cta" })
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[var(--color-red-600)] text-[13px] font-bold rounded-lg hover:bg-white/90 transition-colors"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={() => setVisible(false)}
            className="p-1.5 rounded-md hover:bg-white/20 transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
