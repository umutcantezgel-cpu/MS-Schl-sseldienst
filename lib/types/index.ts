/**
 * SSOT (Single Source of Truth) für alle Datenmodelle.
 * Dieses File verwendet Zero "any" oder "unknown" und etabliert Compile-Time Sicherheit
 * durch Branded Types.
 */

// ==========================================
// PRIMITIVE TYPEN
// ==========================================

export interface ContentLength {
  minChars: number;
  maxChars?: number;
}

export type SlugFormat = string;
export type ISODateTime = string;
export type ImagePath = string;

// ==========================================
// BRANDED SEMANTIK
// ==========================================

export type Id = string & { readonly __brand: "Id" };
export type Slug = string & { readonly __brand: "Slug" };

/**
 * Konvertiert einen gewöhnlichen String zu einem typisierten Id (Compile-Time Cast).
 */
export function createId(id: string): Id {
  return id as Id;
}

/**
 * Konvertiert einen gewöhnlichen String zu einem typisierten Slug.
 */
export function createSlug(slug: string): Slug {
  return slug as Slug;
}

// ==========================================
// CORE DOMAIN: SERVICE
// ==========================================

export interface ServiceProcessStep {
  title: string;
  description: string;
  duration?: string;
}

export interface ServicePricing {
  currency?: "EUR" | "USD";
  amount?: number;
  interval?: "one-time" | "monthly" | "yearly";
  features?: string[];
}

export interface SEO_Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface Service {
  id: Id;
  slug: Slug;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon?: string;
  features?: string[];
  benefits?: string[];
  process?: ServiceProcessStep[];
  pricing?: ServicePricing;
  relatedServices?: Slug[];
  metadata?: SEO_Metadata;
  order?: number;
}

// ==========================================
// CORE DOMAIN: TEAM MEMBER
// ==========================================

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
}

export interface TeamMember {
  id: Id;
  slug: Slug;
  name: string;
  role?: string;
  department?: string;
  bio?: string;
  shortBio?: string;
  image?: ImagePath;
  skills?: string[];
  social?: SocialLinks;
  order?: number;
}

// ==========================================
// CORE DOMAIN: BLOG POST
// ==========================================

export interface BlogPost {
  id: Id;
  slug: Slug;
  title: string;
  excerpt?: string;
  content: string;
  author?: Slug;
  publishedAt: ISODateTime;
  updatedAt?: ISODateTime;
  category?: string;
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
  metadata?: SEO_Metadata;
}

// ==========================================
// CORE DOMAIN: TESTIMONIAL
// ==========================================

export interface Testimonial {
  id: Id;
  clientName: string;
  clientRole?: string;
  company?: string;
  companyLogo?: ImagePath;
  photoUrl?: ImagePath;
  quote: string;
  shortQuote?: string;
  rating?: number; // 1-5
  serviceSlug?: Slug;
  featured?: boolean;
  date?: ISODateTime;
}

// ==========================================
// CORE DOMAIN: CASE STUDY
// ==========================================

export interface CaseStudyResult {
  metric: string;
  value: string;
  improvement?: string;
}

export interface CaseStudy {
  id: Id;
  slug: Slug;
  title: string;
  client: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  results?: CaseStudyResult[];
  technologies?: string[];
  testimonialId?: Id;
  duration?: string;
  year?: number;
  date?: string;
  featured?: boolean;
  serviceSlug?: Slug;
  metadata?: SEO_Metadata;
}

// ==========================================
// CORE DOMAIN: FAQ
// ==========================================

export interface FAQ {
  id: Id;
  question: string;
  answer: string;
  category?: string;
  serviceSlug?: Slug;
  order?: number;
}

// ==========================================
// CORE DOMAIN: COMPANY INFO
// ==========================================

export interface OpeningHours {
  store: string;     // e.g., "Montag bis Samstag 10:00 bis 18:00 Uhr"
  emergency: string; // e.g., "24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr"
}

export interface BusinessEntity {
  name: string;
  street: string;
  postalCode: string; // MUST NOT BE HARDCODED ANYWHERE ELSE
  city: string;
  state: string;
  country: string;
}

export interface CompanyInfo {
  /**
   * Geschäftseinheit 1: Schlüssel Schmiede Wetzlar (Ladengeschäft, LocalBusiness SEO)
   */
  localStore: BusinessEntity & {
    tagline: string; // z.B. "24 Stunden Notdienst" (NICHT Fachgeschäft)
  };
  
  /**
   * Geschäftseinheit 2: MS Schlüsseldienst Wetzlar (Muttergesellschaft, administrative & rechtliche Zwecke)
   * Darf NICHT für LocalBusiness/Sitemap Einträge verwendet werden um NAP Konsistenz nicht zu verwässern!
   */
  parentCompany: BusinessEntity;

  // Gemeinsame Daten
  phone: {
    main: string;      // "064418056279"
    formatted: string; // "06441 80 56 279"
    link: string;      // "+4964418056279"
  };
  email: string;
  openingHours: OpeningHours;
  
  financial: {
    startingPrice: string; // "ab 99 Euro"
    startingPriceValue: number; // 99 (für Schema.org)
    travelCostWetzlar: string; // "0 Euro"
    travelCostWetzlarValue: number; // 0
    acceptedPayments: string[]; // ["Barzahlung", "EC-Karte", "Überweisung"] (KEIN PayPal)
  };

  partnership: {
    isAdacPartner: boolean; // ADAC Partnerschaft aktiv
    certifications: string[];
  };

  geo: {
    latitude: number;
    longitude: number;
  };
  
  foundedYear: number;
  
  socialMedia: {
    facebook: string; // Muss auf Schlüssel Schmiede verweisen!
    instagram?: string;
    linkedin?: string;
  };
}
