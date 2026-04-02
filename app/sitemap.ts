import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/schema'
import { CONTENT_GRAPH } from '@/lib/contentGraph'
import { allLocations } from '@/lib/data/allLocations'
import { getAllBlogPosts } from '@/lib/data/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapNodes = CONTENT_GRAPH.map((node) => {
        let priority = 0.5;
        if (node.type === 'service') priority = 0.9; // Revenue-critical pages
        if (node.type === 'area') priority = 0.8; // High local SEO value
        if (node.type === 'info') priority = 0.6;
        if (node.type === 'legal') priority = 0.2; // Low crawl priority
        if (node.slug === '/') priority = 1.0;

        return {
            url: `${siteUrl}${node.slug === '/' ? '' : node.slug}`,
            lastModified: new Date(),
            changeFrequency: node.type === 'service' ? 'weekly' as const : 'monthly' as const,
            priority,
        }
    });

    const cityNodes = allLocations.map((city) => ({
        url: `${siteUrl}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8, // High priority — local SEO revenue drivers
    }));

    const blogNodes = getAllBlogPosts().map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...sitemapNodes, ...cityNodes, ...blogNodes];
}
