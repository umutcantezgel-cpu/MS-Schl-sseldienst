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
  email: "info@wetzlar-schlüsseldienst.de",
  openingHours: {
    store: "Montag bis Freitag von 06:00 bis 19:59 Uhr",
    emergency: "24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr"
  },
  financial: {
    startingPrice: "ab 99 Euro",
    startingPriceValue: 99,
    travelCostWetzlar: "0 Euro",
    travelCostWetzlarValue: 0,
    acceptedPayments: ["Barzahlung", "EC-Karte", "Kreditkarte", "Überweisung"]
  },
  partnership: {
    isAdacPartner: true,
    certifications: [
      "ADAC Partner",
      "IHK-Geprüft", 
      "Handwerkskammer eingetragen", 
      "VdS-Anerkannt"
    ]
  },
  geo: {
    latitude: 50.5567, // Adjusted approx Langgasse 70 coordinates
    longitude: 8.5022
  },
  foundedYear: 2012,
  socialMedia: {
    facebook: "https://www.facebook.com/61575618662298/mentions/",
    linkedin: "https://www.linkedin.com/in/mina-saad-a218413a9/",
    instagram: "https://instagram.com/schluessel_schmiede_wetzlar",
    whatsapp: "+4917616310315"
  }
};
