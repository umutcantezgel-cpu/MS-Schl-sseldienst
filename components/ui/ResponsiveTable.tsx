"use client";

import { type ReactNode } from "react";

interface Column {
  key: string;
  label: string;
}

interface ResponsiveTableProps {
  columns: Column[];
  rows: Record<string, ReactNode>[];
  className?: string;
  /** Card title key for mobile view */
  cardTitleKey?: string;
}

/**
 * Responsive table with container-query-based card fallback.
 * - Wide container: Standard HTML table
 * - Narrow container: Stacked key-value cards
 */
export default function ResponsiveTable({
  columns,
  rows,
  className = "",
  cardTitleKey,
}: ResponsiveTableProps) {
  return (
    <div className={`@container ${className}`}>
      {/* ─── Desktop: Table ─── */}
      <div className="hidden @lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[var(--border-medium)]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="py-3 px-4 text-sm font-semibold text-[color:var(--text-secondary)] uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[var(--border-subtle)] hover:bg-[var(--surface-secondary)] transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="py-3 px-4 text-[color:var(--text-primary)]"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─── Mobile: Stacked Cards ─── */}
      <div className="@lg:hidden flex flex-col gap-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4 shadow-sm"
          >
            {cardTitleKey && row[cardTitleKey] && (
              <h4 className="font-semibold text-[color:var(--text-primary)] mb-2">
                {row[cardTitleKey]}
              </h4>
            )}
            <dl className="space-y-1.5">
              {columns
                .filter((col) => col.key !== cardTitleKey)
                .map((col) => (
                  <div key={col.key} className="flex justify-between gap-4">
                    <dt className="text-sm text-[color:var(--text-tertiary)] shrink-0">
                      {col.label}
                    </dt>
                    <dd className="text-sm text-[color:var(--text-primary)] text-right font-medium">
                      {row[col.key]}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
