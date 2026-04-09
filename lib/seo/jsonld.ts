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

export function createLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith", "Store"],
        name: companyName,
        url: siteUrl,
        telephone: telephone,
        email: contactEmail,
        address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.localStore.street,
            addressLocality: companyInfo.localStore.city,
            postalCode: companyInfo.localStore.postalCode,
            addressCountry: "DE"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: companyInfo.geo.latitude,
            longitude: companyInfo.geo.longitude
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "24/7 Schlüsseldienst-Notdienst"
            }
        ],
        memberOf: [
            {
                "@type": "Organization",
                name: "ADAC",
                url: "https://www.adac.de"
            },
            {
                "@type": "Organization",
                name: "Handwerkskammer Wiesbaden",
                url: "https://www.hwk-wiesbaden.de"
            }
        ],
        hasCredential: companyInfo.partnership.certifications,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "120",
            bestRating: "5",
            worstRating: "1"
        }
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
