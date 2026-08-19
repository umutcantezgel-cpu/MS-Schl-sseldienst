import { companyInfo } from "@/lib/data/company";
import { allLocations } from "@/lib/data/allLocations";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.xn--wetzlar-schlsseldienst-3lc.de";
export const siteUrl = rawSiteUrl.includes("://www.") ? rawSiteUrl : rawSiteUrl.replace("://", "://www.");

export const companyName = companyInfo.localStore.name;
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || companyInfo.email;
export const telephone = companyInfo.phone.link;
export const formattedPhone = companyInfo.phone.formatted;

// ── Canonical Knowledge Graph URI Constants ─────────────────────────────────
export const KNOWLEDGE_GRAPH_IDS = {
    organization: `${siteUrl}/#organization`,
    website: `${siteUrl}/#website`,
    founder: `${siteUrl}/#founder`,
    localBusiness: `${siteUrl}/#localbusiness`,
    catalog: `${siteUrl}/#service-catalog`,
    logo: `${siteUrl}/#logo`,
} as const;

// SINGLE SOURCE OF TRUTH für Preise
export const BASE_PRICES = {
    door: 99,
    doorLocked: 149,
    nightDoor: 149,
    weekendDoor: 179,
    car: 149,
    safe: "ab 199€",
    travel_wetzlar: 0
} as const;

// ── 1. ROOT KNOWLEDGE GRAPH (Global Layout) ─────────────────────────────────
export function getRootGraphSchema() {
    const cityPlaces = allLocations.map(loc => ({
        "@type": "City" as const,
        "name": loc.name
    }));
    if (!cityPlaces.some(c => c.name === "Wetzlar")) {
        cityPlaces.unshift({ "@type": "City" as const, "name": "Wetzlar" });
    }

    const organizationEntity = {
        "@type": "Organization",
        "@id": KNOWLEDGE_GRAPH_IDS.organization,
        name: companyName,
        legalName: "Schlüssel Schmiede Wetzlar - Inh. Mina Saad",
        url: `${siteUrl}/`,
        logo: {
            "@type": "ImageObject",
            "@id": KNOWLEDGE_GRAPH_IDS.logo,
            url: `${siteUrl}/images/logo-neu.svg`,
            caption: "Schlüssel Schmiede Wetzlar Logo",
            width: 1200,
            height: 630
        },
        image: `${siteUrl}/images/og-image.jpg`,
        founder: {
            "@id": KNOWLEDGE_GRAPH_IDS.founder
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.localStore.street,
            addressLocality: companyInfo.localStore.city,
            addressRegion: companyInfo.localStore.state,
            postalCode: companyInfo.localStore.postalCode,
            addressCountry: "DE"
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: telephone,
                contactType: "emergency",
                areaServed: "DE",
                availableLanguage: ["de", "en", "tr"]
            },
            {
                "@type": "ContactPoint",
                telephone: telephone,
                contactType: "customer service",
                email: contactEmail,
                areaServed: "DE",
                availableLanguage: ["de", "en", "tr"]
            }
        ],
        sameAs: [
            companyInfo.socialMedia.facebook,
            companyInfo.socialMedia.instagram || "",
            companyInfo.socialMedia.linkedin || "",
            "https://www.google.com/search?q=Schl%C3%BCssel+Schmiede+Wetzlar"
        ].filter(Boolean)
    };

    const founderEntity = {
        "@type": "Person",
        "@id": KNOWLEDGE_GRAPH_IDS.founder,
        name: "Mina Saad",
        jobTitle: "Inhaber & IHK-zertifizierter Sicherheitsexperte",
        worksFor: {
            "@id": KNOWLEDGE_GRAPH_IDS.organization
        },
        url: `${siteUrl}/ueber-uns`,
        sameAs: [
            companyInfo.socialMedia.linkedin || "",
            `${siteUrl}/ueber-uns/team`
        ].filter(Boolean)
    };

    const websiteEntity = {
        "@type": "WebSite",
        "@id": KNOWLEDGE_GRAPH_IDS.website,
        url: `${siteUrl}/`,
        name: "Schlüssel Schmiede Wetzlar",
        description: "24h Schlüsselnotdienst, Aufsperrdienst & Sicherheitstechnik für Wetzlar, Gießen und den gesamten Lahn-Dill-Kreis zum verbindlichen Festpreis.",
        publisher: {
            "@id": KNOWLEDGE_GRAPH_IDS.organization
        },
        inLanguage: "de-DE",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteUrl}/sitemap-uebersicht?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessEntity = {
        "@type": ["LocalBusiness", "Locksmith", "Store", "EmergencyService"],
        "@id": KNOWLEDGE_GRAPH_IDS.localBusiness,
        parentOrganization: {
            "@id": KNOWLEDGE_GRAPH_IDS.organization
        },
        name: companyName,
        description: `${companyName} — IHK-geprüfter 24h Schlüsselnotdienst und Fachbetrieb für Sicherheitstechnik. Zerstörungsfreie Türöffnung ab ${BASE_PRICES.door}€ Festpreis. Keine Anfahrtskosten in der Wetzlarer Kernstadt. Kein Callcenter.`,
        url: `${siteUrl}/`,
        telephone: telephone,
        email: contactEmail,
        image: `${siteUrl}/images/schluessel-schmiede-wetzlar-aussenansicht-ladengeschaeft.webp`,
        logo: {
            "@id": KNOWLEDGE_GRAPH_IDS.logo
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
                opens: "08:00",
                closes: "18:00",
                description: "Fachgeschäft Langgasse 70"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"],
                opens: "00:00",
                closes: "23:59",
                description: "24/7 Mobiler Notdienst & Notöffnungen"
            }
        ],
        priceRange: `ab ${BASE_PRICES.door}€`,
        paymentAccepted: companyInfo.financial.acceptedPayments,
        currenciesAccepted: "EUR",
        hasOfferCatalog: {
            "@id": KNOWLEDGE_GRAPH_IDS.catalog
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "58",
            bestRating: "5",
            worstRating: "1"
        }
    };

    return {
        "@context": "https://schema.org",
        "@graph": [
            organizationEntity,
            founderEntity,
            websiteEntity,
            localBusinessEntity
        ]
    };
}

