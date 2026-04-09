"use client";

import { useConsent } from "@/hooks/useConsent";
import { Lock, Settings2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

interface CalendlyConsentGateProps {
  children: React.ReactNode;
}

export default function CalendlyConsentGate({ children }: CalendlyConsentGateProps) {
  const { consent, updateConsent, openSettings } = useConsent();

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const handleAccept = () => {
    updateConsent({ marketing: true, analytics: consent?.analytics ?? false });
  };

  if (!isHydrated) {
    // Return a skeleton structure matching the iframe size while hydrating
    return (
      <div className="w-full h-[600px] bg-[var(--surface-secondary)] rounded-2xl border border-[var(--border-color)] animate-pulse shadow-[var(--elevation-1)]" />
    );
  }

  // If the user has accepted marketing cookies, render the Calendly component
  if (consent?.marketing) {
    return (
      <AnimatePresence mode="wait">
        <m.div 
          key="calendly-loaded"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full min-h-[600px]"
        >
          {children}
        </m.div>
      </AnimatePresence>
    );
  }

  // Two-Click Solution Fallback overlay
  return (
    <div className="relative w-full h-[600px] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border-color)] overflow-hidden shadow-[var(--elevation-1)] flex items-center justify-center p-6 text-center">
      {/* Blurred background abstraction of the calendar */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <m.div 
        className="relative z-10 max-w-md mx-auto flex flex-col items-center bg-[var(--surface-primary)] p-8 rounded-2xl shadow-[var(--elevation-3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-blue-50/50">
          <Lock className="w-7 h-7" />
        </div>
        
        <div className="text-xl font-bold text-[color:var(--text-primary)] mb-3">
          Terminbuchung blockiert
        </div>
        
        <p className="text-base text-[color:var(--text-secondary)] leading-relaxed mb-8">
          Um unseren digitalen Terminkalender anzuzeigen, benötigen wir Ihre Zustimmung. Wir nutzen <strong>Calendly</strong>, einen externen Dienstleister. Beim Laden werden Marketing-Cookies gesetzt und Verbindungen zu Fremdservern aufgebaut.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={handleAccept}
            className="w-full bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold h-12 rounded-[var(--radius-8)] transition-all shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[1px]"
          >
            Zustimmen & Kalender laden
          </button>
          
          <button
            onClick={openSettings}
            className="w-full h-12 rounded-[var(--radius-8)] flex items-center justify-center gap-2 text-sm font-medium text-[color:var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[color:var(--text-primary)] transition-colors border border-transparent hover:border-[var(--border-color)]"
          >
            <Settings2 className="w-4 h-4" />
            Cookie-Einstellungen anpassen
          </button>
        </div>
      </m.div>
    </div>
  );
}
