import { Phone, Clock, Check, Star } from "lucide-react";
import nextDynamic from "next/dynamic";
import RevealSection from "@/components/motion/RevealSection";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { Typography } from "@/components/ui/typography/Typography";

const ContactForm = nextDynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-xl" role="status" aria-label="Formular wird geladen" />,
});

export default function ContactSection() {
  return (
    <section aria-labelledby="kontakt-heading" className="bg-white relative px-[var(--section-px)] py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[var(--surface-secondary)]/50 backdrop-blur-lg z-[-1]"></div>
      <RevealSection className="mx-auto max-w-7xl">
        <SectionHeader
          pill="KONTAKT"
          headingId="kontakt-heading"
          title={<>Zwei Wege zu Ihrer <span className="text-[var(--color-red-500)]">Lösung</span></>}
        />

        <div className="grid lg:grid-cols-2 gap-[var(--space-8)] lg:gap-[var(--space-12)] mx-auto max-w-6xl">
          {/* Linker Pfad: Trust-Panel & Schnell via Phone */}
          <div className="bg-surface-elevated rounded-[var(--radius-16)] p-[var(--space-8)] shadow-[var(--elevation-2)] border border-[var(--color-charcoal-100)] flex flex-col justify-between h-full relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <Typography variant="h3" as="div" className="mb-4 text-[color:var(--text-primary)]">
                Fragen? <span className="text-[var(--color-red-500)]">Wir beraten Sie gerne.</span>
              </Typography>
              <Typography variant="body" color="secondary" className="mb-8 max-w-sm block">
                Rufen Sie uns an oder kommen Sie direkt im Laden vorbei. Persönliche Beratung vor Ort und 24/7 Schlüsseldienst-Notdienst und Festpreis am Telefon.
              </Typography>

              <a
                href="tel:+4964418056279"
                className="group flex items-center justify-center gap-3 w-full h-[64px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white typo-cta-button text-lg rounded-[var(--radius-12)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Phone className="w-5 h-5 group-hover:animate-ring transition-transform duration-300" />
                06441 8056279 anrufen
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[color:var(--text-primary)] font-semibold">
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                  <Clock className="w-4 h-4" />
                  <span>In 20-30 Min vor Ort</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  <Check className="w-4 h-4 text-[var(--color-red-500)]" />
                  <span>Fixpreis</span>
                </div>
              </div>
            </div>

            {/* Featured Testimonial Element */}
            <div className="mt-12 pt-8 border-t border-slate-100 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--color-google-gold)] fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Aus 44 Google Reviews</span>
              </div>
              <p className="italic text-base text-[color:var(--text-secondary)] font-medium leading-relaxed">
                &quot;Mitten in der Nacht ausgesperrt. Der Kollege war in 20 Minuten da, super freundlich, und die Tür war im Handumdrehen auf. Der am Telefon vereinbarte Festpreis wurde strikt eingehalten.&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-secondary rounded-full flex items-center justify-center text-xs font-bold text-slate-400">
                  LW
                </div>
                <span className="text-sm font-bold text-[color:var(--text-primary)]">Lukas Wagner</span>
              </div>
            </div>
          </div>

          {/* Rechter Pfad: Modernes Formular */}
          <div className="h-full">
            <ContactForm />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
