import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AI crawler User-Agent patterns
const AI_CRAWLER_PATTERNS = [
    'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot',
    'Google-Extended', 'Applebot-Extended', 'Bytespider',
    'CCBot', 'cohere-ai', 'Amazonbot'
];

function isAICrawler(userAgent: string): boolean {
    return AI_CRAWLER_PATTERNS.some(pattern =>
        userAgent.toLowerCase().includes(pattern.toLowerCase())
    );
}

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const userAgent = request.headers.get('user-agent') || '';

    // Basic Security Headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
    );
    response.headers.set(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https: https://*.googleapis.com https://*.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://maps.googleapis.com https://*.googleapis.com; frame-src 'self' https://www.google.com https://maps.googleapis.com;"
    );
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    );

    // AI Crawler-specific headers
    if (isAICrawler(userAgent)) {
        response.headers.set('X-Robots-Tag', 'all');
        response.headers.set('X-AI-Crawler', 'welcome');
        // Log AI crawler access
        console.log(`[AI-CRAWLER] ${userAgent.substring(0, 80)} → ${request.nextUrl.pathname}`);
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