// ── 2. SERVICE PAGE SCHEMA GRAPH ───────────────────────────────────────────
export interface ServiceSchemaProps {
    title: string;
    description: string;
    url: string;
    serviceType?: string;
    price?: number;
    faqs?: Array<{ question: string; answer: string }>;
    breadcrumbs?: Array<{ name: string; url: string }>;
}

export function getServiceGraphSchema({
    title,
    description,
    url,
    serviceType = "Schlüsseldienst & Notöffnung",
    price,
    faqs,
    breadcrumbs
}: ServiceSchemaProps) {
    const fullUrl = `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
    const pageId = `${fullUrl}#webpage`;
    const serviceId = `${fullUrl}#service`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "WebPage",
            "@id": pageId,
            url: fullUrl,
            name: title,
            description: description,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            about: { "@id": KNOWLEDGE_GRAPH_IDS.localBusiness },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        },
        {
            "@type": ["Service", "Locksmith"],
            "@id": serviceId,
            name: title,
            description: description,
            serviceType: serviceType,
            provider: { "@id": KNOWLEDGE_GRAPH_IDS.localBusiness },
            areaServed: {
                "@type": "AdministrativeArea",
                name: "Lahn-Dill-Kreis & Mittelhessen"
            },
            url: fullUrl,
            ...(price ? {
                offers: {
                    "@type": "Offer",
                    price: price,
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    validFrom: "2024-01-01"
                }
            } : {})
        }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
        graph.push({
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
            }))
        });
    }

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullUrl}#faq`,
            isPartOf: { "@id": pageId },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 3. LOCAL LOCATION PAGE SCHEMA GRAPH (116 Towns/Districts) ──────────────
export interface LocalLocationSchemaProps {
    slug: string;
    cityName: string;
    postalCode: string;
    lat: number;
    lng: number;
    drivingTimeMinutes: string;
    basePrice: number;
    travelCostText: string;
    faqs?: Array<{ question: string; answer: string }>;
}

