/**
 * ═══════════════════════════════════════════════════════════
 * CASE STUDIES DATA ARCHITECTURE — Static TypeScript SSOT
 * ═══════════════════════════════════════════════════════════
 *
 * Real-world success stories that build trust and authority.
 * Each case study demonstrates competence in a specific scenario.
 */

import { siteUrl } from '@/lib/schema';

// ─── TypeScript Interfaces ──────────────────────────────────

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  /** The customer's problem */
  challenge: string;
  /** Our solution and approach */
  solution: string;
  /** Measurable outcome */
  result: string;
  /** Service category */
  category: 'turoeffnung' | 'sicherheitstechnik' | 'schliessanlagen' | 'autooeffnung';
  /** Location of the job */
  location: string;
  /** Duration of the job */
  duration: string;
  /** ISO date string */
  completedAt: string;
  /** Customer testimonial quote */
  testimonial?: string;
}

// ─── Seed Case Studies ──────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'nachtnotdienst-familie-wetzlar-altstadt',
    title: 'Nachtnotdienst: Familie in Wetzlar-Altstadt ausgesperrt',
    description: 'Erfolgreiche zerstörungsfreie Türöffnung um 23:30 Uhr für eine Familie mit Kleinkind in der Wetzlarer Altstadt.',
    challenge: 'Eine junge Familie mit einem 2-jährigen Kind stand um 23:30 Uhr an einem Samstag vor ihrer verschlossenen Wohnungstür in der Wetzlarer Altstadt. Die Tür war zugefallen, als sie nur kurz den Müll rausbrachten. Das Kind war müde und weinte — schnelle Hilfe war dringend nötig.',
    solution: 'Unser Techniker war nach dem Anruf in nur 18 Minuten vor Ort. Mit einer speziellen Öffnungstechnik (Picker-Set für Buntbart-Schlösser) konnte die zugefallene Tür innerhalb von 4 Minuten zerstörungsfrei geöffnet werden — ohne jede Beschädigung am Schloss oder Türrahmen.',
    result: 'Die Familie war nach weniger als 25 Minuten zurück in ihrer Wohnung. Festpreis: 149€ (Nachteinsatz). Keine versteckten Kosten. 5-Sterne Google-Bewertung erhalten.',
    category: 'turoeffnung',
    location: 'Wetzlar Altstadt',
    duration: '22 Minuten (inkl. Anfahrt)',
    completedAt: '2024-11-16T23:52:00Z',
    testimonial: 'Unfassbar schnell und absolut professionell. Der Preis war genau wie am Telefon gesagt. Kann man nur weiterempfehlen!',
  },
  {
    slug: 'einbruchschutz-nachruestung-mehrfamilienhaus-giessen',
    title: 'Einbruchschutz-Nachrüstung: Mehrfamilienhaus in Gießen',
    description: 'Komplette Sicherheitsnachrüstung eines 6-Parteien-Hauses nach einem Einbruchsversuch — Panzerriegel, Sicherheitszylinder und Schließanlage.',
    challenge: 'Nach einem gescheiterten Einbruchsversuch im Erdgeschoss beauftragte die Hausverwaltung eines 6-Parteien-Hauses in Gießen-Wieseck eine umfassende Sicherheitsanalyse. 4 von 6 Wohnungstüren hatten nur Standardzylinder ohne Aufbohrschutz. Die Hauseingangstür hatte keinen Panzerriegel.',
    solution: 'In einer 3-stufigen Umsetzung über 2 Tage haben wir: (1) Alle 6 Wohnungstüren mit VdS-zertifizierten Sicherheitszylindern + Schutzbeschlägen nachgerüstet, (2) einen Querriegelschloss an der Hauseingangstür installiert, (3) eine neue Schließanlage mit Sicherungskarte implementiert — ein Hauptschlüssel für die Verwaltung, individuelle Schlüssel für die Mieter.',
    result: 'Gesamtinvestition für die Hausverwaltung: ca. 2.800€. Alle 6 Parteien erhielten neue, kopiergeschützte Schlüssel. Ein Folge-Einbruchsversuch 3 Monate später scheiterte am neuen Sicherheitssystem.',
    category: 'schliessanlagen',
    location: 'Gießen-Wieseck',
    duration: '2 Arbeitstage',
    completedAt: '2024-09-20T16:00:00Z',
    testimonial: 'Endlich fühlen sich alle Mieter wieder sicher. Die Planung war transparent, die Umsetzung sauber. Absolut empfehlenswert.',
  },
];

// ─── Case Study JSON-LD ─────────────────────────────────────

export function generateCaseStudySchema(study: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.description,
    author: {
      '@type': 'Organization',
      name: 'MS Schlüsseldienst Wetzlar',
      url: siteUrl,
    },
    datePublished: study.completedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/fallstudien/${study.slug}`,
    },
    about: {
      '@type': 'Service',
      serviceType: study.category,
      provider: {
        '@type': 'Locksmith',
        '@id': `${siteUrl}/#localbusiness`,
      },
    },
    inLanguage: 'de-DE',
  };
}
