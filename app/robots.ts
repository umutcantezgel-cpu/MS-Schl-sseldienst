import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/schema'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default: allow all
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            // AI Crawlers — explicit full access
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'cohere-ai',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
        ],
        sitemap: [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/sitemap-ai.xml`,
        ],
    }
}
