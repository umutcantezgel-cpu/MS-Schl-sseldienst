import { ShieldCheck, Clock, CheckCircle2, Star, CreditCard } from"lucide-react";

const trustItems = [
  { icon: ShieldCheck, text:"Festpreisgarantie" },
  { icon: Clock, text:"24/7 Notdienst" },
  { icon: CheckCircle2, text:"Keine versteckten Kosten" },
  { icon: Star, text:"Ausgebildet von Uwe Sarfeld" },
  { icon: CreditCard, text:"Bar · EC · Kreditkarte" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Vertrauenssignale und Zertifizierungen" className="bg-white/90 backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl md:rounded-full shadow-[var(--elevation-3)] h-[60px] md:h-[68px] lg:h-[76px] flex items-center overflow-hidden relative z-20 w-full max-w-6xl mx-auto">
      <h2 className="sr-only">Vertrauenssignale und Zertifizierungen</h2>
      {/* Desktop View */}
      <div className="hidden md:flex w-full items-center justify-between px-[var(--space-8)] gap-[var(--space-6)] overflow-x-auto hide-scrollbar">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 py-2">
            <div className="w-8 h-8 rounded-full bg-[var(--value-icon-bg)] flex items-center justify-center">
              <item.icon className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px] text-[var(--value-icon-color)] shrink-0" aria-hidden="true" />
            </div>
            <span className="font-semibold text-[14px] lg:text-[15px] text-[color:var(--text-primary)] whitespace-nowrap">
              {item.text}
            </span>
            {idx < trustItems.length - 1 && (
              <div className="hidden lg:block w-px h-5 bg-[var(--color-charcoal-200)] ml-3" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile View: Animated Marquee */}
      <div className="flex w-full md:hidden overflow-hidden pl-[var(--space-4)] mask-image-fade group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] items-center gap-[var(--space-8)] pr-[var(--space-8)]">
          {[...trustItems, ...trustItems, ...trustItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <div className="w-7 h-7 rounded-md bg-[var(--value-icon-bg)] flex items-center justify-center">
                <item.icon className="h-[16px] w-[16px] text-[var(--value-icon-color)] shrink-0" aria-hidden="true" />
              </div>
              <span className="font-semibold text-[14px] text-[color:var(--text-primary)]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
