"use client";

import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { type ReactNode } from "react";

type FeedbackVariant = "success" | "error" | "warning" | "info";

interface FeedbackProps {
  variant: FeedbackVariant;
  message: string;
  /** Optional additional details */
  children?: ReactNode;
  className?: string;
}

const VARIANT_CONFIG: Record<
  FeedbackVariant,
  {
    icon: typeof CheckCircle;
    label: string;
    containerClass: string;
    iconClass: string;
  }
> = {
  success: {
    icon: CheckCircle,
    label: "Erfolg",
    containerClass:
      "border-status-success/30 bg-status-success/10 text-[color:var(--text-primary)]",
    iconClass: "text-status-success",
  },
  error: {
    icon: XCircle,
    label: "Fehler",
    containerClass:
      "border-status-error/30 bg-status-error/10 text-[color:var(--text-primary)]",
    iconClass: "text-status-error",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warnung",
    containerClass:
      "border-status-warning/30 bg-status-warning/10 text-[color:var(--text-primary)]",
    iconClass: "text-status-warning",
  },
  info: {
    icon: Info,
    label: "Hinweis",
    containerClass:
      "border-status-info/30 bg-status-info/10 text-[color:var(--text-primary)]",
    iconClass: "text-status-info",
  },
};

/**
 * Multi-channel feedback component.
 * NEVER communicates via color alone — always: Icon + Text + Color (3 channels).
 *
 * Uses role="alert" so screen readers announce it immediately.
 *
 * @example
 * <Feedback variant="success" message="Formular erfolgreich gesendet!" />
 * <Feedback variant="error" message="Bitte überprüfen Sie Ihre E-Mail-Adresse." />
 */
export default function Feedback({
  variant,
  message,
  children,
  className = "",
}: FeedbackProps) {
  const config = VARIANT_CONFIG[variant];
  const Icon = config.icon;

  return (
    <div
      role="alert"
      aria-label={`${config.label}: ${message}`}
      className={`flex items-start gap-3 rounded-xl border p-4 ${config.containerClass} ${className}`}
    >
      <Icon
        className={`h-5 w-5 shrink-0 mt-0.5 ${config.iconClass}`}
        aria-hidden="true"
      />
      <div className="flex-1 min-w-0">
        <span className="sr-only">{config.label}: </span>
        <p className="text-sm font-medium">{message}</p>
        {children && (
          <div className="mt-1 text-sm opacity-80">{children}</div>
        )}
      </div>
    </div>
  );
}
