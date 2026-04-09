import { Service, createId, createSlug, Slug } from "../types";

export const services: Service[] = [
  {
    id: createId("srv-01"),
    slug: createSlug("turoeffnung"),
    title: "Zerstörungsfreie Türöffnung",
    shortDescription: "Wir öffnen zugefallene Türen in 99% der Fälle absolut beschädigungsfrei und mit 100% Festpreis-Garantie.",
    fullDescription: "Eine zugefallene Tür ist ärgerlich, aber mit dem richtigen Partner kein Grund zur Panik. Als lokaler Fachbetrieb aus Wetzlar verzichten wir auf fragwürdige Callcenter-Strukturen. Unsere IHK-zertifizierten Monteure sind binnen 15 bis 30 Minuten bei Ihnen. Mit Spezialwerkzeug öffnen wir die meisten Türen innerhalb weniger Minuten, ohne den Schließzylinder, den Beschlag oder das Türblatt zu beschädigen. Auch bei verschlossenen (abgesperrten) Türen wenden wir modernste, materialschonende Techniken an.",
    icon: "DoorOpen",
    features: ["Zerstörungsfreie Öffnung in 99% der Fälle", "100% Festpreis-Garantie ohne versteckte Anfahrtskosten", "24/7 Notdienst direkt aus dem Lahn-Dill-Kreis", "Ausschließlich geschultes Fachpersonal"],
    benefits: ["Keine unnötigen Zusatzkosten für neue Schlösser", "Erspart den Ärger über überhöhte Rechnungen", "Sofortige Hilfe im Notfall durch lokale Präsenz"],
    process: [
      { title: "Transparente Preisnennung", description: "Sie schildern Ihr Problem am Telefon, wir nennen Ihnen sofort den exakten, unumstößlichen Festpreis." },
      { title: "Blitzschnelle Anfahrt", description: "Ein Wetzlarer Monteur macht sich unverzüglich auf den Weg (15-30 Min Anfahrtszeit)." },
      { title: "Professionelle Öffnung", description: "Zerstörungsfreie Öffnung vor Ihren Augen. Ein Legitimationsnachweis (Ausweis) ist aus Sicherheitsgründen erforderlich." }
    ],
    pricing: {
      currency: "EUR",
      amount: 50,
      interval: "one-time",
      features: ["Festpreis für normale zugefallene Türen (Tagsüber)", "Zzgl. fairer Zuschlag am Wochenende/Nacht (30€)"]
    },
    relatedServices: [createSlug("schliessanlagen"), createSlug("einbruchschutz")],
    order: 1,
    metadata: {
      title: "Türöffnung Wetzlar | Zerstörungsfrei & Lokaler Festpreis",
      description: "Professionelle Türöffnung in Wetzlar vom etablierten Fachbetrieb. Zerstörungsfrei in 99% der Fälle. Ehrliche Festpreise ab 99 Euro ohne böse Überraschungen.",
      keywords: "Türöffnung Wetzlar, Schlüssel Schmiede Türöffnung, Türschloss öffnen, Festpreis Türöffnung, Fachbetrieb"
    }
  },
  {
    id: createId("srv-02"),
    slug: createSlug("autooeffnung"),
    title: "Autoöffnung & KFZ-Öffnung",
    shortDescription: "Fahrzeug verschlossen? Wir öffnen alle Marken beschädigungsfrei und garantieerhaltend ab 99 Euro.",
    fullDescription: "Ein Moment der Unachtsamkeit und der Schlüssel liegt im verriegelten Auto. Verzweifeln Sie nicht und riskieren Sie keine zerstörerischen Selbstversuche. Unsere spezialisierten KFZ-Monteure nutzen sanfte Lockpicking-Techniken und zertifizierte Air-Wedges. Damit öffnen wir Autotüren aller Marken und von alten Liebhaberfahrzeugen bis zu hochmodernen Limousinen mit Keyless-Go und absolut kratzfrei und schonend für Ihre Fahrzeuggarantie.",
    icon: "Car",
    features: ["100% ohne Lack- oder Blechschäden", "Für alle Automarken und Fabrikate", "Keine teure Neucodierung im Autohaus nötig", "Direkt vor Ort Service in wenigen Minuten"],
    benefits: ["Stressfreie Rückkehr an Ihr Lenkrad", "Weitaus günstiger als das Einschlagen der Scheibe", "Keine Wartezeiten auf langsame Abschleppdienste"],
    order: 2,
    metadata: {
      title: "Autoöffnung Wetzlar | KFZ beschädigungsfrei öffnen ab 99€",
      description: "Autoöffnung im Lahn-Dill-Kreis ohne Lackschäden. Wir knacken Fahrzeuge aller Marken sicher, professionell und ohne Garantieverlust."
    }
  },
  {
    id: createId("srv-03"),
    slug: createSlug("schliessanlagen"),
    title: "Schließanlagen Planung",
    shortDescription: "Installation langlebiger Schließanlagen für Eigenheime oder das Gewerbe nach VdS-Standard.",
    fullDescription: "Wir konzeptionieren exakt auf Sie zugeschnittene Schließanlagen. Ob eine komfortable Gleichschließung im Einfamilienhaus oder eine komplexe Generalhauptschlüssel-Anlage (GHS) für Ihr Firmengebäude und wir vertrauen ausschließlich auf polizeilich empfohlene Premium-Hersteller. Zudem bieten wir die nahtlose Migration auf hochmoderne, elektronische Smart-Lock Zutrittskontrollen, die höchsten Sicherheitsansprüchen (VdS-zertifiziert) genügen.",
    icon: "Key",
    features: ["Polizeilich empfohlene Hersteller (ABUS, BKS, EVVA)", "VdS-zertifizierte Zylinder als Standard", "Mechanische und elektronische Smart-Lock Hybridlösungen", "Gesetzlicher Schutz per Sicherungskarte"],
    benefits: ["Sicherheit auf allerhöchstem Niveau", "Komfortabel: Ein Schlüssel für das gesamte Haus", "Zukunftssicher, patentgeschützt und modular erweiterbar"],
    order: 3,
    metadata: { title: "Schließanlagen Wetzlar | VdS zertifizierte Systeme & Montage" }
  },
  {
    id: createId("srv-04"),
    slug: createSlug("schluessel-nachmachen"),
    title: "Schlüsselanfertigung",
    shortDescription: "Präzise Zweitschlüssel und offizielle Kopien von Sicherheitsschlüsseln direkt aus der Schmiede.",
    fullDescription: "Sie benötigen dringend einen Ersatzschlüssel? In unserer Wetzlarer Schlüssel Schmiede fertigen wir Kopien von Zylinder-, Buntbart- und KFZ-Sicherheitsschlüsseln in industrieller Präzision direkt nach Vorlage. Für geschützte Profilzylinder-Anlagen fordern wir und unter Vorlage Ihrer authorisierten Sicherungskarte und eine legale und zu 100% passgenaue Nachfertigung beim Original-Hersteller an.",
    icon: "Copy",
    features: ["Standard-, Rohr- und Sicherheitsschlüssel", "Nachfertigung ausschließlich mit legaler Sicherungskarte", "Höchste CNC-Passgenauigkeit", "Kurze Wartezeiten direkt im Ladengeschäft"],
    order: 4
  },
  {
    id: createId("srv-05"),
    slug: createSlug("sicherheitstechnik"),
    title: "Moderne Sicherheitstechnik",
    shortDescription: "DIN 18104 geprüfte Sicherheit für Ihr Objekt: Panzerriegel, Stangenschlösser & Fenstersicherungen.",
    fullDescription: "Machen Sie Einbrechern das Leben unmöglich. Wir inspizieren Ihr Haus oder Ihre Wohnung vor Ort und decken versteckte Schwachstellen auf. Anschließend montieren wir polizeilich empfohlene, VdS-geprüfte Zusatzschlösser, massive Fenster-Kipp-Sicherungen oder robuste Panzerriegel (Querriegel), die ein Aufhebeln der Tür effektiv und nachweislich verhindern.",
    icon: "Shield",
    features: ["Kostenfreie, ehrliche Sicherheitsberatung vor Ort", "Absicherungen streng nach DIN 18104 Standard", "Massive Querriegel und Panzer-Zusatzschlösser", "Polizeilich anerkannte Präventivmaßnahmen"],
    order: 5,
    pricing: { amount: 0, interval: "one-time", features: ["Sicherheits-Schwachstellenanalyse vor Ort ist 100% kostenfrei!"] }
  },
  {
    id: createId("srv-06"),
    slug: createSlug("einbruchschutz"),
    title: "Einbruchschutz & Soforthilfe",
    shortDescription: "Sofortige Einbruchschadenbeseitigung und nachhaltige Präventivmaßnahmen rund um die Uhr.",
    fullDescription: "Nach einem Einbruch sitzt der Schock verständlicherweise tief. Unser psychologisch geschulter Notdienst kümmert sich um die sofortige, beruhigende Absicherung der beschädigten Tür und mitten in der Nacht. Wir tauschen aufgebrochene Spezialzylinder und reparieren Sicherheitsschließbleche umgehend. Zugleich beraten wir Sie diskret, wie Sie künftig den Einbruchschutz massiv In Richtung DIN-Norm erhöhen können.",
    icon: "Siren",
    features: ["Notsicherung sofort nach dem Einbruchsversuch", "Diskretion und schnelle Wiederherstellung der Sicherheit", "Zukunftsorientierte Präventiv-Beratung", "Schnellste Reaktionszeit im Raum Wetzlar"],
    order: 6
  },
  {
    id: createId("srv-07"),
    slug: createSlug("tresoroeffnung"),
    title: "Tresor- & Safe-Öffnung",
    shortDescription: "Diskrete und fachmännische Notöffnung von Safes, Geldkassetten und alten Schränken.",
    fullDescription: "Schlüssel zum Familientresor verloren oder den Zahlencode der Elektronik vergessen? Als vertrauenswürdiger Fachbetrieb analysieren unsere Meister die komplexe Konstruktion Ihres Tresors. Wir wenden mikrochirurgische Aufbohrtechniken oder hochspezialisierte Manipulationstools an, um Ihre sensiblen Wertsachen absolut intakt und unbeschädigt zu bergen. Bei uns gilt strenge Verschwiegenheitspflicht.",
    icon: "Safe",
    features: ["100% Diskretion und Verschwiegenheit garantiert", "Hochmoderne Spezialwerkzeuge und Endoskope", "Erfahrung mit elektronischen und mechanischen Safes", "Optionale Wiederherstellung von manipulierten Zylindern"],
    order: 7
  },
  {
    id: createId("srv-08"),
    slug: createSlug("notdienst"),
    title: "24/7 Schlüsselnotdienst der Schlüssel Schmiede",
    shortDescription: "Kein Call-Center. Wir sind Ihr echter, verlässlicher lokaler Handwerker im nächtlichen Notfall.",
    fullDescription: "Ein unvorhergesehener Notfall kennt keine Geschäftszeiten. Aus diesem Grund ist das Notdienst-Telefon der Schlüssel Schmiede an 365 Tagen im Jahr, rund um die Uhr persönlich besetzt und ohne nervige Warteschleifen in anonymen Call-Centern. Wenn Sie anrufen, sprechen Sie direkt mit einem Fachmann aus Wetzlar. Wir lassen Sie niemals im Kalten stehen und garantieren transparente Festpreise mit fairen, branchenüblichen Nacht- und Wochenendtarifen.",
    icon: "Clock",
    features: ["365 Tage im Jahr real besetzt", "Niemals ein Callcenter, immer ein lokaler Meister", "Regionale In-House Stationierung", "Unumstößliche, faire Festpreisnennung am Telefon"],
    order: 8
  },
  {
    id: createId("srv-09"),
    slug: createSlug("autoschluessel"),
    title: "Autoschlüssel Service",
    shortDescription: "Wir programmieren, codieren und reparieren Autoschlüssel direkt vor Ort.",
    fullDescription: "Gehäuse kaputt? Tasten defekt? Zweitschlüssel benötigt? Wir programmieren und reparieren Transponder-Schlüssel schnell und oft günstiger als im Autohaus direkt in Wetzlar. Kommen Sie mit dem originalen Schlüssel und Auto vorbei.",
    icon: "CarFront",
    features: ["Zweitschlüssel programmieren", "Gehäuse und kaputte Tasten tauschen", "Sofort Service in Wetzlar", "Oft günstiger als die Vertragswerkstatt"],
    order: 9
  },
  {
    id: createId("srv-10"),
    slug: createSlug("passbilder"),
    title: "Biometrische Passbilder",
    shortDescription: "Sofort-Passbilder in Top-Qualität für Ausweis, Führerschein und Visa.",
    fullDescription: "Egal ob Personalausweis, Reisepass, Führerschein oder Visum: Wir fotografieren Sie nach den offiziellen biometrischen Vorgaben. Ohne Termin einfach im Ladenlokal vorbeikommen und nach 5-10 Minuten Bilder direkt mitnehmen.",
    icon: "Image",
    features: ["Sofort zum Mitnehmen", "Offiziell Biometrisch Zertifiziert", "Ohne Termin", "4 Bilder für 15€"],
    order: 10
  },
  {
    id: createId("srv-11"),
    slug: createSlug("uhren-service"),
    title: "Uhren Service",
    shortDescription: "Schneller Batteriewechsel und Armband-Service ohne Wartezeiten.",
    fullDescription: "Ihre Uhr steht still oder das Armband ist kaputt? Wir wechseln Batterien hochwertiger Marken (Renata, Varta) und tauschen oder kürzen Gliederarmbänder. Unkomplizierter Express-Service direkt vor Ort.",
    icon: "Watch",
    features: ["Fachmännischer Batteriewechsel", "Armbänder kürzen und verlängern", "Sofort Service", "Renata & Varta Batterie-Qualität"],
    order: 11
  }
];

// ==========================================
// GETTER FUNKTIONEN (Type Safe)
// ==========================================

export function getAllServices(): Service[] {
  return [...services].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getServiceBySlug(slug: Slug | string): Service | undefined {
  if (!slug || typeof slug !== "string") {
    console.warn("[WARN] getServiceBySlug: Invalid slug provided.");
    return undefined;
  }
  return services.find(s => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  // Für Homepage-Highlights filtern wir z.B. die ersten vier Routen
  return getAllServices().slice(0, 4);
}

export function getServicesByCategory(category: string): Service[] {
  // Fallback, da unsere Services aktuell keine harte category haben
  return getAllServices();
}

if (process.env.NODE_ENV === "development") {
  const slugs = services.map(s => s.slug);
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.error("[ERROR] Duplikate in services Slugs gefunden:", duplicates);
  }
  services.forEach(s => {
    if (!s.id || !s.slug || !s.title || !s.shortDescription) {
      console.warn(`[WARN] Service ${s.title || "UNBEKANNT"} fehlen erforderliche Felder.`);
    }
  });
}
