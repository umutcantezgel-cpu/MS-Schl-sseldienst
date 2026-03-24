import Breadcrumbs from "@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from "@/components/motion/StaggerReveal";
import { entryAnimations } from "@/lib/animations";
import { generateSharedMetadata } from "@/lib/metadata";
import { COOKIE_INVENTORY, DATA_PROCESSING_INVENTORY } from "@/lib/cookie-inventory";
import Link from "next/link";

export const metadata = generateSharedMetadata({
  title: "Datenschutzerklärung — MS Schlüsseldienst Wetzlar",
  description:
    "Erfahren Sie, wie der MS Schlüsseldienst Wetzlar Ihre persönlichen Daten schützt und verarbeitet. DSGVO-konforme Datenschutzerklärung mit vollständigem Verarbeitungsverzeichnis.",
  path: "/datenschutz",
});

/* ─── Cookie-Tabelle (Server Component — Daten aus SSOT) ─── */
function CookieTable() {
  const categories = {
    essential: "Technisch notwendig",
    analytics: "Analyse",
    marketing: "Marketing",
  } as const;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-[14px] border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-[var(--border-subtle)]">
            <th className="text-left p-3 font-semibold text-[color:var(--text-primary)]">Cookie</th>
            <th className="text-left p-3 font-semibold text-[color:var(--text-primary)]">Kategorie</th>
            <th className="text-left p-3 font-semibold text-[color:var(--text-primary)]">Dauer</th>
            <th className="text-left p-3 font-semibold text-[color:var(--text-primary)]">Zweck</th>
            <th className="text-left p-3 font-semibold text-[color:var(--text-primary)]">Anbieter</th>
          </tr>
        </thead>
        <tbody>
          {COOKIE_INVENTORY.map((cookie) => (
            <tr key={cookie.name} className="border-b border-[var(--border-subtle)]/50 hover:bg-gray-50/50">
              <td className="p-3 font-mono text-[13px] text-[color:var(--text-primary)]">{cookie.name}</td>
              <td className="p-3 text-[color:var(--text-secondary)]">{categories[cookie.category]}</td>
              <td className="p-3 text-[color:var(--text-secondary)]">{cookie.duration}</td>
              <td className="p-3 text-[color:var(--text-secondary)]">{cookie.purpose}</td>
              <td className="p-3 text-[color:var(--text-secondary)]">{cookie.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DatenschutzPage() {
  const breadcrumbs = [{ name: "Datenschutz", href: "/datenschutz" }];

  return (
    <div className="bg-[var(--surface-primary)] text-[color:var(--text-primary)] font-sans">
      {/* Hero Section */}
      <section className="relative pt-[180px] pb-[120px] lg:pt-[220px] lg:pb-[160px] bg-gradient-to-b from-[var(--color-off-white)] to-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={breadcrumbs} light={false} />
          <StaggerReveal
            className="mt-8 flex flex-col items-center"
            animation={entryAnimations.slideUpFade}
            staggerDelay={0.1}
          >
            <StaggerItem animation={entryAnimations.slideUpFade}>
              <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-[var(--space-6)]">
                Datenschutzerklärung
              </h1>
            </StaggerItem>
          </StaggerReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-24 md:py-32">
        <StaggerReveal className="mx-auto max-w-3xl" animation={entryAnimations.slideUpFade}>
          <StaggerItem animation={entryAnimations.slideUpFade}>
            <div className="prose prose-lg prose-slate mx-auto">
              {/* ═══ 1. Verantwortlicher ═══ */}
              <h2 className="typo-h2 text-[color:var(--text-primary)] text-balance">
                1. Verantwortlicher
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
                Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                <strong>Mina Saad</strong>
                <br />
                MS Schlüsseldienst Wetzlar
                <br />
                Gloelstraße 11
                <br />
                35576 Wetzlar
                <br />
                Telefon: <a href="tel:+4964418056544" className="text-[color:var(--color-red-600)] hover:underline">06441 8056544</a>
                <br />
                E-Mail: <a href="mailto:notfall-schluessel@proton.me" className="text-[color:var(--color-red-600)] hover:underline">notfall-schluessel@proton.me</a>
              </p>

              {/* ═══ 2. Übersicht der Verarbeitungen ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                2. Übersicht der Verarbeitungen
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten, die Zwecke ihrer
                Verarbeitung und die betroffenen Personen zusammen.
              </p>

              {DATA_PROCESSING_INVENTORY.map((entry, i) => (
                <div key={i} className="mt-6 p-4 rounded-xl border border-[var(--border-subtle)] bg-white/50">
                  <h3 className="text-[15px] font-semibold text-[color:var(--text-primary)] mb-2">
                    {entry.name}
                  </h3>
                  <dl className="text-[14px] space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Erhobene Daten:</dt>
                      <dd className="text-[color:var(--text-secondary)]">{entry.dataCollected.join(", ")}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Rechtsgrundlage:</dt>
                      <dd className="text-[color:var(--text-secondary)]">{entry.legalBasis}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Empfänger:</dt>
                      <dd className="text-[color:var(--text-secondary)]">{entry.recipient}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Speicherdauer:</dt>
                      <dd className="text-[color:var(--text-secondary)]">{entry.retentionPeriod}</dd>
                    </div>
                    {entry.thirdCountryTransfer && (
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Drittlandtransfer:</dt>
                        <dd className="text-[color:var(--text-secondary)]">{entry.thirdCountryTransfer}</dd>
                      </div>
                    )}
                    {entry.consentCategory && (
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="font-medium text-[color:var(--text-primary)] min-w-[160px]">Einwilligung:</dt>
                        <dd className="text-[color:var(--text-secondary)]">
                          Nur nach ausdrücklicher Einwilligung ({entry.consentCategory === "analytics" ? "Analyse-Cookies" : "Marketing-Cookies"})
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}

              {/* ═══ 3. Rechtsgrundlagen ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                3. Rechtsgrundlagen der Verarbeitung
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Nachfolgend informieren wir Sie über die Rechtsgrundlagen der DSGVO, auf deren Basis
                wir personenbezogene Daten verarbeiten:
              </p>
              <ul className="mt-4 text-[color:var(--text-secondary)] list-disc pl-6 space-y-2">
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> — Die betroffene Person hat ihre Einwilligung
                  in die Verarbeitung gegeben (z.B. Analytics-Cookies nach Cookie-Consent).
                </li>
                <li>
                  <strong>Vertragserfüllung / Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO)</strong> — Die Verarbeitung
                  ist erforderlich für die Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (z.B. Kontaktformular).
                </li>
                <li>
                  <strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> — Die Verarbeitung ist zur
                  Wahrung berechtigter Interessen erforderlich (z.B. technisch notwendige Cookies, Website-Hosting).
                </li>
              </ul>

              {/* ═══ 4. Cookies ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                4. Cookies und Tracking-Technologien
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot
                nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Wir unterscheiden zwischen <strong>technisch notwendigen Cookies</strong> (die für den Betrieb
                der Website erforderlich sind) und <strong>optionalen Cookies</strong> (Analyse, Marketing),
                die nur nach Ihrer ausdrücklichen Einwilligung gesetzt werden.
              </p>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Sie können Ihre Cookie-Einstellungen jederzeit über den Link &quot;Cookie-Einstellungen&quot; im
                Footer unserer Website anpassen oder widerrufen.
              </p>

              <h3 className="mt-6 typo-lead text-[color:var(--text-primary)] font-bold text-balance">
                Cookie-Übersicht
              </h3>
              <div className="mt-4">
                <CookieTable />
              </div>

              {/* ═══ 5. Betroffenenrechte ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                5. Rechte der betroffenen Personen
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Als betroffene Person stehen Ihnen nach der DSGVO verschiedene Rechte zu:
              </p>
              <ul className="mt-4 text-[color:var(--text-secondary)] list-disc pl-6 space-y-2">
                <li>
                  <strong>Auskunftsrecht (Art. 15 DSGVO)</strong> — Sie haben das Recht, eine Bestätigung darüber
                  zu verlangen, ob betreffende Daten verarbeitet werden, und auf Auskunft über diese Daten.
                </li>
                <li>
                  <strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> — Sie haben das Recht, die Berichtigung
                  unrichtiger Daten und die Vervollständigung unvollständiger Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung (Art. 17 DSGVO)</strong> — Sie haben das Recht, die Löschung Ihrer
                  Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong>Recht auf Einschränkung (Art. 18 DSGVO)</strong> — Sie haben das Recht, die Einschränkung
                  der Verarbeitung Ihrer Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> — Sie haben das Recht, die Sie
                  betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> — Sie haben das Recht, aus Gründen, die sich
                  aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.
                </li>
                <li>
                  <strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</strong> — Sie haben das Recht, Ihre
                  erteilte Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung
                  bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.
                </li>
                <li>
                  <strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</strong> — Sie haben das Recht,
                  sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
                  Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1,
                  65189 Wiesbaden.
                </li>
              </ul>

              {/* ═══ 6. Datenübermittlung in Drittländer ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                6. Datenübermittlung in Drittländer
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Einige der von uns eingesetzten Dienstleister haben ihren Sitz in den USA. Soweit eine
                Datenübermittlung in die USA stattfindet, ist diese durch das EU-US Data Privacy Framework
                (DPF) abgesichert. Die betreffenden Unternehmen (Google LLC, Formspree Inc., Vercel Inc.)
                sind unter dem DPF zertifiziert. Zusätzlich wurden Standardvertragsklauseln (SCCs) gemäß
                Art. 46 Abs. 2 lit. c DSGVO vereinbart.
              </p>

              {/* ═══ 7. SSL/TLS-Verschlüsselung ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                7. SSL/TLS-Verschlüsselung
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>

              {/* ═══ 8. Hosting ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                8. Hosting
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
                Beim Besuch unserer Website werden automatisch Server-Logfiles erfasst (IP-Adresse,
                Zeitpunkt des Zugriffs, Referrer-URL, Browser-Typ und Betriebssystem). Diese Daten werden
                gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der
                Bereitstellung und Sicherheit unserer Website verarbeitet. Server-Logfiles werden
                automatisch nach maximal 30 Tagen gelöscht. Mit Vercel besteht ein Data Processing
                Agreement (DPA) gemäß Art. 28 DSGVO.
              </p>

              {/* ═══ 9. Aktualität ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                9. Aktualität und Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die
                Weiterentwicklung unserer Website oder aufgrund veränderter gesetzlicher bzw. behördlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils
                aktuelle Fassung kann jederzeit auf dieser Website abgerufen werden.
              </p>

              {/* ═══ 10. Kontakt bei Datenschutzfragen ═══ */}
              <h2 className="mt-12 typo-h2 text-[color:var(--text-primary)] text-balance">
                10. Kontakt bei Datenschutzfragen
              </h2>
              <p className="mt-4 text-[color:var(--text-secondary)]">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an{" "}
                <a
                  href="mailto:notfall-schluessel@proton.me"
                  className="text-[color:var(--color-red-600)] hover:underline"
                >
                  notfall-schluessel@proton.me
                </a>{" "}
                oder nutzen Sie unser{" "}
                <Link href="/kontakt" className="text-[color:var(--color-red-600)] hover:underline">
                  Kontaktformular
                </Link>
                .
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </section>
    </div>
  );
}
