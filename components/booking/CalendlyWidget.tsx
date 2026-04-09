"use client";

import { AlertCircle } from "lucide-react";

interface CalendlyWidgetProps {
  /** The full Calendly URL (e.g., 'https://calendly.com/user/event?timezone=Europe/Berlin') */
  url?: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  // Missing ENV variable check
  if (!url || url === "") {
    return (
      <div className="w-full relative min-h-[600px] sm:min-h-[700px] h-full flex flex-col items-center justify-center text-center p-8 bg-[var(--surface-secondary)] rounded-2xl border border-[var(--border-color)]">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50/50">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-[color:var(--text-primary)]">Buchungssystem aktuell gewartet</h3>
        <p className="text-[color:var(--text-secondary)]">
          Unser Online-Terminkalender ist derzeit nicht erreichbar. Bitte rufen Sie uns direkt an, um einen Termin zu vereinbaren.
        </p>
      </div>
    );
  }

  return (
    <div
      className="w-full relative h-full"
      data-testid="calendly-widget"
      style={{ minHeight: "700px" }}
    >
      <iframe
        src={url}
        title="Terminbuchung — Schlüssel Schmiede Wetzlar"
        width="100%"
        height="100%"
        style={{
          border: "none",
          minHeight: "700px",
          borderRadius: "16px",
        }}
        allow="payment"
        loading="lazy"
      />
    </div>
  );
}
