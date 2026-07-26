import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import EmergencyCTA from "@/components/EmergencyCTA";
import { Calendar, Clock, ShieldCheck, Phone, Check, AlertTriangle, Wrench, FileText } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Termin online buchen | Schlüsseldienst Wetzlar",
  description: "Buchen Sie Ihren Beratungstermin für Schlosswechsel, Schließanlagen oder Einbruchschutz bequem online bei der Schlüssel Schmiede Wetzlar.",
  path: "/termin-buchen",
});

export default function TerminBuchenPage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
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
          <Breadcrumbs items={[{ name: "Termin buchen", href: "/termin-buchen" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Online Termin buchen | Schlüsseldienst Wetzlar
              </h1>
            </StaggerItem>
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Vereinbaren Sie Ihren Wunschtermin für geplante Handwerksleistungen rund um Schloss, Schlüssel und Sicherheitstechnik in Wetzlar. Ob Schlosswechsel, Einbruchschutz-Beratung oder Schließanlagen-Planung – Ihr Schlüsseldienst Wetzlar ist verlässlich für Sie da.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </section>

      {/* Main Appointment Options & Explanations */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Important Warning Notice for Emergencies */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Achtung bei akuten Notfällen!</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Wenn Sie aktuell ausgesperrt sind oder sich der Schlüssel im Schloss gedreht hat, buchen Sie bitte <strong className="text-red-700">keinen Termin online</strong> für die Zukunft! Für Soforteinsätze ist unser 24/7 Schlüsselnotdienst in Wetzlar direkt per Telefon erreichbar.
              </p>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold transition-all shadow-md gap-2"
              >
                <Phone className="w-4 h-4" /> 06441 8056279 (Notdienst 24/7)
              </a>
            </div>
          </div>

          {/* Appointment Types Grid */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Für welche Leistungen können Sie einen Termin buchen?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Service 1: Schlosswechsel */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schlosswechsel & Zylindertausch</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sie möchten alte Türzylinder austauschen, z.B. nach einem Mieterwechsel, Schlüsselverlust oder Einzug ins neue Eigenheim? Buchen Sie Ihren Wunschtermin für den fachgerechten Schlosswechsel in Wetzlar und Umgebung.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Inklusive Ausmessen vor Ort</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Hochwertige Markenzylinder (Abus, BKS, CES)</li>
                </ul>
              </div>

              {/* Service 2: Einbruchschutz Beratung */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Einbruchschutz-Beratung vor Ort</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sichern Sie Ihr Haus oder Ihre Wohnung ab. Ein Sicherheitsexperte analysiert Ihre Türen und Fenster vor Ort in Wetzlar und empfiehlt Panzerriegel, Zusatzschlösser oder Schutzbeschläge.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Kostenfreie Schwachstellen-Analyse</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Beratung zu KfW-Förderzuschüssen</li>
                </ul>
              </div>

              {/* Service 3: Schließanlagen */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schließanlagen-Planung</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Für Mehrfamilienhäuser, Gewerbeobjekte oder Praxisräume planen wir maßgeschneiderte Schließsysteme mit individuellen Zutrittsrechten und Sicherungskarte.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Mechanische & elektronische Systeme</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Erstellung eines Schließplans</li>
                </ul>
              </div>

              {/* Service 4: Ladenbesuch Filiale */}
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Filial-Termin in Wetzlar</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Besuchen Sie uns in unserem Fachgeschäft in der Langgasse 70, 35576 Wetzlar. Wenn Sie einen Termin buchen, reservieren wir Ihnen einen persönlichen Berater für Spezialschlüssel oder Gravuren.
                </p>
                <ul className="text-xs text-gray-700 space-y-1 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Langgasse 70, 35576 Wetzlar</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Barrierefreier Zugang & Parkmöglichkeiten</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Booking Methods & Form Guidance */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">So einfach buchen Sie Ihren Termin</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Beim Schlüsseldienst Wetzlar verläuft die Terminbuchung schnell und transparent. Wenn Sie online einen Termin buchen oder uns telefonisch kontaktieren, erhalten Sie vorab eine verbindliche Zeitbestätigung.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100 text-center">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold mx-auto flex items-center justify-center text-sm">1</div>
                <h3 className="font-bold text-gray-900 text-sm">Leistung wählen</h3>
                <p className="text-xs text-gray-600">Wählen Sie den gewünschten Service und beschreiben Sie Ihr Anliegen kurz.</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold mx-auto flex items-center justify-center text-sm">2</div>
                <h3 className="font-bold text-gray-900 text-sm">Wunschzeit wählen</h3>
                <p className="text-xs text-gray-600">Geben Sie Ihren präferierten Tag und Uhrzeit für den Einsatz in Wetzlar an.</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-red-500)] text-white font-bold mx-auto flex items-center justify-center text-sm">3</div>
                <h3 className="font-bold text-gray-900 text-sm">Bestätigung erhalten</h3>
                <p className="text-xs text-gray-600">Wir bestätigen Ihren Termin innerhalb von 30 Minuten verbindlich per E-Mail oder Anruf.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-md"
              >
                Terminanfrage absenden
              </Link>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors gap-2"
              >
                <Phone className="w-4 h-4" /> Telefonisch buchen: 06441 8056279
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Emergency Footer */}
      <EmergencyCTA 
        title="Dringender Schlüsselnotfall? Nicht auf Termin warten!" 
        description="Bei akuter Aussperrung rufen Sie direkt unsere 24/7 Hotline an – unser Techniker kommt sofort." 
        subtext="Keine Terminbuchung bei Notfällen nötig · Sofortige Anfahrt" 
      />
    </div>
  );
}

export const dynamic = "force-static";
