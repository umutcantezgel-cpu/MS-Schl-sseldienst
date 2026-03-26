/**
 * ═══════════════════════════════════════════════════════════
 * BLOG CONTENT ARCHITECTURE — Static TypeScript SSOT
 * ═══════════════════════════════════════════════════════════
 *
 * No CMS, no API. All blog content lives here as typed data.
 * Pages consume this via imports for SSG + Article JSON-LD.
 */

import { siteUrl } from '@/lib/schema';

// ─── TypeScript Interfaces ──────────────────────────────────

export interface BlogPost {
  /** URL-safe slug (e.g. "tueroeffnung-kosten-transparenz") */
  slug: string;
  /** SEO-optimized title */
  title: string;
  /** Meta description (max 160 chars) */
  description: string;
  /** Full article content in markdown-compatible plain text */
  content: string;
  /** Author name */
  author: string;
  /** ISO date string */
  publishedAt: string;
  /** ISO date string */
  updatedAt: string;
  /** Category reference */
  category: BlogCategory;
  /** Reading time in minutes */
  readingTime: number;
  /** SEO keywords */
  keywords: string[];
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}

// ─── Categories ─────────────────────────────────────────────

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'Ratgeber',
    slug: 'ratgeber',
    description: 'Praktische Tipps für Schlüsselverlust, Einbruchschutz und Sicherheitstechnik.',
  },
  {
    name: 'Sicherheitstipps',
    slug: 'sicherheitstipps',
    description: 'Expertenwissen zu Einbruchschutz, Schließtechnik und Smart-Home-Sicherheit.',
  },
  {
    name: 'Branchenwissen',
    slug: 'branchenwissen',
    description: 'Hintergründe, Trends und Fakten rund um die Schlüsseldienstbranche.',
  },
];

