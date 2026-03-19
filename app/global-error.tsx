"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif", color: "#18181B", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            <div style={{ display: "inline-flex", padding: "1rem", backgroundColor: "#FEF2F2", borderRadius: "1rem", marginBottom: "1.5rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 800, margin: "0 0 1rem 0" }}>Wartungsarbeiten</h1>
            <p style={{ fontSize: "1.125rem", color: "#52525B", marginBottom: "2rem", lineHeight: 1.5 }}>
              Ein temporärer technischer Fehler ist aufgetreten. Unser Notdienst ist aber <strong>uneingeschränkt für Sie erreichbar!</strong>
            </p>

            <a
              href="tel:+4964418056544"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "#DC2626",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "1rem 2rem",
                borderRadius: "0.75rem",
                fontWeight: "bold",
                fontSize: "1.25rem",
                width: "100%",
                boxSizing: "border-box"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Jetzt anrufen: 06441-8056544
            </a>
            <p style={{ fontSize: "0.8125rem", color: "#71717A", marginTop: "0.5rem" }}>Festpreis — keine versteckten Kosten</p>

            <a
              href="tel:+491782471037"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "#52525B",
                textDecoration: "none",
                padding: "1rem",
                marginTop: "0.5rem",
                fontWeight: "normal",
                fontSize: "1rem"
              }}
            >
              Mobilfunk: 0178-2471037
            </a>

            <div style={{ marginTop: "3rem" }}>
              <button
                onClick={() => reset()}
                style={{
                  background: "none",
                  border: "1px solid #D1D1D6",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  color: "#52525B",
                  fontSize: "0.875rem"
                }}
                onFocus={(e) => { e.currentTarget.style.outline = "2px solid #B85070"; e.currentTarget.style.outlineOffset = "2px"; }}
                onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
              >
                Seite neu laden
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
