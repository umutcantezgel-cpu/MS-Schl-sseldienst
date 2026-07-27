import Link from "next/link"
import { LegalLayout } from "@/components/legal/LegalLayout"
import { TLDRBox } from "@/components/legal/TLDRBox"
import { PrintButton } from "@/components/legal/PrintButton"
import { LegalSection } from "@/components/legal/LegalSection"
import { generateSharedMetadata } from "@/lib/metadata"
import { MapConsentGate } from "@/components/legal/MapConsentGate"

export const metadata = generateSharedMetadata({
    title: "Impressum & Anbieterkennzeichnung",
    description: "Impressum und rechtliche Angaben der Schlüssel Schmiede Wetzlar. Kontaktdaten, Verantwortliche und Anbieterkennzeichnung gemäß DDG.",
    path: "/impressum",
    exactTitle: true,
  })

const TOC_ITEMS = [
    { id: "1-angaben", title: "1. Angaben gemäß § 5 DDG" },
    { id: "2-kontakt", title: "2. Direkter Kontakt" },
    { id: "3-standort", title: "3. Hauptsitz & Standort" },
    { id: "4-steuern", title: "4. Steuerliche Angaben" },
    { id: "5-berufsangaben", title: "5. Berufs & Aufsichtsangaben" },
    { id: "6-redaktionell", title: "6. Redaktionell Verantwortlicher" },
    { id: "7-streitschlichtung", title: "7. Verbraucherstreitbeilegung" },
    { id: "8-haftung", title: "8. Haftungsausschluss & Urheberrecht" },
]

