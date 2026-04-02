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
    <div className={cn("flex flex-wrap justify-center gap-4 mt-8", className)}>
      {badges.map((badge, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          {badge.icon}
          <span className="text-sm font-semibold text-slate-700">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}
