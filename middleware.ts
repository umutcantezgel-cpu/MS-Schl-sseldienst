import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AI crawler User-Agent patterns
const AI_CRAWLER_PATTERNS = [
    'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot',
    'Google-Extended', 'Applebot-Extended', 'Bytespider',
    'CCBot', 'cohere-ai', 'Amazonbot'
];

// Mobile UA patterns (broad but reliable)
const MOBILE_UA_PATTERNS = [
    /Android.*Mobile/i,
    /iPhone/i,
    /iPod/i,
    /Windows Phone/i,
    /BlackBerry/i,
    /Opera Mini/i,
    /IEMobile/i,
];

const TABLET_UA_PATTERNS = [
    /iPad/i,
    /Android(?!.*Mobile)/i,
    /Tablet/i,
];

function isAICrawler(userAgent: string): boolean {
    return AI_CRAWLER_PATTERNS.some(pattern =>
        userAgent.toLowerCase().includes(pattern.toLowerCase())
    );
}

function getDeviceType(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
    if (MOBILE_UA_PATTERNS.some(p => p.test(userAgent))) return 'mobile';
    if (TABLET_UA_PATTERNS.some(p => p.test(userAgent))) return 'tablet';
    return 'desktop';
}

export function middleware(request: NextRequest) {
    // ─── Dynamic Security Headers (Nonce CSRF/XSS Check) ───
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const cspDirectives = [
        "default-src 'self'",
        `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' https:`,
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: blob: https: http:",
        "font-src 'self' data: https://fonts.gstatic.com",
        "connect-src 'self' https://formspree.io https://www.google-analytics.com https://vitals.vercel-insights.com https://maps.googleapis.com https://*.googleapis.com https://calendly.com https://assets.calendly.com",
        "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com https://calendly.com",
        "base-uri 'self'",
        "form-action 'self' https://formspree.io",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests"
    ].join("; ");

    // Initialize request headers to pass along to Next.js rendering
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspDirectives);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    const userAgent = request.headers.get('user-agent') || '';

    // ─── Device Detection Header ───
    const deviceType = getDeviceType(userAgent);
    response.headers.set('x-device-type', deviceType);

    // ─── Visitor Type Cookie (new → returning) ───
    const visitorCookie = request.cookies.get('visitor_type');
    if (!visitorCookie) {
        response.cookies.set('visitor_type', 'new', {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: '/',
        });
    } else if (visitorCookie.value === 'new') {
        // On second visit, upgrade to returning
        response.cookies.set('visitor_type', 'returning', {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 365,
            path: '/',
        });
    }

    // ─── Visitor Segment Detection (Phase 18) ───
    const pathname = request.nextUrl.pathname;
    const visitorTypeStr = visitorCookie?.value || 'new';

    let segment = 'new-visitor';
    if (pathname === '/kontakt' || pathname === '/preise') {
        segment = 'high-intent';
    } else if (pathname.startsWith('/leistungen/')) {
        segment = 'service-interested';
    } else if (visitorTypeStr === 'returning') {
        segment = 'returning';
    }

    response.headers.set('x-visitor-segment', segment);
    response.cookies.set('visitor_segment', segment, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60, // 1 hour (re-evaluated per page)
        path: '/',
    });

    // ─── Save-Data Header forwarding ───
    const saveData = request.headers.get('save-data');
    if (saveData === 'on') {
        response.headers.set('x-save-data', 'on');
    }

    response.headers.set('Content-Security-Policy', cspDirectives);
    response.headers.set('x-nonce', nonce);

    // AI Crawler-specific headers
    if (isAICrawler(userAgent)) {
        response.headers.set('X-Robots-Tag', 'all');
        response.headers.set('X-AI-Crawler', 'welcome');
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
