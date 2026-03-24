import { CONTENT_GRAPH } from "./contentGraph";
import { PRICING } from "@/components/pricing/pricing.constants";
import { allLocations } from "@/lib/data/allLocations";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.schluesseldienst-wetzlar.de";

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
        "@type": "Locksmith",
        "name": "MS Schlüsseldienst Wetzlar",
        "description": "MS Schlüsseldienst Wetzlar ist ein 24/7-Schlüsselnotdienst mit Festpreisen ab 99 Euro, der Wetzlar, Gießen, Marburg und den gesamten Lahn-Dill-Kreis innerhalb von 15–30 Minuten erreicht. Über 44 Google-Bewertungen mit 5.0 Sternen bestätigen zuverlässigen Service, zerstörungsfreie Türöffnung in 99% der Fälle und transparente Festpreise ohne versteckte Kosten. Spezialisiert auf Türöffnung, Schlossaustausch, Autoöffnung, Schließanlagen und Sicherheitstechnik.",
        "image": `${siteUrl}/hero-bg.jpg`,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/og-image.png`,
            "width": 1200,
            "height": 630
        },
        "@id": `${siteUrl}/#localbusiness`,
        "url": siteUrl,
        "telephone": ["+4964418056544", "+491782471037"],
        "email": "info@sd-wetzlar.de",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Wetzlarer Str. 1",
            "addressLocality": "Wetzlar",
            "addressRegion": "Hessen",
            "postalCode": "35576",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.5606,
            "longitude": 8.5049
        },
        "areaServed": [
            {
                "@type": "GeoCircle",
                "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.5606,
                    "longitude": 8.5049
                },
                "geoRadius": "50000"
            },
            ...cityPlaces
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday", "PublicHolidays"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Notdienst — auch an Feiertagen und nachts"
            }
        ],
        "priceRange": "ab 99€",
        "paymentAccepted": ["Cash", "Credit Card", "EC-Karte"],
        "currenciesAccepted": "EUR",
        "slogan": "Tür zu? Wir helfen sofort.",
        "foundingDate": "2010",
        "knowsLanguage": ["de", "en", "tr"],
        "sameAs": [
            "https://www.google.com/search?q=MS+Schl%C3%BCsseldienst+Wetzlar",
            "https://www.gelbeseiten.de/branchenbuch/wetzlar/schluesseldienst-wetzlar"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Schlüsseldienst Leistungen",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Türöffnung (zugefallene Tür)",
                        "description": "Professionelle Öffnung einer zugefallenen Tür — zerstörungsfrei in 99% der Fälle.",
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
            "reviewCount": "44",
            "bestRating": "5",
            "worstRating": "1"
        },
        "knowsAbout": [
            "Türöffnung",
            "Schlossaustausch",
            "Autoöffnung",
            "Schließanlagen",
            "Sicherheitstechnik",
            "Einbruchschutz",
            "Schlüssel nachmachen",
            "Notdienst"
        ]
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Schlüsseldienst Wetzlar",
        "url": siteUrl,
        "description": "24/7 Schlüsselnotdienst in Wetzlar, Gießen, Marburg und Lahn-Dill-Kreis. Festpreise, 15–30 Min. Anfahrt.",
        "inLanguage": "de-DE",
        "publisher": {
            "@type": "Locksmith",
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
                "text": "Rufen Sie den MS Schlüsseldienst Wetzlar an unter 06441-8056544 oder 0178-2471037. Der Preis wird Ihnen direkt am Telefon mitgeteilt."
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
                "text": "Mit Spezialwerkzeug wird Ihre Tür zerstörungsfrei geöffnet — in 99% der Fälle ohne jede Beschädigung."
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

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MS Schlüsseldienst Wetzlar",
        "url": siteUrl,
        "logo": `${siteUrl}/og-image.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+4964418056544",
            "contactType": "customer service",
            "areaServed": "DE",
            "availableLanguage": ["de", "en", "tr"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Wetzlarer Str. 1",
            "addressLocality": "Wetzlar",
            "addressRegion": "Hessen",
            "postalCode": "35576",
            "addressCountry": "DE"
        },
        "sameAs": [
            "https://www.google.com/search?q=MS+Schl%C3%BCsseldienst+Wetzlar"
        ]
    };
}
