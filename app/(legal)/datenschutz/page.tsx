import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { COOKIE_INVENTORY, DATA_PROCESSING_INVENTORY } from "@/lib/cookie-inventory"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Datenschutzerklärung nach DSGVO",
    description: "Datenschutzerklärung der Schlüssel Schmiede Wetzlar. | DSGVO-konform | Vollständige Transparenz über Datenverarbeitung & Cookies.",
    path: "/datenschutz",
    exactTitle: true,
  })

const TOC_ITEMS = [
    { id: "1-verantwortlicher", title: "1. Verantwortlicher" },
    { id: "2-uebersicht", title: "2. Übersicht der Verarbeitungen" },
    { id: "3-rechtsgrundlagen", title: "3. Rechtsgrundlagen" },
    { id: "4-cookies", title: "4. Cookies und Tracking" },
    { id: "5-betroffenenrechte", title: "5. Betroffenenrechte" },
    { id: "6-drittlaender", title: "6. Drittlandtransfer" },
    { id: "7-verschluesselung", title: "7. SSL/TLSverschlüsselung" },
    { id: "8-hosting", title: "8. Hosting" },
    { id: "9-aktualitaet", title: "9. Aktualität" },
    { id: "10-kontakt", title: "10. Kontakt" },
]

import { PrivacyPreferenceCenter } from "@/components/legal/PrivacyPreferenceCenter"

