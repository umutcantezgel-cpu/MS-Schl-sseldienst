import { CompanyInfo } from "../types";

export const companyInfo: CompanyInfo = {
  localStore: {
    name: "Schlüssel Schmiede Wetzlar",
    tagline: "24 Stunden Notdienst",
    street: "Langgasse 70",
    postalCode: "35576",
    city: "Wetzlar",
    state: "Hessen",
    country: "Deutschland"
  },
  parentCompany: {
    name: "MS Schlüsseldienst Wetzlar",
    street: "Gloelstraße 11",
    postalCode: "35576",
    city: "Wetzlar",
    state: "Hessen",
    country: "Deutschland"
  },
  phone: {
    main: "064418056279",
    formatted: "06441 80 56 279",
    link: "+4964418056279"
  },
  email: "schluesselschmiede@gmail.com",
  openingHours: {
    store: "06:00 - 19:59 Uhr",
    emergency: "24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr"
  },
  financial: {
    startingPrice: "99 €",
    startingPriceValue: 99,
    travelCostWetzlar: "0 Euro",
    travelCostWetzlarValue: 0,
    acceptedPayments: ["Barzahlung", "EC-Karte", "Kreditkarte", "Überweisung"],
    pricingTexts: {
      headline: "Türöffnung tagsüber ab 99 € (Endpreis)",
      baseNote: "Basispreis für eine zugefallene, nicht verschlossene Standardtür an Werktagen (Mo–Fr, 06:00–19:59 Uhr). Zzgl. Anfahrt außerhalb der Wetzlarer Kernstadt.",
      consistencyNote: "In den weitaus meisten Fällen bleibt es bei diesem Preis.",
      transparencyNote: "Mehraufwand? Wird vor Ort abgesprochen, nie ohne Ihr OK.",
      legalNote: "Alle Preise sind Endpreise. Aufgrund der Kleinunternehmerregelung gem. § 19 UStG wird keine Umsatzsteuer ausgewiesen."
    }
  },
  partnership: {
    isAdacPartner: false,
    certifications: [
      "Fachbetrieb Sicherheitstechnik",
      "IHK-Geprüft", 
      "Handwerkskammer eingetragen", 
      "VdS-Anerkannt"
    ]
  },
  geo: {
    latitude: 50.5567, // Adjusted approx Langgasse 70 coordinates
    longitude: 8.5022
  },
  foundedYear: 2025,
  socialMedia: {
    facebook: "https://www.facebook.com/61575618662298/mentions/",
    linkedin: "https://www.linkedin.com/in/mina-saad-a218413a9/",
    instagram: "https://instagram.com/schluessel_schmiede_wetzlar",
    whatsapp: "+4917616310315"
  }
};
