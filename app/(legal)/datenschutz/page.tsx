import { Metadata } from "next"
import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, DATA_PROCESSING_INVENTORY } from "@/lib/cookie-inventory"

export const metadata: Metadata = {
    title: "Datenschutzerklärung | MS Schlüsseldienst Wetzlar",
    description: "Vollständige Transparenz: Erfahren Sie, wie wir Ihre Daten schützen, Cookies verwalten und die DSGVO einhalten.",
}

const TOC_ITEMS = [
    { id: "1-verantwortlicher", title: "1. Verantwortlicher" },
    { id: "2-uebersicht", title: "2. Übersicht der Verarbeitungen" },
    { id: "3-rechtsgrundlagen", title: "3. Rechtsgrundlagen" },
    { id: "4-cookies", title: "4. Cookies und Tracking" },
    { id: "5-betroffenenrechte", title: "5. Betroffenenrechte" },
    { id: "6-drittlaender", title: "6. Drittlandtransfer" },
    { id: "7-verschluesselung", title: "7. SSL/TLS-Verschlüsselung" },
    { id: "8-hosting", title: "8. Hosting" },
    { id: "9-aktualitaet", title: "9. Aktualität" },
    { id: "10-kontakt", title: "10. Kontakt" },
]

import { PrivacyPreferenceCenter } from "@/components/legal/PrivacyPreferenceCenter"