export default function ImpressumPage() {
    return (
        <LegalLayout
            heroTitle="Impressum der Schlüssel Schmiede Wetzlar"
            heroSubtitle="Transparenz schafft Vertrauen. Wer wir sind, wie Sie uns erreichen und rechtliche Betreiberkennzeichnung."
            lastUpdated="12. April 2026"
            tocItems={TOC_ITEMS}
        >
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4 print:hidden">
                <p className="text-sm text-gray-500 font-medium">Betreiberkennzeichnung nach § 5 DDG</p>
                <PrintButton />
            </div>

            <LegalSection>
                <TLDRBox title="Verantwortlichkeit (TL;DR)" icon="info">
                    <p>Die Seite <span className="font-semibold text-[color:var(--text-primary)]">Impressum & Anbieterkennzeichnung | Schlüssel Schmiede Wetzlar</span> dokumentiert den ordnungsgemäßen Betrieb der Schlüssel Schmiede Wetzlar durch Inhaber Mina Saad. Unser Fachbetrieb bietet 24/7 Notöffnungen und Sicherheitstechnik im gesamten Lahn-Dill-Kreis. Bei Fragen erreichen Sie unseren Kundenservice direkt per Telefon.</p>
                </TLDRBox>
            </LegalSection>

            <LegalSection id="1-angaben">
                <h2 className="mt-0">1. Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
                <p>Verantwortlicher Dienstanbieter für das Webangebot Impressum der Schlüssel Schmiede Wetzlar ist:</p>
                <div className="bg-gray-50 dark:bg-[#18181b] text-gray-900 dark:text-[#e5e7eb] p-6 rounded-xl my-4 text-base border border-gray-200 dark:border-[#27272a]">
                    Schlüsseldienst Wetzlar – Schlüssel Schmiede<br />
                    Inhaber: Mina Saad<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar<br />
                    Deutschland
                </div>
                <div className="bg-gray-50 dark:bg-[#18181b] text-gray-900 dark:text-[#e5e7eb] p-4 rounded-xl my-4 text-sm border border-gray-200 dark:border-[#27272a]">
                    Ladengeschäft & Filiale:<br />
                    Langgasse 70<br />
                    35576 Wetzlar
                </div>
            </LegalSection>

            <LegalSection id="2-kontakt">
                <h2 className="mt-0">2. Direkter Kontakt & Erreichbarkeit</h2>
                <p>Als lokaler Schlüsseldienst Wetzlar legen wir größten Wert auf unmittelbare Erreichbarkeit im Schlüsselnotfall oder bei Terminfragen:</p>
                <ul className="mt-2 space-y-2">
                  <li><span className="font-semibold text-[color:var(--text-primary)]">Telefon (24/7 Notdienst):</span> <a href="tel:+4964418056279" className="font-semibold text-[var(--action-primary)] hover:underline">06441 8056279</a></li>
                  <li><span className="font-semibold text-[color:var(--text-primary)]">E-Mail:</span> <a href="mailto:schluesselschmiede@gmail.com" className="text-[var(--action-primary)] hover:underline">schluesselschmiede@gmail.com</a></li>
                  <li><span className="font-semibold text-[color:var(--text-primary)]">WhatsApp-Kontakt:</span> +49 176 16310315</li>
                </ul>
            </LegalSection>

            <LegalSection id="3-standort">
                <h2 className="mt-0">3. Hauptsitz & Standortkarte</h2>
                <p>Unser administrativer Hauptsitz befindet sich in der Gloelstraße 11, während Sie unser Kunden-Ladenlokal in der Langgasse 70 in Wetzlar finden.</p>
                <div className="w-full h-[300px] bg-gray-100 rounded-xl overflow-hidden shadow-inner my-6 print:hidden">
                    <MapConsentGate
                        src="https://maps.google.com/maps?q=Gloelstra%C3%9Fe+11,+35576+Wetzlar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Standort Schlüssel Schmiede Wetzlar"
                    />
                </div>
            </LegalSection>

            <LegalSection id="4-steuern">
                <h2 className="mt-0">4. Steuerliche Angaben</h2>
                <p>Angaben zur ordnungsgemäßen steuerlichen Registrierung des Handwerksbetriebs:</p>
                <ul className="mt-2 space-y-2">
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Umsatzsteuer-Identifikationsnummer (gemäß § 27a UStG):</span> DE 282140471</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Steuernummer:</span> 03986300160</li>
                </ul>
            </LegalSection>

            <LegalSection id="5-berufsangaben">
                <h2 className="mt-0">5. Berufs- & Aufsichtsangaben</h2>
                <p>Angaben zur beruflichen Zuordnung gemäß § 5 Abs. 1 Nr. 5 DDG:</p>
                <ul className="mt-2 space-y-2 text-gray-700">
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Berufsbezeichnung:</span> Schlüsseldienst & Sicherheitstechnik</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Zuständige Kammer:</span> Handwerkskammer Wiesbaden, Zweigstelle Wetzlar, Ederstraße 2, 35576 Wetzlar</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Handwerksrechtliche Einordnung:</span> Der Schlüsseldienst wird als eingetragener Fachbetrieb geführt. Die Zuordnung zur Handwerksrolle richtet sich nach der Handwerksordnung (HwO).</li>
                    <li><span className="font-semibold text-[color:var(--text-primary)]">Berufsrechtliche Regelungen:</span> Handwerksordnung (HwO), abrufbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">www.gesetze-im-internet.de/hwo</a></li>
                </ul>
            </LegalSection>

            <LegalSection id="6-redaktionell">
                <h2 className="mt-0">6. Redaktionell Verantwortlicher</h2>
                <p>Verantwortlich für die redaktionellen Inhalte dieser Webseite gemäß § 18 Abs. 2 MStV (Medienstaatsvertrag):</p>
                <div className="bg-gray-50 dark:bg-[#18181b] text-gray-900 dark:text-[#e5e7eb] p-6 rounded-xl my-4 text-base border border-gray-200 dark:border-[#27272a]">
                    Mina Saad<br />
                    Gloelstraße 11<br />
                    35576 Wetzlar
                </div>
            </LegalSection>

            <LegalSection id="7-streitschlichtung">
                <h2 className="mt-0">7. Verbraucherstreitbeilegung & Schlichtungsstelle</h2>
                <p>Die europäische Online-Streitbeilegungsplattform (OS) steht Verbrauchern zur Beilegung von Streitigkeiten zur Verfügung. Weiterführende Informationen zur Schlichtung erhalten Sie unter:</p>
                <p><a href="https://consumer-redress.ec.europa.eu/site-relocation_en?prefLang=de" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-primary/50 underline-offset-4">https://consumer-redress.ec.europa.eu/site-relocation_en?prefLang=de</a></p>
                <p>Unsere E-Mail-Adresse lautet: <code>schluesselschmiede@gmail.com</code></p>
                <p><span className="font-semibold text-[color:var(--text-primary)]">Hinweis gemäß § 36 VSBG:</span> Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, streben jedoch stets einvernehmliche Lösungen im direkten Kundenkontakt an.</p>
            </LegalSection>

            <LegalSection id="8-haftung">
                <h2 className="mt-0">8. Haftungsausschluss & Urheberrecht</h2>
                <h3 className="mt-4">Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir bemühen uns, die bereitgestellten Informationen stets korrekt und tagesaktuell zu halten, übernehmen jedoch keine Gewähr für die absolute Vollständigkeit oder Aktualität.</p>

                <h3 className="mt-4">Haftung für externe Links</h3>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</p>

                <h3 className="mt-4">Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte, Texte und Fotografien auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </LegalSection>
        </LegalLayout>
    )
}

export const dynamic = "force-static";
