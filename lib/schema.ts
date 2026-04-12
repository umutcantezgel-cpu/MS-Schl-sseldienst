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
        "name": companyInfo.localStore.name,
        "description": `Die Schlüssel Schmiede Wetzlar fungiert als fachmännischer Ansprechpartner für modernste Sicherheitstechnik und Not-Sperrdienste an der Adresse ${companyInfo.localStore.street}, ${companyInfo.localStore.city}. Als Premium-Handwerksbetrieb fokussieren wir uns auf maximal materialschonende Öffnungen zum strikten Grundfestpreis.`,
        "image": `${siteUrl}/hero-bg.jpg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo-neu.svg`,
            "width": 1200,
            "height": 630
        },
        // [SEO: IDN Punycode applied und @id uses machine-readable canonical]
        "@id": `${siteUrl}/#localbusiness`,
        "url": siteUrl,
        "telephone": companyInfo.phone.link,
        "email": companyInfo.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.localStore.street,
            "addressLocality": companyInfo.localStore.city,
            "addressRegion": companyInfo.localStore.state,
            "postalCode": companyInfo.localStore.postalCode,
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyInfo.geo.latitude,
            "longitude": companyInfo.geo.longitude
        },
        "areaServed": [
            {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": companyInfo.geo.latitude,
                    "longitude": companyInfo.geo.longitude
                },
                "geoRadius": "50000"
            },
            ...cityPlaces
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                ],
                "opens": "06:00",
                "closes": "19:59",
                "description": "Ladenöffnungszeiten der Schlüssel Schmiede"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday", "PublicHolidays"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Notdienst"
            }
        ],
        "priceRange": companyInfo.financial.startingPrice,
        "paymentAccepted": companyInfo.financial.acceptedPayments,
        "currenciesAccepted": "EUR",
        "slogan": companyInfo.localStore.tagline,
        "foundingDate": companyInfo.foundedYear.toString(),
        "knowsLanguage": ["de", "en", "tr"],
        "sameAs": [
            companyInfo.socialMedia.facebook,
            companyInfo.socialMedia.instagram || "",
            companyInfo.socialMedia.linkedin || "",
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar"
        ].filter(Boolean),
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
        "name": companyInfo.localStore.name,
        "url": siteUrl,
        "description": `Die Schlüssel Schmiede Wetzlar: Ihr kompetenter Fachbetrieb für spezialisierte Sicherheitslösungen und zerstörungsfreie Türöffnungen im Großraum Wetzlar.`,
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
                "text": "Rufen Sie die Schlüssel Schmiede Wetzlar an unter 06441-8056279. Der Preis wird Ihnen direkt am Telefon mitgeteilt."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Anfahrt in 15–30 Minuten",
                "text": "Unser lokaler Techniker macht sich sofort auf den Weg und ist in 15–30 Minuten bei Ihnen vor Ort."
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
