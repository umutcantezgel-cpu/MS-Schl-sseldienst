import { Metadata } from "next";
import { siteUrl } from "./schema";

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
 * tags (Seobility #2), the layout.tsx must NOT set its own `description` —  
 * only pages should set descriptions.
 */
export const generateSharedMetadata = ({
    title,
    description,
    path,
    noindex = false,
    exactTitle = false,
}: GenerateMetadataProps): Metadata => {
    // Canonical URLs WITHOUT trailing slash — matches Netlify production behavior
    const urlPath = path === '/' ? '' : (path.endsWith('/') ? path.slice(0, -1) : path);
    const url = `${siteUrl}${urlPath}`;

    return {
        // ── [FIX: Seobility #1 — Title too long] ──────────────────────────
        // exactTitle=true → use as-is (for layout default or short page titles)
        // exactTitle=false → append brand suffix via template
        title: exactTitle ? title : `${title} | MS Schlüsseldienst`,

        // ── [FIX: Seobility #2 — Duplicate Description] ───────────────────
        // Single description output. Layout must NOT also set description.
        description,

        // ── [FIX: Seobility #3 — Canonical Mismatch] ──────────────────────
        // Forces all generated URLs to use the production domain,
        // regardless of which host serves the page (Netlify preview, localhost, etc.)
        metadataBase: new URL(siteUrl),

        // ── [FIX: Seobility #4 — Missing hreflang self-reference] ─────────
        alternates: {
            canonical: url,
            languages: {
                "de-DE": url,       // self-referencing hreflang (required by Seobility)
                "x-default": url,   // fallback hreflang for non-German crawlers
            },
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
            siteName: "MS Schlüsseldienst Wetzlar",
            locale: "de_DE",
            type: "website",
            images: [
                {
                    url: `${siteUrl}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: "Schlüsseldienst Wetzlar – 24/7 Notdienst mit Festpreisen",
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
            "geo.position": "50.5567;8.5022",
            "ICBM": "50.5567, 8.5022",
        },
    };
};
