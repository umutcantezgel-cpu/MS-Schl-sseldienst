/**
 * ══════════════════════════════════════════════════════════════
 * Phase 19 und Central Error Logger (LOCAL-ONLY, NO Sentry)
 * ══════════════════════════════════════════════════════════════
 * Singleton error capture with PII filtering, fingerprinting,
 * and batched sending to /api/monitoring/errors.
 * ══════════════════════════════════════════════════════════════
 */

// ─── Types ───
export type ErrorCategory = "client" | "server" | "network" | "validation" | "unknown";
export type ErrorSeverity = "error" | "warning" | "info";

export interface ErrorReport {
  id: string;
  timestamp: string;
  level: ErrorSeverity;
  category: ErrorCategory;
  message: string;
  stack: string;
  page: string;
  viewport: string;
  userAgent: string;
  fingerprint: string;
}

// ─── PII Filter ───
const PII_PATTERNS = [
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,     // Email
  /\b(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}\b/g, // Phone
  /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g,               // Card numbers
];

function stripPII(input: string): string {
  let cleaned = input;
  for (const pattern of PII_PATTERNS) {
    cleaned = cleaned.replace(pattern, "[REDACTED]");
  }
  return cleaned;
}

// ─── Fingerprint ───
function fingerprint(message: string, stack: string): string {
  const key = `${message}::${stack.slice(0, 100)}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `err_${Math.abs(hash).toString(36)}`;
}

// ─── Categorize ───
function categorize(error: unknown): ErrorCategory {
  if (error instanceof TypeError) return "client";
  if (error instanceof SyntaxError) return "validation";
  if (error instanceof Error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("fetch") || msg.includes("network") || msg.includes("cors")) return "network";
    if (msg.includes("server") || msg.includes("500") || msg.includes("api")) return "server";
    if (msg.includes("valid") || msg.includes("required") || msg.includes("schema")) return "validation";
  }
  return "unknown";
}

// ─── Logger ───
class ErrorLoggerClass {
  private buffer: ErrorReport[] = [];
  private flushTimer: ReturnType<typeof setInterval> | null = null;
  private seen = new Map<string, number>();

  /** Capture an error with context */
  capture(
    error: unknown,
    context: { page?: string; category?: ErrorCategory; level?: ErrorSeverity } = {}
  ): void {
    const err = error instanceof Error ? error : new Error(String(error));
    const cleanMessage = stripPII(err.message);
    const cleanStack = stripPII((err.stack || "").slice(0, 500));
    const fp = fingerprint(cleanMessage, cleanStack);

    // Dedup: skip if seen in last 60s
    const lastSeen = this.seen.get(fp);
    if (lastSeen && Date.now() - lastSeen < 60_000) return;
    this.seen.set(fp, Date.now());

    // Always console.error
    console.error(`[ErrorLogger:${context.level || "error"}]`, cleanMessage, {
      category: context.category || categorize(error),
      page: context.page || (typeof window !== "undefined" ? window.location.pathname : "server"),
    });

    // Only buffer on client
    if (typeof window === "undefined") return;

    const report: ErrorReport = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
      level: context.level || "error",
      category: context.category || categorize(error),
      message: cleanMessage,
      stack: cleanStack,
      page: context.page || window.location.pathname,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      userAgent: navigator.userAgent.slice(0, 200),
      fingerprint: fp,
    };

    this.buffer.push(report);
    this.ensureFlush();
  }

  /** Warning shorthand */
  warn(message: string, context: { page?: string } = {}): void {
    this.capture(new Error(message), { ...context, level: "warning" });
  }

  /** Info shorthand */
  info(message: string, context: { page?: string } = {}): void {
    this.capture(new Error(message), { ...context, level: "info" });
  }

  /** Start flush timer if not running */
  private ensureFlush(): void {
    if (this.flushTimer) return;
    this.flushTimer = setInterval(() => this.flush(), 30_000);
    // Also flush on page unload
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", () => this.flush(), { once: true });
    }
  }

  /** Send buffered errors to API */
  private flush(): void {
    if (this.buffer.length === 0) return;

    const batch = this.buffer.splice(0);

    // Use sendBeacon for reliability on unload, fetch otherwise
    const payload = JSON.stringify({ errors: batch });

    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/monitoring/errors", payload);
    } else {
      fetch("/api/monitoring/errors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {
        // Silent fail und we don't want error logging to cause errors
      });
    }

    // Cleanup old fingerprints
    const now = Date.now();
    for (const [key, time] of this.seen) {
      if (now - time > 120_000) this.seen.delete(key);
    }
  }
}

/** Singleton ErrorLogger instance */
export const errorLogger = new ErrorLoggerClass();
