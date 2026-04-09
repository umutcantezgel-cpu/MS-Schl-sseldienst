"use client";

import { AlertCircle } from "lucide-react";

const CALENDLY_DEFAULT_URL = "https://calendly.com/schluesseldienst-wz/sicherheitsberatung?timezone=Europe/Berlin";

interface CalendlyWidgetProps {
  /** The full Calendly URL. Falls back to the default booking URL if not provided. */
  url?: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  // Use the provided URL or fall back to the hardcoded default
  const calendlyUrl = url && url.length > 0 ? url : CALENDLY_DEFAULT_URL;

  return (
    <div
      className="w-full relative h-full"
      data-testid="calendly-widget"
      style={{ minHeight: "700px" }}
    >
      <iframe
        src={calendlyUrl}
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
