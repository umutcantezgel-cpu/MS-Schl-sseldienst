import { ShieldCheck, Clock, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const defaultItems: TrustItem[] = [
  { icon: ShieldCheck, text: "Kostenlos & unverbindlich" },
  { icon: Clock, text: "Antwort in 24h" },
  { icon: Lock, text: "DSGVO-konform" },
];

const emergencyItems: TrustItem[] = [
  { icon: ShieldCheck, text: "Festpreis vor Anfahrt" },
  { icon: Clock, text: "In 20-30 Min. vor Ort" },
  { icon: Lock, text: "Keine versteckten Kosten" },
];

interface TrustSignalsProps {
  variant?: "inline" | "stacked";
  preset?: "default" | "emergency" | "pricing";
  items?: TrustItem[];
  className?: string;
}

export default function TrustSignals({
  variant = "inline",
  preset = "default",
  items,
  className,
}: TrustSignalsProps) {
  const resolvedItems = items ?? (preset === "emergency" ? emergencyItems : defaultItems);

  return (
    <div
      className={cn(
        "flex gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[color:var(--text-tertiary)]",
        variant === "inline"
          ? "flex-wrap items-center justify-center"
          : "flex-col items-start",
        className
      )}
      role="list"
      aria-label="Vertrauenssignale"
    >
      {resolvedItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1.5" role="listitem">
          <item.icon
            className="h-3.5 w-3.5 text-[var(--color-success)] shrink-0"
            aria-hidden="true"
          />
          <span>{item.text}</span>
          {variant === "inline" && idx < resolvedItems.length - 1 && (
            <span className="text-[var(--border-medium)] ml-2 hidden sm:inline" aria-hidden="true">·</span>
          )}
        </div>
      ))}
    </div>
  );
}
