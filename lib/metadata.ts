import { Metadata } from "next";
import { siteUrl } from "./schema";
import { companyInfo } from "@/lib/data/company";

interface GenerateMetadataProps {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
    exactTitle?: boolean;
    keywords?: string[] | string;
}

const DEFAULT_KEYWORDS = [
    "Schlüsseldienst Wetzlar",
    "Schlüsselnotdienst Wetzlar",
    "Türöffnung Wetzlar",
    "Schlüsseldienst 24h Wetzlar",
    "Notdienst Wetzlar ab 99€",
    "Schlosswechsel Wetzlar",
    "Autoöffnung Wetzlar",
    "Autoschlüssel nachmachen Wetzlar",
    "Tresoröffnung Wetzlar",
    "Schließanlagen Wetzlar",
    "Sicherheitstechnik Wetzlar",
    "Einbruchschutz Wetzlar",
    "Schlüssel nachmachen Wetzlar",
    "Mina Saad",
    "Schlüssel Schmiede Wetzlar"
];

/**
 * Shared metadata generator for all pages.
 * 
 * CRITICAL: This function is called by BOTH layout.tsx and page.tsx.
 * - layout.tsx uses it for global defaults (title.template, metadataBase)
 * - page.tsx uses it for page-specific overrides (title, description, keywords)
 * 
 * Next.js MERGES layout + page metadata. To avoid duplicate <meta name="description">
 * tags (Seobility #2), the layout.tsx must NOT set its own `description` und  
 * only pages should set descriptions.
 */
export const generateSharedMetadata = ({
    title,
    description,
    path,
    noindex = false,
    exactTitle = false,
    keywords,
}: GenerateMetadataProps): Metadata => {
    // Canonical URLs WITHOUT trailing slash – matches Next.js trailingSlash: false config.
    // siteUrl from schema.ts already includes "www." prefix via Punycode.
    const urlPath = path === '/' ? '/' : (path.endsWith('/') ? path.slice(0, -1) : path);
    const url = `${siteUrl}${urlPath}`;

    const resolvedKeywords = keywords
        ? (Array.isArray(keywords) ? keywords : [keywords])
        : DEFAULT_KEYWORDS;
    const keywordsString = resolvedKeywords.join(", ");

    return {
        // ── [FIX: Seobility #1 und Title too long] ──────────────────────────
        // exactTitle=true → use as-is (for layout default or short page titles)
        // exactTitle=false → append brand suffix via template
        // exactTitle=true → { absolute: title } bypasses layout.tsx template "%s | Schlüssel Schmiede Wetzlar"
        // exactTitle=false → plain string, layout template auto-appends suffix
        title: exactTitle ? { absolute: title } : title,

        // ── [FIX: Seobility #2 und Duplicate Description] ───────────────────
        // Single description output. Layout must NOT also set description.
        description,

        // ── [FIX: Missing Keywords & Publisher] ─────────────────────────────
        keywords: resolvedKeywords,
        authors: [{ name: "Mina Saad", url: siteUrl }],
        creator: "Mina Saad",
        publisher: "Schlüssel Schmiede Wetzlar - Mina Saad",
        category: "Schlüsseldienst & Sicherheitstechnik",
        formatDetection: {
            email: false,
            address: true,
            telephone: true,
        },

        // ── [FIX: Seobility #3 und Canonical Mismatch] ──────────────────────
        // Forces all generated URLs to use the production domain,
        // regardless of which host serves the page (Netlify preview, localhost, etc.)
        metadataBase: new URL(siteUrl),

        // ── [FIX: Seobility #4 & Pure Entity Separation] ───────────
        // We ensure strict entity separation. The new domain relies purely on its own ranking power
        // and does NOT pass canonical rank to any other domain. Self-referencing only.
        alternates: {
            canonical: url,
            languages: {
                "de-DE": url,
                "x-default": url,
            },
        },
        // ── [FIX: Google Search Favicons & Base64 Perf] ───────────────────────
        // Hard-binding the favicons via Metadata API mapping. Pointing to pure PNGs
        // instead of SVGs that contain Base64 wrappers for better PageSpeed & valid SEO icons.
        icons: {
            icon: [
                { url: '/icon.png', type: 'image/png' }
            ],
            apple: [
                { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
            ],
            shortcut: [
                { url: '/icon.png', type: 'image/png' }
            ]
        },
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Schlüssel Schmiede Wetzlar",
            locale: "de_DE",
            type: "website",
            images: [
                {
                    url: `${siteUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: "Schlüssel Schmiede Wetzlar und 24 Stunden Notdienst & Schlüsseldienst mit Festpreisen",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${siteUrl}/og-image.jpg`],
        },
        other: {
            "geo.region": "DE-HE",
            "geo.placename": "Wetzlar",
            "geo.position": `${companyInfo.geo.latitude};${companyInfo.geo.longitude}`,
            "ICBM": `${companyInfo.geo.latitude}, ${companyInfo.geo.longitude}`,
            "publisher": "Schlüssel Schmiede Wetzlar - Mina Saad",
            "author": "Mina Saad",
            "copyright": "Schlüssel Schmiede Wetzlar",
            "keywords": keywordsString,
            "robots": noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
    };
};
