"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

interface MapConsentGateProps {
  src: string;
  title: string;
  className?: string;
}

export function MapConsentGate({ src, title, className = "" }: MapConsentGateProps) {
  const [consented, setConsented] = useState(false);

  if (consented) {
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
    <button
      type="button"
      onClick={() => setConsented(true)}
      className={`w-full h-full flex flex-col items-center justify-center gap-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors text-center px-6 ${className}`}
      aria-label="Google Maps laden"
    >
      <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
        <MapPin className="w-7 h-7 text-[var(--color-red-500)]" />
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-base">
          Karte anzeigen
        </p>
        <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto">
          Mit Klick auf diesen Bereich wird Google Maps geladen. Dabei werden Daten an Google LLC (USA) übertragen. Mehr dazu in unserer{" "}
          <span className="underline">Datenschutzerklärung</span>.
        </p>
      </div>
      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-red-500)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--color-red-600)] transition-colors shadow-sm">
        <MapPin className="w-4 h-4" />
        Google Maps laden
      </span>
    </button>
  );
}
