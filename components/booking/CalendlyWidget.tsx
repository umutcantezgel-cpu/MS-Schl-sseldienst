"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  /** The Calendly slug (e.g., 'your-name/15min') */
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  return (
    <div className="w-full relative min-h-[600px] sm:min-h-[700px] h-full" data-testid="calendly-widget">
      {/* 
        The InlineWidget automatically handles resizing and script parsing via react-calendly.
        We pass query params to adjust the theming to our site's dark/light modes and disable their generic GDPR banner.
      */}
      <InlineWidget
        url={url}
        styles={{
          height: "100%",
          width: "100%",
          minHeight: "600px",
        }}
        pageSettings={{
          backgroundColor: 'ffffff', // from --surface-primary
          hideEventTypeDetails: true,
          hideGdprBanner: true, // We handle GDPR ourselves
          primaryColor: 'dc2626', // Tailwinds red-600 / our main theme
          textColor: '0f172a', // text-slate-900 / our text-primary
        }}
        prefill={{
          // We could integrate prefill with a global context or search params later
        }}
      />
    </div>
  );
}
