import { NextResponse } from 'next/server';
import { sanitizeInput } from '@/lib/sanitize';
import { validateCSRF } from '@/lib/csrf';

// In-memory rate limiting (for demo/MVP purposes)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return true;
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }

    record.count += 1;
    return true;
}

export async function POST(req: Request) {
    try {
        // 1. CSRF Validation
        const isCsrfValid = await validateCSRF();
        if (!isCsrfValid) {
            return NextResponse.json({ error: "Invalid CSRF token or Origin" }, { status: 403 });
        }

        // 2. Rate Limiting
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        if (!checkRateLimit(ip)) {
            return NextResponse.json({ error: "Too many requests, please try again later" }, { status: 429 });
        }

        const body = await req.json();

        // 3. Honeypot Validation
        if (body.website_url) { // 'website_url' is our honeypot field
            // Spam bot filled out the hidden field
            return NextResponse.json({ success: true }, { status: 200 }); // Fake success for bots
        }

        // 4. Input Sanitization
        const name = sanitizeInput(body.name);
        const phone = sanitizeInput(body.phone);
        const service = sanitizeInput(body.service);
        const location = sanitizeInput(body.location);

        if (!name || !phone) {
            return NextResponse.json({ error: "Name und Telefonnummer sind Pflichtfelder." }, { status: 400 });
        }

        // Log in development only
        if (process.env.NODE_ENV === 'development') {

        }

        return NextResponse.json({ success: true, message: "Wir haben Ihre Anfrage erhalten. Ein Monteur ist auf dem Weg!" }, { status: 200 });

    } catch (error) {
        console.error("API Contact error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
