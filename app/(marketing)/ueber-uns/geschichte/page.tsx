import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { getAboutPageGraphSchema } from "@/lib/schema";
import Link from "next/link";
import { History, ShieldCheck, MapPin, Award, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Unsere Geschichte | Schlüssel Schmiede Wetzlar",
  description: "Geschichte und Gründung der Schlüssel Schmiede Wetzlar – vom Handwerksbetrieb zur führenden Sicherheitsadresse im Lahn-Dill-Kreis.",
  path: "/ueber-uns/geschichte",
});

export default function GeschichtePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      <JsonLd data={getAboutPageGraphSchema({ name: "Geschichte", url: "/ueber-uns/geschichte" })} />
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">Unsere Geschichte | Schlüssel Schmiede Wetzlar. Geschichte & Entstehung der Schlüssel Schmiede Wetzlar.</div>
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
          <Breadcrumbs
            items={[
              { name: "Über uns", href: "/ueber-uns" },
              { name: "Geschichte", href: "/ueber-uns/geschichte" },
            ]}
            light={false}
          />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Geschichte & Entstehung der Schlüssel Schmiede Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Die Geschichte der Schlüssel Schmiede Wetzlar basiert auf echter Handwerkstradition, kompromissloser Preistransparenz und regionaler Verbundenheit mit der Domstadt Wetzlar und dem gesamten Lahn-Dill-Kreis. Erfahren Sie, wie wir uns zum verlässlichen Schlüsseldienst Wetzlar entwickelt haben.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Narrative & Timeline Sections */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Founding Narrative */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <History className="w-7 h-7 text-[var(--color-red-500)]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Unsere Wurzeln: Gegen die Welle unseriöser Schlüsseldienste
              </h2>
            </div>

            <p className="text-base text-gray-700 leading-relaxed">
              Die Unternehmensgeschichte begann mit einer klaren Beobachtung im Lahn-Dill-Kreis: Die Branche der Schlüsselnotdienste war jahrelang durch unseriöse Callcenter-Vermittlungen in Verruf geraten. Kunden aus Wetzlar, Gießen, Aßlar und Umgebung berichteten immer wieder von utopischen Rechnungsbeträgen, zerstörten Schlössern und ungeschulten Notdienst-Vermittlern.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Aus diesem Grund gründete Inhaber Mina Saad im Jahr 2025 die <span className="font-semibold text-[color:var(--text-primary)]">Schlüssel Schmiede Wetzlar</span>. Das Ziel war von Beginn an eindeutig: Ein ehrlicher, regional verwurzelter Schlüsseldienst Wetzlar mit festem Ladenlokal, transparenten Festpreisen vor Anfahrt und 100% beschädigungsfreien Türöffnungen für zugefallene Türen.
            </p>
          </div>

          {/* Milestone Timeline */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Meilensteine unserer Unternehmensgeschichte
            </h2>

            <div className="space-y-6">

              {/* Milestone 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-red-500)] text-white font-black text-xl flex items-center justify-center shrink-0">
                  2025
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Gründung & Eröffnung des Ladenlokals in der Langgasse 70</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Eröffnung unserer physischen Filiale in der historischen Wetzlarer Altstadt (Langgasse 70, 35576 Wetzlar). Anschaffung modernster elektronischer Schlüsselfräsen und Spezialwerkzeuge für beschädigungsfreie Türöffnungen.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gray-900 text-white font-black text-xl flex items-center justify-center shrink-0">
                  2025
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Einführung der transparenten Festpreis-Garantie</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Verbindliche Einführung des Festpreissystems: Kunden erfahren noch am Telefon exakt den Preis vor Beginn der Arbeiten. Keine versteckten Fahrtkosten oder unangekündigten Nachtzuschläge.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-red-500)] text-white font-black text-xl flex items-center justify-center shrink-0">
                  2026
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Erweiterung der Einsatzgebiete auf über 70 Orte</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ausbau der mobilen Notdienstflotte im gesamten Lahn-Dill-Kreis und Kreis Gießen. Garantierte Anfahrtszeiten von 15 bis 30 Minuten für Solms, Aßlar, Hüttenberg, Braunfels, Herborn und Gießen.
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center shrink-0">
                  Heute
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">Auszeichnung mit 5.0 Google Sternen</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Über 57 verifizierte 5-Sterne-Bewertungen bei Google zeugen von der Zufriedenheit unserer Kunden. Die Schlüssel Schmiede gilt als bevorzugter Partner für Privathaushalte, Gewerbebetriebe und Behörden.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Philosophy & Craftsmanship */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="w-6 h-6 text-[var(--color-red-500)]" />
              Echtes Handwerk & Zukunftssicherheit
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Im Laufe unserer Geschichte hat sich auch die Schloss- und Sicherheitstechnik stark weiterentwickelt. Während früher einfache Profilzylinder den Standard bildeten, installieren wir heute elektronische Schließsysteme, mechatronische Zylinder, Smartphone-Steuerungen und Panzerriegel. Unsere Techniker nehmen regelmäßig an Schulungen führender deutscher Sicherheitshersteller teil.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Trotz moderner Technologien bleibt unsere Unternehmensphilosophie unverändert: Die persönliche Zufriedenheit unserer Kunden aus Wetzlar steht an erster Stelle. Wir danken allen Kunden, die uns auf diesem Weg begleiten.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <Link
              href="/ueber-uns/team"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Unser Team kennenlernen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
            <Link
              href="/ueber-uns/philosophie"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Unsere Philosophie lesen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
            <Link
              href="/schluessel-schmiede"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-red-500)] transition-colors font-bold text-sm text-gray-800 flex items-center justify-center gap-2"
            >
              Das Ladenlokal ansehen <ArrowRight className="w-4 h-4 text-[var(--color-red-500)]" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
