"use client";

import { useState, useEffect } from "react";
import { PhoneCall, ShieldAlert } from "lucide-react";

// Statische Firmennummer für den Blog CTA
const PHONE_DISPLAY = "06441 8056279";
const PHONE_LINK = "+4964418056279";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeigen ab 400px Scroll, ausblenden kurz vor dem Footer
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="bg-[var(--surface-elevated)] border-t border-[var(--border-subtle)] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] py-3 px-4 lg:py-4">
        <div className="container mx-auto px-[var(--section-px)] max-w-4xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--color-red-50)] items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[var(--color-red-500)]" />
            </div>
            <div>
              <p className="font-bold text-[color:var(--text-primary)] text-sm sm:text-base leading-tight">
                Notfall? Tür zugefallen?
              </p>
              <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] hidden sm:block">
                In Wetzlar & Lahn-Dill-Kreis in ~20 Min. vor Ort
              </p>
            </div>
          </div>
          <a
            href={`tel:${PHONE_LINK}`}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--color-red-500)] text-white rounded-[var(--radius-md)] hover:bg-[var(--color-red-600)] transition-colors shadow-lg active:scale-95"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-sm sm:text-base whitespace-nowrap">Jetzt anrufen</span>
          </a>
        </div>
      </div>
    </div>
  );
}
