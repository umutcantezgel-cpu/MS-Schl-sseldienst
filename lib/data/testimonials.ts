import { Testimonial, createId, createSlug, Slug, Id } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: createId("testim-01"),
    clientName: "Sabine K.",
    clientRole: "Privatperson",
    quote: "Ich stand um 3 Uhr nachts vor verschlossener Tür in der Wetzlarer Altstadt. Der Monteur war nach 20 Minuten da, super freundlich und hat die Tür mit einem Stück Plastik in Sekunden geöffnet. Kein kaputtes Schloss, exakt der versprochene Preis am Telefon.",
    shortQuote: "In 20 Minuten da und Tür schadenfrei geöffnet.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2024-11-05T08:00:00Z"
  },
  {
    id: createId("testim-02"),
    clientName: "Familie Weber",
    quote: "Sehr professioneller Service. Nach unserem Einbruch tief in der Nacht kam sofort jemand raus, hat ein Notschloss eingesetzt und uns am nächsten Tag hervorragend zu neuen Panzerriegeln beraten. Fühlten uns in tollen Händen.",
    shortQuote: "Schnelle Soforthilfe mitten in der Nacht nach Einbruch.",
    rating: 5,
    serviceSlug: createSlug("einbruchschutz"),
    featured: true,
    date: "2024-09-12T14:30:00Z"
  },
  {
    id: createId("testim-03"),
    clientName: "Markus D.",
    clientRole: "Hausverwalter",
    company: "Immobilien Wetzlar",
    quote: "Zuverlässiger Partner für unsere Hausverwaltung. Wenn Mieter sich aussperren oder wir neue Schließanlagen für ganze Blöcke brauchen, Schlüssel Schmiede ist immer unsere erste Anlaufstelle.",
    rating: 5,
    serviceSlug: createSlug("schliessanlagen"),
    featured: true,
    date: "2025-01-22T10:15:00Z"
  },
  {
    id: createId("testim-04"),
    clientName: "Jens P.",
    quote: "Top Service! Autoschlüssel im Kofferraum eingesperrt auf dem Supermarktparkplatz. Der Kollege kam mit Luftkissen und Drähten und zack, war die Tür ohne den kleinsten Kratzer wieder offen. Fairer Preis von 99 Euro.",
    shortQuote: "Auto ohne Kratzer geöffnet.",
    rating: 5,
    serviceSlug: createSlug("autooeffnung"),
    featured: true,
    date: "2024-08-30T16:45:00Z"
  },
  {
    id: createId("testim-05"),
    clientName: "Anja M.",
    quote: "Leider klemmte der Schlüssel im Zylinder fest und ich kam nicht in mein Büro in Gießen. Die Anfahrt ging sehr fix, das Schloss musste zwar getauscht werden, aber die Kostentransparenz war hervorragend. Danke Mustafa!",
    rating: 4,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-03-10T09:20:00Z"
  },
  {
    id: createId("testim-06"),
    clientName: "Thorsten V.",
    company: "Restaurant Lahn",
    quote: "Wir brauchten schnell eine Tresoröffnung, weil der elektronische Safe nicht mehr reagierte. Alles lief sehr diskret und professionell ab. Absolute Empfehlung.",
    rating: 5,
    serviceSlug: createSlug("tresoroeffnung"),
    featured: true,
    date: "2024-07-25T11:00:00Z"
  },
  {
    id: createId("testim-07"),
    clientName: "Christina E.",
    quote: "Ich hatte echt Angst abgezockt zu werden, wie man das im Fernsehen oft sieht. Aber der Monteur hat mir am Telefon 50 Euro zugesagt, da die Tür nur zugefallen war, und genau das habe ich bezahlt. Ehrlich währt am längsten.",
    shortQuote: "Ehrliche Festpreise wie am Telefon vereinbart.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-12-05T13:30:00Z"
  },
  {
    id: createId("testim-08"),
    clientName: "Leon R.",
    quote: "Habe hier einen Zweitschlüssel nachmachen lassen. Ging super schnell (keine Wartezeit) und der Schlüssel passte sofort problemlos ins Schloss, nicht wie bei anderen billigen Anbietern im Bahnhof.",
    rating: 5,
    serviceSlug: createSlug("schluessel-nachmachen"),
    featured: false,
    date: "2025-02-14T15:10:00Z"
  },
  {
    id: createId("testim-09"),
    clientName: "Dirk W.",
    quote: "Etwas teurer als ich dachte (Nacht-Tarif), aber der Monteur war pünktlich und hat saubere Arbeit geleistet.",
    rating: 4,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2023-10-18T04:20:00Z"
  },
  {
    id: createId("testim-10"),
    clientName: "Sonja F.",
    quote: "Unsere alte Schließanlage war eine Katastrophe. Schlüssel Schmiede hat uns super zu KESO-Zylindern beraten und alles an einem Nachmittag ausgetauscht. Alle Schlüssel drehen super leicht.",
    rating: 5,
    serviceSlug: createSlug("schliessanlagen"),
    featured: false,
    date: "2024-06-02T12:00:00Z"
  },
  {
    id: createId("testim-11"),
    clientName: "Dr. Baumann",
    quote: "Präzisionsarbeit. Panzerriegel an einer Altbau-Sicherheitstür fachgerecht montiert. Sehr sauberes Bohrbild, kein Dreck hinterlassen. Empfehlenswerter Handwerker.",
    rating: 5,
    serviceSlug: createSlug("sicherheitstechnik"),
    featured: false,
    date: "2024-04-11T09:45:00Z"
  },
  {
    id: createId("testim-12"),
    clientName: "Gabi H.",
    quote: "Schlüssel steckt von innen. Tür zu. Panik. Habe hier angerufen. 'Wir sind in 15 Min da, kostet 50 Euro'. Er war in 12 Min da, öffnete in 1 Minute, kostete 50 Euro. Herrlich unaufgeregt und fair.",
    shortQuote: "Schnell, kompetent, super Preis.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2025-03-01T17:30:00Z"
  }
];

export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort((a, b) => {
    return new Date(b.date || "").getTime() - new Date(a.date || "").getTime();
  });
}

export function getFeaturedTestimonials(): Testimonial[] {
  return getAllTestimonials().filter(t => t.featured);
}

export function getTestimonialsByService(serviceSlug: string | Slug): Testimonial[] {
  return getAllTestimonials().filter(t => t.serviceSlug === serviceSlug);
}

export function getTestimonialsByRating(minRating: number): Testimonial[] {
  return getAllTestimonials().filter(t => (t.rating || 0) >= minRating);
}

export function getTestimonialById(id: string | Id): Testimonial | undefined {
  if (!id) return undefined;
  return testimonials.find(t => t.id === id);
}
