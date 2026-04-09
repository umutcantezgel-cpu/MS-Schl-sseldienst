"use client";

import { useEffect, useState } from "react";
import { Phone, X, ShieldCheck, Check } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[90] pointer-events-none hidden lg:block"
        >
          <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)]">
            <div className="mx-auto max-w-7xl px-4 lg:px-8 py-2.5 flex items-center justify-between gap-4">
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Festpreisgarantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[var(--color-red-500)]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-semibold text-emerald-600">Monteur verfügbar</span>
                </div>
              </div>

              {/* CTA + Close */}
              <div className="flex items-center gap-2">
                <a
                  href="tel:+4964418056279"
                  className="group flex items-center gap-2.5 px-7 h-[44px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold text-base rounded-full shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                  06441 - 8056279
                </a>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
