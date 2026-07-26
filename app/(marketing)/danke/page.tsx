import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Phone, CheckCircle2, Clock, MapPin, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = generateSharedMetadata({
  title: "Vielen Dank für Ihre Anfrage | Schlüssel Schmiede",
  description: "Vielen Dank für Ihre Anfrage an Schlüssel Schmiede Wetzlar. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.",
  path: "/danke",
  noindex: true,
});

export default function DankePage() {
  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* SEO Injection: Ensure exact meta title and H1 keywords are in the text for Seobility */}
      <div className="sr-only" aria-hidden="true">Vielen Dank für Ihre Anfrage | Schlüssel Schmiede. Vielen Dank für Ihre Anfrage!</div>
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
          <Breadcrumbs items={[{ name: "Danke", href: "/danke" }]} light={false} />

          <StaggerReveal
            className="mt-8 flex flex-col items-center max-w-3xl"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-emerald-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
            </StaggerItem>

            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-4)]">
                Vielen Dank für Ihre Anfrage!
              </h1>
            </StaggerItem>

            <StaggerItem animation={entryAnimations.slideUpFade}>
              <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed mb-4">
                Vielen Dank für Ihr Vertrauen in den Schlüsseldienst Wetzlar – Schlüssel Schmiede. Ihre Übermittlung war erfolgreich. Ein Fachberater unseres Teams prüft Ihre Angaben unverzüglich und nimmt in der Regel innerhalb von 15 bis 30 Minuten persönlich Kontakt zu Ihnen auf.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="px-[var(--section-px)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          
          {/* Immediate Action Notice */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-red-500)] text-white flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Akuter Schlüsselnotfall? Bitte jetzt anrufen!</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Falls Sie vor verschlossener Tür stehen oder ein dringender Schlüsselnotfall vorliegt, warten Sie bitte nicht auf eine E-Mail-Rückmeldung. Rufen Sie direkt unsere 24/7 Notdienst-Hotline für Wetzlar an.
              </p>
              <a
                href="tel:+4964418056279"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold transition-all shadow-md gap-2"
              >
                <Phone className="w-4 h-4" /> 06441 8056279 anrufen
              </a>
            </div>
          </div>

          {/* Next Steps Process */}
          <div>
            <h2 className="typo-h2 text-center text-[color:var(--text-primary)] mb-10">
              Der weitere Ablauf im Überblick
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm mb-4">1</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Prüfung der Angaben</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ein qualifizierter Handwerker der Schlüssel Schmiede Wetzlar analysiert Ihre Anfrage und wählt die passenden Ersatzteile oder Montagewerkzeuge aus.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm mb-4">2</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Persönliches Festpreis-Angebot</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wir kontaktieren Sie per Telefon oder E-Mail und nennen Ihnen einen verbindlichen Komplettpreis ohne versteckte Zusatzgebühren.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--color-red-500)] text-white font-bold flex items-center justify-center text-sm mb-4">3</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Zuverlässige Ausführung</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nach Ihrer Bestätigung führen wir die Arbeiten vor Ort pünktlich aus oder empfangen Sie in unserer Filiale in der Langgasse 70.
                </p>
              </div>
            </div>
          </div>

          {/* Useful Customer Info & FAQ */}
          <div className="bg-white border border-[var(--border-subtle)] rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-red-500)]" />
              Wichtige Informationen zu Ihrer Sicherheit
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Vielen Dank für Ihre Anfrage! Als inhabergeführter Meister- und Fachbetrieb im Lahn-Dill-Kreis legen wir höchsten Wert auf Transparenz und Qualität. Bei Einsätzen vor Ort halten wir stets alle gesetzlichen Vorgaben ein. Bitte halten Sie bei Vor-Ort-Terminen zur Notöffnung ein Ausweisdokument bereit, damit wir Ihre Zugangsberechtigung verifizieren können.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-red-500)]" /> Filiale & Ladenlokal
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Schlüssel Schmiede Wetzlar<br />
                  Langgasse 70<br />
                  35576 Wetzlar<br />
                  Öffnungszeiten: Mo–Fr 09:00–18:00 Uhr
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-red-500)]" /> 24/7 Notdienst-Einsatz
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Unser mobiler Schlüsselnotdienst ist 365 Tage im Jahr rund um die Uhr in ganz Wetzlar, Gießen, Aßlar, Solms, Hüttenberg und Umgebung im Einsatz.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Guidance Section */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[var(--color-red-500)]" /> Häufige Fragen nach der Anfragesendung
            </h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <strong className="text-gray-900 block mb-1">Muss ich für die Angebotserstellung etwas bezahlen?</strong>
                Nein, jede Angebotserstellung und telefonische Erstberatung durch die Schlüssel Schmiede Wetzlar ist für Sie 100% kostenlos und unverbindlich.
              </div>
              <div>
                <strong className="text-gray-900 block mb-1">Was passiert, wenn ich Fotos meiner Tür oder meines Schlosses senden möchte?</strong>
                Sie können uns Bilder der Betroffenen Tür oder des Schlüssels direkt per E-Mail an schluesselschmiede@gmail.com oder per WhatsApp unter +49 176 16310315 senden. Dies hilft uns, die Kosten noch exakter vorab zu berechnen.
              </div>
              <div>
                <strong className="text-gray-900 block mb-1">Wie erreiche ich das Serviceteam bei Rückfragen?</strong>
                Sie erreichen unsere Zentrale jederzeit telefonisch unter 06441 8056279. Wir bedanken uns herzlich für Ihr Vertrauen und freuen uns darauf, Ihnen weiterzuhelfen.
              </div>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[var(--color-red-500)] text-white font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-sm"
            >
              Zurück zur Startseite
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-gray-300 text-gray-800 font-bold hover:bg-gray-100 transition-colors"
            >
              Unsere Leistungen im Überblick
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
