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
      className={`relative flex flex-col rounded-[var(--space-4)] bg-[var(--surface-primary)] p-[var(--space-7)] sm:p-[var(--space-8)] ring-1 transition-all duration-300 ${isPopular
        ?"ring-[var(--color-red-500)] border-t-[3px] border-t-[var(--color-red-500)] shadow-[var(--elevation-3)] -translate-y-1"
        :"ring-[var(--border-subtle)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)] hover:-translate-y-1"
        }`}
    >
      {isPopular && (
        <div className="absolute -top-[var(--space-4)] left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-red-500)] px-[var(--space-4)] py-[var(--space-1)] text-white shadow-[var(--elevation-2)] font-bold text-xs uppercase tracking-wider">
          Am häufigsten gewählt
        </div>
      )}

      <div className="mb-[var(--space-5)]">
        <h3 className="typo-h4-card text-[color:var(--text-primary)]">
          {title}
        </h3>
        <p className="mt-[var(--space-2)] text-[color:var(--text-secondary)] typo-body !max-w-none !mb-0">
          {description}
        </p>
      </div>

      <div className="mb-[var(--space-5)] flex flex-col gap-[var(--space-1)]">
        <div className="flex items-baseline gap-[var(--space-1)]">
          {typeof price ==="number" && (
            <span className="typo-small text-[color:var(--text-tertiary)]">
              ab
            </span>
          )}
          <span className="typo-price-display">
            {price}
          </span>
          {typeof price ==="number" && (
            <span className="typo-price-display typo-price-currency">
              €
            </span>
          )}
        </div>
        
        {costBreakdown && (
          <span className="text-[13px] font-medium text-[color:var(--color-success)] uppercase tracking-wide">
            {costBreakdown}
          </span>
        )}
      </div>

      <ul role="list" className="mb-[var(--space-6)] space-y-[var(--space-3)] flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-[var(--space-3)]">
            <Check className="h-5 w-5 shrink-0 text-[var(--color-primary)] mt-0.5" aria-hidden="true" />
            <span className="text-[color:var(--text-secondary)] text-[15px] leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      {(comparisonAnchor || roi) && (
        <div className="mt-auto pt-[var(--space-5)] border-t border-[var(--border-subtle)] space-y-[var(--space-2)]">
          {comparisonAnchor && (
            <div className="flex items-start gap-2 text-[13px] text-[color:var(--text-tertiary)]">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="!mb-0 leading-tight">{comparisonAnchor}</p>
            </div>
          )}
          {roi && (
            <div className="flex items-start gap-2 text-[13px] text-[color:var(--color-success)] font-medium">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="!mb-0 leading-tight">{roi}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
