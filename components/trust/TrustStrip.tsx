import { ShieldCheck, Clock, CheckCircle2, Star, CreditCard } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Festpreisgarantie" },
  { icon: Clock, text: "24/7 Notdienst" },
  { icon: CheckCircle2, text: "Keine versteckten Kosten" },
  { icon: Star, text: "Ausgebildet von Uwe Sarfeld" },
  { icon: CreditCard, text: "Bar · EC · Kreditkarte" },
];

// Duplication for long desktop monitors, ensures it loops nicely
const multipliedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems, ...trustItems, ...trustItems];

export default function TrustStrip() {
  return (
    <section aria-label="Vertrauenssignale und Zertifizierungen" className="bg-white/90 backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl lg:rounded-full shadow-[var(--elevation-3)] h-[60px] md:h-[68px] lg:h-[76px] flex items-center overflow-hidden relative z-20 w-full max-w-7xl mx-auto">
      <h2 className="sr-only">Vertrauenssignale und Zertifizierungen</h2>
      
      {/* Unified Animated Marquee View */}
      <div className="flex w-full overflow-hidden mask-image-fade group pl-[var(--space-4)] md:pl-0">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] items-center gap-[var(--space-6)] md:gap-[var(--space-8)] pr-[var(--space-6)] md:pr-[var(--space-8)] py-2">
          {multipliedItems.map((item, idx) => {
            const isClone = idx >= trustItems.length;
            return (
              <div key={idx} className="flex items-center gap-3 shrink-0" aria-hidden={isClone ? "true" : undefined}>
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[var(--value-icon-bg)] flex items-center justify-center shrink-0">
                  <item.icon className="h-[14px] w-[14px] lg:h-[16px] lg:w-[16px] text-[var(--value-icon-color)]" aria-hidden="true" />
                </div>
                <span className="font-semibold text-[14px] lg:text-[15px] text-[color:var(--text-primary)] whitespace-nowrap">
                  {item.text}
                </span>
                {/* Visual Separator */}
                <div className="hidden md:block w-px h-5 md:h-6 bg-[var(--color-charcoal-200)] ml-3 md:ml-4" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
          mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
        }
        @media (min-width: 768px) {
          .mask-image-fade {
            -webkit-mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
            mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
          }
        }
      `}} />
    </section>
  );
}
