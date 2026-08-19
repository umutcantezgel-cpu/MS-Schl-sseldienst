import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { getGenericPageGraphSchema } from "@/lib/schema";
import Link from "next/link";
import { Phone, Mail, Clock, ShieldCheck, Check, FileText, HelpCircle, Building } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Unverbindliche Anfrage | Schlüsseldienst Wetzlar",
  description: "Fordern Sie jetzt ein kostenloses und unverbindliches Angebot für Schlüsseldienst-Leistungen, Sicherheitstechnik oder Einbruchschutz in Wetzlar an.",
  path: "/anfrage",
  exactTitle: true,
});

export default function AnfragePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <JsonLd data={getGenericPageGraphSchema({
        title: "Unverbindliche Anfrage | Schlüsseldienst Wetzlar",
        description: "Kostenloses und unverbindliches Angebot für Schlüsseldienst und Sicherheitstechnik in Wetzlar anfordern.",
        url: "/anfrage",
        pageType: "ContactPage",
        breadcrumbs: [
          { name: "Startseite", url: "/" },
          { name: "Anfrage", url: "/anfrage" }
        ]
      })} />
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Unverbindliches Angebot anfragen | Schlüsseldienst Wetzlar. Unverbindliche Angebot-Anfrage | Schlüsseldienst Wetzlar.</div>
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
          <Breadcrumbs items={[{ name: "Anfrage", href: "/anfrage" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Unverbindliche Angebot-Anfrage | Schlüsseldienst Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Sie möchten ein individuelles Angebot anfragen bei der Schlüssel Schmiede Wetzlar? Beschreiben Sie Ihr Anliegen für Türöffnungen, Schließanlagen, Zylinderwechsel oder Einbruchschutz. Sie erhalten innerhalb von 30 Minuten eine kostenlose, transparente Aufstellung mit Festpreisgarantie.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Options & Detailed Content */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Quick Choice Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Option 1: Direct Call */}
            <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Schnellstes Sofortangebot per Telefon
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Wenn Sie ein sofortiges Angebot anfragen möchten für akute Schlüsselnotfälle, Türöffnungen oder Zylinderwechsel in Wetzlar und Umgebung, ist der telefonische Kontakt der beste Weg. Unsere Disponenten berechnen Ihren verbindlichen Festpreis in 2 Minuten am Telefon.
                </p>
              </div>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md gap-2"
              >
                <Phone className="w-5 h-5" /> 06441 8056279 anrufen
              </a>
            </div>

            {/* Option 2: Written Contact Form */}
            <div className="p-8 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Schriftliches Festpreis-Angebot anfragen
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Für geplante Maßnahmen wie Schließanlagen, Sicherheitstechnik, Fenstersicherungen oder Tresorberatungen nutzen Sie unser digitales Kontaktformular. Wir erstellen Ihnen ein detailliertes, schriftliches Angebot für Ihr Objekt in Wetzlar.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl border-2 border-[var(--color-red-500)] text-[var(--color-red-500)] font-bold hover:bg-[var(--color-red-500)] hover:text-white transition-colors"
              >
                Zum Kontaktformular
              </Link>
            </div>
          </div>

          {/* Guide: Required Information for an Accurate Quote */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[var(--color-red-500)]" />
              Welche Angaben benötigen wir für Ihr Angebot?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Wenn Sie bei der Schlüssel Schmiede Wetzlar ein Angebot anfragen, helfen uns präzise Angaben dabei, die Kosten noch exakter und transparenter für Sie zu kalkulieren. Ihr Schlüsseldienst Wetzlar achtet auf eine faire Preisgestaltung ohne unvorhergesehene Zuschläge.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" /> Tür- & Schlosstyp
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Handelt es sich um eine Standard-Wohnungstür, eine Haustür mit Mehrfachverriegelung, eine Sicherheitstür oder eine Fahrzeugtür? Ist die Tür lediglich ins Schloss gefallen oder abgeschlossen?
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" /> Einsatzort & PLZ
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nennen Sie uns den genauen Ortsteil in Wetzlar (z.B. Dalheim, Nauborn, Hermanstein) oder die Gemeinde im Lahn-Dill-Kreis (z.B. Aßlar, Solms, Hüttenberg), um die Anfahrt exakt einzuberechnen.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" /> Dringlichkeit & Wunschtermin
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Handelt es sich um einen sofortigen 24/7 Notfalleinsatz oder möchten Sie einen Beratungstermin für Schlossaustausch oder Einbruchschutz in den kommenden Tagen buchen?
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" /> Fotos per WhatsApp / E-Mail
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Gerne können Sie uns auch Fotos der Tür, des Zylinders oder des Beschlags per E-Mail oder Messenger zusenden. So erkennen unsere Handwerker sofort alle technischen Besonderheiten.
                </p>
              </div>
            </div>
          </div>

          {/* Commercial & Property Management Inquiries */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-[var(--color-red-500)]" /> Angebote für Firmenkunden & Hausverwaltungen
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Für Gewerbebetriebe, Hausverwaltungen, Immobilienmakler und öffentliche Einrichtungen in Wetzlar und im Lahn-Dill-Kreis bieten wir spezialisierte Rahmenkonditionen. Ob mechatronische Schließanlagen, Generalschlüssel-Systeme oder regelmäßige Wartungsverträge – stellen Sie Ihre Firmenanfrage direkt an Geschäftsleitung Mina Saad.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800 pt-2">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Kauf auf Rechnung für Stammkunden</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Ausgewiesene MwSt. auf allen Rechnungen</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Erfahrene Sicherheitsexperten vor Ort</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Schnelle Terminvereinbarung & Montage</li>
            </ul>
          </div>

          {/* Guarantee and Trust */}
          <div className="text-center space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900">
              Garantierter Datenschutz & Transparenz
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ihre Daten werden vertraulich behandelt und ausschließlich zur Angebotserstellung gemäß DSGVO verarbeitet. Wenn Sie ein Angebot anfragen, gehen Sie keinerlei Kaufverpflichtung ein. Der Schlüsseldienst Wetzlar steht für Ehrlichkeit, Transparenz und echtes Handwerk.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
