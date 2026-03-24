import { Phone } from"lucide-react";
import MagneticWrapper from"./animations/MagneticWrapper";
import { buttonVariants } from"@/components/ui/button";
import { cn } from "@/lib/utils";
import { triggerHaptic } from "@/lib/haptics";

export default function HeroCTA() {
  return (
    <div className="mt-[var(--space-7)] flex flex-col items-center w-full px-[var(--space-4)] sm:px-0 gap-[var(--space-8)]">
      <MagneticWrapper pullRadius={60} maxPullStringency={0.4}>
        <a
          href="tel:+4964418056544"
          onClick={() => triggerHaptic('light')}
          className="font-[800] text-[var(--color-red-500)] flex items-center justify-center gap-[var(--space-3)] min-h-[56px] min-w-[56px] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] rounded-[var(--space-2)]"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h)',
            letterSpacing: 'var(--tracking-cta)',
          }}
        >
          <Phone className="h-8 w-8 animate-phone-ring" aria-hidden="true" />
          06441 8056544
        </a>
      </MagneticWrapper>

      <MagneticWrapper pullRadius={100} maxPullStringency={0.6} className="w-full max-w-[430px]">
        <a
          href="tel:+4964418056544"
          role="button"
          onClick={() => triggerHaptic('light')}
          aria-label="Jetzt Schlüsseldienst anrufen"
          className={cn(buttonVariants({ size: "lg" }), "animate-pulse-glow w-full hover:-translate-y-1")}
          style={{
            fontSize: 'var(--text-lead)',
            letterSpacing: 'var(--tracking-cta)',
          }}
        >
          Jetzt anrufen
        </a>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs font-medium text-[color:var(--text-tertiary)]">
          <span className="flex items-center gap-1">
            <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Keine Anfahrtskaufkosten
          </span>
          <span className="flex items-center gap-1">
            <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            100% Festpreis
          </span>
        </div>
      </MagneticWrapper>

      {/* Ethical Scarcity / Availability Indicator */}
      <div className="mt-2 flex items-center justify-center gap-2 rounded-full bg-status-success/10 px-4 py-1.5 border border-status-success/20">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-success"></span>
        </span>
        <span className="text-xs font-bold text-status-success">
          Aktuell 1 Monteur in Wetzlar & Umgebung verfügbar
        </span>
      </div>
    </div>
  );
}
