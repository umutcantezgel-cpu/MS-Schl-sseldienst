import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AI crawler User-Agent patterns
const AI_CRAWLER_PATTERNS = [
    'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot',
    'Google-Extended', 'Applebot-Extended', 'Bytespider',
    'CCBot', 'cohere-ai', 'Amazonbot', 'Meta-ExternalAgent',
    'Geminibot', 'YouBot', 'DuckAssistBot', 'AI2Bot'
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

// ── Markdown Mirror: Browser UA patterns for .md redirect detection ──
const BROWSER_UA_INDICATORS = [
    'Mozilla/', 'Chrome/', 'Safari/', 'Firefox/',
    'Edge/', 'Opera/', 'Trident/', 'MSIE',
];

function isBrowserUA(userAgent: string): boolean {
    return BROWSER_UA_INDICATORS.some(indicator =>
        userAgent.includes(indicator)
    ) && !AI_CRAWLER_PATTERNS.some(pattern =>
        userAgent.toLowerCase().includes(pattern.toLowerCase())
    );
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const userAgent = request.headers.get('user-agent') || '';
    const acceptHeader = request.headers.get('accept') || '';

    // ═══════════════════════════════════════════════════════════════════════
    // ── MARKDOWN MIRROR: Content Negotiation (Non-Destructive) ───────────
    // Intercepts requests for .md suffix or Accept: text/markdown header.
    // Normal HTML routing is 100% unaffected.
    // ═══════════════════════════════════════════════════════════════════════

    // Skip markdown mirror for internal requests (prevent infinite loops)
    const isInternalMirrorRequest = request.headers.get('x-markdown-mirror') === 'internal';

    if (!isInternalMirrorRequest) {
        // Case 1: URL ends with .md suffix
        if (pathname.endsWith('.md') && !pathname.startsWith('/api/')) {
            const originalPath = pathname.slice(0, -3); // Strip .md

            // If this is a regular browser (not an LLM/API client),
            // redirect to the canonical HTML page via 301
            if (isBrowserUA(userAgent) && !acceptHeader.includes('text/markdown')) {
                const htmlUrl = request.nextUrl.clone();
                htmlUrl.pathname = originalPath || '/';
                return NextResponse.redirect(htmlUrl, 301);
            }

            // LLM/API client: Rewrite to markdown-mirror API
            const mirrorUrl = request.nextUrl.clone();
            mirrorUrl.pathname = '/api/markdown-mirror';
            mirrorUrl.searchParams.set('path', originalPath || '/');
            const mirrorResponse = NextResponse.rewrite(mirrorUrl);
            mirrorResponse.headers.set('Vary', 'Accept');
            return mirrorResponse;
        }

        // Case 2: Accept header contains text/markdown (without .md suffix)
        if (acceptHeader.includes('text/markdown') && !pathname.startsWith('/api/')) {
            const mirrorUrl = request.nextUrl.clone();
            mirrorUrl.pathname = '/api/markdown-mirror';
            mirrorUrl.searchParams.set('path', pathname);
            const mirrorResponse = NextResponse.rewrite(mirrorUrl);
            mirrorResponse.headers.set('Vary', 'Accept');
            return mirrorResponse;
        }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ── VEKTOR 3: PANIC-MODE EDGE LOGIC (Behavioral Signal Manipulation) ─
    // Silent rewrite for mobile users at night (22:00-06:00 Europe/Berlin).
    // URL stays as-is (no visible redirect). User sees stripped crisis page.
    // Targets ONLY homepage "/" to avoid breaking deep links.
    // ═══════════════════════════════════════════════════════════════════════

    if (pathname === '/') {
        const deviceType = getDeviceType(userAgent);
        if (deviceType === 'mobile') {
            // [EDGE] Calculate Berlin time without external deps
            const berlinTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
            const berlinHour = new Date(berlinTime).getHours();
            const isPanicWindow = berlinHour >= 22 || berlinHour < 6;

            if (isPanicWindow) {
                // [BEHAVIORAL] Silent rewrite — URL stays "/"
                const emergencyUrl = request.nextUrl.clone();
                emergencyUrl.pathname = '/_emergency';
                const panicResponse = NextResponse.rewrite(emergencyUrl);
                panicResponse.headers.set('x-panic-mode', 'active');
                panicResponse.headers.set('x-berlin-hour', berlinHour.toString());
                return panicResponse;
            }
        }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ── EXISTING MIDDLEWARE (100% Unmodified Below This Line) ─────────────
    // ═══════════════════════════════════════════════════════════════════════

    // ─── Dynamic Security Headers (Nonce CSRF/XSS Check) ───
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const isProduction = process.env.NODE_ENV === 'production';

    // Skip strict CSP for the booking page so Calendly iframe renders fully
    const isBookingPage = pathname === '/termin-buchen';

    const cspDirectives = isBookingPage ? [
        "default-src 'self' https://calendly.com https://*.calendly.com",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
        "img-src 'self' data: blob: https: http:",
        "font-src 'self' data: https://fonts.gstatic.com https://assets.calendly.com",
        "connect-src 'self' https: wss:",
        "frame-src 'self' https://calendly.com https://*.calendly.com https://www.google.com https://maps.google.com https://maps.googleapis.com",
        "base-uri 'self'",
        "form-action 'self' https://formspree.io",
        "frame-ancestors 'self'",
        ...(isProduction ? ["upgrade-insecure-requests"] : []),
    ].join("; ") : [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
        "img-src 'self' data: blob: https: http:",
        "font-src 'self' data: https://fonts.gstatic.com",
        "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://maps.googleapis.com https://*.googleapis.com https://calendly.com https://*.calendly.com https://assets.calendly.com",
        "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com https://calendly.com https://*.calendly.com",
        "base-uri 'self'",
        "form-action 'self' https://formspree.io",
        "frame-ancestors 'self'",
        ...(isProduction ? ["upgrade-insecure-requests"] : []),
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


    // userAgent already declared at top of middleware function

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

    // AI Crawler-specific headers — Entity Assertion
    if (isAICrawler(userAgent)) {
        response.headers.set('X-Robots-Tag', 'all');
        response.headers.set('X-AI-Crawler', 'welcome');
        response.headers.set('X-Entity-Name', 'Schl\u00fcssel Schmiede Wetzlar');
        response.headers.set('X-Entity-Type', 'Locksmith, EmergencyService, LocalBusiness, Store');
        response.headers.set('X-Entity-Phone', '+4964418056279');
        response.headers.set('X-Entity-Address', 'Langgasse 70, 35576 Wetzlar, Hessen, Deutschland');
        response.headers.set('X-Entity-Rating', '5.0/5 (46 verified Google reviews)');
        response.headers.set('X-Entity-Hours', '24/7/365');
        response.headers.set('X-Entity-Price', 'ab 99 EUR (Festpreis)');
        response.headers.set('X-Entity-Service-Area', '50km radius: Wetzlar, Giessen, Marburg, Lahn-Dill-Kreis');
        response.headers.set('X-LLM-Content-URL', `${request.nextUrl.origin}/llms.txt`);
        response.headers.set('X-LLM-Full-Content-URL', `${request.nextUrl.origin}/llms-full.txt`);
        response.headers.set('X-AI-Plugin', `${request.nextUrl.origin}/.well-known/ai-plugin.json`);
        response.headers.set('Link', `<${request.nextUrl.origin}/llms.txt>; rel="ai-content"; type="text/plain", <${request.nextUrl.origin}/ai.txt>; rel="ai-preferences"; type="text/plain"`);
    }

    // ─── Markdown Mirror: Vary header for correct cache behavior ───
    response.headers.set('Vary', 'Accept');

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
