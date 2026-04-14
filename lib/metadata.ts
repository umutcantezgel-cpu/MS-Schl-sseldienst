import { Metadata } from "next";
import { siteUrl } from "./schema";
import { companyInfo } from "@/lib/data/company";

interface GenerateMetadataProps {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
    exactTitle?: boolean;
}

/**
 * Shared metadata generator for all pages.
 * 
 * CRITICAL: This function is called by BOTH layout.tsx and page.tsx.
 * - layout.tsx uses it for global defaults (title.template, metadataBase)
 * - page.tsx uses it for page-specific overrides (title, description)
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
}: GenerateMetadataProps): Metadata => {
    // Canonical URLs WITHOUT trailing slash und matches Vercel production behavior
    // siteUrl from schema.ts already includes "www." prefix via Punycode.
    const urlPath = path === '/' ? '' : (path.endsWith('/') ? path.slice(0, -1) : path);
    const url = `${siteUrl}${urlPath}`;

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
                    url: `${siteUrl}/og-image.png`,
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
            images: [`${siteUrl}/og-image.png`],
        },
        other: {
            "geo.region": "DE-HE",
            "geo.placename": "Wetzlar",
            "geo.position": `${companyInfo.geo.latitude};${companyInfo.geo.longitude}`,
            "ICBM": `${companyInfo.geo.latitude}, ${companyInfo.geo.longitude}`,
        },
    };
};
