import { MapPin, Check, Clock } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Link from "next/link";
import { stadtgebiete } from "@/lib/stadtgebiete";
import { Card } from "@/components/ui/card";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Servicegebiet — Einsatzgebiete rund um Wetzlar",
  description: "Schlüsseldienst Wetzlar: Aßlar, Solms, Hüttenberg, Lahnau und weitere Einsatzgebiete. 15–30 Min. Anfahrt, Festpreise ohne versteckte Kosten.",
  path: "/servicegebiet",
});

export default function ServicegebietPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Servicegebiet Übersicht" className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Unser <span className="text-[var(--color-brand)]">Servicegebiet</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Wir sind Ihr lokaler Schlüsseldienst für Wetzlar und die direkte
            Umgebung. Schnell vor Ort, wenn Sie uns brauchen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section aria-label="Einsatzgebiete im Detail" className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Schlüsselnotdienst in Ihrer Nähe – Unsere Einsatzgebiete
            </h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Wir sind für Sie in folgenden Städten und Regionen schnell und zuverlässig im Einsatz. Garantiert ohne versteckte Anfahrtskosten.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stadtgebiete.map((gebiet) => (
                <Link key={gebiet.slug} href={`/${gebiet.slug}`} className="group">
                  <Card className="flex flex-col gap-1 p-4 hover:-translate-y-1 hover:border-[var(--color-brand-muted)] hover:shadow-[var(--shadow-lift)] transition-all duration-300 ease-out">
                    <div className="flex items-center gap-2 font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors">
                      <MapPin className="h-5 w-5 text-[var(--color-brand)] shrink-0" aria-hidden="true" />
                      {gebiet.name} ({gebiet.plz})
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--color-brand)] pl-7">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                      15–30 Min. Anfahrt
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-[var(--color-surface-subtle)]">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-8 w-8 shrink-0 text-[var(--color-brand)]" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Kalkulierbare Ankunft: 15–30 Minuten
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    In Notsituationen zählt jede Minute. Dank unserer strategischen Positionierung in Wetzlar sind wir in der Lage, jeden Punkt in unserem Kern-Einsatzgebiet innerhalb von <strong className="text-[var(--color-brand)] font-bold">15 bis 30 Minuten</strong> zu erreichen.
                  </p>
                  <h4 className="mt-6 text-lg font-bold text-[var(--color-text-primary)]">Warum wir besonders schnell sind</h4>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Dank unserer lokalen Präsenz und ausgeklügelten Einsatzkoordination sind wir in der Lage, im gesamten Lahn-Dill-Kreis besonders schnell vor Ort zu sein. Unsere Monteure sind dezentral stationiert.
                  </p>
                  <h4 className="mt-6 text-lg font-bold text-[var(--color-text-primary)]">Service auch über die Region hinaus</h4>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Falls Ihr Wohnort nicht in unserer Liste der Einsatzgebiete auftaucht, kontaktieren Sie uns einfach. Wir finden eine schnelle Lösung, um Ihnen auch in Randgebieten zu helfen.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA />
      </aside>
    </>
  );
}
