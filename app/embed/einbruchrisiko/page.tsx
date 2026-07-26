import RiskCalculator from "@/components/growth/RiskCalculator";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Einbruchrisiko Rechner | Schlüsseldienst Wetzlar",
  description: "Interaktive Einbruchrisikoanalyse der Schlüssel Schmiede Wetzlar. Berechnen Sie das Sicherheitsniveau Ihrer Immobilie in wenigen Schritten.",
  path: "/embed/einbruchrisiko",
  noindex: true,
});

export default function EmbedEinbruchrisiko() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer, .sticky-cta-bar, .mobile-bottom-bar, button[aria-label="Zurück zum Anfang"], nav { display: none !important; }
        body { background: transparent !important; }
        main { padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; }
      `}} />
      <div className="w-full h-full bg-transparent p-4 font-sans max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-extrabold text-gray-900 text-center">
          Einbruchrisiko Rechner | Einbruchrisikoanalyse Wetzlar
        </h1>

        <div className="text-sm text-gray-700 leading-relaxed bg-white/90 p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
          <p>
            Willkommen beim interaktiven <strong>Einbruchrisiko Rechner</strong> der Schlüssel Schmiede Wetzlar. Mit diesem Werkzeug können Hausbesitzer, Mieter und Gewerbetreibende in Wetzlar und im Lahn-Dill-Kreis das individuelle Sicherheitsniveau ihrer Immobilie ermitteln.
          </p>
          <p>
            Einbrüche geschehen meist in wenigen Minuten über unzureichend gesicherte Türen, veraltete Schließzylinder oder leicht erreichbare Fenster im Erdgeschoss. Unser Rechner bewertet Ihr Objekt anhand von fünf zentralen Faktoren der Kriminalprävention.
          </p>
        </div>

        <RiskCalculator embedded={true} />

        <div className="text-sm text-gray-700 leading-relaxed bg-white/90 p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-gray-900">
            Wie bewertet der Einbruchrisiko Rechner Ihre Immobilie?
          </h2>
          <p>
            Der Schlüsseldienst Wetzlar analysiert wesentliche Risikofaktoren, die von Einbrechern bevorzugt ausgenutzt werden:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-gray-700">
            <li>
              <strong>Wohngebäudekategorie:</strong> Einfamilienhäuser und Erdgeschosswohnungen weisen statistisch das höchste Einbruchrisiko auf, da häufig mehrere Zugangswege (Terrassentür, Kellerfenster) vorhanden sind.
            </li>
            <li>
              <strong>Zustand der Schließzylinder:</strong> Veraltete Profilzylinder ohne Bohrschutz oder Ziehschutz lassen sich von Tätern in unter 30 Sekunden überwinden.
            </li>
            <li>
              <strong>Zusatzsicherungen:</strong> Das Fehlen von Panzerriegeln, Fenster-Sicherheitsbeschlägen (Pilzkopfverriegelung) oder Schutzbeschlägen erhöht das Risiko drastisch.
            </li>
            <li>
              <strong>Beleuchtung & Einsehbarkeit:</strong> Dunkle, schlecht einsehbare Eingänge oder dichter Bepflanzungsschutz bieten Einbrechern ungestörte Arbeitsbedingungen.
            </li>
            <li>
              <strong>Nachbarschaft & Belebung:</strong> Dichte Wohngebiete mit bekannter Nachbarschaftshilfe senken das Risiko nachweislich.
            </li>
          </ul>

          <h3 className="text-base font-bold text-gray-900 pt-2">
            Persönliche Sicherheitsberatung in Wetzlar anfordern
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Möchten Sie das Ergebnis Ihrer Einbruchrisikoanalyse mit einem Experten vor Ort besprechen? Die Schlüssel Schmiede Wetzlar bietet kostenlose Sicherheitsberatungen in Wetzlar, Gießen, Aßlar, Solms und Umgebung an. Wir prüfen Ihre Türen und Fenster direkt am Objekt und empfehlen maßgeschneiderte, VdS-konforme Sicherheitslösungen.
          </p>
          <div className="pt-2 text-center">
            <a
              href="tel:+4964418056279"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--color-red-500)] text-white text-xs font-bold hover:bg-[var(--color-red-600)] transition-colors shadow-sm"
            >
              Kostenlose Telefon-Beratung: 06441 8056279
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-static";
