import { Key, Building, ShieldCheck, Check } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";

export default function SchliessanlagenPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <Breadcrumb currentSlug="/leistungen/schliessanlagen" currentTitle="Schließanlagen" />
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Volle Kontrolle, <span className="text-[var(--color-brand)]">minimaler Aufwand.</span> Intelligente Schließanlagen.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Behalten Sie den Überblick und sichern Sie Ihr Objekt mit einem System, das mitdenkt. Wir planen und installieren passgenaue Schließanlagen für maximalen Komfort und kompromisslose Sicherheit.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Komfort und Sicherheit</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Eine Schließanlage organisiert Zugangsberechtigungen effizient. Ein Hauptschlüssel öffnet alle Türen, während individuelle Schlüssel nur für spezifische Bereiche berechtigt sind. Ideal für komplexe Gebäudestrukturen.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Für Gewerbe & Verwaltung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Sichere und verwaltbare Systeme für Mehrfamilienhäuser, Bürogebäude und Produktionsstätten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Weniger Schlüssel</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Reduzieren Sie den Schlüsselbund auf ein Minimum. Ein einziger Schlüssel reicht für alle autorisierten Zugänge.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">In 4 Schritten zu Ihrer Schließanlage</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Erstberatung:</strong> Analyse Ihrer Anforderungen vor Ort in Wetzlar.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Schließplan:</strong> Erstellung eines detaillierten Berechtigungskonzepts.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Fertigung:</strong> Maßgenaue Produktion durch unsere Markenpartner.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Installation:</strong> Fachgerechter Einbau und Schlüsselübergabe.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="schliessanlagen" />
      <EmergencyCTA />
    </div>
  );
}
