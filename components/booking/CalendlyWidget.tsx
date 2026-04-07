"use client";

import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { AlertCircle } from "lucide-react";

interface CalendlyWidgetProps {
  /** The Calendly slug (e.g., 'your-name/15min') */
  url?: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  // Phase 3.3 Event Listener for Analytics integration / Conversion tracking
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("Calendly: Profile page viewed"),
    onDateAndTimeSelected: () => console.log("Calendly: Date and time selected"),
    onEventScheduled: (e) => {
      console.log("Calendly: Event scheduled", e.data.payload);
      // Here GTM dataLayer push would happen
    },
  });

  // Phase 3.4 Missing ENV variable check
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
      className="w-full relative min-h-[600px] sm:min-h-[700px] h-full" 
      data-testid="calendly-widget"
      style={{
        // Phase 3.2 Mobile Iframe Scroll-Bug Prävention
        overflow: "hidden", 
        WebkitOverflowScrolling: "touch"
      }}
    >
      <InlineWidget
        url={url}
        styles={{
          height: "100%",
          width: "100%",
          minHeight: "600px",
          overflow: "hidden", // Further scroll bug hardening
        }}
        pageSettings={{
          backgroundColor: 'ffffff', // from --surface-primary
          hideEventTypeDetails: true,
          hideGdprBanner: true, // We handle GDPR ourselves
          primaryColor: 'dc2626', // Tailwinds red-600 / our main theme
          textColor: '0f172a', // text-slate-900 / our text-primary
        }}
        prefill={{
          // Can connect searchparams later
        }}
      />
    </div>
  );
}
