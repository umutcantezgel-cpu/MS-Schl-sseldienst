import { ShieldCheck, Check, Clock } from "lucide-react";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { Typography } from "@/components/ui/typography/Typography";

export default function WhyUsSection() {
  return (
    <section aria-labelledby="why-us-heading" className="bg-[var(--color-charcoal-50)]/40 px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <RevealSection className="mx-auto max-w-7xl">
        <SectionHeader
          pill="DARUM WIR"
          headingId="why-us-heading"
          title={<>Warum <span className="text-[var(--color-red-500)]">Schlüssel Schmiede</span>?</>}
        />

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { num:"01", icon: ShieldCheck, title:"Fachhandwerk aus Leidenschaft", desc:"In unserer Werkstatt verbinden wir traditionelles Handwerk mit modernster Technik — von der Schlüsselanfertigung bis zur komplexen Schließanlage." },
            { num:"02", icon: Check, title:"Transparente Festpreise", desc:"Ob im Laden oder beim Notdienst — den verbindlichen Festpreis erfahren Sie vorab. Keine Überraschungen, keine Aufschläge vor Ort." },
            { num:"03", icon: Clock, title:"Ladengeschäft mit kurzen Wegen", desc:"Unser Fachgeschäft in der Langgasse 70 ist Ihr Anlaufpunkt in Wetzlar. Im Notfall sind wir per 24/7-Dienst in 15 bis 30 Minuten bei Ihnen." },
          ].map((item, idx) => (
            <div key={idx} className="group relative bg-white/70 backdrop-blur-3xl rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/95 transition-all duration-300 border border-[var(--color-charcoal-100)]">
              {/* Number badge */}
              <div className="w-12 h-12 rounded-full bg-[var(--color-red-500)] text-white flex items-center justify-center font-black text-base mb-6 shadow-[0_4px_12px_rgba(185,28,28,0.25)] group-hover:scale-110 transition-transform duration-300">
                {item.num}
              </div>
              <Typography variant="h3" as="div" className="mb-3">
                {item.title}
              </Typography>
              <Typography variant="body" color="secondary">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
