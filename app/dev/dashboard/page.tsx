"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Phase 19 — Dev-Only Monitoring Dashboard
 * Unified view of errors, health, and system info.
 * Protected: redirects to 404 in production.
 */

interface HealthData {
  status: string;
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  commit: string;
  dependencies: { name: string; status: string; latency?: number; message?: string }[];
}

interface ErrorEntry {
  id: string;
  timestamp: string;
  level: string;
  category: string;
  message: string;
  stack: string;
  page: string;
  count: number;
  lastSeen: string;
}

type Tab = "errors" | "health" | "info";

function StatusDot({ status }: { status: string }) {
  const color =
    status === "ok" ? "bg-emerald-500" :
    status === "degraded" ? "bg-amber-500" :
    "bg-red-500";
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${color}`} />;
}

function SeverityBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    error: "bg-red-100 text-red-800",
    warning: "bg-amber-100 text-amber-800",
    info: "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${styles[level] || "bg-zinc-100 text-zinc-600"}`}>
      {level}
    </span>
  );
}

export default function DevDashboardPage() {
  const [tab, setTab] = useState<Tab>("errors");
  const [health, setHealth] = useState<HealthData | null>(null);
  const [errors, setErrors] = useState<ErrorEntry[]>([]);
  const [errorTotal, setErrorTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const [healthRes, errorsRes] = await Promise.all([
        fetch("/api/health"),
        fetch("/api/monitoring/errors?limit=50"),
      ]);
      if (healthRes.ok) setHealth(await healthRes.json());
      if (errorsRes.ok) {
        const data = await errorsRes.json();
        setErrors(data.errors || []);
        setErrorTotal(data.total || 0);
      }
    } catch (e) {
      console.error("Dashboard fetch failed:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const tabs: { key: Tab; label: string }[] = [
    { key: "errors", label: `Errors (${errorTotal})` },
    { key: "health", label: "Health" },
    { key: "info", label: "System" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 pt-24 font-mono">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              🛡️ Monitoring Dashboard
            </h1>
            <p className="text-zinc-500 text-sm mt-1">
              Phase 19 — Local-Only (kein Sentry)
            </p>
          </div>
          <div className="flex items-center gap-3">
            {health && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                <StatusDot status={health.status} />
                <span className="capitalize">{health.status}</span>
              </div>
            )}
            <button
              onClick={fetchData}
              className="px-3 py-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              ↻ Refresh
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-zinc-900 p-1 rounded-lg w-fit">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                tab === t.key
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-zinc-500">Loading...</div>
        ) : (
          <>
            {/* Errors Tab */}
            {tab === "errors" && (
              <div className="space-y-3">
                {errors.length === 0 ? (
                  <div className="text-center py-16 text-zinc-600">
                    ✅ Keine Fehler erfasst
                  </div>
                ) : (
                  errors.map((err) => (
                    <details
                      key={err.id}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group"
                    >
                      <summary className="px-4 py-3 cursor-pointer flex items-center gap-3 hover:bg-zinc-800/50 transition-colors">
                        <SeverityBadge level={err.level} />
                        <span className="flex-1 truncate text-sm">
                          {err.message}
                        </span>
                        <span className="text-zinc-600 text-xs shrink-0">
                          {err.page}
                        </span>
                        {err.count > 1 && (
                          <span className="px-2 py-0.5 text-xs bg-zinc-800 rounded-full text-zinc-400">
                            ×{err.count}
                          </span>
                        )}
                        <span className="text-zinc-600 text-xs shrink-0">
                          {new Date(err.lastSeen).toLocaleTimeString("de-DE")}
                        </span>
                      </summary>
                      <div className="px-4 py-3 bg-zinc-950 border-t border-zinc-800 text-xs">
                        <div className="grid grid-cols-2 gap-2 mb-3 text-zinc-400">
                          <div>Category: <span className="text-zinc-300">{err.category}</span></div>
                          <div>Page: <span className="text-zinc-300">{err.page}</span></div>
                          <div>First: <span className="text-zinc-300">{new Date(err.timestamp).toLocaleString("de-DE")}</span></div>
                          <div>Last: <span className="text-zinc-300">{new Date(err.lastSeen).toLocaleString("de-DE")}</span></div>
                        </div>
                        {err.stack && (
                          <pre className="whitespace-pre-wrap text-red-400/80 bg-zinc-900 p-3 rounded-md overflow-x-auto">
                            {err.stack}
                          </pre>
                        )}
                      </div>
                    </details>
                  ))
                )}
              </div>
            )}

            {/* Health Tab */}
            {tab === "health" && health && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Status", value: health.status, icon: <StatusDot status={health.status} /> },
                    { label: "Uptime", value: `${Math.floor(health.uptime / 3600)}h ${Math.floor((health.uptime % 3600) / 60)}m` },
                    { label: "Version", value: health.version },
                    { label: "Commit", value: health.commit },
                  ].map((card) => (
                    <div key={card.label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{card.label}</div>
                      <div className="text-lg font-semibold flex items-center gap-2">
                        {card.icon}
                        <span className="capitalize">{card.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-zinc-400 mt-6 mb-2">Dependencies</h3>
                <div className="space-y-2">
                  {health.dependencies.map((dep) => (
                    <div
                      key={dep.name}
                      className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
                    >
                      <StatusDot status={dep.status} />
                      <span className="font-medium text-sm">{dep.name}</span>
                      {dep.latency !== undefined && (
                        <span className="text-zinc-500 text-xs ml-auto">{dep.latency}ms</span>
                      )}
                      {dep.message && (
                        <span className="text-zinc-500 text-xs">{dep.message}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* System Info Tab */}
            {tab === "info" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wider">System Info</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {[
                    ["Environment", health?.environment || "unknown"],
                    ["Version", health?.version || "—"],
                    ["Commit SHA", health?.commit || "—"],
                    ["Monitoring", "Local-Only (kein Sentry)"],
                    ["Error Buffer", `${errorTotal} Einträge`],
                    ["Dashboard Refresh", "60 Sekunden"],
                    ["Phase", "19 — Monitoring & Observability"],
                    ["Docs", "/docs/MONITORING-GUIDE.md"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-zinc-800">
                      <dt className="text-zinc-500">{label}</dt>
                      <dd className="text-zinc-200 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-zinc-700 text-xs">
          Auto-refresh alle 60s · Daten nur in-memory (Vercel Logs für persistent)
        </div>
      </div>
    </div>
  );
}
