import Breadcrumbs from"@/components/Breadcrumbs";
import StaggerReveal, { StaggerItem } from"@/components/motion/StaggerReveal";
import { entryAnimations } from"@/lib/animations";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title:"Impressum — MS Schlüsseldienst Wetzlar",
 description:"Rechtliche Informationen und Impressum des MS Schlüsseldienst Wetzlar. Transparenz und Vertrauen für unsere Kunden.",
 path:"/impressum",
});

export default function ImpressumPage() {
 const breadcrumbs = [
  { name:"Impressum", href:"/impressum" }
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
            Impressum
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
       Angaben gemäß § 5 TMG
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Schlüsseldienst Wetzlar
       <br />
       Gloelstraße 11
       <br />
       35576 Wetzlar
       <br />
       Deutschland
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Vertreten durch
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">Mina Saad</p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Kontakt
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Telefon: 0178 2471037
       <br />
       E-Mail: notfall-schluessel@proton.me
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Steuernummer
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       03986300160
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Umsatzsteuer-ID
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wird nicht erteilt (Kleinunternehmen gemäß § 19 UStG)
      </p>

      <p className="mt-8 text-[var(--text-secondary)]">
       Das Impressum ist ein wichtiger Bestandteil jeder Webseite, da es Transparenz schafft und rechtliche Anforderungen erfüllt. Es sorgt dafür, dass Besucher der Seite jederzeit wissen, mit wem sie es zu tun haben und wie sie bei Bedarf Kontakt aufnehmen können. Dies ist nicht nur eine gesetzliche Verpflichtung, sondern auch ein Ausdruck von Vertrauen und Seriosität.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       In unserem Impressum finden Sie alle relevanten Informationen zu unserem Unternehmen, darunter den Namen des Unternehmens, die Adresse, Kontaktmöglichkeiten sowie die verantwortlichen Personen. Darüber hinaus sind alle rechtlichen Informationen wie Handelsregisternummern, Umsatzsteuer-ID und andere gesetzlich erforderliche Angaben enthalten.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir nehmen den Datenschutz und die Sicherheit unserer Kunden sehr ernst. Aus diesem Grund haben wir auch die entsprechenden Datenschutzbestimmungen sowie rechtliche Hinweise zur Nutzung unserer Webseite aufgenommen. Unser Ziel ist es, Ihnen nicht nur hochwertige Dienstleistungen anzubieten, sondern auch einen sicheren, transparenten und vertrauenswürdigen Umgang mit Ihren Daten zu gewährleisten.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Falls Sie Fragen zu unserem Impressum oder den dort angegebenen Informationen haben, zögern Sie nicht, uns zu kontaktieren. Wir stehen Ihnen jederzeit für Rückfragen zur Verfügung. Ihre Zufriedenheit und Ihr Vertrauen sind uns sehr wichtig, und wir setzen alles daran, Ihre Erwartungen zu erfüllen.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Das Impressum dient nicht nur der rechtlichen Absicherung, sondern stellt sicher, dass Sie immer alle Informationen haben, die für eine transparente und vertrauensvolle Kommunikation notwendig sind.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Zusätzliche rechtliche Informationen
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Das Impressum auf unserer Webseite dient nicht nur der Erfüllung der gesetzlichen Anforderungen, sondern auch der Wahrung von Transparenz und Vertrauen gegenüber unseren Besuchern und Kunden. Es gibt Ihnen alle relevanten Informationen zu unserem Unternehmen, sodass Sie wissen, mit wem Sie es zu tun haben und wie Sie uns bei Bedarf erreichen können.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wir möchten sicherstellen, dass der Besuch unserer Webseite für Sie so angenehm und sicher wie möglich ist. Daher ist es uns besonders wichtig, dass Sie alle rechtlichen Informationen über unsere Dienstleistungen und den Umgang mit Ihren Daten leicht finden können. Unsere Webseite erfüllt alle Anforderungen des Telemediengesetzes (TMG) sowie anderer relevanter gesetzlicher Bestimmungen, um Ihnen die nötige Rechtssicherheit zu bieten.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Verantwortlichkeit und Haftung
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Für die Inhalte unserer Webseite sind wir als Betreiber verantwortlich. Wir bemühen uns, die auf unserer Seite bereitgestellten Informationen korrekt und aktuell zu halten. Dennoch können wir keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der Informationen übernehmen. Ebenso übernehmen wir keine Verantwortung für Inhalte externer Webseiten, auf die wir verlinken, da wir keinerlei Einfluss auf deren Gestaltung und Inhalte haben.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Haftungsausschluss
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Unsere Webseite enthält auch Links zu anderen Seiten im Internet. Für all diese Links gilt: Wir möchten ausdrücklich betonen, dass wir keinerlei Einfluss auf die Gestaltung und die Inhalte der verlinkten Seiten haben. Daher distanzieren wir uns hiermit von allen Inhalten aller verlinkten Seiten, die nach der Linksetzung verändert wurden. Diese Erklärung gilt für alle auf unserer Webseite angebrachten Links.
      </p>

      <h2 className="mt-8 typo-h2 text-[var(--text-primary)]">
       Verwendung von Marken und Logos
      </h2>
      <p className="mt-4 text-[var(--text-secondary)]">
       Alle verwendeten Marken, Logos und Firmennamen auf dieser Webseite sind Eigentum der jeweiligen Inhaber. Die Verwendung erfolgt nur zu Informationszwecken und stellt keine Verletzung von Markenrechten dar.
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
       Wenn Sie Fragen zu unserem Impressum oder zu anderen rechtlichen Aspekten unserer Webseite haben, können Sie uns jederzeit kontaktieren. Wir stehen Ihnen gerne zur Verfügung und kümmern uns um Ihre Anfragen, um Ihnen ein sicheres und vertrauenswürdiges Nutzungserlebnis zu gewährleisten.
      </p>
     </div>
      </StaggerItem>
    </StaggerReveal>
   </section>
  </div>
 );
}
