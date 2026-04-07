import { siteUrl } from "./schema";

export function generateServiceSchema({ title, description, url, price }: { title: string, description: string, url: string, price: number }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": title,
        "provider": {
            "@type": ["Locksmith", "Store"],
            "name": "Schlüssel Schmiede Wetzlar",
            "@id": `${siteUrl}/#localbusiness`
        },
        "description": description,
        "url": `${siteUrl}${url}`,
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 50.5606,
                "longitude": 8.5048
            },
            "geoRadius": "50000"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": title,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": title
                    },
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": price,
                        "priceCurrency": "EUR"
                    }
                }
            ]
        }
    }
}
