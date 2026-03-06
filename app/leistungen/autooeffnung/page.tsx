import { Car, ShieldCheck, Clock, Check } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";

export default function AutooeffnungPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <Breadcrumb currentSlug="/leistungen/autooeffnung" currentTitle="Autoöffnung" />
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Sofort wieder <span className="text-[var(--color-brand)]">mobil.</span> Zerstörungsfreie Autoöffnung.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Ihr Autoschlüssel ist eingeschlossen? Wir öffnen Ihr Fahrzeug schnell, professionell und garantiert ohne Lackkratzer – damit Sie Ihre Fahrt stressfrei fortsetzen können.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Schlüssel im Auto vergessen?</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Ein kurzer Moment der Unachtsamkeit und schon ist es passiert: Der Autoschlüssel liegt im Fahrzeug und die Türen sind verriegelt. Oder die Zentralverriegelung streikt plötzlich. In solchen Fällen sind wir Ihr zuverlässiger Partner in Wetzlar und Umgebung.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Alle Marken & Modelle</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Egal ob VW, Audi, BMW, Mercedes oder andere Marken – wir haben das Know-how und das Spezialwerkzeug für nahezu jedes Fahrzeug.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">100% Zerstörungsfrei</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Wir öffnen Ihr Auto garantiert ohne Beschädigung an Lack, Elektronik oder Schloss. Wir verwenden Luftkissen und spezielle kunststoffummantelte Werkzeuge.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Der Ablauf</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Anruf:</strong> Schildern Sie uns Ihr Problem sowie Marke und Modell.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Festpreis:</strong> Wir nennen Ihnen am Telefon einen garantierten Festpreis.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Anfahrt:</strong> Wir sind in der Regel innerhalb von 20-30 Minuten bei Ihnen vor Ort in Wetzlar.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Öffnung:</strong> Wir öffnen Ihr Auto professionell, zügig und ohne Beschädigung.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="autooeffnung" />
      <EmergencyCTA />
    </div>
  );
}
