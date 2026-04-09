import Link from "next/link";
import { ArrowRight } from "lucide-react";
import nextDynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";

const ServiceMapWrapper = nextDynamic(() => import("@/components/maps/ServiceMapWrapper"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-[400px] rounded-xl" role="status" aria-label="Karte wird geladen" />,
});

export default function InteractiveMapSection() {
  return (
    <section aria-labelledby="einsatzgebiet-heading" className="bg-white px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <RevealSection className="mx-auto max-w-7xl">
        <SectionHeader
          pill="UNSER EINSATZGEBIET"
          headingId="einsatzgebiet-heading"
          title={<>Unser <span className="text-[var(--color-red-500)]">Einsatzgebiet</span></>}
          description="Ob im Laden oder als Notdienst und wir sind für die gesamte Region da."
        />

        {/* Map */}
        <ServiceMapWrapper />

        {/* Stat badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 max-w-4xl mx-auto">
          {[
            { value: "78+", label: "Einsatzgebiete" },
            { value: "50 km", label: "Einsatzradius" },
            { value: "0€", label: "Anfahrt in der Wetzlarer Kernstadt" },
            { value: "15-30 Min", label: "Ø Ankunftszeit" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center gap-1 bg-white/70 backdrop-blur-xl border border-[var(--color-charcoal-100)] rounded-xl px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span className="text-xl font-black text-[color:var(--text-primary)] tabular-nums">{stat.value}</span>
              <span className="text-xs font-semibold text-[color:var(--text-tertiary)] uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/servicegebiet"
            className={cn(buttonVariants({ variant:"secondary", size:"lg" }),"rounded-full px-8 bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-white")}
            style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-cta)' }}
          >
            Alle Einsatzgebiete anzeigen <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </RevealSection>
    </section>
  );
}
