import { CONTENT_GRAPH } from "./contentGraph";
import { PRICING } from "@/components/pricing/pricing.constants";
import { allLocations } from "@/lib/data/allLocations";
import { companyInfo } from "@/lib/data/company";

// ── [SEO: Canonical Domain und Single Source of Truth] ───────────────────────
// Human-readable: https://www.wetzlar-schlüsseldienst.de
// Machine/Punycode: https://www.xn--wetzlar-schlsseldienst-3lc.de
// metadataBase in layout.tsx and all Schema.org URLs derive from this value.
// [SEO: IDN Punycode applied und verified via Python encodings.idna]
// [GUARD: www-Enforcement] If env var is set without www, auto-prepend it.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--wetzlar-schlsseldienst-3lc.de";
export const siteUrl = rawSiteUrl.includes("://www.") ? rawSiteUrl : rawSiteUrl.replace("://", "://www.");

export function generateLocalBusinessSchema() {
    // Build areaServed from all location entries
    const cityPlaces = allLocations.map(loc => ({
        "@type": "City" as const,
        "name": loc.name
    }));
    // Ensure Wetzlar itself is included
    if (!cityPlaces.some(c => c.name === "Wetzlar")) {
        cityPlaces.unshift({ "@type": "City" as const, "name": "Wetzlar" });
    }

    return {
        "@context": "https://schema.org",
        // [SEO: Locksmith Entity Schema for Google Knowledge Graph]
        // Dual @type ensures Google recognizes this as BOTH a LocalBusiness AND a Locksmith entity.
        "@type": ["LocalBusiness", "Locksmith", "Store"],
        "name": "Schlüssel Schmiede Wetzlar",
        "description": "Schlüssel Schmiede Wetzlar ist Ihr Fachgeschäft für Schlüssel, Schlösser und Sicherheitstechnik in der Langgasse 70 in Wetzlar. Wir bieten Schlüssel nachmachen, Schließanlagen-Planung, Sicherheitsberatung und professionellen Schlüsseldienst mit Festpreisen. Persönliche Beratung vor Ort sowie 24/7 Notdienst für den gesamten Lahn-Dill-Kreis.",
        "image": `${siteUrl}/hero-bg.jpg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/og-image.png`,
            "width": 1200,
            "height": 630
        },
        // [SEO: IDN Punycode applied und @id uses machine-readable canonical]
        "@id": `${siteUrl}/#localbusiness`,
        "url": siteUrl,
        "telephone": [companyInfo.phone, "+491782471037"].filter(Boolean),
        "email": companyInfo.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Langgasse 70",
            "addressLocality": "Wetzlar",
            "addressRegion": "Hessen",
            "postalCode": "35578",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyInfo.geo?.latitude || 50.5606,
            "longitude": companyInfo.geo?.longitude || 8.5048
        },
        "areaServed": [
            {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": companyInfo.geo?.latitude || 50.5606,
                    "longitude": companyInfo.geo?.longitude || 8.5048
                },
                "geoRadius": "50000"
            },
            ...cityPlaces
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00",
                "description": "Ladenöffnungszeiten Fachgeschäft"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday", "PublicHolidays"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Schlüsseldienst-Notdienst und auch an Feiertagen und nachts"
            }
        ],
        "priceRange": companyInfo.priceRange || "ab 99€",
        "paymentAccepted": companyInfo.paymentAccepted || ["Cash", "Credit Card", "EC-Karte"],
        "currenciesAccepted": companyInfo.currenciesAccepted || "EUR",
        "slogan": companyInfo.slogan,
        "foundingDate": companyInfo.foundedYear?.toString() || "2012",
        "knowsLanguage": ["de", "en", "tr"],
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61582567388378",
            "https://www.instagram.com/schluessel_schmiede_wetzlar/",
            "https://www.linkedin.com/in/mina-saad-a218413a9/",
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar",
            "https://www.gelbeseiten.de/gsbiz/ef5183d9-c45e-4b5f-9c89-251ff14ccfef"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Schlüssel Schmiede Leistungen",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Türöffnung (zugefallene Tür)",
                        "description": "Professionelle Öffnung einer zugefallenen Tür und zerstörungsfrei in 99% der Fälle.",
                        "serviceType": "Türöffnung"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING.doorFallen.day,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Türöffnung (abgesperrt)",
                        "description": "Öffnung einer abgesperrten Tür mit Zylindertausch wenn nötig.",
                        "serviceType": "Schlossaustausch"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING.doorLocked.day,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Autoöffnung",
                        "description": "Professionelle Fahrzeugöffnung ohne Beschädigung aller Marken.",
                        "serviceType": "Autoöffnung"
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": PRICING.carOpening.day,
                        "priceCurrency": "EUR",
                        "unitText": "Festpreis tagsüber"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Schließanlagen",
                        "description": "Beratung, Planung und Einbau von Schließanlagen für Wohn- und Gewerbeimmobilien.",
                        "serviceType": "Schließanlagen"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sicherheitstechnik",
                        "description": "Einbruchschutzberatung, Zusatzschlösser, Panzerriegel und elektronische Schließsysteme.",
                        "serviceType": "Sicherheitstechnik"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "45",
            "bestRating": "5",
            "worstRating": "1"
        },
        "knowsAbout": [
            "Schlüssel nachmachen",
            "Schließanlagen",
            "Sicherheitstechnik",
            "Einbruchschutz",
            "Türöffnung",
            "Schlossaustausch",
            "Autoöffnung",
            "Notdienst",
            "Gravuren",
            "Passbilder"
        ]
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Schlüssel Schmiede Wetzlar",
        "url": siteUrl,
        "description": "Schlüssel Schmiede Wetzlar und Fachgeschäft für Schlüssel, Schlösser & Sicherheitstechnik. Auch 24/7 Schlüsseldienst in Wetzlar, Gießen und Lahn-Dill-Kreis.",
        "inLanguage": "de-DE",
        "publisher": {
            "@type": ["LocalBusiness", "Store"],
            "@id": `${siteUrl}/#localbusiness`
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/faq?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}

export function generateHowToSchema(title: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "totalTime": "PT30M",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Anruf",
                "text": "Rufen Sie die Schlüssel Schmiede Wetzlar an unter 06441-8056279 oder 0178-2471037. Der Preis wird Ihnen direkt am Telefon mitgeteilt."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Anfahrt in 1530 Minuten",
                "text": "Unser lokaler Techniker macht sich sofort auf den Weg und ist in 1530 Minuten bei Ihnen vor Ort."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Professionelle Türöffnung",
                "text": "Mit Spezialwerkzeug wird Ihre Tür zerstörungsfrei geöffnet und in 99% der Fälle ohne jede Beschädigung."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Festpreis-Abrechnung",
                "text": "Sie zahlen nur den vorab vereinbarten Festpreis. Keine versteckten Kosten, keine Überraschungen."
            }
        ]
    };
}

function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Schlüssel Schmiede Wetzlar",
        "url": siteUrl,
        "logo": `${siteUrl}/og-image.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": companyInfo.phone,
            "contactType": "customer service",
            "areaServed": "DE",
            "availableLanguage": ["de", "en", "tr"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Langgasse 70",
            "addressLocality": "Wetzlar",
            "addressRegion": "Hessen",
            "postalCode": "35578",
            "addressCountry": "DE"
        },
        "sameAs": [
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar"
        ]
    };
}

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };
};
