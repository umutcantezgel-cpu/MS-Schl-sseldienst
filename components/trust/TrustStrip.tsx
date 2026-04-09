"use client";

import { usePathname } from "next/navigation";
import { ShieldCheck, Clock, CheckCircle2, Star, CreditCard, Award } from "lucide-react";
import { pickVariant } from "@/lib/textRotation";

export default function TrustStrip() {
  const pathname = usePathname() || "default";

  // Using pickVariant to ensure each page gets a uniquely worded set of trust items
  const item1 = pickVariant(["Fachgeschäft Langgasse 70", "Zentrale Wetzlar (Langgasse 70)", "Unser Laden in Wetzlar"], pathname, 10);
  const item2 = pickVariant(["24/7 Notdienst", "Rund um die Uhr bereit", "Tag & Nacht Rufbereitschaft"], pathname, 11);
  const item3 = pickVariant(["Festpreisgarantie", "Transparente Festpreise", "Keine versteckten Gebühren"], pathname, 12);
  const item4 = pickVariant(["ADAC Partner", "Offizieller ADAC Partner", "Partner des ADAC"], pathname, 13);
  const item5 = pickVariant(["Ausgebildet von Uwe Sarfeld", "Meister-Ausbildung (U. Sarfeld)", "Geprüfter Meisterbetrieb"], pathname, 14);
  const item6 = pickVariant(["Bar · EC · Kreditkarte", "Zahlung: Flexibel & Bar", "EC, Kreditkarte oder Bar"], pathname, 15);

  const trustItems = [
    { icon: ShieldCheck, text: item1 },
    { icon: Clock, text: item2 },
    { icon: CheckCircle2, text: item3 },
    { icon: Award, text: item4 },
    { icon: Star, text: item5 },
    { icon: CreditCard, text: item6 },
  ];

  // We render exactly 2 copies of the items inside the animated track.
  // The CSS animation translates by exactly -50%.
  const track = [...trustItems, ...trustItems];

  return (
    <section
      aria-label="Vertrauenssignale und Zertifizierungen"
      className="bg-white/90 backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl lg:rounded-full shadow-[var(--elevation-3)] h-[56px] sm:h-[60px] md:h-[68px] lg:h-[72px] flex items-center overflow-hidden relative z-20 w-full mx-auto"
    >
      <h2 className="sr-only">Vertrauenssignale und Zertifizierungen</h2>

      {/* Animated Marquee */}
      <div className="flex w-full overflow-hidden trust-strip-mask group">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] items-center py-2"
          /* gap is applied via the item wrapper below for perfect 50% maths */
        >
          {track.map((item, idx) => {
            const isClone = idx >= trustItems.length;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-3 shrink-0 px-3 sm:px-4 md:px-5"
                aria-hidden={isClone ? "true" : undefined}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-[var(--value-icon-bg)] flex items-center justify-center shrink-0">
                  <item.icon
                    className="h-3 w-3 sm:h-[14px] sm:w-[14px] lg:h-4 lg:w-4 text-[var(--value-icon-color)]"
                    aria-hidden="true"
                  />
                </div>
                <span className="font-semibold text-xs sm:text-sm lg:text-base text-[color:var(--text-primary)] whitespace-nowrap">
                  {item.text}
                </span>
                {/* Visual Separator */}
                <div
                  className="w-px h-4 sm:h-5 md:h-6 bg-[var(--color-charcoal-200)] ml-1 sm:ml-2 md:ml-3"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .trust-strip-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0px, black 12px, black calc(100% - 12px), transparent);
          mask-image: linear-gradient(to right, transparent 0px, black 12px, black calc(100% - 12px), transparent);
        }
        @media (min-width: 640px) {
          .trust-strip-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
            mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
          }
        }
        @media (min-width: 768px) {
          .trust-strip-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
            mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
          }
        }
      `,
        }}
      />
    </section>
  );
}
