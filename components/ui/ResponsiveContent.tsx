"use client";

import { type ReactNode } from "react";

type Priority = "high" | "medium" | "low";

interface ResponsiveContentProps {
  priority: Priority;
  children: ReactNode;
  /** Fallback for medium priority on mobile (e.g. accordion trigger text) */
  mobileSummary?: string;
  className?: string;
}

/**
 * Renders content based on viewport priority.
 * Uses CSS-only visibility so all content is in the DOM for SEO.
 *
 * - high: Always visible
 * - medium: Hidden on mobile (<768px), shown on tablet+
 * - low: Hidden on mobile+tablet, shown on desktop (>1024px)
 */
export default function ResponsiveContent({
  priority,
  children,
  className = "",
}: ResponsiveContentProps) {
  if (priority === "high") {
    return <div className={className}>{children}</div>;
  }

  if (priority === "medium") {
    return (
      <div className={`hidden md:block ${className}`}>
        {children}
      </div>
    );
  }

  // priority === "low"
  return (
    <div className={`hidden lg:block ${className}`}>
      {children}
    </div>
  );
}