export function getLocalLocationGraphSchema({
    slug,
    cityName,
    postalCode,
    lat,
    lng,
    basePrice,
    faqs
}: LocalLocationSchemaProps) {
    const fullUrl = `${siteUrl}/${slug}`;
    const pageId = `${fullUrl}#webpage`;
    const localBusinessId = `${fullUrl}#localbusiness`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "WebPage",
            "@id": pageId,
            url: fullUrl,
            name: `Schlüsseldienst ${cityName} | 24h Notdienst | Schlüssel Schmiede`,
            description: `Ihr lokaler 24h Schlüsseldienst für ${cityName} (${postalCode}). Zerstörungsfreie Türöffnung ab ${basePrice}€ Festpreis. Schnelle Hilfe vor Ort.`,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            about: { "@id": localBusinessId },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        },
        {
            "@type": ["LocalBusiness", "Locksmith", "EmergencyService"],
            "@id": localBusinessId,
            name: `Schlüssel Schmiede — Schlüsseldienst ${cityName}`,
            parentOrganization: { "@id": KNOWLEDGE_GRAPH_IDS.organization },
            url: fullUrl,
            telephone: telephone,
            priceRange: `ab ${basePrice}€`,
            currenciesAccepted: "EUR",
            paymentAccepted: companyInfo.financial.acceptedPayments,
            address: {
                "@type": "PostalAddress",
                addressLocality: cityName,
                postalCode: postalCode,
                addressRegion: "Hessen",
                addressCountry: "DE"
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: lat,
                longitude: lng
            },
            areaServed: {
                "@type": "City",
                name: cityName
            },
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"],
                    opens: "00:00",
                    closes: "23:59"
                }
            ],
            offers: {
                "@type": "Offer",
                name: `Türöffnung ${cityName}`,
                price: basePrice,
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock"
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "58",
                bestRating: "5",
                worstRating: "1"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Startseite",
                    item: `${siteUrl}/`
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Servicegebiet",
                    item: `${siteUrl}/servicegebiet`
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: cityName,
                    item: fullUrl
                }
            ]
        }
    ];

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullUrl}#faq`,
            isPartOf: { "@id": pageId },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 4. POI STANDORT SCHEMA GRAPH (Micro-POIs) ──────────────────────────────
export interface PoiSchemaProps {
    slug: string;
    poiName: string;
    city: string;
    postalCode: string;
    lat: number;
    lng: number;
    scenario: string;
    faqs?: Array<{ question: string; answer: string }>;
}

export function getPoiGraphSchema({
    slug,
    poiName,
    city,
    postalCode,
    lat,
    lng,
    scenario,
    faqs
}: PoiSchemaProps) {
    const fullUrl = `${siteUrl}/standorte/${slug}`;
    const pageId = `${fullUrl}#webpage`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;
    const poiLocationId = `${fullUrl}#location`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "WebPage",
            "@id": pageId,
            url: fullUrl,
            name: `Schlüsseldienst nahe ${poiName} (${city}) | 24h Notdienst`,
            description: `Ihr 24h Schlüsseldienst nahe ${poiName} in ${city}. Schnell vor Ort bei Aussperrung. ${scenario}`,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        },
        {
            "@type": ["Place", "CivicStructure"],
            "@id": poiLocationId,
            name: poiName,
            address: {
                "@type": "PostalAddress",
                addressLocality: city,
                postalCode: postalCode,
                addressCountry: "DE"
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: lat,
                longitude: lng
            }
        },
        {
            "@type": ["LocalBusiness", "Locksmith", "EmergencyService"],
            "@id": `${fullUrl}#service`,
            name: `Schlüssel Schmiede Wetzlar — Notdienst ${poiName}`,
            parentOrganization: { "@id": KNOWLEDGE_GRAPH_IDS.organization },
            url: fullUrl,
            telephone: telephone,
            priceRange: `ab ${BASE_PRICES.door}€`,
            areaServed: {
                "@type": "Place",
                name: poiName
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Startseite",
                    item: `${siteUrl}/`
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Standorte",
                    item: `${siteUrl}/sitemap-uebersicht/standorte`
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: poiName,
                    item: fullUrl
                }
            ]
        }
    ];

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullUrl}#faq`,
            isPartOf: { "@id": pageId },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 5. ARTICLE / BLOG / RATGEBER SCHEMA GRAPH ──────────────────────────────
export interface ArticleGraphProps {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    image?: string;
    category?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
}

