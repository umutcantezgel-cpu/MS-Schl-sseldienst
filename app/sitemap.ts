import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/schema'
import { CONTENT_GRAPH } from '@/lib/contentGraph'
import { allLocations } from '@/lib/data/allLocations'
import { getAllBlogPosts, getAllRatgeberPosts } from '@/lib/data/mdx'
import { lexikonData } from '@/lib/data/lexikon'
import { getAllCaseStudies } from '@/lib/data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
    // ── 1. Content Graph Nodes (Hauptseiten, Services, Legal) ──
    const sitemapNodes = CONTENT_GRAPH.map((node) => {
        let priority = 0.5;
        if (node.type === 'service') priority = 0.9;
        if (node.type === 'area') priority = 0.8;
        if (node.type === 'info') priority = 0.6;
        if (node.type === 'legal') priority = 0.2;
        if (node.slug === '/') priority = 1.0;

        return {
            url: `${siteUrl}${node.slug === '/' ? '' : node.slug}`,
            lastModified: new Date(),
            changeFrequency: node.type === 'service' ? 'weekly' as const : 'monthly' as const,
            priority,
        }
    });

    // ── 2. Stadtseiten (Local SEO) ──
    const cityNodes = allLocations.map((city) => ({
        url: `${siteUrl}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ── 3. Blog-Artikel ──
    const blogNodes = getAllBlogPosts().map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── 4. Ratgeber-Artikel ──
    const ratgeberNodes = getAllRatgeberPosts().map((post) => ({
        url: `${siteUrl}/ratgeber/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── 5. Lexikon-Einträge ──
    const lexikonNodes = lexikonData.map((entry) => ({
        url: `${siteUrl}/lexikon/${entry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    // ── 6. Referenzen / Case Studies ──
    const referenzenNodes = getAllCaseStudies().map((study) => ({
        url: `${siteUrl}/referenzen/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    // ── 7. Fehlende statische Seiten (nicht im Content Graph) ──
    const missingStaticPages: MetadataRoute.Sitemap = [
        // Service-Subpages die nicht im Content Graph sind
        { url: `${siteUrl}/leistungen`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${siteUrl}/leistungen/notdienst`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${siteUrl}/leistungen/einbruchschutz`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${siteUrl}/leistungen/tresoroeffnung`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        // Über-uns Subpages
        { url: `${siteUrl}/ueber-uns/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${siteUrl}/ueber-uns/geschichte`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${siteUrl}/ueber-uns/karriere`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${siteUrl}/ueber-uns/philosophie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        // Conversion-Pages
        { url: `${siteUrl}/anfrage`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${siteUrl}/termin-buchen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        // Index-Seiten für Content
        { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        { url: `${siteUrl}/ratgeber`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        { url: `${siteUrl}/ratgeber/einbruchrisiko`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${siteUrl}/lexikon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${siteUrl}/referenzen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        // HTML-Sitemap
        { url: `${siteUrl}/sitemap-uebersicht`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
        // Legal pages missing from Content Graph
        { url: `${siteUrl}/barrierefreiheit`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${siteUrl}/cookie-richtlinie`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${siteUrl}/widerruf`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        // Service pages missing from Content Graph
        { url: `${siteUrl}/leistungen/passbilder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${siteUrl}/leistungen/autoschluessel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${siteUrl}/leistungen/uhren-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ];

    return [
        ...sitemapNodes,
        ...cityNodes,
        ...blogNodes,
        ...ratgeberNodes,
        ...lexikonNodes,
        ...referenzenNodes,
        ...missingStaticPages,
    ];
}
