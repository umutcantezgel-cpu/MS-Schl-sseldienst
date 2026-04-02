"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { useConversionDistance } from "@/hooks/useConversionDistance";

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { needsStickyCta } = useConversionDistance();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      // Show if scrolled more than 50% AND we need a sticky CTA (no CTAs nearby)
      if (scrolled > 50 && needsStickyCta) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [needsStickyCta]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-[var(--space-3)] sm:p-[var(--space-4)] pointer-events-none fade-in-up hidden lg:block">
      <div className="mx-auto max-w-md bg-white/95 backdrop-blur-xl border border-[var(--border-subtle)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-3 rounded-2xl sm:rounded-3xl pointer-events-auto flex items-center justify-between gap-3 relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-white border border-slate-200 w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 shadow-sm transition-colors"
          aria-label="Schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex flex-col ml-2">
          <span className="text-[14px] font-bold text-[color:var(--text-primary)] leading-tight">Soforthilfe nötig?</span>
          <span className="text-[11px] font-medium text-[color:var(--text-tertiary)] flex items-center gap-1 mt-0.5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-success)]" />
            </span>
            Techniker verfügbar
          </span>
        </div>

        <a 
          href="tel:+4964418056279"
          className="bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Phone className="w-4 h-4 animate-ring" />
          <span className="font-bold text-[14px] whitespace-nowrap">Jetzt anrufen</span>
        </a>

      </div>
    </div>
  );
}
