/**
 * ══════════════════════════════════════════════════════════════
 * Phase 19 — Enhanced Health Check Endpoint
 * ══════════════════════════════════════════════════════════════
 * Returns system health with dependency checks and status levels.
 * NO external SaaS dependencies.
 * ══════════════════════════════════════════════════════════════
 */

import { NextResponse } from "next/server";

interface DepCheck {
  name: string;
  status: "ok" | "degraded" | "down";
  latency?: number;
  message?: string;
}

async function checkFormspree(): Promise<DepCheck> {
  try {
    const start = Date.now();
    const res = await fetch("https://formspree.io/", {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    });
    return {
      name: "formspree",
      status: res.ok ? "ok" : "degraded",
      latency: Date.now() - start,
    };
  } catch {
    return { name: "formspree", status: "degraded", message: "Unreachable" };
  }
}

function checkEnvVars(): DepCheck {
  const required = ["NODE_ENV"];
  const optional = ["NEXT_PUBLIC_APP_VERSION", "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"];
  const missingRequired = required.filter((v) => !process.env[v]);
  const missingOptional = optional.filter((v) => !process.env[v]);

  if (missingRequired.length > 0) {
    return {
      name: "env_vars",
      status: "down",
      message: `Missing required: ${missingRequired.join(", ")}`,
    };
  }
  if (missingOptional.length > 0) {
    return {
      name: "env_vars",
      status: "ok",
      message: `Missing optional: ${missingOptional.join(", ")}`,
    };
  }
  return { name: "env_vars", status: "ok" };
}

export async function GET() {
  const deps: DepCheck[] = [];

  // Check env vars (sync)
  deps.push(checkEnvVars());

  // Check Formspree (async)
  deps.push(await checkFormspree());

  // Determine overall status
  const hasDown = deps.some((d) => d.status === "down");
  const hasDegraded = deps.some((d) => d.status === "degraded");
  const overallStatus = hasDown ? "down" : hasDegraded ? "degraded" : "ok";

  return NextResponse.json(
    {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0",
      environment: process.env.NODE_ENV,
      commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local",
      dependencies: deps,
    },
    {
      status: overallStatus === "down" ? 503 : 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
