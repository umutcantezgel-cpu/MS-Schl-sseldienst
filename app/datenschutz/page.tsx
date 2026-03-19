import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Datenschutzerklärung — MS Schlüsseldienst Wetzlar",
 description:"Erfahren Sie, wie der MS Schlüsseldienst Wetzlar Ihre persönlichen Daten schützt und verarbeitet. Transparenz und Sicherheit stehen bei uns an erster Stelle.",
 path:"/datenschutz",
});

export default function DatenschutzPage() {
 const breadcrumbs = [
  { name:"Datenschutz", href:"/datenschutz" }
 ];

 return (
  <div className="bg-[var(--surface-primary)] text-[var(--text-primary)] font-sans">
   
   {/* Hero Section — Premium Dark */}
   <section className="relative pt-[180px] pb-[var(--space-64)] lg:pt-[220px] lg:pb-[var(--space-96)] bg-[var(--color-charcoal-900)] overflow-hidden">
    {/* CSS Noise Texture */}
    <div
      className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize:"200px 200px",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:"radial-gradient(ellipse 50% 50% at 50% 0%, rgba(185,28,28,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="container mx-auto px-[var(--section-px)] relative z-10 flex flex-col items-center text-center">
      <Breadcrumbs items={breadcrumbs} light={true} />
      
      <StaggerReveal className="mt-8 flex flex-col items-center" animation={entryAnimations.slideUpFade} staggerDelay={0.1}>
        <StaggerItem animation={entryAnimations.slideUpFade}>
          <h1 className="typo-hero-display text-white mb-[var(--space-6)]">
            Datenschutzerklärung
          </h1>
        </StaggerItem>
      </StaggerReveal>
    </div>

    {/* Bottom Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[var(--surface-primary)] pointer-events-none z-[1]" />
   </section>

   {/* Content Section */}
   <section className="px-[var(--section-px)] py-[var(--section-py)]">
    <StaggerReveal className="mx-auto max-w-3xl" animation={entryAnimations.slideUpFade}>
      <StaggerItem animation={entryAnimations.slideUpFade}>
     <div className="prose prose-lg prose-slate mx-auto">
      <h2 className="typo-h2 text-[var(--text-primary)]">
       1. Allgemeines zur Datenverarbeitung
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung Ihrer personenbezogenen Daten, die im Rahmen unserer Geschäftstätigkeit und der Nutzung dieser Webseite erfolgen.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       2. Verantwortliche Stelle
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Mina Saad
       <br />
       Schlüsseldienst Wetzlar
       <br />
       Gloelstraße 11
       <br />
       35576 Wetzlar
       <br />
       Telefon: 01782471037
       <br />
       E-Mail: notfall-schluessel@proton.me
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       3. Erhebung und Speicherung personenbezogener Daten
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir erheben personenbezogene Daten, wenn Sie mit uns über unsere Webseite in Kontakt treten (z. B. per Kontaktformular oder E-Mail). Diese Daten umfassen in der Regel:
      </p>
      <ul className="mt-4 text-[var(--text-secondary)] list-disc pl-6">
       <li>Name</li>
       <li>E-Mail-Adresse</li>
       <li>Telefonnummer</li>
       <li>Andere freiwillig angegebene Daten</li>
      </ul>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       4. Zweck der Verarbeitung
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Die von uns erhobenen personenbezogenen Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage, die Vertragsabwicklung und die Kommunikation mit Ihnen verwendet.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       5. Weitergabe von Daten
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies für die Vertragsabwicklung notwendig ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich dazu verpflichtet sind.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       6. Dauer der Speicherung
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Ihre personenbezogenen Daten werden nur so lange gespeichert gemäß DSGVO, wie es für die Erfüllung der genannten Zwecke erforderlich ist, oder solange gesetzliche Aufbewahrungspflichten bestehen.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       7. Rechte der betroffenen Personen
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten. Darüber hinaus können Sie die Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       8. Cookies
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Unsere Webseite verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die die Nutzung der Webseite erleichtern. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers deaktivieren.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       9. Sicherheit der Daten
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir treffen alle erforderlichen technischen und organisatorischen Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Zerstörung zu schützen.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       10. Kontakt
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten haben, können Sie uns jederzeit unter den oben angegebenen Kontaktdaten erreichen.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Zusätzliche Informationen zum Datenschutz
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Als Unternehmen, das großen Wert auf Transparenz und den Schutz Ihrer Daten legt, möchten wir Ihnen noch einige zusätzliche Informationen zur Verarbeitung Ihrer personenbezogenen Daten mitteilen. Unsere Verantwortung für Ihre Daten endet nicht mit der Erhebung und Speicherung, sondern umfasst auch die kontinuierliche Überprüfung und Verbesserung unserer Datenschutzmaßnahmen.
      </p>

      <h3 className="mt-6 typo-lead text-[var(--text-primary)] font-bold">
       Datenverarbeitung bei Nutzung von Formularen
      </h3>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wenn Sie mit uns über Kontaktformulare oder andere Online-Formulare auf der Webseite kommunizieren, werden Ihre Angaben ausschließlich für die jeweilige Anfrage oder den Zweck verwendet, für den sie erhoben wurden. Dabei achten wir darauf, dass nur die notwendigsten Daten abgefragt werden. Ihre Daten werden vertraulich behandelt und nur an die zuständigen Stellen innerhalb unseres Unternehmens weitergeleitet, wenn dies zur Bearbeitung Ihrer Anfrage erforderlich ist.
      </p>

      <h3 className="mt-6 typo-lead text-[var(--text-primary)] font-bold">
       Ihre Einwilligung zur Verarbeitung
      </h3>
      <p className="mt-4 text-[var(--text-secondary)]">
       Indem Sie unsere Webseite nutzen und Ihre Daten freiwillig angeben, stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten gemäß der beschriebenen Datenschutzerklärung zu. Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten erteilen, können Sie diese jederzeit widerrufen. Beachten Sie, dass ein Widerruf der Einwilligung jedoch keine Auswirkungen auf die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung hat.
      </p>

      <h3 className="mt-6 typo-lead text-[var(--text-primary)] font-bold">
       Schutz Ihrer Daten auf mobilen Geräten
      </h3>
      <p className="mt-4 text-[var(--text-secondary)]">
       Falls Sie über mobile Endgeräte auf unsere Webseite zugreifen, stellen wir sicher, dass auch hier Ihre Daten durch die Nutzung moderner Sicherheitsstandards geschützt werden. Achten Sie darauf, dass Ihr Gerät ebenfalls sicher ist und dass Sie keine sensiblen Daten über unsichere Netzwerke übertragen.
      </p>

      <h3 className="mt-6 typo-lead text-[var(--text-primary)] font-bold">
       Übermittlung von Daten in Drittländer
      </h3>
      <p className="mt-4 text-[var(--text-secondary)]">
       In bestimmten Fällen kann es notwendig sein, Ihre Daten an Dienstleister in Ländern außerhalb der EU oder des EWR zu übermitteln. In diesen Fällen stellen wir sicher, dass die Übermittlung Ihrer Daten in Übereinstimmung mit der DSGVO erfolgt, beispielsweise durch den Abschluss von Standardvertragsklauseln oder die Nutzung von anerkannten Datenschutzmechanismen.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir sind stets bemüht, Ihre Privatsphäre und Sicherheit zu gewährleisten und stehen Ihnen bei Fragen zu Ihrer Datensicherheit gerne zur Verfügung. Wir überprüfen und aktualisieren unsere Datenschutzerklärung regelmäßig, um den Anforderungen der DSGVO gerecht zu werden und unsere Datenschutzpraktiken zu verbessern.
      </p>
     </div>
      </StaggerItem>
    </StaggerReveal>
   </section>
  </div>
 );
}
