import Link from 'next/link';
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { HoverGlossary } from "@/components/legal/HoverGlossary"
import { RevisionTimeline } from "@/components/legal/RevisionTimeline"
import { generateSharedMetadata } from "@/lib/metadata"

export const metadata = generateSharedMetadata({
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    description: "AGB des Schlüssel Schmiede Wetzlar. ✔️ Transparente Bedingungen für Türöffnungen ✔️ Klare Regeln für Festpreise und Stornos.",
    path: "/agb",
  })

export const dynamic = 'force-static';

const TOC_ITEMS = [
    { id: "1-geltungsbereich", title: "1. Geltungsbereich & Vertragspartner" },
    { id: "2-vertragsschluss", title: "2. Vertragsschluss & Notöffnungen" },
    { id: "3-preise", title: "3. Preise, Zuschläge & Anfahrtskosten" },
    { id: "4-stornierung", title: "4. Stornierung & Fehlfahrten" },
    { id: "5-zahlung", title: "5. Zahlungsbedingungen" },
    { id: "6-widerrufsrecht", title: "6. Widerrufsrecht & Ausschluss" },
    { id: "7-haftung", title: "7. Haftung & Gewährleistung" },
    { id: "8-datenschutz", title: "8. Datenschutz" },
    { id: "9-schlussbestimmungen", title: "9. Schlussbestimmungen" },
]

