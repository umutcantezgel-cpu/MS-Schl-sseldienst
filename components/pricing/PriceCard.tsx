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
  // Map feature text to semantic icons
  function getFeatureIcon(feature: string) {
    const lower = feature.toLowerCase();
    if (lower.includes("uhr") || lower.includes("werktag") || lower.includes("24/7") || lower.includes("nacht")) return Clock;
    if (lower.includes("zerstörungsfrei") || lower.includes("garantie") || lower.includes("festpreis") || lower.includes("beschädig")) return Shield;
    if (lower.includes("anfahrt") || lower.includes("bezirk") || lower.includes("wetzlar")) return MapPin;
    return Check;
  }

  return (
    <div
      className={`group relative flex flex-col rounded-[24px] bg-white/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${isPopular
        ? "border-2 border-[var(--color-red-500)]/40 shadow-[0_0_40px_rgba(185,28,28,0.12),0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(185,28,28,0.18),0_16px_48px_rgba(0,0,0,0.12)] scale-[1.02]"
        : "border border-[var(--border-subtle)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1"
        }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-[1px] left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-red-500)] via-[var(--color-red-400)] to-[var(--color-red-600)] rounded-t-[24px]" />
      )}
      {isPopular && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-red-600)] to-[var(--color-red-500)] text-white text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full shadow-lg shadow-red-500/20 whitespace-nowrap z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Am häufigsten gewählt
        </div>
      )}
      
      {/* Decorative corner accent */}
      {isPopular && (
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--color-red-500)]/8 to-transparent pointer-events-none rounded-tr-[24px]" />
      )}

      {/* Header Section */}
      <div className={`px-8 lg:px-10 ${isPopular ? 'pt-14' : 'pt-8 lg:pt-10'} pb-0`}>
        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-[color:var(--text-primary)] tracking-tight leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-[color:var(--text-secondary)] text-[15px] leading-relaxed font-medium !mb-0">
            {description}
          </p>
        </div>

        {/* Price Block — Premium Treatment */}
        <div className={`relative flex items-end gap-2 mb-2 pb-6 border-b ${isPopular ? 'border-red-100/60' : 'border-gray-100'}`}>
          {typeof price === "number" && (
            <span className="text-sm font-bold text-[color:var(--text-tertiary)] uppercase tracking-widest shrink-0 self-start mt-3">
              ab
            </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className={`${typeof price === "number" ? "text-[3.5rem] lg:text-[4rem]" : "text-3xl"} font-black leading-none tracking-tighter tabular-nums ${isPopular ? "text-[var(--color-red-500)]" : "text-[color:var(--text-primary)]"}`}>
              {price}
            </span>
            {typeof price === "number" && (
              <span className={`text-2xl font-bold ${isPopular ? "text-red-400" : "text-[color:var(--text-secondary)]"}`}>
                €
              </span>
            )}
          </div>
          
          {costBreakdown && (
            <span className="ml-auto text-sm font-semibold text-[color:var(--color-success)] bg-emerald-50 px-3 py-1 rounded-full">
              {costBreakdown}
            </span>
          )}
        </div>
      </div>

      {/* Features List — Enhanced with semantic icons */}
      <div className="px-8 lg:px-10 pt-5 pb-8 lg:pb-10 flex-1 flex flex-col">
        <ul role="list" className="space-y-3.5 flex-1">
          {features.map((feature, index) => {
            const FeatureIcon = getFeatureIcon(feature);
            return (
              <li key={index} className="flex gap-3 items-start">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                  isPopular 
                    ? "bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] group-hover:bg-[var(--color-red-500)]/15" 
                    : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}>
                  <FeatureIcon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-[color:var(--text-secondary)] text-[15px] leading-relaxed font-medium pt-0.5">
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
        
        {/* Bottom Info Section */}
        {(comparisonAnchor || roi) && (
          <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-2.5">
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
    </div>
  );
}
