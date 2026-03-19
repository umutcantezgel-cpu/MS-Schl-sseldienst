import { Metadata } from "next";
import { siteUrl } from "./schema";

interface GenerateMetadataProps {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
    exactTitle?: boolean;
}

export const generateSharedMetadata = ({
    title,
    description,
    path,
    noindex = false,
    exactTitle = false,
}: GenerateMetadataProps): Metadata => {
    // Enforce trailing slash for canonical URLs
    const urlPath = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
    const url = `${siteUrl}${urlPath}`;

    return {
        title: exactTitle ? title : `${title} | MS Schlüsseldienst Wetzlar`,
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: url,
            languages: {
                "de-DE": url,
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
            siteName: "Schlüsseldienst Wetzlar",
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
            "geo.position": "50.5606;8.5048",
            "ICBM": "50.5606, 8.5048",
        },
    };
};
