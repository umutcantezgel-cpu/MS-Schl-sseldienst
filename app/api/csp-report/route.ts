/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 — CSP Violation Report Endpoint
 * ══════════════════════════════════════════════════════════════
 * Receives Content-Security-Policy violation reports and logs
 * them locally. NO external SaaS (no Sentry, no Report-URI.com).
 * ══════════════════════════════════════════════════════════════
 */

import { NextRequest, NextResponse } from "next/server";

interface CSPViolationReport {
  "csp-report"?: {
    "document-uri"?: string;
    "violated-directive"?: string;
    "blocked-uri"?: string;
    "original-policy"?: string;
    "disposition"?: string;
    "status-code"?: number;
  };
}

export async function POST(request: NextRequest) {
  // Validate origin
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    "https://schluesseldienst-wetzlar.de",
    "https://www.schluesseldienst-wetzlar.de",
    "http://localhost:3000",
  ];

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = (await request.json()) as CSPViolationReport;
    const report = body["csp-report"];

    if (report) {
      // Log locally — no external service
      console.error("[CSP-Violation]", {
        documentURI: report["document-uri"],
        violatedDirective: report["violated-directive"],
        blockedURI: report["blocked-uri"],
        disposition: report["disposition"],
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ received: true }, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Invalid report" }, { status: 400 });
  }
}
