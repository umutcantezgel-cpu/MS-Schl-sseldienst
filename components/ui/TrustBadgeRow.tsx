import { cn } from "@/lib/utils";
import { ShieldCheck, Lock, Star, Clock } from "lucide-react";

interface TrustBadgeRowProps {
  className?: string;
}

export function TrustBadgeRow({ className }: TrustBadgeRowProps) {
  const badges = [
    {
      icon: <Lock className="w-5 h-5 text-green-600" />,
      text: "Festpreis Garantie"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
      text: "Geprüfter Fachbetrieb"
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      text: "5.0/5 Google Sterne"
    },
    {
      icon: <Clock className="w-5 h-5 text-[var(--color-red-500)]" />,
      text: "24/7 Notbesetzung"
    }
  ];

  return (
    <div className={cn("relative w-full overflow-hidden mt-8", className)}>
      <div className="flex md:flex-wrap md:justify-center items-center gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 md:pb-0 px-1 -mx-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {badges.map((badge, idx) => (
          <div 
            key={idx} 
            className="shrink-0 snap-center md:snap-align-none flex items-center gap-2.5 px-3.5 py-2 md:px-4 md:py-2.5 bg-white border border-slate-200 rounded-[10px] md:rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            {badge.icon}
            <span className="text-[13px] md:text-sm font-semibold text-slate-700 whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        ))}
        {/* Adds padding to end of scroll on mobile */}
        <div className="shrink-0 w-2 h-1 md:hidden" aria-hidden="true" />
      </div>
      {/* Right fade hint on mobile */}
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[var(--color-charcoal-50)] to-transparent pointer-events-none md:hidden" aria-hidden="true" />
    </div>
  );
}
