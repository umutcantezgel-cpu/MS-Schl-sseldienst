/**
 * ══════════════════════════════════════════════════════════════
 * Phase 19 — Error Monitoring API Route (LOCAL-ONLY)
 * ══════════════════════════════════════════════════════════════
 * POST: Receives batched error reports from ErrorLogger
 * GET (dev only): Returns recent errors for dashboard
 * NO external SaaS — logs to stdout (Vercel captures natively)
 * ══════════════════════════════════════════════════════════════
 */

import { NextRequest, NextResponse } from "next/server";

// ─── In-Memory Store (resets on cold start, by design) ───
interface StoredError {
  id: string;
  timestamp: string;
  level: string;
  category: string;
  message: string;
  stack: string;
  page: string;
  fingerprint: string;
  count: number;
  lastSeen: string;
}

const errorStore: StoredError[] = [];
const MAX_STORE = 200;
const seenFingerprints = new Map<string, number>(); // fingerprint → index in store
let requestCount = 0;
let requestWindowStart = Date.now();

// ─── Rate Limiter ───
function checkRateLimit(): boolean {
  const now = Date.now();
  if (now - requestWindowStart > 60_000) {
    requestCount = 0;
    requestWindowStart = now;
  }
  requestCount++;
  return requestCount <= 100;
}

// ─── POST: Receive Error Reports ───
export async function POST(request: NextRequest) {
  if (!checkRateLimit()) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const errors = Array.isArray(body.errors) ? body.errors : [body];

    for (const err of errors) {
      if (!err.message || !err.timestamp) continue;

      // Check timestamp freshness (reject errors older than 5 min)
      const errTime = new Date(err.timestamp).getTime();
      if (Date.now() - errTime > 5 * 60 * 1000) continue;

      const fp = err.fingerprint || err.message.slice(0, 50);
      const existingIdx = seenFingerprints.get(fp);

      if (existingIdx !== undefined && errorStore[existingIdx]) {
        // Deduplicate: increment count
        errorStore[existingIdx].count++;
        errorStore[existingIdx].lastSeen = err.timestamp;
      } else {
        // New error
        const stored: StoredError = {
          id: err.id || `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
          timestamp: err.timestamp,
          level: err.level || "error",
          category: err.category || "unknown",
          message: (err.message || "").slice(0, 500),
          stack: (err.stack || "").slice(0, 500),
          page: (err.page || "/").slice(0, 200),
          fingerprint: fp,
          count: 1,
          lastSeen: err.timestamp,
        };

        const idx = errorStore.push(stored) - 1;
        seenFingerprints.set(fp, idx);

        // Evict old entries
        if (errorStore.length > MAX_STORE) {
          const removed = errorStore.shift();
          if (removed) seenFingerprints.delete(removed.fingerprint);
          // Re-index
          seenFingerprints.clear();
          errorStore.forEach((e, i) => seenFingerprints.set(e.fingerprint, i));
        }
      }

      // Structured logging → stdout (Vercel captures natively)
      console.error(JSON.stringify({
        type: "error_report",
        level: err.level || "error",
        category: err.category || "unknown",
        message: (err.message || "").slice(0, 200),
        page: err.page,
        timestamp: err.timestamp,
      }));
    }

    return NextResponse.json({ received: true, count: errors.length });
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}

// ─── GET: Dev-Only Error List ───
export async function GET(request: NextRequest) {
  // Only in development
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get("limit") || "50"), 100);
  const level = url.searchParams.get("level"); // filter by severity

  let filtered = [...errorStore];
  if (level) {
    filtered = filtered.filter((e) => e.level === level);
  }

  // Sort by lastSeen descending
  filtered.sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime());

  return NextResponse.json({
    errors: filtered.slice(0, limit),
    total: errorStore.length,
    timestamp: new Date().toISOString(),
  });
}
