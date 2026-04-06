import { FAQ, createId, createSlug, Slug } from "../types";

export const faqs: FAQ[] = [
  {
    id: createId("faq-01"),
    question: "Was kostet eine Türöffnung in Wetzlar?",
    answer: "Wir wissen, wie sehr versteckte Kosten verärgern. Deshalb öffnen wir zugefallene Türen ab 89 Euro zum garantierten Festpreis (tagsüber). Sie erfahren den exakten Preis immer verbindlich am Telefon, noch bevor unser Techniker überhaupt losfährt.",
    category: "kosten",
    order: 1
  },
  {
    id: createId("faq-02"),
    question: "Gibt es versteckte Kosten oder Aufschläge?",
    answer: "Nein. Wir arbeiten ausschließlich mit transparenten Festpreisen vor Auftragsbeginn — ohne versteckte Kosten. Der Preis, der am Telefon genannt wird, ist bindend.",
    category: "kosten",
    order: 2
  },
  {
    id: createId("faq-03"),
    question: "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
    answer: "Ja, für Einsätze zwischen 18:00 und 08:00 Uhr sowie an Wochenenden und Feiertagen berechnen wir einen transparenten Pauschalzuschlag von 30 Euro.",
    category: "kosten",
    order: 3
  },
  {
    id: createId("faq-04"),
    question: "Wie schnell sind Sie bei mir?",
    answer: "Da wir direkt in Wetzlar stationiert sind (bzw. Monteure verteilt im Einsatzgebiet haben), liegt unsere Anfahrtszeit in der Regel bei sehr kurzen 15 bis maximal 30 Minuten.",
    category: "anfahrt",
    order: 1
  },
  {
    id: createId("faq-05"),
    question: "Kommen Sie auch nach Gießen oder Marburg?",
    answer: "Ja, wir decken einen Umkreis von rund 50 Kilometern um Wetzlar ab. Orte wie Gießen erreichen wir in 15–20 Minuten. Marburg dauert etwa 25–30 Minuten.",
    category: "anfahrt",
    order: 2
  },
  {
    id: createId("faq-06"),
    question: "Wird die Tür bei der Öffnung beschädigt?",
    answer: "In über 99% der Fälle lautet die Antwort: Nein. Wenn die Tür nur zugefallen (nicht abgeschlossen) ist, bedienen wir uns spezieller Lockpicking-Schlaufen oder Blechen, um den Schnapper zurückzuziehen. Lack und Schloss bleiben makellos.",
    category: "leistungen",
    serviceSlug: createSlug("turoeffnung"),
    order: 1
  },
  {
    id: createId("faq-07"),
    question: "Was, wenn der Schlüssel verloren wurde (Tür ist abgeschlossen)?",
    answer: "Wenn eine Tür fest verschlossen ist (zwei Riegelumdrehungen), müssen wir den Zylinder meist mikrochirurgisch anbohren und aufbrechen. Dies betrifft aber nur den tauschbaren Zylinder, nicht die teure Tür.",
    category: "leistungen",
    serviceSlug: createSlug("turoeffnung"),
    order: 2
  },
  {
    id: createId("faq-08"),
    question: "Bieten Sie auch Autoöffnungen an?",
    answer: "Ja, unsere KFZ-Spezialisten öffnen Autos aller Marken zerstörungsfrei. Mit Luftkissen (Air-Wedges) erzeugen wir einen minimalen Spalt und öffnen das Fahrzeug schadenfrei von innen.",
    category: "leistungen",
    serviceSlug: createSlug("autooeffnung"),
    order: 3
  },
  {
    id: createId("faq-09"),
    question: "Öffnen Sie auch Tresore?",
    answer: "Ja, wir öffnen mechanische und elektronische Safes. Kontaktieren Sie uns für eine Erst-Analyse.",
    category: "leistungen",
    serviceSlug: createSlug("tresoroeffnung"),
    order: 4
  },
  {
    id: createId("faq-10"),
    question: "Wie erkenne ich einen seriösen Schlüsseldienst?",
    answer: "Festpreis VOR der Ankunft, echte lokale Google-Bewertungen, kein Callcenter im Hintergrund und ein lokales Impressum. Zudem rufen Monteure Sie nicht über anonyme Drittanbieter an.",
    category: "sicherheit",
    order: 1
  },
  {
    id: createId("faq-11"),
    question: "Muss ich meinen Ausweis vorlegen?",
    answer: "Ja, zu Ihrer Sicherheit müssen wir die Zugangsberechtigung prüfen. Falls Ihr Ausweis hinter der geschlossenen Tür in der Wohnung liegt, öffnen wir die Tür und prüfen das Dokument sofort im Anschluss.",
    category: "sicherheit",
    order: 2
  },
  {
    id: createId("faq-12"),
    question: "Sind Sie auch feiertags erreichbar?",
    answer: "Ja, 365 Tage im Jahr, 24 Stunden am Tag. Wir lassen niemanden an Ostern oder Weihnachten vor der Tür stehen.",
    category: "notdienst",
    order: 1
  },
  {
    id: createId("faq-13"),
    question: "Wie kann ich bei Ihnen bezahlen?",
    answer: "Sie können nach erfolgreicher Arbeit direkt vor Ort in bar, per EC-Karte oder Kreditkarte zahlen. Eine Rechnung gemäß UStG erhalten Sie ebenfalls direkt.",
    category: "kosten",
    order: 4
  },
  {
    id: createId("faq-14"),
    question: "Montieren Sie auch Panzerriegel?",
    answer: "Ja, Panzerriegel oder Querschlösser sind die effektivste Maßnahme im mechanischen Einbruchschutz. Wir beraten Sie vor Ort und übernehmen die fachmännische Montage (mit Schwerlastdübeln).",
    category: "leistungen",
    serviceSlug: createSlug("sicherheitstechnik"),
    order: 5
  },
  {
    id: createId("faq-15"),
    question: "Was tun bei abgebrochenem Schlüssel?",
    answer: "Auf keinen Fall mit Büroklammern herumstochern, das drückt den Rest weiter hinein. Rufen Sie uns; mit einem Extraktor ziehen wir das Bruchstück oft binnen Sekunden heraus.",
    category: "leistungen",
    serviceSlug: createSlug("turoeffnung"),
    order: 6
  },
  {
    id: createId("faq-16"),
    question: "Fertigen Sie Schlüsselkopien an?",
    answer: "Ja, wir kopieren Buntbart- und Profilschlüssel. Bei Schlüsseln aus einer Schließanlage benötigen wir jedoch zwingend Ihre Sicherungskarte.",
    category: "leistungen",
    serviceSlug: createSlug("schluessel-nachmachen"),
    order: 7
  },
  {
    id: createId("faq-17"),
    question: "Kosten bei Stornierung?",
    answer: "Stornierungen VOR Abfahrt des Monteurs sind kostenfrei (bis 5 Min nach Anruf). Ist der Monteur bereits losgefahren, berechnen wir eine Leeranfahrtspauschale.",
    category: "kosten",
    order: 5
  },
  {
    id: createId("faq-18"),
    question: "Planen Sie auch gesamte Schließanlagen für Gewerbe?",
    answer: "Ja, ob Z/GHS-Anlagen oder elektronische Schließsysteme. Wir planen den Zutritt für Fabriken, Mehrfamilienhäuser und Büros.",
    category: "leistungen",
    serviceSlug: createSlug("schliessanlagen"),
    order: 8
  },
  {
    id: createId("faq-19"),
    question: "Sind Sie im IHK registriert?",
    answer: "Ja, wir sind als eingetragener Handwerksbetrieb gemeldet und verfügen über alle gewerberechtlichen Qualifikationen.",
    category: "sicherheit",
    order: 3
  },
  {
    id: createId("faq-20"),
    question: "Was tun im Notfall?",
    answer: "Rufen Sie uns unter +49 6441 8056279 an. Atmen Sie durch und probieren Sie keine Gewalttaten an der Tür.",
    category: "notdienst",
    order: 2
  }
];

export function getAllFAQs(): FAQ[] {
  return [...faqs].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFAQsByCategory(category: string): FAQ[] {
  return getAllFAQs().filter(f => f.category === category);
}

export function getFAQsByService(serviceSlug: string | Slug): FAQ[] {
  return getAllFAQs().filter(f => f.serviceSlug === serviceSlug);
}

export function getFAQsSortedByOrder(): FAQ[] {
  return getAllFAQs();
}

if (process.env.NODE_ENV === "development") {
  faqs.forEach(f => {
    if (!f.id || !f.question || !f.answer) {
      console.warn(`[WARN] FAQ ${f.id} fehlen erforderliche Felder.`);
    }
  });
}