export default function DatenschutzPage() {
    return (
        <LegalLayout
            heroTitle="Datenschutzerklärung"
            heroSubtitle="Ihre Daten, Ihre Kontrolle. Wir legen größten Wert auf Datenschutz nach DSGVO-Standards."
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 8 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Datenschutz auf einen Blick" icon="info">
                    <p>Wenn Sie unsere Website besuchen, werden bestimmte Daten (wie Ihre IP-Adresse) erfasst, um den technischen Betrieb sicherzustellen (Server-Logfiles). Im Kontaktformular angegebene Daten dienen rein der Auftragsabwicklung und Beantwortung.</p>
                    <p><strong>Wir verkaufen Ihre Daten nicht.</strong> Sie haben jederzeit das Recht auf Löschung, Berichtigung und kostenlose Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-verantwortlicher">
                <h2 className="mt-0">1. Verantwortlicher</h2>
                <p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Mina Saad</strong><br />
                    MS Schlüsseldienst Wetzlar<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland<br /><br />
                    Telefon: 0178 2471037<br />
                    E-Mail: <a href="mailto:notfall-schluessel@proton.me">notfall-schluessel@proton.me</a>
                </div>
            </LegalSection>

            <LegalSection id="2-uebersicht">
                <h2 className="mt-0">2. Übersicht der Verarbeitungen</h2>
                <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung transparent zusammen.</p>

                <div className="space-y-6">
                  {DATA_PROCESSING_INVENTORY.map((entry, i) => (
                    <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">{entry.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm">
                        <div className="md:col-span-3">
                          <strong className="text-gray-900 block mb-1">Erhobene Daten:</strong>
                          <span className="text-gray-600">{entry.dataCollected.join(", ")}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Rechtsgrundlage:</strong>
                          <span className="text-gray-600">{entry.legalBasis}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Empfänger:</strong>
                          <span className="text-gray-600">{entry.recipient}</span>
                        </div>
                        <div>
                          <strong className="text-gray-900 block mb-1">Speicherdauer:</strong>
                          <span className="text-gray-600">{entry.retentionPeriod}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </LegalSection>

            <LegalSection id="3-rechtsgrundlagen">
                <h2 className="mt-0">3. Rechtsgrundlagen der Verarbeitung</h2>
                <p>Nachfolgend informieren wir Sie über die in der DSGVO festgeschriebenen Rechtsgrundlagen unserer Datenverarbeitungen:</p>
                <ul>
                    <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Sie haben explizit eingewilligt (z.B. im Cookie-Consent Code).</li>
                    <li><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</strong> – Anbahnung und Durchführung des Schlüsseldienst-Auftrags.</li>
                    <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Gewährleistung der IT-Sicherheit und des reibungslosen Betriebs (Vercel Logfiles).</li>
                </ul>
            </LegalSection>

            <LegalSection id="4-cookies">
                <h2 className="mt-0">4. Cookies und Tracking-Technologien</h2>
                <p>Unsere Website nutzt Cookies, um Kernfunktionen zu navigieren und bereitzustellen. Technisch notwendige Cookies bedürfen keiner aktiven Einwilligung. Marketing- und Analyse-Cookies fragen wir beim Betreten der Seite gezielt ab (&quot;Consent-Banner&quot;).</p>
                <p>Sie können Ihre Cookie-Präferenzen jederzeit widerrufen, indem Sie die Browserdaten löschen oder den Tracking-Link im System-Footer nutzen.</p>
                
                <PrivacyPreferenceCenter />
            </LegalSection>

            <LegalSection id="5-betroffenenrechte">
                <h2 className="mt-0">5. Rechte der betroffenen Personen</h2>
                <p>Die DSGVO stattet Verbraucher mit weitreichenden Rechten aus. Kontaktieren Sie uns jederzeit kostenfrei, um Folgendes auszuüben:</p>
                <ul>
                    <li><strong>Art. 15 DSGVO:</strong> Auskunftsrecht über gespeicherte Daten.</li>
                    <li><strong>Art. 16 DSGVO:</strong> Recht auf Berichtigung unvollständiger Daten.</li>
                    <li><strong>Art. 17 DSGVO:</strong> Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;).</li>
                    <li><strong>Art. 18 DSGVO:</strong> Recht auf Einschränkung der Datenverarbeitung.</li>
                    <li><strong>Art. 20 DSGVO:</strong> Datenübertragbarkeit an andere Anbieter.</li>
                    <li><strong>Art. 21 DSGVO:</strong> Widerspruchsrecht gegen die Verarbeitung.</li>
                </ul>
                <p>Zudem steht Ihnen ein <strong>Beschwerderecht (Art. 77 DSGVO)</strong> bei der zuständigen Aufsichtsbehörde in Hessen (Wiesbaden) zu.</p>
            </LegalSection>

            <LegalSection id="6-drittlaender">
                <h2 className="mt-0">6. Datenübermittlung in Drittländer</h2>
                <p>Einige unserer Dienstleister (Vercel Inc. für das Hosting, Google LLC für Maps/Reviews) sitzen in den USA. Die Übermittlung ist sichergestellt durch das EU-US Data Privacy Framework (DPF), in dem diese Unternehmen zertifiziert sind. Zusätzlich bauen wir auf Standardvertragsklauseln (SCCs).</p>
            </LegalSection>

            <LegalSection id="7-verschluesselung">
                <h2 className="mt-0">7. SSL/TLS-Verschlüsselung</h2>
                <p>Ihre Kommunikation mit dieser Website ist durch moderne Zertifikate (SSL/TLS) stark verschlüsselt. Dies erkennen Sie am Schloss-Symbol in der Suchmaske Ihres Browsers. Dritte können abgesendete Daten (z.B. im Kontaktformular) nicht abgreifen.</p>
            </LegalSection>

            <LegalSection id="8-hosting">
                <h2 className="mt-0">8. Web-Hosting & Server</h2>
                <p>Wir hosten unsere Seiten auf modernster Cloud-Infrastruktur bei Vercel Inc. Bei der rein informatorischen Nutzung der Webseite übermittelt Ihr Browser automatisch Zugriffsdaten an Vercel-Server. Diese Logfiles sind aus IT-Sicherheitsgründen notwendig (Art. 6 Abs. 1 lit. f DSGVO) und werden streng vertraulich behandelt.</p>
            </LegalSection>

            <LegalSection id="9-aktualitaet">
                <h2 className="mt-0">9. Aktualität der Erklärung</h2>
                <p>Durch die kontinuierliche Ausweitung unseres Notdienst-Angebots in Hessen sowie rechtlicher Anpassungen auf EU-Ebene behalten wir uns das Recht vor, diese Erklärung fortlaufend zu aktualisieren. Gültig ist stets die aktuelle Live-Fassung vom Stand März 2026.</p>
            </LegalSection>

            <LegalSection id="10-kontakt">
                <h2 className="mt-0">10. Datenauskunft & Kontakt</h2>
                <p>Wenn Sie Fragen, Löschwünsche oder Anregungen zum Datenschutz haben, erreichen Sie unseren zuständigen Datenschutzbeauftragten direkt unter <a href="mailto:notfall-schluessel@proton.me">notfall-schluessel@proton.me</a> oder schriftlich über die Wetzlarer Anschrift im Impressum.</p>
            </LegalSection>
        </LegalLayout>
    )
}
