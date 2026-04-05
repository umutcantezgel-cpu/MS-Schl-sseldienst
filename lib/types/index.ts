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
  image?: ImagePath;
  imageAlt?: string;
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
  [key: string]: string;
}

export interface CompanyInfo {
  name: string;
  legalName?: string;
  address?: string;
  phone?: string;
  email?: string;
  foundedYear?: number;
  employeeCount?: number;
  totalProjects?: number;
  customerSatisfaction?: number;
  certifications?: string[];
  socialMedia?: SocialLinks;
  openingHours?: OpeningHours;
}
