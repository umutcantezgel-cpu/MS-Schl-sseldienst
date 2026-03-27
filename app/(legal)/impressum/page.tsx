import { Metadata } from "next"
import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"

export const metadata: Metadata = {
    title: "Impressum | MS Schlüsseldienst Wetzlar",
    description: "Rechtliche Informationen und Impressum des MS Schlüsseldienst Wetzlar. Transparenz, Firmensitz und direkter Kontakt.",
}

const TOC_ITEMS = [
    { id: "1-angaben", title: "1. Angaben gemäß § 5 DDG" },
    { id: "2-kontakt", title: "2. Direkter Kontakt" },
    { id: "3-standort", title: "3. Hauptsitz & Standort" },
    { id: "4-steuern", title: "4. Steuerliche Angaben" },
    { id: "5-berufsangaben", title: "5. Berufs- & Aufsichtsangaben" },
    { id: "6-redaktionell", title: "6. Redaktionell Verantwortlicher" },
    { id: "7-streitschlichtung", title: "7. EU-Streitschlichtung" },
    { id: "8-haftung", title: "8. Haftungsausschluss" },
]

export default function ImpressumPage() {
    return (
        <LegalLayout
            heroTitle="Impressum"
            heroSubtitle="Transparenz schafft Vertrauen. Wer wir sind und wie Sie uns erreichen."
            lastUpdated="27. März 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Betreiberkennzeichnung</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Verantwortlichkeit (TL;DR)" icon="info">
                    <p>Diese Webseite wird betreut von <strong>Mina Saad</strong> (Schlüsseldienst Wetzlar). Unser Hauptfokus ist die regionale, faire Absicherung und Türöffnung im gesamten Lahn-Dill-Kreis. Für direkte Anfragen wählen Sie einfach unsere Notrufnummer.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-angaben">
                <h2 className="mt-0">1. Angaben gemäß § 5 DDG</h2>
                <p className="text-sm text-gray-500 mb-4">(Digitale-Dienste-Gesetz, ehemals § 5 TMG)</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Schlüsseldienst Wetzlar</strong><br />
                    Inhaberin: Mina Saad<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland
                </div>
            </LegalSection>

            <LegalSection id="2-kontakt">
                <h2 className="mt-0">2. Direkter Kontakt</h2>
                <p>Wir legen Wert auf Erreichbarkeit. Im Notfall oder bei allgemeinen Anfragen nutzen Sie am besten die folgenden Kontaktwege:</p>
                <ul>
                    <li><strong>Telefon (24/7):</strong> <a href="tel:+491782471037" className="font-semibold">0178 2471037</a></li>
                    <li><strong>E-Mail:</strong> <a href="mailto:notfall-schluessel@proton.me">notfall-schluessel@proton.me</a></li>
                </ul>
            </LegalSection>

            <LegalSection id="3-standort">
                <h2 className="mt-0">3. Hauptsitz & Standort</h2>
                <p>Unser technischer und administrativer Hauptsitz befindet sich zentral in Wetzlar.</p>
                <div className="w-full h-[300px] bg-gray-100 rounded-xl overflow-hidden shadow-inner my-6 print:hidden">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://maps.google.com/maps?q=Gloelstra%C3%9Fe+11,+35576+Wetzlar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Standort MS Schlüsseldienst Wetzlar"
                    />
                </div>
            </LegalSection>

            <LegalSection id="4-steuern">
                <h2 className="mt-0">4. Steuerliche Angaben</h2>
                <p>Die steuerliche Identifikation ist für die korrekte Rechnungsstellung und gewerbliche Transparenz notwendig.</p>
                <ul>
                    <li><strong>Steuernummer:</strong> 03986300160</li>
                    <li><strong>Umsatzsteuer-ID:</strong> Wird nicht erteilt, da Befreiung als Kleinunternehmen gemäß § 19 UStG vorliegt.</li>
                </ul>
            </LegalSection>

            <LegalSection id="5-berufsangaben">
                <h2 className="mt-0">5. Berufs- & Aufsichtsangaben</h2>
                <p>Angaben zur beruflichen Tätigkeit gemäß § 5 Abs. 1 Nr. 5 DDG:</p>
                <ul>
                    <li><strong>Berufsbezeichnung:</strong> Schlüsseldienst / Sicherheitstechnik</li>
                    <li><strong>Zuständige Handwerkskammer:</strong> Handwerkskammer Wetzlar, Ederstraße 2, 35578 Wetzlar</li>
                    <li><strong>Geltende berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO), einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">www.gesetze-im-internet.de/hwo</a></li>
                </ul>
            </LegalSection>

            <LegalSection id="6-redaktionell">
                <h2 className="mt-0">6. Redaktionell Verantwortlicher</h2>
                <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV (Medienstaatsvertrag):</p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-base border border-gray-200">
                    <strong>Mina Saad</strong><br />
                    Gloelstraße 11<br />
                    35576 Wetzlar
                </div>
            </LegalSection>

            <LegalSection id="7-streitschlichtung">
                <h2 className="mt-0">7. EU-Streitschlichtung & Verbraucherstreitbeilegung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link erreichen:</p>
                <p><a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">https://ec.europa.eu/consumers/odr</a></p>
                <p>Unsere E-Mail-Adresse lautet: <code>notfall-schluessel@proton.me</code></p>
                <p><strong>Hinweis gemäß § 36 VSBG:</strong> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </LegalSection>

            <LegalSection id="8-haftung">
                <h2 className="mt-0">8. Haftungsausschluss</h2>
                <h3>Inhalte</h3>
                <p>Für die Inhalte unserer Webseite sind wir als Betreiber verantwortlich. Wir bemühen uns, die auf unserer Seite bereitgestellten Informationen stets korrekt und tagesaktuell zu halten. Dennoch können wir keine Gewähr für die absolute Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen übernehmen.</p>

                <h3>Verlinkungen</h3>
                <p>Unsere Webseite kann Hyperlinks zu fremden Webseiten von Drittanbietern enthalten, auf deren Inhalte wir keinerlei Einfluss haben. Deshalb distanzieren wir uns ausdrücklich von allen Inhalten der verlinkten Seiten und machen uns diese nicht zu eigen. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße auf den fremden Plattformen erkennbar. Eine fortwährende Kontrolle externer Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung für uns nicht zumutbar.</p>
            </LegalSection>
        </LegalLayout>
    )
}
