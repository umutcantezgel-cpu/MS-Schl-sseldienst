import { Testimonial, createId, createSlug, Slug, Id } from "../types";

/**
 * Echte Kundenbewertungen — basierend auf verifizierten Google Reviews.
 * Quelle: reviews.data.ts (Google Business Profile)
 */
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
    clientName: "Alexandra",
    quote: "Sehr zuvorkommend und professionell. Wirklich ganz toller und außergewöhnlicher Service!!! Ich bin unendlich dankbar für die Geduld und das Engagement, was mir heute entgegengebracht wurde! Vielen, vielen Dank!",
    shortQuote: "Außergewöhnlicher Service — unendlich dankbar!",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2025-02-20T10:00:00Z"
  },
  {
    id: createId("testim-03"),
    clientName: "Thomas S.",
    quote: "Der Schlüsseldienst war eben vor Ort, super freundlich und hat die Tür komplett ohne Beschädigungen geöffnet. Absolut zuverlässig und professionell. Ich bin sehr zufrieden und kann den Service uneingeschränkt weiterempfehlen.",
    shortQuote: "Tür ohne Beschädigungen geöffnet — absolut empfehlenswert.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2025-01-15T14:30:00Z"
  },
  {
    id: createId("testim-04"),
    clientName: "Sahar Koob",
    quote: "Super schneller und zuverlässiger Service! Ich war ausgesperrt und der Schlüsseldienst war innerhalb kürzester Zeit vor Ort. Die Tür wurde professionell und ohne Beschädigungen geöffnet.",
    shortQuote: "Innerhalb kürzester Zeit da, professionell geöffnet.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2025-03-01T09:00:00Z"
  },
  {
    id: createId("testim-05"),
    clientName: "Axel Mugler",
    quote: "Man hört ja leider sehr viel Schlechtes über Schlüsseldienste, und deswegen waren wir ein wenig in Sorge, als wir nun auch die Dienste eines Schlüsseldienstes in Anspruch nehmen mussten. Aber alles lief einwandfrei.",
    shortQuote: "Trotz Skepsis — alles lief einwandfrei.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2024-06-15T11:00:00Z"
  },
  {
    id: createId("testim-06"),
    clientName: "Jens Brandenburger",
    quote: "Schlüsseldienst ist Top, vor allem blitzschnell, sehr freundlich und hilfsbereit! Keine Wartezeit ...",
    shortQuote: "Blitzschnell, freundlich, hilfsbereit!",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2025-03-28T08:00:00Z"
  },
  {
    id: createId("testim-07"),
    clientName: "Tim Staudt",
    clientRole: "Hausverwaltung",
    quote: "Wir sind mit dem Schlüsseldienst überaus zufrieden. Ihr Mitarbeiter, Herr Saad, hat sich als kompetent, verbindlich und zuverlässig erwiesen und hat uns mit allen Problemen zielsicher beiseite gestanden.",
    shortQuote: "Kompetent, verbindlich und zuverlässig.",
    rating: 5,
    serviceSlug: createSlug("schliessanlagen"),
    featured: true,
    date: "2024-10-20T10:15:00Z"
  },
  {
    id: createId("testim-08"),
    clientName: "Vencislav Redling",
    quote: "Einen ehrlicheren Schlüsseldienst kann man sich nicht wünschen. Um 2 Uhr nachts hatte sich der Nachbar ausgesperrt und nach einem sehr netten Telefonat war der Schlüsseldienst schnell vor Ort.",
    shortQuote: "Ehrlichster Schlüsseldienst — 2 Uhr nachts, schnell da.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-09-12T02:00:00Z"
  },
  {
    id: createId("testim-09"),
    clientName: "Francesca Bischof",
    quote: "Perfekter Service! Extrem freundlich und zuvorkommend. Bei jedem Arbeitsschritt und preislichen Veränderungen absolut transparent und fair.",
    shortQuote: "Absolut transparent und fair bei jedem Schritt.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-06-10T09:20:00Z"
  },
  {
    id: createId("testim-10"),
    clientName: "Anita Berisha",
    quote: "Absolut zu empfehlen! Preis-Leistung total angemessen, saubere Arbeit. Obwohl es Samstag ist, war er innerhalb 15 Minuten nach dem Anruf vor Ort.",
    shortQuote: "Samstag, 15 Min — saubere Arbeit, fairer Preis.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-05-18T12:00:00Z"
  },
  {
    id: createId("testim-11"),
    clientName: "Deniz Kaplan",
    quote: "Ich kann Mina Schlüsseldienst in Wetzlar nur wärmstens empfehlen! Der Service war außergewöhnlich schnell — innerhalb kürzester Zeit vor Ort und unser Problem war sofort gelöst.",
    shortQuote: "Außergewöhnlich schnell, Problem sofort gelöst.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-03-10T16:45:00Z"
  },
  {
    id: createId("testim-12"),
    clientName: "Keno Hegemann",
    quote: "Ehrlich, schnell und menschlich — genau das, was man sich in einer Notlage wünscht.",
    shortQuote: "Ehrlich, schnell, menschlich.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-05-05T17:30:00Z"
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
