import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EmptyStateAction {
  label: string;
  href: string;
}

interface EmptyStateProps {
  /** Decorative icon */
  icon: ReactNode;
  /** Friendly title */
  title: string;
  /** Helpful description */
  description: string;
  /** Optional CTA */
  action?: EmptyStateAction;
  className?: string;
}

/**
 * Friendly empty state for sections that have no content.
 * Provides a constructive way out instead of a blank area.
 *
 * @example
 * <EmptyState
 *   icon={<Search className="h-8 w-8" />}
 *   title="Keine Ergebnisse"
 *   description="Versuchen Sie einen anderen Suchbegriff."
 *   action={{ label: "Kontaktieren Sie uns", href: "/kontakt" }}
 * />
 */
export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface-secondary)] text-[color:var(--text-tertiary)] mb-6"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[color:var(--text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-[color:var(--text-secondary)] max-w-sm mb-6">
        {description}
      </p>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--action-primary)] hover:underline"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
