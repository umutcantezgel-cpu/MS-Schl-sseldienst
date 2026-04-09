import { Check, Info } from"lucide-react";
import { GUARANTEES } from"./pricing.constants";

interface PriceCardProps {
  title: string;
  price: number | string;
  description: string;
  features: string[];
  isPopular?: boolean;
  comparisonAnchor?: string;
  costBreakdown?: string;
  roi?: string;
}

export default function PriceCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  comparisonAnchor,
  costBreakdown,
  roi
}: PriceCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-[24px] bg-white/90 backdrop-blur-3xl p-8 lg:p-10 transition-all duration-500 overflow-hidden ${isPopular
        ? "border-2 border-[var(--color-red-500)]/30 shadow-[0_0_40px_rgba(185,28,28,0.1),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(185,28,28,0.15),0_12px_40px_rgba(0,0,0,0.12)]"
        : "border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1"
        }`}
    >
      {isPopular && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)] text-white text-xs font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
          Am häufigsten gewählt
        </div>
      )}
      {isPopular && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red-500)]/10 rounded-bl-[100px] pointer-events-none" />
      )}

      <div className="mb-[var(--space-5)]">
        <div className="typo-h4-card text-[color:var(--text-primary)]">
          {title}
        </div>
        <p className="mt-[var(--space-2)] text-[color:var(--text-secondary)] typo-body !max-w-none !mb-0">
          {description}
        </p>
      </div>

      <div className="mb-[var(--space-5)] flex flex-col gap-[var(--space-1)]">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          {typeof price === "number" && (
            <span className="text-sm font-bold text-[color:var(--text-tertiary)] uppercase tracking-widest shrink-0">
              ab
            </span>
          )}
          <span className={`${typeof price === "number" ? "text-5xl lg:text-[4.5rem]" : "text-3xl"} font-black leading-none tracking-tighter tabular-nums shrink-0 ${isPopular ? "text-[var(--color-red-500)] drop-shadow-sm" : "text-[color:var(--text-primary)]"}`}>
            {price}
          </span>
          {typeof price === "number" && (
            <span className={`text-2xl font-bold shrink-0 ${isPopular ? "text-red-500" : "text-[color:var(--text-secondary)]"}`}>
              €
            </span>
          )}
        </div>
        
        {costBreakdown && (
          <span className="text-sm font-medium text-[color:var(--color-success)] uppercase tracking-wide">
            {costBreakdown}
          </span>
        )}
      </div>

      <ul role="list" className="mb-[var(--space-6)] space-y-[var(--space-3)] flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 items-start">
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5 ${isPopular ? "bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]" : "bg-[var(--surface-secondary)] text-[color:var(--text-secondary)]"}`}>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="text-[color:var(--text-secondary)] text-base leading-relaxed font-medium">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      {(comparisonAnchor || roi) && (
        <div className="mt-auto pt-[var(--space-5)] border-t border-[var(--border-subtle)] space-y-[var(--space-2)]">
          {comparisonAnchor && (
            <div className="flex items-start gap-2 text-sm text-[color:var(--text-tertiary)]">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="!mb-0 leading-tight">{comparisonAnchor}</p>
            </div>
          )}
          {roi && (
            <div className="flex items-start gap-2 text-sm text-[color:var(--color-success)] font-medium">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="!mb-0 leading-tight">{roi}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
