import { CaseStudy, createId, createSlug, Slug } from "../types";

const caseStudies: CaseStudy[] = [
  {
    id: createId("case-01"),
    slug: createSlug("schliessanlage-industriehalle-wetzlar"),
    title: "Planung und Aufbau einer IndustriegHSanlage",
    client: "Metallbau Mittelhessen GmbH",
    industry: "Industrie / Metallbau",
    challenge: "Der Kunde (eine große Produktionshalle mit über 40 Mitarbeitern im Schichtbetrieb) benötigte dringend eine strikte hierarchische Trennung der Zutritte. Die Anforderungen waren komplex: Gießer und Maschinenführer sollen nur in die Produktion und Umkleiden gelangen, Verwaltungsangestellte ausschließlich in die Bürotrakte, aber Notfall-Sanitäter und das Management müssen jederzeit in alle Bereiche mit einem einzigen Generalschlüssel eintreten können. Das bisherige System war völlig unübersichtlich, da unzählige Einzelschlüssel im Umlauf waren, was ein massives Sicherheitsrisiko darstellte. Zudem forderte die Gebäudeversicherung ein VdS-zertifiziertes Schließsystem, um den Versicherungsschutz für die teuren Maschinenparks aufrechtzuerhalten.",
    solution: "Wir begannen mit einer umfassenden Sicherheitsanalyse und Konzeptionierung einer ABUS Generalhauptschlüssel-Anlage (GHS). Nach der genauen Bedarfsermittlung und Erstellung eines detaillierten Schließplans wurden 45 Hochsicherheits-Präzisionszylinder verbaut. Alle Zylinder und Schlüssel sind digital dokumentiert und mit einem strengen Kopierschutz durch eine Sicherungskarte versehen. Die gesamte Installation, inklusive der Demontage der alten Anlage und der Einweisung der Haustechniker in das neue Schließplan-Management, erfolgte exakt im vorgegebenen Zeitfenster am Wochenende, um den Produktionsbetrieb der Metallbau Mittelhessen GmbH nicht im Geringsten zu stören.",
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
    title: "Einbruchschutzsanierung nach Blitzeinbruch",
    client: "Altstadt Apotheke",
    industry: "Einzelhandel / Pharmazie",
    challenge: "Nach einem brutalen Blitzeinbruch in der Nacht, bei dem die Täter durch gewaltsames Aufhebeln der Hintertür eindrangen, musste die gesamte Filiale der Altstadt Apotheke in Gießen umgehend hochsicherungsfähig gemacht werden. Die emotionalen und materiellen Schäden waren immens. Hohe Auflagen der Versicherungen erforderten zertifizierte Riegel und spezielle Fenstersicherungen. Das Zeitfenster für die Nachbesserung war extrem kurz, da die Apotheke ihren Betrieb aufrechterhalten musste und Medikamente der höchsten Sicherheitsstufe gelagert wurden. Es durfte kein erneutes Sicherheitsrisiko in der nächsten Nacht geben.",
    solution: "Unser Notdienst-Team rückte sofort an und übernahm zunächst die provisorische Notsicherung. In den darauffolgenden Tagen führten wir eine ganzheitliche Einbruchschutzsanierung durch. Wir installierten vier massive Panzerriegelschließeinrichtungen (ABUS PR2700) an den kritischen Nebeneingängen sowie VdS-zertifizierte Fenster-Stangenschlösser an allen rückwärtigen Fenstern. Elektronische Profilzylinder mit Ereignis-Log wurden in die Haupteingänge gesetzt, sodass jederzeit nachvollzogen werden kann, wer die Apotheke wann betritt. Die Kombination aus mechanischem Widerstand und elektronischer Überwachung schuf ein Bollwerk gegen Einbrecher.",
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
    challenge: "In einer renommierten Anwaltskanzlei stand ein schwerer mechanischer Dokumenten-Safe der Sicherheitsstufe 4. Der Zugangscode war nach einem unerwarteten Erbfall unbekannt, und Schlüssel waren nicht auffindbar. Darin befanden sich extrem sensible Mandantenunterlagen und notarielle Urkunden, die zwingend binnen 48 Stunden einem Gericht vorliegen mussten. Eine gewaltsame Zerstörung mit einem Schneidbrenner oder Trennschleifer kam absolut nicht in Frage, da dies die hitzeempfindlichen Dokumente im Inneren zerstört oder beschädigt hätte. Die Nerven der Anwälte lagen blank, da ein Fristversäumnis katastrophale Folgen gehabt hätte.",
    solution: "Unter Wahrung voller Geheimhaltung und Diskretion rückte unser Spezialisten-Team für Tresoröffnungen an. Wir nutzten hochmoderne medizinische Endoskope, elektronische Stethoskope und spezielle, millimetergenaue Bohrschablonen des Tresorherstellers. Mit höchster Konzentration wurde ein minimaler 3-Millimeter-Eingriff am Safeschloss vorgenommen, um den internen Relocker (Notverriegelung) gezielt freizugeben. Durch dieses mikrochirurgische Vorgehen und klassisches Lockpicking am Doppelbartschloss konnte der Safe nach mehreren Stunden unversehrt geöffnet werden. Anschließend wurde das winzige Bohrloch fachgerecht verschweißt und ein neuer Schließzylinder eingesetzt. Der Tresor ist weiterhin zu 100% zertifiziert nutzbar.",
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
    challenge: "Ein dramatischer Notruf erreichte unsere Zentrale: Eine junge Familie hatte auf einer Raststätte an der A45 bei Wetzlar eine Pause eingelegt. Der Fahrzeugschlüssel wurde beim Tanken versehentlich im Fahrzeug vergessen. Die Tücke: Die moderne Fahrzeugelektronik führte nach nur 1 Minute einen Auto-Lock durch. Im Fahrzeug befand sich ein 2-jähriges Kleinkind, während draußen hochsommerliche Temperaturen von über 30 Grad herrschten. Das Fahrzeuginnere erhitzte sich extrem schnell. Die gerufene Feuerwehr hätte routinemäßig sofort die Seitenscheibe eingeschlagen, doch die Eltern baten uns um Hilfe, um das panische Kind nicht durch splitternes Glas zu gefährden und Lackschäden am Neuwagen zu vermeiden.",
    solution: "Unsere Einsatzleitung erkannte den extremen Zeitdruck und ordnete sofort einen Prioritätseinsatz mit Gefahrenabwehr an. Der nächstgelegene Monteur war glücklicherweise nur wenige Kilometer entfernt und raste zum Rastplatz. Unter hochkonzentrierten Bedingungen kam modernste Öffnungstechnik zum Einsatz: Mit einem extrem weichen Air-Wedge (Luftkissen) wurde der Türspalt minimal erweitert. Anschließend betätigte der Monteur mit einem speziellen, teflonbeschichteten Long-Reach-Tool den inneren Türgriff. Die gesamte Fahrzeugöffnung dauerte exakt 25 Sekunden. Das schwitzende Kind konnte sofort befreit werden. Am empfindlichen Lack und an der Autotür entstanden keinerlei Schäden oder Kratzer.",
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
    title: "Smartlock Modernisierung Einfamilienhaus",
    client: "Familie Hoffmann",
    industry: "Wohnen / Smart Home",
    challenge: "Familie Hoffmann, Besitzer einer neu erbauten Architekten-Villa in Hanglage bei Braunfels, war unzufrieden mit dem klassischen Schlüsselkonzept. Der Hausherr wünschte sich einen komplett schlüsselfreien Zutritt für die ganze Familie via 5G, Apple Watches und Apple HomeKit. Ein besonderes Problem stellte das Personal dar: Die Reinigungskräfte und der Gärtner sollten ausschließlich zu ganz bestimmten, fest definierten Uhrzeiten (z.B. dienstags zwischen 08:00 und 12:00 Uhr) Zugang zum Grundstück und zum Haus erhalten. Die bisherige Vergabe von physischen Ersatzschlüsseln barg ein zu hohes Verlustrisiko, und ein kompletter Austausch der teuren Sicherheitstüren war baulich nicht gewünscht.",
    solution: "Wir entwickelten ein unsichtbares, nachrüstbares Smart-Home-Konzept. Im Zentrum stand der Einbau von Nuki Smart Locks der neuesten Generation (Pro-Versionen) auf der Innenseite der bestehenden Sicherheitszylinder. Von außen blieb die Tür optisch völlig unverändert. Für das Personal installierten wir dezente Nuki Keypads mit Fingerprint-Sensoren im Eingangsbereich. Die zentrale Nuki Bridge sorgte für die lückenlose Integration ins häusliche WLAN. Gemeinsam mit Familie Hoffmann konfigurierten wir in der App exakte Zutrittsprofile: Die Kinder können per Smartphone öffnen, während Hausangestellte getimte Transponder-Rechte in der App erhielten. Bei Verlust eines Smartphones können die Rechte sofort per Klick entzogen werden.",
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
