import React from "react";

interface SpunSeoTextProps {
  seed: string;
  cityOrArea: string;
}

// Pseudo-random number generator based on seed string
function getHash(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

const PARAGRAPHS = {
  intro: [
    "Wenn Sie einen zuverlässigen Schlüsseldienst in {city} suchen, sind Sie bei der Schlüssel Schmiede an der richtigen Adresse. Ein kurzer Moment der Unachtsamkeit reicht oft schon aus, und die Tür fällt ins Schloss. In genau solchen stressigen Momenten benötigen Sie einen verlässlichen 24h Notdienst, der schnell vor Ort ist. Wir garantieren Ihnen eine professionelle Türöffnung zum vorher vereinbarten Festpreis.",
    "Sie stehen vor verschlossener Tür in {city}? Kein Grund zur Panik. Die Schlüssel Schmiede ist Ihr regionaler Experte für alle Belange rund um Schlüssel und Schloss. Als zertifizierter Schlüsseldienst bieten wir Ihnen einen umfassenden Service. Unsere freundlichen Monteure sind im Rahmen unseres 24h Notdienstes schnellstmöglich bei Ihnen, um Ihnen mit einer schonenden Türöffnung zum fairen Festpreis aus der Patsche zu helfen.",
    "Ein verlorener Schlüssel oder eine zugefallene Haustür in {city} ist immer ärgerlich, aber mit der Schlüssel Schmiede schnell gelöst. Wir sind Ihr lokaler Schlüsseldienst und stehen Ihnen mit unserem 24h Notdienst Tag und Nacht zur Seite. Bei uns erleben Sie keine bösen Überraschungen auf der Rechnung, denn wir setzen auf absolute Transparenz und bieten jede Türöffnung zu einem garantierten Festpreis an."
  ],
  notdienst: [
    "Unser 24/7 Notdienst ist an 365 Tagen im Jahr für Sie erreichbar. Egal ob spät in der Nacht, an Wochenenden oder an gesetzlichen Feiertagen – wir lassen Sie in {city} nicht im Regen stehen. Unsere speziell geschulten Techniker nutzen modernste Werkzeuge, wodurch wir in den meisten Fällen eine komplett zerstörungsfreie Öffnung Ihrer Tür sicherstellen können. Das spart Ihnen hohe Kosten für einen neuen Zylinder.",
    "Notfälle kennen keine Öffnungszeiten. Aus diesem Grund ist der 24/7 Notdienst der Schlüssel Schmiede permanent für Sie einsatzbereit. Wenn Sie in {city} unsere Hilfe benötigen, machen wir uns umgehend auf den Weg. Durch unsere lokale Nähe garantieren wir kurze Anfahrtszeiten. Mit höchster Präzision und speziellem Aufsperrwerkzeug öffnen wir Ihre Tür meist ohne jegliche Beschädigung am Schloss oder Zylinder.",
    "Als echter Handwerksbetrieb aus der Region wissen wir, worauf es ankommt: Schnelligkeit und fachmännisches Können. Unser 24/7 Notdienst ist Tag und Nacht in {city} unterwegs, um Menschen aus Notsituationen zu befreien. Vertrauen Sie auf unsere langjährige Erfahrung. Wir öffnen Haus- und Wohnungstüren, Tresore sowie Autos in der Regel beschädigungsfrei und helfen Ihnen so, weitere Kosten zu vermeiden."
  ],
  einbruchschutz: [
    "Neben der klassischen Türöffnung sind wir in {city} auch Ihr erster Ansprechpartner in Sachen Einbruchschutz und Sicherheitstechnik. Leider steigen die Einbruchszahlen kontinuierlich. Mit der richtigen Prävention, wie beispielsweise einem Panzerriegel, hochwertigen Schließanlagen oder zusätzlichen Fenster-Sicherungen, können Sie Ihr Eigentum effektiv schützen. Wir beraten Sie gerne unverbindlich direkt bei Ihnen vor Ort.",
    "Ein sicheres Zuhause ist unbezahlbar. Unser Schlüsseldienst in {city} bietet Ihnen umfassende Beratung zum Thema Einbruchschutz. Oft reichen schon kleine mechanische Nachrüstungen, um Einbrechern das Leben schwer zu machen. Wir analysieren Schwachstellen an Ihren Fenstern und Türen und installieren fachgerecht moderne Sicherheitstechnik, Panzerriegel und smarte Schließzylinder, damit Sie nachts wieder ruhig schlafen können.",
    "Der Schutz Ihrer Familie und Ihres Eigentums in {city} hat für uns höchste Priorität. Deshalb umfasst das Leistungsspektrum der Schlüssel Schmiede auch modernste Sicherheitstechnik und Einbruchschutz-Konzepte. Wir prüfen Ihre Wohnsituation vor Ort auf Sicherheitslücken und montieren VdS-geprüfte Schlösser, Zusatzsicherungen und Querriegel. Investieren Sie präventiv in Ihre Sicherheit, bevor ungebetene Gäste es tun."
  ],
  transparenz: [
    "Transparenz und Ehrlichkeit sind die Grundpfeiler unserer Philosophie. Wenn Sie unseren Schlüsseldienst in {city} rufen, nennen wir Ihnen bereits am Telefon einen verbindlichen Preis für Ihren Einsatz. Versteckte Kosten, überzogene Anfahrtspauschalen oder horrende Nachtzuschläge gibt es bei der Schlüssel Schmiede nicht. Sie können die Rechnung bequem in bar oder per Karte direkt beim Monteur begleichen.",
    "Leider gibt es in der Branche viele schwarze Schafe. Die Schlüssel Schmiede distanziert sich ausdrücklich von Abzock-Methoden. Bei jedem Auftrag in {city} erhalten Sie von uns eine klare Preisstruktur und eine absolute Festpreis-Garantie. Wir besprechen alle Kosten vor Beginn der Arbeit mit Ihnen. Neben der Barzahlung akzeptieren unsere Techniker selbstverständlich auch EC-Karten und moderne Zahlungsmittel wie Apple Pay.",
    "Wir setzen auf langfristiges Vertrauen unserer Kunden in {city}. Daher arbeiten wir ausschließlich mit transparenten Festpreisen, die wir Ihnen offen kommunizieren, noch bevor wir mit der Türöffnung beginnen. Keine versteckten Klauseln, keine bösen Überraschungen. Als seriöser Dienstleister ist es für uns selbstverständlich, dass Sie bei uns sicher, fair und flexibel bezahlen können – gerne auch bargeldlos mit EC-Karte."
  ],
  schliessanlagen: [
    "Für gewerbliche Kunden, Hausverwaltungen und Privatpersonen planen und montieren wir in {city} professionelle Schließanlagen. Ob mechanische Gleichschließung oder eine komplexe elektronische Zutrittskontrolle – wir erarbeiten maßgeschneiderte Konzepte. Durch hochwertige Komponenten namhafter Hersteller gewährleisten wir langlebige Sicherheit und komfortable Bedienung. Lassen Sie sich von uns ein individuelles Schließplan-Management erstellen, das exakt auf Ihre Bedürfnisse und Gebäudeanforderungen abgestimmt ist.",
    "Eine gut geplante Schließanlage ist das Herzstück der Gebäudesicherheit in {city}. Wir bieten Ihnen von der Beratung über die Montage bis zur regelmäßigen Wartung einen Komplettservice. Unsere Experten analysieren Ihre räumlichen Gegebenheiten und setzen auf mechanische oder mechatronische Systeme höchster Qualität. Profitieren Sie von unserer Erfahrung in der Realisierung von Schließsystemen für Mehrfamilienhäuser, Bürokomplexe und Industrieanlagen, bei denen Sicherheit und Flexibilität im Fokus stehen.",
    "Vertrauen Sie bei Schließanlagen in {city} auf unser handwerkliches Know-how. Egal ob Sie ein kleines Büro oder eine weitläufige Gewerbeimmobilie absichern möchten – wir konzipieren das passende Schließsystem. Die Schlüssel Schmiede kombiniert bewährte mechanische Technik mit modernen elektronischen Zutrittskontrollen, um Ihnen ein Höchstmaß an Komfort und Sicherheit zu garantieren. Von der ersten Schwachstellenanalyse bis zur finalen Zylinder-Montage stehen wir Ihnen zuverlässig zur Seite."
  ],
  warumwir: [
    "Warum sollten Sie sich für uns entscheiden? Die Schlüssel Schmiede steht in {city} für echte Handwerksqualität, regionale Verankerung und unbedingte Zuverlässigkeit. Wir arbeiten schnell, sauber und transparent. Unser Team bildet sich kontinuierlich weiter, um Ihnen stets die sichersten und modernsten Lösungen im Bereich Türöffnung und Einbruchschutz anbieten zu können. Ihre absolute Zufriedenheit und Sicherheit sind unser oberstes Gebot, an jedem Tag im Jahr.",
    "Unsere Kunden in {city} schätzen besonders unsere faire und offene Kommunikation sowie die hohe handwerkliche Präzision. Wir sind kein anonymes Callcenter, sondern Ihr Nachbar und Sicherheitsexperte vor Ort. Wenn es auf jede Minute ankommt, sind wir dank unserer optimalen lokalen Vernetzung schnellstens bei Ihnen. Verlassen Sie sich auf einen zertifizierten Schlüsseldienst, der mit Leidenschaft, Spezialwerkzeug und höchstem Engagement an die Arbeit geht.",
    "Die Entscheidung für den richtigen Schlüsseldienst ist Vertrauenssache. In {city} haben wir uns durch jahrelange, seriöse Arbeit einen hervorragenden Ruf erarbeitet. Wir garantieren Ihnen nicht nur eine zügige und schonende Türöffnung, sondern auch eine ehrliche und unabhängige Sicherheitsberatung. Wir verkaufen Ihnen nichts, was Sie nicht wirklich brauchen, sondern bieten zielgerichtete Lösungen, die perfekt zu Ihrem Budget und Ihrem Sicherheitsbedürfnis passen."
  ]
};

export default function SpunSeoText({ seed, cityOrArea }: SpunSeoTextProps) {
  const hash = getHash(seed);
  
  const introIdx = hash % 3;
  const notdienstIdx = (hash >> 1) % 3;
  const einbruchIdx = (hash >> 2) % 3;
  const transparenzIdx = (hash >> 3) % 3;
  const schliessanlagenIdx = (hash >> 4) % 3;
  const warumwirIdx = (hash >> 5) % 3;

  const replaceCity = (text: string) => text.replace(/{city}/g, cityOrArea);

  return (
    <section className="py-[var(--section-py)] bg-white border-t border-[var(--border-subtle)] prose prose-slate max-w-none px-[var(--section-px)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Ihr vertrauenswürdiger Schlüsseldienst für {cityOrArea} – Türöffnung zum Festpreis</h2>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.intro[introIdx] || "")}
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">24/7 Notdienst: Fachkompetenz rund um die Uhr</h3>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.notdienst[notdienstIdx] || "")}
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">Umfassende Sicherheitstechnik und Einbruchschutz</h3>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.einbruchschutz[einbruchIdx] || "")}
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">Schließanlagen und moderne Zutrittskontrolle</h3>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.schliessanlagen[schliessanlagenIdx] || "")}
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">Unser Versprechen: Professionalität und Transparenz</h3>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.transparenz[transparenzIdx] || "")}
        </p>
        <h3 className="text-xl font-bold mb-3 mt-6">Warum die Schlüssel Schmiede?</h3>
        <p className="mb-4 text-gray-700">
          {replaceCity(PARAGRAPHS.warumwir[warumwirIdx] || "")}
        </p>
      </div>
    </section>
  );
}