// ─── Seed Articles (Topical Authority) ──────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tueroeffnung-kosten-was-darf-ein-schluesseldienst-verlangen',
    title: 'Türöffnung Kosten: Was darf ein Schlüsseldienst 2025 verlangen?',
    description: 'Transparenter Überblick über erlaubte Kosten bei Türöffnungen. Festpreise vs. variable Preise, rechtliche Grundlagen und Tipps gegen Abzocke.',
    content: `Sie stehen vor der verschlossenen Tür und fragen sich: Was kostet eine Türöffnung wirklich? Die Antwort hängt von mehreren Faktoren ab — Tageszeit, Art des Schlosses und ob die Tür zugefallen oder abgesperrt ist.

**Zugefallene Tür tagsüber:** Ein seriöser Schlüsseldienst berechnet hierfür zwischen 89 und 129 Euro Festpreis. Nachts (22:00–06:00) können Zuschläge von 30–50 Euro hinzukommen.

**Abgesperrte Tür:** Wenn die Tür mit dem Schlüssel abgeschlossen wurde, wird in der Regel ein Zylinderaustausch notwendig. Die Kosten liegen zwischen 129 und 249 Euro je nach Zylinderqualität.

**Warnsignale für unseriöse Anbieter:**
- Keine Festpreiszusage am Telefon
- Rechnung deutlich über dem Telefonpreis
- Aggressive Forderung nach Sofortzahlung in bar
- Keine Handwerkerkleidung oder Firmenfahrzeug

**Unser Festpreis-Versprechen:** Bei MS Schlüsseldienst Wetzlar nennen wir Ihnen den verbindlichen Gesamtpreis bereits am Telefon — ohne versteckte Kosten, garantiert.`,
    author: 'MS Schlüsseldienst Team',
    publishedAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-03-20T14:00:00Z',
    category: BLOG_CATEGORIES[0],
    readingTime: 5,
    keywords: ['Türöffnung Kosten', 'Schlüsseldienst Preise', 'Festpreis Schlüsseldienst', 'Türöffnung Wetzlar'],
  },
  {
    slug: 'einbruchschutz-5-massnahmen-die-einbrecher-abschrecken',
    title: 'Einbruchschutz: 5 Maßnahmen, die Einbrecher wirklich abschrecken',
    description: 'Experten-Tipps vom Schlüsseldienst: Diese 5 Sicherheitsmaßnahmen machen Ihr Zuhause zur Festung — von Panzerriegel bis Smart Lock.',
    content: `Die Einbruchstatistik in Hessen zeigt: Alle 3 Minuten wird in Deutschland eingebrochen. Doch die gute Nachricht ist — über 40% aller Einbruchsversuche scheitern an guter Sicherheitstechnik.

**1. Panzerriegel (Querriegelschloss)**
Der Klassiker unter den mechanischen Sicherungen. Ein Panzerriegel verriegelt die Tür über die gesamte Breite und ist selbst mit Hebelwerkzeug kaum zu überwinden.

**2. Zusatzschloss mit Sperrbügel**
Ermöglicht das sichere Öffnen der Tür einen Spalt breit — ideal, um Besucher zu identifizieren, bevor man vollständig öffnet.

**3. Pilzkopfverriegelung**
Speziell geformte Schließzapfen am Fenster, die ein Aufhebeln effektiv verhindern. Eine der wichtigsten Maßnahmen, da 80% der Einbrüche über Fenster und Balkontüren erfolgen.

**4. Sicherheitszylinder mit Pickingschutz**
Moderne Schließzylinder mit Aufbohr- und Picking-Schutz ersetzen den werkseitig verbauten Standardzylinder. Investition: ab 80 Euro.

**5. Smart-Lock-Integration**
Elektronische Türschlösser mit App-Steuerung bieten zusätzlichen Komfort und protokollieren jeden Zugangsversuch — alarmieren Sie in Echtzeit bei verdächtigen Aktivitäten.

**Kostenlose Beratung:** Wir analysieren die Schwachstellen Ihres Zuhauses vor Ort in Wetzlar und Umgebung — völlig kostenlos und unverbindlich.`,
    author: 'MS Schlüsseldienst Team',
    publishedAt: '2025-02-10T09:00:00Z',
    updatedAt: '2025-03-18T11:00:00Z',
    category: BLOG_CATEGORIES[1],
    readingTime: 6,
    keywords: ['Einbruchschutz', 'Einbrecher abschrecken', 'Panzerriegel', 'Sicherheitstechnik Wetzlar'],
  },
  {
    slug: 'serioesen-schluesseldienst-erkennen-7-merkmale',
    title: 'Seriösen Schlüsseldienst erkennen: 7 Merkmale, auf die Sie achten müssen',
    description: 'So erkennen Sie einen vertrauenswürdigen Schlüsseldienst: 7 klare Merkmale, die seriöse Anbieter von Abzockern unterscheiden.',
    content: `In der Schlüsseldienstbranche gibt es leider schwarze Schafe. Mit diesen 7 Merkmalen erkennen Sie sofort, ob Sie es mit einem seriösen Anbieter zu tun haben.

**1. Lokale Festnetznummer**
Ein seriöser Schlüsseldienst ist lokal verankert und erreichbar unter einer Festnetznummer mit lokaler Vorwahl (z.B. 06441 für Wetzlar).

**2. Festpreiszusage am Telefon**
Vor der Anfahrt muss der Preis verbindlich genannt werden. Kein "das sehen wir vor Ort" — das ist das größte Alarmsignal.

**3. Google-Bewertungen prüfen**
Echte Bewertungen auf Google Maps sind schwer zu fälschen. Achten Sie auf detaillierte Erfahrungsberichte mit konkreten Schilderungen.

**4. Firmenwagen und Arbeitskleidung**
Professionelle Schlüsseldienste kommen mit beschriftetem Firmenwagen und in Arbeitskleidung — nicht im Privatwagen in Jeans.

**5. Rechnung mit Mehrwertsteuer**
Eine ordnungsgemäße Rechnung mit ausgewiesener Umsatzsteuer ist Pflicht. Bar-auf-die-Hand-Geschäfte sind unseriös.

**6. Handwerkskammer-Eintragung**
Seriöse Schlüsseldienste sind bei der Handwerkskammer eingetragen. Das lässt sich öffentlich überprüfen.

**7. Zerstörungsfreie Öffnung**
Ein guter Monteur öffnet über 99% aller zugefallenen Türen komplett ohne Beschädigung. Wer sofort bohrt, ist entweder schlecht ausgebildet oder will teuren Zylinderaustausch verkaufen.`,
    author: 'MS Schlüsseldienst Team',
    publishedAt: '2025-03-01T08:00:00Z',
    updatedAt: '2025-03-22T16:00:00Z',
    category: BLOG_CATEGORIES[2],
    readingTime: 7,
    keywords: ['seriöser Schlüsseldienst', 'Schlüsseldienst Abzocke', 'Schlüsseldienst Wetzlar', 'vertrauenswürdig'],
  },
];

// ─── Article JSON-LD Generator ──────────────────────────────

export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MS Schlüsseldienst Wetzlar',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-image.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    wordCount: post.content.split(/\s+/).length,
    inLanguage: 'de-DE',
  };
}