export default function AGBPage() {
    return (
        <LegalLayout
            heroTitle="Allgemeine Geschäftsbedingungen"
            heroSubtitle="Klare und transparente Spielregeln für unsere Zusammenarbeit. Keine Überraschungen, keine versteckten Kosten."
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Lesezeit: ca. 6 Minuten</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Wichtigste Punkte im Überblick" icon="info">
                    <p>Wir arbeiten mit <strong>transparenten Festpreisen ab 99,- €</strong> zzgl. Anfahrt. Die Anfahrtskosten werden Ihnen immer <strong>vorab telefonisch genau genannt</strong>.</p>
                    <p>Bei sofort auszuführenden Notdiensten erlischt das 14-tägige <HoverGlossary explanation="Das gesetzliche Recht, einen Vertrag innerhalb von 14 Tagen zu widerrufen. Bei Notdiensten entfällt dieses Recht jedoch.">Widerrufsrecht</HoverGlossary> gemäß <HoverGlossary explanation="Ein Paragraph im Bürgerlichen Gesetzbuch, der ausdrücklich regelt, dass bei zwingend bestellten Reparaturarbeiten kein Rücktrittsrecht besteht."><strong>§ 312g Abs. 2 Nr. 11 BGB</strong></HoverGlossary>. Stornieren Sie den Auftrag erst, wenn unser Techniker bereits unterwegs oder vor Ort ist, fällt eine branchenübliche <HoverGlossary explanation="Eine pauschale Entschädigung für die Zeit und Benzinkosten unseres Technikers, wenn er umsonst anreist."><strong>Leerfahrtpauschale von 50,- €</strong></HoverGlossary> an.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-geltungsbereich">
                <h2 className="mt-0">1. Geltungsbereich & Vertragspartner</h2>
                <p>1.1. Diese Allgemeinen Geschäftsbedingungen (im Folgenden &quot;AGB&quot;) gelten für alle gegenwärtigen und zukünftigen Rechtsgeschäfte, Dienstleistungen, Werkleistungen und Lieferungen zwischen:</p>
                <div className="bg-gray-50 p-4 rounded-lg my-4 text-sm border border-gray-200">
                    <strong>Vertragspartner:</strong><br />
                    Schlüssel Schmiede<br />
                    Mina Saad<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    E-Mail: notfall-schluessel@proton.me<br />
                    (im Folgenden &quot;Auftragnehmer&quot; oder &quot;Schlüssel Schmiede&quot; genannt)
                </div>
                <p>und dem Auftraggeber (im Folgenden &quot;Kunde&quot; genannt).</p>
                <p>1.2. Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden, selbst in Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.</p>
                <p>1.3. Verbraucher im Sinne dieser Geschäftsbedingungen sind natürliche Personen, die Rechtsgeschäfte zu Zwecken abschließen, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer sind natürliche oder juristische Personen, die in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln (§ 14 BGB).</p>
            </LegalSection>

            <LegalSection id="2-vertragsschluss">
                <h2 className="mt-0">2. Vertragsschluss & Notöffnungen</h2>
                <p>2.1. Die Angebote des Schlüssel Schmiede auf der Webseite oder in Werbematerialien sind stets freibleibend und unverbindlich.</p>
                <p>2.2. Ein rechtsverbindlicher Vertrag kommt zustande, sobald der Kunde - mündlich (z.B. am Telefon) oder schriftlich - einen Einsatz anfordert und der Auftragnehmer diesen Einsatz bestätigt und disponiert.</p>
                <p>2.3. Der konkrete Auftragsinhalt und der Preis werden spätestens bei Eintreffen des Technikers am Einsatzort vor Beginn der handwerklichen Tätigkeit besprochen und vom Kunden (digital oder in Papierform) durch Unterschrift auf dem Auftragsformular bestätigt.</p>
                <p>2.4. Der Auftragnehmer behält sich das Recht vor, die Durchführung einer Notöffnung zu verweigern, wenn berechtigte Zweifel an der Zugangsberechtigung des Kunden zum Objekt bestehen. Der Kunde ist verpflichtet, sich durch ein gültiges amtliches Ausweisdokument auszuweisen.</p>
            </LegalSection>

            <LegalSection id="3-preise">
                <h2 className="mt-0">3. Preise, Zuschläge & Anfahrtskosten</h2>
                <TLDRBox title="Unsere Preisphilosophie">
                    <p>Wir distanzieren uns strikt von unseriösen Lockangeboten. Wenn Sie uns anrufen, nennen wir Ihnen einen <strong>verbindlichen Endpreis</strong> für eine einfache Öffnung. Sie zahlen exakt das, was vereinbart wurde.</p>
                </TLDRBox>
                <p>3.1. Es gelten die zum Zeitpunkt des Vertragsschlusses auf der Webseite unter <Link href="/preise">Preise</Link> ausgewiesenen Festpreise und Anfahrtskosten bzw. die am Telefon individuell verhandelten Tarife.</p>
                <p>3.2. <strong>Basispreis:</strong> Die Standard-Notöffnung einer nur ins Schloss gefallenen (nicht verriegelten) Tür beträgt werktags zwischen 08:00 und 18:00 Uhr pauschal ab 99,00 € inkl. gesetzlicher MwSt.</p>
                <p>3.3. <strong>Anfahrtskosten:</strong> Zusätzlich zum Leistungspreis fallen je nach Entfernung gestaffelte Anfahrtskosten an. Diese liegen zwischen 15,00 € (Kernbereich und Stadtteile) und max. 40,00 € (Ferndistanzen über 20km). Die exakte Pauschale wird stets vorher kommuniziert.</p>
                <p>3.4. <strong>Sonderzuschläge:</strong> Außerhalb der regulären Geschäftszeiten, an Wochenenden und gesetzlichen Feiertagen erheben wir transparente Zuschläge, um die Rufbereitschaft der Techniker zu gewährleisten (Abend-/Nachtzuschlag ab 30,- €, Wochenend-/Feiertagszuschlag ab 50,- €).</p>
            </LegalSection>

            <LegalSection id="4-stornierung">
                <h2 className="mt-0">4. Stornierung & Fehlfahrten</h2>
                <p>4.1. Storniert der Kunde einen verbindlich gebuchten Notdienst-Einsatz rechtzeitig, *bevor* der Techniker in sein Fahrzeug gestiegen und die Fahrt angetreten hat, ist die Stornierung völlig kostenfrei.</p>
                <p>4.2. Hat der Techniker die Anfahrt zum Einsatzort bereits angetreten oder ist bereits dort eingetroffen, wird im Falle einer Stornierung durch den Kunden eine <HoverGlossary explanation="Pauschale Entschädigung für den entstandenen Wegeausfall, da der Techniker in dieser Zeit keinen anderen Kunden bedienen konnte."><strong>Leerfahrt-/Ausfallpauschale in Höhe von pauschal 50,00 € inkl. MwSt.</strong></HoverGlossary> in Rechnung gestellt.</p>
                <p>4.3. Dem Kunden bleibt der Nachweis gestattet, dass ein Schaden überhaupt nicht oder in wesentlich niedrigerer Höhe entstanden ist.</p>
            </LegalSection>

            <LegalSection id="5-zahlung">
                <h2 className="mt-0">5. Zahlungsbedingungen</h2>
                <p>5.1. Nach erbrachter Dienstleistung an der Einsatzstelle ist die Rechnungssumme grundsätzlich <strong>sofort und ohne Abzug</strong> zur Zahlung fällig.</p>
                <p>5.2. Schlüssel Schmiede akzeptiert folgende Zahlungsmittel direkt vor Ort:</p>
                <ul>
                    <li>Bargeld</li>
                    <li>Girocard (EC-Karte)</li>
                    <li>Kreditkarten (Visa, Mastercard)</li>
                    <li>Mobile Zahlungsverfahren (Apple Pay, Google Pay)</li>
                </ul>
                <p>5.3. Die Zahlung per Rechnung ist nur nach vorheriger, ausdrücklicher Vereinbarung und in Ausnahmefällen (Stammkunden, Großunternehmen, Behörden) möglich. Hierbei gilt ein Zahlungsziel von 7 Werktagen ab Rechnungsdatum.</p>
            </LegalSection>

            <LegalSection id="6-widerrufsrecht">
                <h2 className="mt-0">6. Ausschluss des Widerrufsrechts für Verbraucher</h2>
                <TLDRBox title="Wichtig: Notfalleinsätze" icon="help">
                    <p>Wenn Sie einen Handwerker dringend bestellen, um eine Reparatur durchzuführen (z.B. eine verschlossene Tür zu öffnen), gibt es <strong>kein 14-tägiges Rücktrittsrecht</strong> auf diese spezifische Vor-Ort-Leistung.</p>
                </TLDRBox>
                <p>6.1. Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Dieses Gesetz sieht jedoch Ausnahmen für spezielle Not- und Reparaturdienste vor.</p>
                <p>6.2. Ausschluss nach <HoverGlossary explanation="Gesetzesgrundlage zum Erlöschen des Widerrufsrechts bei dringenden Reparaturmaßnahmen an der Haustür."><strong>§ 312g Abs. 2 Nr. 11 BGB</strong></HoverGlossary>: Das Widerrufsrecht besteht nicht bei Verträgen zur Erbringung dringender Reparatur- oder Instandhaltungsarbeiten, bei denen der Verbraucher den Unternehmer ausdrücklich aufgefordert hat, ihn aufzusuchen, um diese Arbeiten auszuführen. Da es sich bei der Beauftragung eines Schlüsseldienst-Notdienstes um exakt eine solche &quot;dringende Reparatur/Instandsetzung&quot; handelt, erlischt das elektronische/fernmündliche Widerrufsrecht für die Türöffnungs-Dienstleistung mit Aufnahme der handwerklichen Tätigkeit bzw. Anfahrt.</p>
                <p>6.3. Wurde im Zuge des Einsatzes Neuware verkauft (z.B. Zylinder originalverpackt verkauft, aber noch nicht starr im Haus verbaut), so gilt für diese nicht montierten Bauteile das gesetzliche Widerrufsrecht von 14 Tagen.</p>
            </LegalSection>

            <LegalSection id="7-haftung">
                <h2 className="mt-0">7. Haftung & Gewährleistung</h2>
                <p>7.1. Schlüssel Schmiede haftet nach den gesetzlichen Bestimmungen, sofern der Kunde Schadensersatzansprüche geltend macht, die auf Vorsatz oder grober Fahrlässigkeit, einschließlich von Vorsatz oder grober Fahrlässigkeit der Vertreter oder <HoverGlossary explanation="Personen oder Hilfskräfte (z.B. fest angestellte Subunternehmer oder Monteure), die wir zur Ausführung des Auftrags einsetzen.">Erfüllungsgehilfen</HoverGlossary>, beruhen.</p>
                <p>7.2. Bei einfachen und standardisierten Türöffnungen (nicht-verriegelte Türen) zielt Schlüssel Schmiede auf 100% beschädigungsfreie Verfahren ab. Besteht bereits ein mechanical Defekt an Tür oder Schloss, oder handelt es sich um eine festverriegelte Tür mit extrem hoher Sicherheitsklasse, kann eine Beschädigung des Zylinders/Schutzbeschlags zur vollendeten Öffnung bauartbedingt notwendig sein. Dies wird dem Kunden zwingend <strong>vor Ausführung</strong> auf Risikoabsprache mitgeteilt.</p>
                <p>7.3. Für Folgeschäden durch zwingend notwendiges Auffräsen oder Aufbohren von Verriegelungen an verschlossen übergebenen Türen, deren Öffnung anders physikalisch nicht durchführbar ist, wird keine Haftung übernommen, sofern der Kunde dem Eingriff zuvor zugestimmt hat.</p>
                <p>7.4. Es gilt das gesetzliche Mängelhaftungsrecht für installierte Produkte (z.B. Einbau-Schließzylinder).</p>
            </LegalSection>

            <LegalSection id="8-datenschutz">
                <h2 className="mt-0">8. Datenschutz</h2>
                <p>8.1. Der Schutz Ihrer persönlichen Daten ist uns ein elementares Anliegen. Wir verarbeiten Kundendaten (Name, Einsatzort, Zahlungsdaten, Kontaktdaten) ausschließlich zur reibungslosen Vertragsabwicklung und Rechnungsstellung.</p>
                <p>8.2. Sämtliche Details zur Datenspeicherung, Löschfristen und Ihren Rechten finden Sie in unserer vollständigen <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
            </LegalSection>

            <LegalSection id="9-schlussbestimmungen">
                <h2 className="mt-0">9. Schlussbestimmungen</h2>
                <p>9.1. Es gilt das Recht der Bundesrepublik Deutschland.</p>
                <p>9.2. Ist der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, ist der Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden und Schlüssel Schmiede der Sitz des Unternehmens in Wetzlar.</p>
                <p>9.3. Schlüssel Schmiede ist nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter der Domain <code>ec.europa.eu/consumers/odr/</code> finden.</p>
                <p>9.4. Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder undurchführbar sein oder nach Vertragsschluss unwirksam oder undurchführbar werden, bleibt davon die Wirksamkeit des Vertrages im Übrigen unberührt.</p>
            </LegalSection>

            {/* AGB History Timeline */}
            <RevisionTimeline />
        </LegalLayout>
    )
}
