import { ArrowRight, Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValuePropositionProps {
  beforeState: string;
  afterState: string;
  metric?: string;
  timeframe?: string;
  className?: string;
}

export default function ValueProposition({
  beforeState,
  afterState,
  metric,
  timeframe,
  className,
}: ValuePropositionProps) {
  return (
    <div className={cn("p-[var(--space-6)] sm:p-[var(--space-7)] bg-[var(--surface-primary)] ring-1 ring-[var(--border-subtle)] rounded-[var(--space-4)] shadow-[var(--elevation-1)]", className)}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--space-4)] md:gap-[var(--space-6)]">
        <div className="flex-1 space-y-[var(--space-2)] w-full text-center md:text-left">
          <span className="text-[color:var(--text-tertiary)] uppercase tracking-wide text-[11px] font-bold">Vorher</span>
          <p className="text-[color:var(--text-secondary)] font-medium !mb-0 opacity-80">{beforeState}</p>
        </div>
        
        <div className="hidden md:flex flex-shrink-0 text-[var(--color-primary)] bg-[var(--surface-secondary)] p-3 rounded-full">
          <ArrowRight className="w-5 h-5" />
        </div>
        <div className="flex md:hidden flex-shrink-0 text-[var(--color-primary)] bg-[var(--surface-secondary)] p-2 rounded-full rotate-90">
          <ArrowRight className="w-4 h-4" />
        </div>

        <div className="flex-1 space-y-[var(--space-2)] w-full text-center md:text-left">
          <span className="text-[color:var(--color-primary)] uppercase tracking-wide text-[11px] font-bold">Ihre Lösung</span>
          <p className="typo-h5 !mb-0 text-[color:var(--text-primary)]">{afterState}</p>
        </div>
      </div>
      
      {(metric || timeframe) && (
        <div className="mt-[var(--space-6)] pt-[var(--space-5)] border-t border-[var(--border-subtle)] flex flex-wrap gap-[var(--space-3)] justify-center md:justify-start">
          {metric && (
            <div className="inline-flex items-center gap-1.5 bg-[var(--surface-secondary)] px-[var(--space-3)] py-[var(--space-1)] rounded-full text-[color:var(--text-secondary)] font-medium text-xs sm:text-sm">
              <Check className="w-4 h-4 text-[var(--color-success)]" />
              {metric}
            </div>
          )}
          {timeframe && (
            <div className="inline-flex items-center gap-1.5 bg-[var(--surface-secondary)] px-[var(--space-3)] py-[var(--space-1)] rounded-full text-[color:var(--text-secondary)] font-medium text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-[var(--color-primary)]" />
              {timeframe}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
