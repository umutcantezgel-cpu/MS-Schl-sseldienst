import { companyInfo } from "@/lib/data/company";
import { siteUrl } from "@/lib/schema";
const companyName = companyInfo.localStore.name;
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || companyInfo.email;
const telephone = companyInfo.phone.link;

export function createOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: companyName,
        url: siteUrl,
        logo: `${siteUrl}/images/logo-neu.svg`,
        sameAs: [
            companyInfo.socialMedia.facebook,
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar"
        ].filter(Boolean),
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: contactEmail,
            telephone: telephone
        }
    };
}

/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 4: Pixel-Monopolisierung — Consolidated Master Schema
 * ══════════════════════════════════════════════════════════════════
 * This is the SINGLE SOURCE OF TRUTH for all LocalBusiness JSON-LD.
 * Merged from the previous lib/schema.ts and lib/seo/jsonld.ts to
 * eliminate duplicate/contradictory schema declarations.
 *
 * TRIPLE-TYPE: ["LocalBusiness", "Locksmith", "Store", "EmergencyService"]
 * maximizes Rich Result eligibility across all Google entity types.
 *
 * NESTED ENTITIES: OfferCatalog → Price Carousels in SERPs,
 * AggregateRating → Star snippets, GeoCircle → Map Pack dominance,
 * Speakable → Voice search optimization.
 * ══════════════════════════════════════════════════════════════════
 */
export function createLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith", "Store", "EmergencyService"],
        "@id": `${siteUrl}/#localbusiness`,
        name: companyName,
        description: `${companyName} — IHK-geprüfter 24h Schlüsselnotdienst mit physischem Ladengeschäft in der ${companyInfo.localStore.street}, ${companyInfo.localStore.city}. Festpreis ab ${companyInfo.financial.startingPriceValue}€. Zerstörungsfreie Türöffnungen, Schlossaustausch, Autoöffnung, Sicherheitstechnik. Kein Callcenter.`,
        url: siteUrl,
        telephone: telephone,
        email: contactEmail,
        image: `${siteUrl}/images/mina-saad-inhaber-schluessel-schmiede-portrait.jpeg`,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/logo-neu.svg`,
            width: 1200,
            height: 630,
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.localStore.street,
            addressLocality: companyInfo.localStore.city,
            addressRegion: companyInfo.localStore.state,
            postalCode: companyInfo.localStore.postalCode,
            addressCountry: "DE",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: companyInfo.geo.latitude,
            longitude: companyInfo.geo.longitude,
        },
        // [SERP: Map Pack Dominance] GeoCircle declares 50km service radius
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: companyInfo.geo.latitude,
                longitude: companyInfo.geo.longitude,
            },
            geoRadius: "50000",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "06:00",
                closes: "19:59",
                description: "Ladenöffnungszeiten der Schlüssel Schmiede",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"],
                opens: "00:00",
                closes: "23:59",
                description: "24/7 Schlüsseldienst-Notdienst",
            },
        ],
        priceRange: companyInfo.financial.startingPrice,
        paymentAccepted: companyInfo.financial.acceptedPayments,
        currenciesAccepted: "EUR",
        slogan: companyInfo.localStore.tagline,
        foundingDate: companyInfo.foundedYear.toString(),
        knowsLanguage: ["de", "en", "tr"],
        // [SERP: Price Carousel] OfferCatalog with structured pricing
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${companyName} Leistungen & Festpreise`,
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Türöffnung (zugefallene Tür)", description: "Professionelle zerstörungsfreie Öffnung einer zugefallenen Tür.", serviceType: "Türöffnung" },
                    priceSpecification: { "@type": "PriceSpecification", price: companyInfo.financial.startingPriceValue, priceCurrency: "EUR", unitText: "Festpreis tagsüber" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Autoöffnung", description: "Fahrzeugöffnung aller Marken ohne Beschädigung.", serviceType: "Autoöffnung" },
                    priceSpecification: { "@type": "PriceSpecification", price: 149, priceCurrency: "EUR", unitText: "Festpreis tagsüber" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Schlossaustausch", description: "Austausch aller Zylindertypen mit Markenware.", serviceType: "Schlossaustausch" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Schließanlagen", description: "Beratung, Planung und Einbau für Wohn- und Gewerbeimmobilien.", serviceType: "Schließanlagen" },
                },
                {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Sicherheitstechnik & Einbruchschutz", description: "Zusatzschlösser, Panzerriegel, Smart Locks, Sicherheitsberatung.", serviceType: "Sicherheitstechnik" },
                },
            ],
        },
        // [SERP: Star Snippet] 5.0 aggregate rating
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "46",
            bestRating: "5",
            worstRating: "1",
        },
        // HWK membership
        memberOf: [
            { "@type": "Organization", name: "Handwerkskammer Wiesbaden", url: "https://www.hwk-wiesbaden.de" },
        ],
        hasCredential: companyInfo.partnership.certifications,
        additionalType: "https://schema.org/EmergencyService",
        sameAs: [
            companyInfo.socialMedia.facebook,
            companyInfo.socialMedia.instagram || "",
            companyInfo.socialMedia.linkedin || "",
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar",
        ].filter(Boolean),
        // [SERP: Emergency channel] Direct phone for voice assistants
        availableChannel: {
            "@type": "ServiceChannel",
            serviceType: "24/7 Emergency Telephone Hotline",
            servicePhone: {
                "@type": "ContactPoint",
                telephone: companyInfo.phone.link,
                contactType: "emergency",
                areaServed: "DE-HE",
                availableLanguage: ["de", "en", "tr"],
            },
        },
        // [VOICE SEARCH] Speakable specification for Google Assistant
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".hero-intro", ".pricing-headline", "[data-ai-answer]"],
        },
        // [KNOWLEDGE GRAPH] Entity topic associations
        knowsAbout: [
            "Schlüsseldienst Wetzlar", "24h Notdienst", "Türöffnung",
            "Autoöffnung", "Schließanlagen", "Sicherheitstechnik",
            "Einbruchschutz", "Schlüssel nachmachen", "Schlüsseldienst Gießen",
            "Schlüsseldienst Marburg", "Schlüsseldienst Lahn-Dill-Kreis",
            "Schlüsseldienst ohne Abzocke", "Seriöser Schlüsseldienst Mittelhessen",
            "Tresoröffnung", "Gravuren", "Smart Lock Installation",
        ],
    };
}

export function createBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

export function createServiceSchema(service: { name: string; description: string; url: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
            "@type": "Organization",
            name: companyName
        }
    };
}

export function createArticleSchema(article: { headline: string; description: string; datePublished: string; dateModified?: string; url: string; author?: string; image?: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        image: article.image ? [article.image] : [`${siteUrl}/images/og-image.jpg`],
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        url: article.url,
        author: {
            "@type": "Person",
            name: article.author || "Autor"
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

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
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

export function createWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: companyName,
        url: siteUrl,
        searchAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
}
