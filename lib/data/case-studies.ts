import { CaseStudy, createId, createSlug, Slug } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: createId("case-01"),
    slug: createSlug("schliessanlage-industriehalle-wetzlar"),
    title: "Planung und Aufbau einer Industrie-GHS-Anlage",
    client: "Metallbau Mittelhessen GmbH",
    industry: "Industrie / Metallbau",
    challenge: "Der Kunde (Produktionshalle mit 40 Mitarbeitern) benötigte eine strikte hierarchische Trennung der Zutritte: Gießer sollen nur in die Produktion, Verwaltung nur in Büros, aber Notfall-Sanitäter in alle Bereiche mit einem einzigen Generalschlüssel.",
    solution: "Konzeptionierung und Installation einer ABUS Generalhauptschlüssel-Anlage (GHS). 45 Präzisionszylinder wurden verbaut, alle dokumentiert und mit Kopierschutz (Sicherungskarte) versehen.",
    results: [
      { metric: "Installation", value: "Innerhalb von 24h nach Lieferung" },
      { metric: "Sicherheit", value: "100% Kopierschutz" },
      { metric: "Wartung", value: "3 Jahre Garantie Inklusive" }
    ],
    technologies: ["ABUS Bravus", "VdS-Zertifizierung", "Schließplan-Management"],
    duration: "4 Wochen ab Planung",
    year: 2023,
    featured: true
  },
  {
    id: createId("case-02"),
    slug: createSlug("einbruchsicherung-apotheke-giessen"),
    title: "Einbruchschutz-Sanierung nach Blitz-Einbruch",
    client: "Altstadt Apotheke",
    industry: "Einzelhandel / Pharmazie",
    challenge: "Nach einem Einbruch durch Aufhebeln der Hintertür musste die gesamte Filiale hochsicherungsfähig gemacht werden. Hohe Auflagen der Versicherungen erforderten zertifizierte Riegel.",
    solution: "Installation von vier Panzerriegelschließeinrichtungen (PR2700) sowie VdS-zertifizierte Fenster-Stangenschlösser. Elektronische Profilzylinder mit Ereignis-Log wurden in die Haupteingänge gesetzt.",
    results: [
      { metric: "Reaktionszeit", value: "Soforthilfe in 25 Min" },
      { metric: "Nachrüstung", value: "5 Panzerriegel & Fenster" }
    ],
    technologies: ["ABUS Panzerriegel", "BKS", "Elektronische Zutrittskontrolle"],
    duration: "3 Tage",
    year: 2024,
    featured: true
  },
  {
    id: createId("case-03"),
    slug: createSlug("tresoroeffnung-anwaltskanzlei"),
    title: "Manipulation einer Tresortür (Stufe 4)",
    client: "Anwaltssozietät Müller & Partner",
    industry: "Recht",
    challenge: "Der mechanische Code eines hochwertigen Dokumenten-Safes war nach einem Erbfall unbekannt. Darin befanden sich Mandantenunterlagen, die binnen 48 Stunden einem Gericht vorliegen mussten.",
    solution: "Unter voller Geheimhaltung nutzte unser Team hochmoderne Endoskope und spezielle Bohrschablonen, um einen minimalen 3-Millimeter-Eingriff am Safeschloss vorzunehmen und den Relocker freizugeben. Der Safe wurde geöffnet und der Schließzylinder repariert.",
    results: [
      { metric: "Öffnungsquote", value: "Erfolgreich" },
      { metric: "Schaden", value: "Beschädigungsfrei (nur Zylinder)" }
    ],
    technologies: ["Mikrobohrung", "Lockpicking"],
    duration: "4 Stunden",
    year: 2023,
    featured: true
  },
  {
    id: createId("case-04"),
    slug: createSlug("autooeffnung-schnelleinsatz-a45"),
    title: "Emergency Autoöffnung Raststätte A45",
    client: "Privatperson",
    industry: "Privatkunden",
    challenge: "Fahrzeugschlüssel beim Tanken im Fahrzeug vergessen (Auto-Lock nach 1 Minute). Im Auto befand sich ein Kleinkind in praller Sommersonne. Feuerwehr hätte Scheibe eingeschlagen, Kunde wollte Lack und Glas schonen.",
    solution: "Unsere Einsatzleitung ordnete Sirenenfahrt (fiktiv, Notfallpriorität) zum Rastplatz Aßlar/Ehringshausen an. Anwendung von Keil und Luftkissen öffnete das SUV in unter 25 Sekunden.",
    results: [
      { metric: "Anfahrtzeit", value: "11 Minuten" },
      { metric: "Öffnungszeit", value: "25 Sekunden" },
      { metric: "Schäden", value: "Keine Kratzer" }
    ],
    technologies: ["Air-Wedge (Luftkissen)", "Long-Reach-Tool"],
    duration: "1 Einsatz",
    year: 2025,
    featured: false
  },
  {
    id: createId("case-05"),
    slug: createSlug("smart-home-integration-villa"),
    title: "Smart-Lock Modernisierung Einfamilienhaus",
    client: "Familie Hoffmann",
    industry: "Wohnen / Smart Home",
    challenge: "Der Besitzer einer Neubau-Villa bei Braunfels wünschte komplett schlüsselfreien Zutritt via 5G und Apple HomeKit, wobei Gärtner zeitgesteuerte Transponder erhalten sollten.",
    solution: "Einbau von Nuki Smart Locks Pro in Kopplung mit Nuki Keypads (Fingerprint) und Bridge. Alle Hausangestellten erhielten getimte Transponder-Rechte in der App.",
    results: [
      { metric: "Integration", value: "Nahtlos in HomeKit" },
      { metric: "Zufriedenheit", value: "100% Schlüsselfrei" }
    ],
    technologies: ["Smart Locks", "Biometrie", "App-Steuerung"],
    duration: "1 Werktag",
    year: 2024,
    featured: false
  }
];

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export function getCaseStudyBySlug(slug: Slug | string): CaseStudy | undefined {
  if (!slug) return undefined;
  return caseStudies.find(c => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter(c => c.featured);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return getAllCaseStudies().filter(c => c.industry === industry);
}
