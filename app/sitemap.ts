import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/schema'
import { CONTENT_GRAPH } from '@/lib/contentGraph'
import { allLocations } from '@/lib/data/allLocations'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapNodes = CONTENT_GRAPH.map((node) => {
        let priority = 0.5;
        if (node.type === 'service') priority = 0.8;
        if (node.type === 'area') priority = 0.7;
        if (node.type === 'blog') priority = 0.5;
        if (node.type === 'info') priority = 0.6;
        if (node.type === 'legal') priority = 0.3;
        if (node.slug === '/') priority = 1.0;

        return {
            url: `${siteUrl}${node.slug === '/' ? '' : node.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority,
        }
    });

    const cityNodes = allLocations.map((city) => ({
        url: `${siteUrl}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7, // High priority for localized pages
    }));

    return [...sitemapNodes, ...cityNodes];
}
