import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ShieldCheck, Key, Store, Award, CheckCircle2, Navigation } from "lucide-react";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { werkstattImages } from "@/lib/data/imageAssets";

export const metadata = generateSharedMetadata({
  title: "Schlüssel Schmiede Wetzlar | Filiale & Fachgeschäft",
  description: "Besuchen Sie unser Ladenlokal in der Langgasse 70, 35576 Wetzlar. Schlüssel nachmachen, Schließzylinder kaufen & Vor-Ort-Sicherheitsberatung.",
  path: "/schluessel-schmiede",
});

export default function SchlüsselSchmiedePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Schlüssel Schmiede Wetzlar | Filiale & Fachgeschäft. Schlüssel Schmiede Wetzlar | Ihr Ladenlokal in der Langgasse 70.</div>
      {/* Hero */}
      <section className="relative pt-[180px] pb-[100px] lg:pt-[220px] lg:pb-[140px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ name: "Schlüssel Schmiede Filiale", href: "/schluessel-schmiede" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Schlüssel Schmiede Wetzlar | Ihr Ladenlokal in der Langgasse 70
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Willkommen bei der Schlüssel Schmiede Wetzlar. Besuchen Sie unser modernes Ladengeschäft mitten in der Altstadt von Wetzlar. Hier bieten wir Ihnen Sofort-Schlüsseldienst, Gravuren, Zylinder-Kauf und persönliche Einbruchschutz-Beratung direkt vor Ort.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Filial Content */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-16">

          {/* Location Details & Shop Overview */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-[var(--border-subtle)] rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Store className="w-7 h-7 text-[var(--color-red-500)]" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Unser Fachgeschäft in Wetzlar
                </h2>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                Die Schlüssel Schmiede Wetzlar ist Ihr meistergeführter Fachbetrieb in der Langgasse 70. Im Gegensatz zu reinen Online-Vermittlern verfügen wir über eine physische Werkstatt mit modernsten Präzisionsfräsen für Zylinderschlüssel, Fahrzeugschlüssel mit Transponder und Sicherheitsschlüssel mit Sicherungskarte.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Als etablierter Schlüsseldienst Wetzlar freuen wir uns darauf, Sie persönlich zu beraten. Wir haben stets eine große Auswahl an Sicherheitszylindern, Vorhangschlössern, Tür-Zusatzschlössern und Pflegemitteln auf Lager.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                  <MapPin className="w-5 h-5 text-[var(--color-red-500)] shrink-0" />
                  <span>Langgasse 70, 35576 Wetzlar</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
                  <Clock className="w-5 h-5 text-[var(--color-red-500)] shrink-0" />
                  <span>Öffnungszeiten: Mo–Fr 09:00–18:00 Uhr | Sa nach Vereinbarung</span>
                </div>
              </div>
            </div>

            {/* Shop Image */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <SeoContentImage
                image={werkstattImages[0]!}
                className="w-full h-[320px] object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* On-Site Services Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Unsere Vor-Ort-Leistungen in der Filiale
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {/* Service 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schlüssel nachmachen im Sofortdienst</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Zweitschlüssel für Haustüren, Zimmertüren, Vorhangschlösser und Briefkästen werden in wenigen Minuten in unserer Werkstatt präzise kopiert. Dank moderner CNC-Fräsen fertigen wir Ersatzschlüssel mit höchster Passgenauigkeit an, die sofort einsatzbereit sind.
                </p>
              </div>

              {/* Service 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Zylinder- & Schlossverkauf</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kaufen Sie hochwertige Profilzylinder von ABUS, BKS oder CES mit Not- und Gefahrenfunktion inklusive fachlicher Beratung vor Ort. Wir erklären Ihnen die Unterschiede zwischen verschiedenen Sicherheitsstufen und finden das perfekte Schloss für Ihr Zuhause.
                </p>
              </div>

              {/* Service 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Uhren- & Batteriewechsel</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fachgerechter Batteriewechsel für Armbanduhren, Autoschlüssel-Fernbedienungen und Garagentoröffner zum günstigen Festpreis. Wir führen alle gängigen Knopfzellen und Batterietypen für elektronische Kleingeräte auf Lager.
                </p>
              </div>
              
              {/* Service 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sicherheitsberatung</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kostenlose Erstberatung in unserer Filiale zum Thema Einbruchschutz. Wir zeigen Ihnen mechanische und elektronische Sicherungssysteme, Panzerriegel und smarte Alarmanlagen direkt an unseren Ausstellungsstücken in der Langgasse 70.
                </p>
              </div>
              
              {/* Service 5 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schließanlagen-Planung</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Für Mehrfamilienhäuser und Gewerbebetriebe planen wir komplexe Schließanlagen. Wir erstellen Schließpläne, konfigurieren die Zylinderlängen und übernehmen auf Wunsch auch die Montage und langfristige Wartung der Anlage.
                </p>
              </div>

            </div>
          </div>

          {/* Directions & Contact Box */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-[var(--color-red-500)]" />
              So erreichen Sie die Schlüssel Schmiede Wetzlar
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Unser Ladenlokal in der Langgasse 70 befindet sich gut erreichbar im Zentrum von Wetzlar. Öffentliche Parkmöglichkeiten und Bushaltestellen befinden sich in unmittelbarer Nähe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://maps.google.com/?q=Langgasse+70+35576+Wetzlar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md gap-2"
              >
                <Navigation className="w-5 h-5" /> Anfahrt zur Schlüssel Schmiede in der Langgasse 70 Wetzlar planen
              </a>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors gap-2"
              >
                <Phone className="w-5 h-5" /> Filiale anrufen: 06441 8056279
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