export function getArticleGraphSchema({
    headline,
    description,
    url,
    datePublished,
    dateModified,
    authorName = "Mina Saad",
    image,
    category = "Ratgeber & Sicherheitstechnik",
    breadcrumbs
}: ArticleGraphProps) {
    const fullUrl = `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
    const pageId = `${fullUrl}#webpage`;
    const articleId = `${fullUrl}#article`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "WebPage",
            "@id": pageId,
            url: fullUrl,
            name: headline,
            description: description,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        },
        {
            "@type": "TechArticle",
            "@id": articleId,
            headline: headline,
            description: description,
            image: image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/og-image.jpg`,
            datePublished: datePublished,
            dateModified: dateModified || datePublished,
            mainEntityOfPage: pageId,
            inLanguage: "de-DE",
            articleSection: category,
            author: {
                "@type": "Person",
                "@id": KNOWLEDGE_GRAPH_IDS.founder,
                name: authorName,
                url: `${siteUrl}/ueber-uns`
            },
            publisher: {
                "@id": KNOWLEDGE_GRAPH_IDS.organization
            }
        }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
        graph.push({
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 6. DEFINED TERM / LEXIKON SCHEMA GRAPH ─────────────────────────────────
export interface DefinedTermGraphProps {
    slug: string;
    title: string;
    definition: string;
    category: string;
    faqs?: Array<{ question: string; answer: string }>;
}

export function getDefinedTermGraphSchema({
    slug,
    title,
    definition,
    category,
    faqs
}: DefinedTermGraphProps) {
    const fullUrl = `${siteUrl}/lexikon/${slug}`;
    const pageId = `${fullUrl}#webpage`;
    const termId = `${fullUrl}#definedterm`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": "ItemPage",
            "@id": pageId,
            url: fullUrl,
            name: `${title} | Schloss- & Sicherheitslexikon`,
            description: definition,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        },
        {
            "@type": "DefinedTerm",
            "@id": termId,
            name: title,
            description: definition,
            inDefinedTermSet: `${siteUrl}/lexikon`,
            termCode: slug,
            subjectOf: { "@id": pageId }
        },
        {
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/` },
                { "@type": "ListItem", position: 2, name: "Lexikon", item: `${siteUrl}/lexikon` },
                { "@type": "ListItem", position: 3, name: title, item: fullUrl }
            ]
        }
    ];

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullUrl}#faq`,
            isPartOf: { "@id": pageId },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 7. HOW-TO PROCESS SCHEMA GRAPH ─────────────────────────────────────────
export function getProcessHowToSchema() {
    return {
        "@type": "HowTo",
        "@id": `${siteUrl}/#notdienst-prozess`,
        name: "Ablauf beim 24h Schlüsselnotdienst Wetzlar",
        description: "In 4 einfachen Schritten zur zerstörungsfreien Türöffnung zum garantierten Festpreis.",
        totalTime: "PT30M",
        step: [
            {
                "@type": "HowToStep",
                position: 1,
                name: "Telefonische Kontaktaufnahme",
                text: "Sie rufen unsere 24h-Hotline 06441-8056279 an und schildern Ihr Anliegen. Wir nennen Ihnen sofort den verbindlichen Festpreis inkl. Anfahrt."
            },
            {
                "@type": "HowToStep",
                position: 2,
                name: "Schnelle Anfahrt vor Ort",
                text: "Unser ortsansässiger Servicetechniker startet unverzüglich und ist in der Regel in 15 bis 30 Minuten bei Ihnen vor Ort."
            },
            {
                "@type": "HowToStep",
                position: 3,
                name: "Zerstörungsfreie Öffnung",
                text: "Mit modernsten Spezialwerkzeugen öffnen wir zugefallene Türen zu über 99% komplett ohne Schäden an Schloss oder Türrahmen."
            },
            {
                "@type": "HowToStep",
                position: 4,
                name: "Transparente Abrechnung vor Ort",
                text: "Sie bezahlen bequem per EC-Karte, Kreditkarte, PayPal oder bar direkt beim Monteur – exakt den vereinbarten Festpreis."
            }
        ]
    };
}

// ── 8. SPECIALIZED PAGE GRAPHS ─────────────────────────────────────────────
export function getHomeGraphSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteUrl}/#webpage`,
                url: `${siteUrl}/`,
                name: "Schlüsseldienst Wetzlar | 24h Notdienst ab 99€",
                description: "Zerstörungsfreie Türöffnungen vom Fachbetrieb in Wetzlar. Erleben Sie unseren 24h Notdienst mit transparenter, verbindlicher Preisauskunft vorab.",
                isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
                about: { "@id": KNOWLEDGE_GRAPH_IDS.localBusiness },
                breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
                inLanguage: "de-DE"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}/#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Startseite",
                        item: `${siteUrl}/`
                    }
                ]
            },
            getProcessHowToSchema()
        ]
    };
}

