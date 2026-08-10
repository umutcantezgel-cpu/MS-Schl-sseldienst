import { companyInfo } from "@/lib/data/company";
import { allLocations } from "@/lib/data/allLocations";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--wetzlar-schlsseldienst-3lc.de";
export const siteUrl = rawSiteUrl.includes("://www.") ? rawSiteUrl : rawSiteUrl.replace("://", "://www.");

const companyName = companyInfo.localStore.name;
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || companyInfo.email;
const telephone = companyInfo.phone.link;

// SINGLE SOURCE OF TRUTH für Preise
export const BASE_PRICES = {
    door: 129,
    car: 149,
    safe: "auf Anfrage",
    travel_wetzlar: 0
};

export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: companyName,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/images/logo-neu.svg`,
        founder: {
            "@type": "Person",
            name: "Mina Saad"
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: contactEmail,
            telephone: telephone,
            availableLanguage: ["de", "en", "tr"]
        },
        sameAs: [
            companyInfo.socialMedia.facebook,
            companyInfo.socialMedia.instagram || "",
            companyInfo.socialMedia.linkedin || "",
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar"
        ].filter(Boolean)
    };
}

export function getLocalBusinessSchema() {
    const cityPlaces = allLocations.map(loc => ({
        "@type": "City" as const,
        "name": loc.name
    }));
    if (!cityPlaces.some(c => c.name === "Wetzlar")) {
        cityPlaces.unshift({ "@type": "City" as const, "name": "Wetzlar" });
    }

    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith", "Store", "EmergencyService"],
        "@id": `${siteUrl}/#localbusiness`,
        name: companyName,
        description: `${companyName} — IHK-geprüfter 24h Schlüsselnotdienst. Festpreis ab ${BASE_PRICES.door}€. Keine Anfahrtskosten in der Wetzlarer Kernstadt. Kein Callcenter.`,
        url: `${siteUrl}/`,
        telephone: telephone,
        email: contactEmail,
        image: `${siteUrl}/hero-bg.jpg`,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/logo-neu.svg`,
            width: 1200,
            height: 630
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.localStore.street,
            addressLocality: companyInfo.localStore.city,
            addressRegion: companyInfo.localStore.state,
            postalCode: companyInfo.localStore.postalCode,
            addressCountry: "DE"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: companyInfo.geo.latitude,
            longitude: companyInfo.geo.longitude
        },
        areaServed: [
            {
                "@type": "GeoCircle",
                geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: companyInfo.geo.latitude,
                    longitude: companyInfo.geo.longitude
                },
                geoRadius: "50000"
            },
            ...cityPlaces
        ],
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "06:00",
                closes: "19:59",
                description: "Ladenöffnungszeiten"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"],
                opens: "00:00",
                closes: "23:59",
                description: "24/7 Notdienst"
            }
        ],
        priceRange: `ab ${BASE_PRICES.door}€`,
        paymentAccepted: companyInfo.financial.acceptedPayments,
        currenciesAccepted: "EUR",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "58",
            bestRating: "5",
            worstRating: "1"
        }
    };
}

export function getServiceSchema({ title, description, url, price }: { title: string; description: string; url: string; price?: number }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description: description,
        provider: {
            "@type": "LocalBusiness",
            name: companyName,
            image: `${siteUrl}/images/icon-512.png`,
            telephone: companyInfo.phone.main
        },
        areaServed: {
            "@type": "City",
            name: "Wetzlar"
        },
        url: `${siteUrl}${url}`,
        ...(price && {
            offers: {
                "@type": "Offer",
                price: price,
                priceCurrency: "EUR"
            }
        })
    };
}

export function getPricingSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Schlüsseldienst Leistungen & Festpreise",
        description: "Transparente Festpreise für Türöffnungen und Sicherheitstechnik in Wetzlar und Umgebung.",
        brand: {
            "@type": "Brand",
            name: companyName
        },
        offers: {
            "@type": "AggregateOffer",
            lowPrice: BASE_PRICES.door,
            highPrice: BASE_PRICES.car,
            priceCurrency: "EUR",
            offerCount: 2,
            offers: [
                {
                    "@type": "Offer",
                    name: "Türöffnung (tagsüber)",
                    price: BASE_PRICES.door,
                    priceCurrency: "EUR",
                    itemOffered: {
                        "@type": "Service",
                        name: "Türöffnung"
                    }
                },
                {
                    "@type": "Offer",
                    name: "Autoöffnung",
                    price: BASE_PRICES.car,
                    priceCurrency: "EUR",
                    itemOffered: {
                        "@type": "Service",
                        name: "Autoöffnung"
                    }
                }
            ]
        }
    };
}

export function getPortfolioSchema(projects: { name: string; description: string; image?: string; url?: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Referenzen & Portfolio",
        description: "Erfolgreiche Projekte und Referenzen der Schlüssel Schmiede Wetzlar.",
        hasPart: projects.map(proj => ({
            "@type": "CreativeWork",
            name: proj.name,
            description: proj.description,
            image: proj.image,
            url: proj.url
        }))
    };
}

export function getProcessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Ablauf beim Schlüsselnotdienst",
        description: "So funktioniert unser 24h Notdienst: Schnell, transparent und unkompliziert.",
        totalTime: "PT30M",
        step: [
            {
                "@type": "HowToStep",
                position: 1,
                name: "Anruf",
                text: "Sie rufen uns an und schildern kurz das Problem. Wir nennen Ihnen sofort den verbindlichen Festpreis."
            },
            {
                "@type": "HowToStep",
                position: 2,
                name: "Anfahrt",
                text: "Unser Techniker macht sich direkt auf den Weg und ist meist in 15-30 Minuten bei Ihnen."
            },
            {
                "@type": "HowToStep",
                position: 3,
                name: "Zerstörungsfreie Öffnung",
                text: "Wir öffnen Ihre Tür mit Spezialwerkzeug in 99% der Fälle völlig ohne Beschädigung."
            },
            {
                "@type": "HowToStep",
                position: 4,
                name: "Bezahlung",
                text: "Sie bezahlen bequem vor Ort per EC-Karte, Kreditkarte, PayPal oder bar – exakt den vereinbarten Preis."
            }
        ]
    };
}

export function getArticleSchema(post: { headline: string; description: string; datePublished: string; dateModified?: string; url: string; author?: string; image?: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.headline,
        description: post.description,
        image: post.image ? [post.image] : [`${siteUrl}/images/og-image.jpg`],
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        url: post.url,
        author: {
            "@type": "Person",
            name: post.author || "Mina Saad",
            url: `${siteUrl}/ueber-uns`
        },
        publisher: {
            "@type": "Organization",
            name: companyName,
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/images/logo-neu.svg`
            }
        }
    };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
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
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}
