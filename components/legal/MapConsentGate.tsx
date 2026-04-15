"use client";

import { useState, useEffect } from "react";
import { MapPin, Settings2 } from "lucide-react";
import { useConsent } from "@/hooks/useConsent";

interface MapConsentGateProps {
  src: string;
  title: string;
  className?: string;
}

export function MapConsentGate({ src, title, className = "" }: MapConsentGateProps) {
  const { consent, updateConsent, openSettings } = useConsent();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleAccept = () => {
    updateConsent({ marketing: true, analytics: consent?.analytics ?? false });
  };

  if (!isHydrated) {
    return (
      <div className={`w-full bg-gray-100 rounded-xl animate-pulse ${className}`} />
    );
  }

  if (consent?.marketing) {
    return (
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title={title}
        className={className}
      />
    );
  }

  return (
    <div className={`relative w-full flex flex-col items-center justify-center bg-gray-100 rounded-xl text-center px-4 py-8 overflow-hidden ${className}`}>
      <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
          <MapPin className="w-7 h-7 text-[var(--color-red-500)]" />
        </div>
        
        <div className="font-semibold text-gray-800 text-lg mb-2">
          Interaktive Karte blockiert
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Um Google Maps anzuzeigen, benötigen wir Ihre Zustimmung (Externe Medien). Dabei werden Marketing-Cookies gesetzt und Daten an Google LLC (USA) übertragen.
        </p>
        
        <div className="flex flex-col gap-3 w-full">
          <button
            type="button"
            onClick={handleAccept}
            className="w-full h-11 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold rounded-lg transition-all shadow-sm"
          >
            Zustimmen & Laden
          </button>
          
          <button
            type="button"
            onClick={openSettings}
            className="w-full h-11 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors rounded-lg"
          >
            <Settings2 className="w-4 h-4" />
            Cookie-Einstellungen
          </button>
        </div>
      </div>
    </div>
  );
}