export default function DatenschutzPage() {
    return (
        <LegalLayout
            heroTitle="Datenschutzerklärung nach DSGVO"
            heroSubtitle="Ihre Daten, Ihre Kontrolle. Wir legen größten Wert auf Datenschutz nach DSGVO-Standards."
            lastUpdated="14. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 8 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Datenschutz auf einen Blick" icon="info">
                    <p>Diese Datenschutzerklärung nach DSGVO klärt Sie über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten auf. Wenn Sie unsere Website besuchen, werden bestimmte Daten (wie Ihre IP-Adresse) erfasst, um den technischen Betrieb sicherzustellen (Server-Logfiles). Im Kontaktformular angegebene Daten dienen rein der Auftragsabwicklung und Beantwortung.</p>
                    <p>Wir verkaufen Ihre Daten nicht. Sie haben jederzeit das Recht auf Löschung, Berichtigung und kostenlose Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-verantwortlicher">
                <h2 className="mt-0">1. Verantwortlicher</h2>
                <p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <span className="font-semibold text-[color:var(--text-primary)]">Inhaber: Mina Saad</span><br />
                    Schlüssel Schmiede Wetzlar<br />
                    Gloelstraße 11<br />
                    D-35576 Wetzlar<br /><br />
                    Telefonisch erreichbar: 06441 8056279<br />
                    Mail: <a href="mailto:schluesselschmiede@gmail.com">schluesselschmiede@gmail.com</a>
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
                          <span className="text-gray-900 block font-semibold mb-1">Erhobene Daten:</span>
                          <span className="text-gray-600">{entry.dataCollected.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-gray-900 block font-semibold mb-1">Rechtsgrundlage:</span>
                          <span className="text-gray-600">{entry.legalBasis}</span>
                        </div>
                        <div>
                          <span className="text-gray-900 block font-semibold mb-1">Empfänger:</span>
                          <span className="text-gray-600">{entry.recipient}</span>
                        </div>
                        <div>
                          <span className="text-gray-900 block font-semibold mb-1">Speicherdauer:</span>
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
                    <li><span className="font-semibold">Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</span> - Sie haben explizit eingewilligt (z.B. im Cookie-Consent Code).</li>
                    <li><span className="font-semibold">Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</span> - Anbahnung und Durchführung des Schlüsseldienst-Auftrags.</li>
                    <li><span className="font-semibold">Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</span> - Gewährleistung der IT-Sicherheit und des reibungslosen Betriebs (Vercel Logfiles).</li>
                </ul>
            </LegalSection>

            <LegalSection id="4-cookies">
                <h2 className="mt-0">4. Cookies und Trackingtechnologien</h2>
                <p>Unsere Website nutzt Cookies, um Kernfunktionen zu navigieren und bereitzustellen. Technisch notwendige Cookies bedürfen keiner aktiven Einwilligung. Marketing- und Analyse-Cookies fragen wir beim Betreten der Seite gezielt ab (&quot;Consent-Banner&quot;).</p>
                <p>Sie können Ihre Cookie-Präferenzen jederzeit widerrufen, indem Sie die Browserdaten löschen oder den Tracking-Link im System-Footer nutzen.</p>
                
                <PrivacyPreferenceCenter />
            </LegalSection>

            <LegalSection id="5-betroffenenrechte">
                <h2 className="mt-0">5. Rechte der betroffenen Personen</h2>
                <p>Die DSGVO stattet Verbraucher mit weitreichenden Rechten aus. Kontaktieren Sie uns jederzeit kostenfrei, um Folgendes auszuüben:</p>
                <ul>
                    <li><span className="font-semibold">Art. 15 DSGVO:</span> Auskunftsrecht über gespeicherte Daten.</li>
                    <li><span className="font-semibold">Art. 16 DSGVO:</span> Recht auf Berichtigung unvollständiger Daten.</li>
                    <li><span className="font-semibold">Art. 17 DSGVO:</span> Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;).</li>
                    <li><span className="font-semibold">Art. 18 DSGVO:</span> Recht auf Einschränkung der Datenverarbeitung.</li>
                    <li><span className="font-semibold">Art. 20 DSGVO:</span> Datenübertragbarkeit an andere Anbieter.</li>
                    <li><span className="font-semibold">Art. 21 DSGVO:</span> Widerspruchsrecht gegen die Verarbeitung.</li>
                </ul>
                <p>Zudem steht Ihnen ein <span className="font-semibold text-[color:var(--text-primary)]">Beschwerderecht (Art. 77 DSGVO)</span> bei der zuständigen Aufsichtsbehörde zu:</p>
                <div className="bg-gray-50 p-4 rounded-xl my-3 text-sm border border-gray-200">
                    <span className="font-semibold text-[color:var(--text-primary)]">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</span><br />
                    Gustav-Stresemann-Ring 1<br />
                    65189 Wiesbaden<br />
                    Telefon: 0611 1408-0<br />
                    Website: <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-[var(--action-primary)] hover:underline">datenschutz.hessen.de</a>
                </div>
            </LegalSection>

            <LegalSection id="6-drittlaender">
                <h2 className="mt-0">6. Datenübermittlung in Drittländer</h2>
                <p>Einige unserer Dienstleister sitzen in den USA. Die Übermittlung ist je nach Anbieter sichergestellt durch das EU-US Data Privacy Framework (DPF) und/oder Standardvertragsklauseln (SCCs) gem. Art. 46 Abs. 2 lit. c DSGVO:</p>
                <ul>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Vercel Inc.</span> (Hosting): DPF-zertifiziert.</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Google LLC</span> (Maps, Reviews): DPF-zertifiziert.</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Formspree Inc.</span> (Kontaktformular): Auftragsverarbeitung gem. Art. 28 DSGVO auf Basis eines abgeschlossenen Auftragsverarbeitungsvertrags (AVV). Datenübertragung auf Grundlage von Standardvertragsklauseln.</li>
                </ul>
            </LegalSection>

            <LegalSection id="6b-whatsapp">
                <h2 className="mt-0">6a. WhatsApp-Kontakt</h2>
                <p>Auf unserer Website befindet sich ein Link zur Kontaktaufnahme über den Messenger-Dienst WhatsApp (Meta Platforms Ireland Ltd.). Der Link nutzt das offene <code>wa.me</code>-Protokoll und stellt bei Auswahl die Verbindung zur WhatsApp-Anwendung her.</p>
                <p><span className="font-semibold text-[color:var(--text-primary)]">Technische Funktionsweise:</span> Es handelt sich um eine direkte Verlinkung. Es werden keine Cookies gesetzt, keine Tracking-Skripte geladen und keine Daten an Meta/WhatsApp übertragen, solange Sie die Verlinkung nicht aktiv anwählen. Erst durch Ihre Anwahl öffnet sich die WhatsApp-App, wobei die weitere Kommunikation den <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-[var(--action-primary)] hover:underline">Datenschutzbestimmungen von WhatsApp (Meta)</a> unterliegt.</p>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Anwahl des Links).</p>
            </LegalSection>

            <LegalSection id="7-verschluesselung">
                <h2 className="mt-0">7. SSL/TLSverschlüsselung</h2>
                <p>Ihre Kommunikation mit dieser Website ist durch moderne Zertifikate (SSL/TLS) stark verschlüsselt. Dies erkennen Sie am Schloss-Symbol in der Suchmaske Ihres Browsers. Dritte können abgesendete Daten (z.B. im Kontaktformular) nicht abgreifen.</p>
            </LegalSection>

            <LegalSection id="8-hosting">
                <h2 className="mt-0">8. Webhosting & Server</h2>
                <p>Wir hosten unsere Seiten auf modernster Cloud-Infrastruktur bei Vercel Inc. Bei der rein informatorischen Nutzung der Webseite übermittelt Ihr Browser automatisch Zugriffsdaten an Vercel-Server. Diese Logfiles sind aus IT-Sicherheitsgründen notwendig (Art. 6 Abs. 1 lit. f DSGVO) und werden streng vertraulich behandelt.</p>
            </LegalSection>

            <LegalSection id="9-aktualitaet">
                <h2 className="mt-0">9. Aktualität der Erklärung</h2>
                <p>Durch die kontinuierliche Ausweitung unseres Notdienst-Angebots in Hessen sowie rechtlicher Anpassungen auf EU-Ebene behalten wir uns das Recht vor, diese Erklärung fortlaufend zu aktualisieren. Gültig ist stets die aktuelle Live-Fassung vom Stand April 2026.</p>
            </LegalSection>

            <LegalSection id="10-kontakt">
                <h2 className="mt-0">10. Datenauskunft & Kontakt</h2>
                <p>Wenn Sie Fragen, Löschwünsche oder Anregungen zum Datenschutz haben, erreichen Sie unseren zuständigen Datenschutzbeauftragten direkt unter <a href="mailto:schluesselschmiede@gmail.com">schluesselschmiede@gmail.com</a> oder schriftlich über die Wetzlarer Anschrift im Impressum.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
