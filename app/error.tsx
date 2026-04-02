"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Phase 19: Central error capture (LOCAL-ONLY, no Sentry)
    import("@/lib/monitoring/error-logger").then(({ errorLogger }) => {
      errorLogger.capture(error, {
        page: typeof window !== "undefined" ? window.location.pathname : "/",
        category: "client",
      });
    });
  }, [error]);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "540px",
        margin: "6rem auto 4rem",
        textAlign: "center",
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Brand Icon */}
      <div
        style={{
          display: "inline-flex",
          padding: "1rem",
          backgroundColor: "#FEF2F2",
          borderRadius: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          margin: "0 0 0.75rem 0",
          color: "#18181B",
        }}
      >
        Etwas ist schiefgelaufen
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "#52525B",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Wir arbeiten daran. In der Zwischenzeit können Sie:
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* Retry */}
        <button
          onClick={() => reset()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: "#DC2626",
            color: "#FFFFFF",
            border: "none",
            padding: "0.875rem 1.5rem",
            borderRadius: "0.75rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
            boxSizing: "border-box" as const,
          }}
        >
          ↻ Erneut versuchen
        </button>

        {/* Home Link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: "transparent",
            color: "#52525B",
            textDecoration: "none",
            border: "1px solid #D1D1D6",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            fontSize: "0.9375rem",
            width: "100%",
            boxSizing: "border-box" as const,
          }}
        >
          Zur Startseite
        </Link>

        {/* Phone CTA */}
        <a
          href="tel:+4964418056279"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: "transparent",
            color: "#DC2626",
            textDecoration: "none",
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          06441 8056279 anrufen
        </a>
      </div>

      <p
        style={{
          fontSize: "0.8125rem",
          color: "#71717A",
          marginTop: "1.5rem",
        }}
      >
        Wenn das Problem bestehen bleibt, erreichen Sie uns unter{" "}
        <a href="tel:+4964418056279" style={{ color: "#DC2626" }}>
          06441 8056279
        </a>{" "}
        oder{" "}
        <a href="tel:+491782471037" style={{ color: "#DC2626" }}>
          0178 2471037
        </a>
        .
      </p>

      {/* Dev Stack Trace */}
      {process.env.NODE_ENV === "development" && (
        <details
          style={{
            marginTop: "2rem",
            textAlign: "left",
            border: "1px solid #FEE2E2",
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.75rem",
            color: "#991B1B",
            backgroundColor: "#FEF2F2",
          }}
        >
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>
            Dev: Stack Trace
          </summary>
          <pre
            style={{
              marginTop: "0.5rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontFamily: "monospace",
            }}
          >
            {error.message}
            {"\n\n"}
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}