export function getContactPageGraphSchema() {
    const fullUrl = `${siteUrl}/kontakt`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": `${fullUrl}#webpage`,
                url: fullUrl,
                name: "Kontakt | Schlüssel Schmiede Wetzlar",
                description: "Kontaktieren Sie die Schlüssel Schmiede Wetzlar: 24/7 Notruf, E-Mail und Anfahrt zur Langgasse 70 in Wetzlar.",
                isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
                about: { "@id": KNOWLEDGE_GRAPH_IDS.localBusiness },
                breadcrumb: { "@id": `${fullUrl}#breadcrumb` },
                inLanguage: "de-DE"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${fullUrl}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/` },
                    { "@type": "ListItem", position: 2, name: "Kontakt", item: fullUrl }
                ]
            }
        ]
    };
}

export function getAboutPageGraphSchema(subpage?: { name: string; url: string }) {
    const fullUrl = subpage ? `${siteUrl}${subpage.url}` : `${siteUrl}/ueber-uns`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AboutPage",
                "@id": `${fullUrl}#webpage`,
                url: fullUrl,
                name: subpage ? `${subpage.name} | Über uns | Schlüssel Schmiede Wetzlar` : "Über uns | Schlüssel Schmiede Wetzlar",
                description: "Lernen Sie die Schlüssel Schmiede Wetzlar kennen: Ihr Meisterbetrieb für Sicherheitstechnik und 24h Schlüsselnotdienst.",
                isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
                about: { "@id": KNOWLEDGE_GRAPH_IDS.organization },
                breadcrumb: { "@id": `${fullUrl}#breadcrumb` },
                inLanguage: "de-DE"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${fullUrl}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/` },
                    { "@type": "ListItem", position: 2, name: "Über uns", item: `${siteUrl}/ueber-uns` },
                    ...(subpage ? [{ "@type": "ListItem" as const, position: 3, name: subpage.name, item: fullUrl }] : [])
                ]
            }
        ]
    };
}

export function getGenericPageGraphSchema({
    title,
    description,
    url,
    pageType = "WebPage",
    breadcrumbs,
    faqs
}: {
    title: string;
    description: string;
    url: string;
    pageType?: "WebPage" | "ItemPage" | "CollectionPage" | "FAQPage" | "ContactPage" | "AboutPage";
    breadcrumbs?: Array<{ name: string; url: string }>;
    faqs?: Array<{ question: string; answer: string }>;
}) {
    const fullUrl = `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
    const pageId = `${fullUrl}#webpage`;
    const breadcrumbId = `${fullUrl}#breadcrumb`;

    const graph: Record<string, unknown>[] = [
        {
            "@type": pageType,
            "@id": pageId,
            url: fullUrl,
            name: title,
            description: description,
            isPartOf: { "@id": KNOWLEDGE_GRAPH_IDS.website },
            breadcrumb: { "@id": breadcrumbId },
            inLanguage: "de-DE"
        }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
        graph.push({
            "@type": "BreadcrumbList",
            "@id": breadcrumbId,
            itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
            }))
        });
    }

    if (faqs && faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullUrl}#faq`,
            isPartOf: { "@id": pageId },
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        });
    }

    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
}

// ── 9. COMPATIBILITY & UTILITY HELPERS ──────────────────────────────────────
export function getOrganizationSchema() {
    return getRootGraphSchema();
}

export function getLocalBusinessSchema() {
    return getRootGraphSchema();
}

export function getServiceSchema({ title, description, url, price }: { title: string; description: string; url: string; price?: number }) {
    return getServiceGraphSchema({ title, description, url, price });
}

export function getPricingSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${siteUrl}/preise#product-pricing`,
        name: "Schlüsseldienst Leistungen & Festpreise",
        description: "Transparente Festpreise für Türöffnungen und Sicherheitstechnik in Wetzlar und Umgebung.",
        brand: {
            "@type": "Brand",
            name: companyName
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "58",
            bestRating: "5",
            worstRating: "1"
        },
        offers: {
            "@type": "AggregateOffer",
            lowPrice: BASE_PRICES.door,
            highPrice: BASE_PRICES.weekendDoor,
            priceCurrency: "EUR",
            offerCount: 4,
            offers: [
                {
                    "@type": "Offer",
                    name: "Türöffnung (zugefallen, tagsüber)",
                    price: BASE_PRICES.door,
                    priceCurrency: "EUR",
                    itemOffered: {
                        "@type": "Service",
                        name: "Türöffnung zugefallen"
                    }
                },
                {
                    "@type": "Offer",
                    name: "Türöffnung (abgeschlossen)",
                    price: BASE_PRICES.doorLocked,
                    priceCurrency: "EUR",
                    itemOffered: {
                        "@type": "Service",
                        name: "Türöffnung abgeschlossen"
                    }
                },
                {
                    "@type": "Offer",
                    name: "Autoöffnung",
                    price: BASE_PRICES.car,
                    priceCurrency: "EUR",
                    itemOffered: {
                        "@type": "Service",
                        name: "Autoöffnung vor Ort"
                    }
                }
            ]
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
            item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
        }))
    };
}

export function getArticleSchema(post: { headline: string; description: string; datePublished: string; dateModified?: string; url: string; author?: string; image?: string }) {
    return getArticleGraphSchema({
        headline: post.headline,
        description: post.description,
        url: post.url,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        authorName: post.author,
        image: post.image
    });
}
