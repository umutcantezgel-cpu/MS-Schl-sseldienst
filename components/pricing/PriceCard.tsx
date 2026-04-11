import { Check, Info, Clock, Shield, MapPin } from "lucide-react";

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
  function getFeatureIcon(feature: string) {
    const lower = feature.toLowerCase();
    if (lower.includes("uhr") || lower.includes("werktag") || lower.includes("24/7") || lower.includes("nacht")) return Clock;
    if (lower.includes("zerstörungsfrei") || lower.includes("garantie") || lower.includes("festpreis") || lower.includes("beschädig")) return Shield;
    if (lower.includes("anfahrt") || lower.includes("bezirk") || lower.includes("wetzlar")) return MapPin;
    return Check;
  }

  return (
    <div
      className={`group relative flex flex-col rounded-[24px] bg-white/95 backdrop-blur-xl p-7 sm:p-8 lg:p-9 transition-all duration-500 overflow-hidden ${isPopular
        ? "border-2 border-[var(--color-red-500)]/40 shadow-[0_0_40px_rgba(185,28,28,0.12),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(185,28,28,0.18),0_16px_48px_rgba(0,0,0,0.12)]"
        : "border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1"
        }`}
    >
      {/* Top accent bar for popular */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-red-500)] via-[var(--color-red-400)] to-[var(--color-red-600)] rounded-t-[24px]" />
      )}

      {/* Decorative corner glow */}
      {isPopular && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-red-500)]/8 to-transparent pointer-events-none rounded-tr-[24px]" />
      )}

      {/* Popular Badge INLINE, not overlapping */}
      {isPopular && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)] text-white text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full shadow-md shadow-red-500/20">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Am häufigsten gewählt
          </span>
        </div>
      )}

      {/* Title & Description */}
      <div className="mb-5">
        <h3 className="text-xl sm:text-[22px] font-extrabold text-[color:var(--text-primary)] tracking-tight leading-tight">
          {title}
        </h3>
        <p className="mt-1.5 text-[color:var(--text-secondary)] text-[15px] leading-relaxed font-medium !mb-0">
          {description}
        </p>
      </div>

      {/* Price Block */}
      <div className={`flex items-end gap-1.5 mb-5 pb-5 border-b ${isPopular ? 'border-red-100' : 'border-gray-100'}`}>
        {typeof price === "number" && (
          <span className="text-sm font-bold text-[color:var(--text-tertiary)] uppercase tracking-widest shrink-0 self-start mt-2.5">
            ab
          </span>
        )}
        <span className={`${typeof price === "number" ? "text-5xl sm:text-[3.5rem]" : "text-3xl"} font-black leading-none tracking-tighter tabular-nums ${isPopular ? "text-[var(--color-red-500)]" : "text-[color:var(--text-primary)]"}`}>
          {price}
        </span>
        {typeof price === "number" && (
          <span className={`text-2xl font-bold mb-0.5 ${isPopular ? "text-red-400" : "text-[color:var(--text-secondary)]"}`}>
            €
          </span>
        )}
        
        {costBreakdown && (
          <span className="ml-auto text-xs font-semibold text-[color:var(--color-success)] bg-emerald-50 px-3 py-1 rounded-full">
            {costBreakdown}
          </span>
        )}
      </div>

      {/* Features with semantic icons */}
      <ul role="list" className="space-y-3 flex-1">
        {features.map((feature, index) => {
          const FeatureIcon = getFeatureIcon(feature);
          return (
            <li key={index} className="flex gap-3 items-center">
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                isPopular 
                  ? "bg-[var(--color-red-500)]/10 text-[var(--color-red-500)]" 
                  : "bg-gray-100 text-gray-500"
              }`}>
                <FeatureIcon className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="text-[color:var(--text-secondary)] text-[15px] leading-snug font-medium">
                {feature}
              </span>
            </li>
          );
        })}
      </ul>
      
      {/* Bottom Section */}
      {(comparisonAnchor || roi) && (
        <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] space-y-2">
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
