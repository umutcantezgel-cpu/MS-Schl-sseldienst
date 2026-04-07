import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import CalendlyWidget from "@/components/booking/CalendlyWidget";
import CalendlyConsentGate from "@/components/booking/CalendlyConsentGate";

export const metadata = generateSharedMetadata({
  title: "Termin buchen",
  description: "Buchen Sie hier direkt online einen Termin für Beratungen, Sicherheits-Checks, oder Schließanlagen-Planungen.",
  path: "/termin-buchen",
});

export default function TerminBuchenPage() {
  const breadcrumbs = [
    { name: "Termin buchen", href: "/termin-buchen" }
  ];

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-[var(--surface-secondary)] overflow-hidden">
        {/* CSS Noise Texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center max-w-4xl">
          <Breadcrumbs items={breadcrumbs} light={false} />
          
          <StaggerReveal className="mt-8 flex flex-col items-center w-full" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white border border-[var(--border-subtle)] text-[color:var(--text-secondary)] text-[14px] font-medium tracking-wide">
                <Calendar className="w-4 h-4 text-[var(--color-red-500)]" />
                <span>Digitale Terminbuchung</span>
              </div>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-6)]">
                Ihren Wunschtermin <span className="text-[var(--color-red-500)]">direkt online buchen.</span>
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="mx-auto mt-6 text-[18px] sm:text-[20px] text-[color:var(--text-secondary)] leading-relaxed text-balance">
                Wählen Sie Ihren passenden Termin für eine kostenlose Beratung zum Thema Sicherheitstechnik, Schließanlagen oder Einbruchschutz.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Main Content (Calendly + Info Sidebar) */}
      <section aria-label="Kalender und Informationen" className="px-[var(--section-px)] -mt-20 lg:-mt-24 pb-24 md:pb-32 relative z-20">
        <div className="mx-auto max-w-[1240px]">
          <StaggerReveal className="grid gap-8 lg:grid-cols-[1fr_400px] items-start" animation={entryAnimations.slideUpFade}>
            
            {/* LEFT: The Calendly Widget Wrapper */}
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="bg-white p-2 sm:p-4 rounded-[var(--radius-24)] shadow-[var(--elevation-2)] border border-[var(--border-subtle)] h-full min-h-[600px] flex flex-col">
                 <CalendlyConsentGate>
                   {/* Provide the actual Calendly link here */}
                   <CalendlyWidget 
                     url={process.env.NEXT_PUBLIC_CALENDLY_URL ? `${process.env.NEXT_PUBLIC_CALENDLY_URL}?timezone=Europe/Berlin` : ""} 
                   />
                 </CalendlyConsentGate>
              </div>
            </StaggerItem>

            {/* RIGHT: Contextual Information */}
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="bg-[var(--surface-secondary)] p-8 sm:p-10 rounded-[var(--radius-24)] shadow-[var(--elevation-1)] border border-[var(--border-subtle)] flex flex-col gap-8 h-full">
                
                <div>
                  <h3 className="typo-h3 text-[color:var(--text-primary)] mb-4">Warum einen Termin vereinbaren?</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-[15px] sm:text-[16px] text-[color:var(--text-secondary)]">Kostenlose und unverbindliche Beratung bei Ihnen vor Ort.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-[15px] sm:text-[16px] text-[color:var(--text-secondary)]">Planung von modernen Schließanlagen (mechanisch & elektronisch).</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-[15px] sm:text-[16px] text-[color:var(--text-secondary)]">Sicherheits-Check an Fenstern und Türen nach KfW/DIN Vorgaben.</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-[var(--border-subtle)]" />

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-red-900 text-lg">Haben Sie sich ausgesperrt?</h4>
                  </div>
                  <p className="text-red-800 text-[14px] leading-relaxed mb-4">
                    Bitte buchen Sie bei akuten Notfällen (Tür zugefallen, Schlüssel abgebrochen) <strong>keinen</strong> Termin online, sondern rufen Sie uns direkt an!
                  </p>
                  <a
                    href="tel:+4964418056279"
                    className="flex justify-center items-center w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-sm"
                  >
                    06441 8056279
                  </a>
                </div>

              </div>
            </StaggerItem>

          </StaggerReveal>
        </div>
      </section>

      {/* Trust & Emergency Footer */}
      <EmergencyCTA />
    </div>
  );
}

export const dynamic = "force-static";
