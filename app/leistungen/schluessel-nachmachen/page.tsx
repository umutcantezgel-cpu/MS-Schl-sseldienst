import { Key, ShieldCheck, Car, Check } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";

export default function SchluesselNachmachenPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <Breadcrumb currentSlug="/leistungen/schluessel-nachmachen" currentTitle="Schlüssel nachmachen" />
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Der perfekte Ersatzschlüssel in <span className="text-[var(--color-brand)]">Rekordzeit.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Vom einfachen Haustürschlüssel bis zum Autoschlüssel: Wir fertigen Ihr passgenaues Duplikat direkt vor Ort. Sparen Sie Zeit und Nerven mit unserem präzisen Sofort-Service in Wetzlar.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Welche Schlüssel wir nachmachen</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Wir bieten Ihnen eine schnelle und präzise Anfertigung von Ersatzschlüsseln für fast alle Schlosstypen mit modernsten Fräsmaschinen.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-6">
                <div className="text-[var(--color-brand)] bg-[var(--color-brand-light)] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Key className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] m-0">Standard-Schlüssel</h3>
                <p className="text-[var(--color-text-body)] text-sm m-0">
                  Einfache Haustür-, Zimmer- und Wohnungsschlüssel werden in wenigen Minuten direkt vor Ort kopiert.
                </p>
                <p className="text-[var(--color-brand)] font-bold m-0">ab 8,50 €</p>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-6">
                <div className="text-[var(--color-brand)] bg-[var(--color-brand-light)] w-12 h-12 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] m-0">Sicherheitsschlüssel</h3>
                <p className="text-[var(--color-text-body)] text-sm m-0">
                  Hochwertige Sicherheitsschlüssel für geschützte Schließanlagen (nur gegen Vorlage der Sicherungskarte).
                </p>
                <p className="text-[var(--color-brand)] font-bold m-0">Preis auf Anfrage</p>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-6">
                <div className="text-[var(--color-brand)] bg-[var(--color-brand-light)] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Car className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] m-0">Fahrzeugschlüssel</h3>
                <p className="text-[var(--color-text-body)] text-sm m-0">
                  Ersatzschlüssel für Autos und Motorräder (viele Modelle, auch mit Wegfahrsperre/Transponder möglich).
                </p>
                <p className="text-[var(--color-brand)] font-bold m-0">ab 45,00 €</p>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">So einfach geht&apos;s in unserem Ladengeschäft</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Bringen Sie Ihr Original:</strong> Kommen Sie einfach während der Öffnungszeiten mit dem zu kopierenden Schlüssel vorbei.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Warten Sie kurz:</strong> Die meisten Standard-Schlüssel fräsen wir direkt vor Ihren Augen in wenigen Minuten.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Fertiges Duplikat:</strong> Sie erhalten Ihren passgenauen Ersatzschlüssel zu fairen und transparenten Preisen.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="schluessel-nachmachen" />
      <EmergencyCTA />
    </div>
  );
}
