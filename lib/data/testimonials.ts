import { Testimonial, createId, createSlug, Slug, Id } from "../types";

/**
 * Echte Kundenbewertungen — basierend auf verifizierten Google Reviews.
 * Quelle: reviews.data.ts (Google Business Profile)
 */
export const testimonials: Testimonial[] = [
  {
    id: createId("testim-01"),
    clientName: "Leticia",
    clientRole: "Privatperson",
    quote: "Sehr schnell vor Ort, professionell und schnelle Öffnung der Tür.",
    shortQuote: "Professionell und schnelle Öffnung.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2024-04-06T08:00:00Z"
  },
  {
    id: createId("testim-02"),
    clientName: "S.",
    quote: "Kompetenz trifft Freundlichkeit und Fachwissen!",
    shortQuote: "Kompetenz trifft Freundlichkeit!",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2024-04-05T10:00:00Z"
  },
  {
    id: createId("testim-03"),
    clientName: "Celina Hartmann",
    quote: "Alles in allem ein guter Eindruck komme bei Bedarf gerne wieder.",
    shortQuote: "Komme bei Bedarf gerne wieder.",
    rating: 5,
    serviceSlug: createSlug("autoschluessel"),
    featured: true,
    date: "2024-03-31T14:30:00Z"
  },
  {
    id: createId("testim-04"),
    clientName: "daniel sk",
    quote: "Ich möchte gerne von meiner positiven Erfahrung berichten. Der Besuch war nicht nur schnell mal eben einen Schlüssel nachmachen lassen (welcher witziger Weise besser passt als das Original 😅) - sondern auch verbunden …",
    shortQuote: "Besser als das Original!",
    rating: 5,
    serviceSlug: createSlug("schliessanlagen"),
    featured: true,
    date: "2024-03-01T09:00:00Z"
  },
  {
    id: createId("testim-05"),
    clientName: "Jens Brandenburger",
    quote: "Schlüsseldienst ist Top, vor allem blitzschnell, sehr freundlich und hilfsbereit! Keine Wartezeit ...",
    shortQuote: "Blitzschnell, freundlich, hilfsbereit!",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: true,
    date: "2024-03-28T08:00:00Z"
  },
  {
    id: createId("testim-06"),
    clientName: "Thomas S.",
    quote: "Der Schlüsseldienst war eben vor Ort, super freundlich und hat die Tür komplett ohne Beschädigungen geöffnet. Absolut zuverlässig und professionell. Ich bin sehr zufrieden und kann den Service uneingeschränkt weiterempfehlen.",
    shortQuote: "Tür ohne Beschädigungen geöffnet.",
    rating: 5,
    serviceSlug: createSlug("turoeffnung"),
    featured: false,
    date: "2024-01-15T14:30:00Z"
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
