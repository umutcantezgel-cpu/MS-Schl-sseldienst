import nextDynamic from "next/dynamic";
import { Check, Star, Clock, ShieldCheck } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";

const DynamicCounter = nextDynamic(() => import("@/components/growth/DynamicCounter"));

export default function TrustMetricsSection() {
  return (
    <section aria-label="Zahlen und Fakten" className="bg-white/50 border-y border-[var(--color-charcoal-100)] px-[var(--section-px)] py-16 md:py-24">
      <RevealSection className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
          <DynamicCounter value={500} suffix="+" label="Zufriedene Kunden" icon={<Check className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
          <DynamicCounter value={99} suffix="%" label="Kundenzufriedenheit" icon={<Star className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
          <DynamicCounter value={30} suffix=" Min" label="Ø Anfahrtszeit" icon={<Clock className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
          <DynamicCounter value={10} suffix="+" label="Jahre Erfahrung" icon={<ShieldCheck className="w-6 h-6 text-[color:var(--color-red-600)]" />} />
        </div>
      </RevealSection>
    </section>
  );
}
