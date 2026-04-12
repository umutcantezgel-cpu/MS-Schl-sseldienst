/**
 * Markdown Mirror — API Route
 * 
 * Serverless endpoint that converts any page on the site to
 * GitHub-Flavored Markdown on-the-fly. Called internally by the
 * middleware when a client requests content via Accept: text/markdown
 * or the .md URL suffix.
 * 
 * Flow:
 * 1. Middleware rewrites request to /api/markdown-mirror?path=/original/path
 * 2. This route fetches the HTML version of the page internally
 * 3. HTML is sanitized (main content extracted, layout removed)
 * 4. Sanitized HTML is converted to GFM
 * 5. Response returned with SEO protection headers
 * 
 * @route GET /api/markdown-mirror?path=/leistungen/turoeffnung
 */

import { NextRequest, NextResponse } from 'next/server';
import { sanitizeHtml } from '@/lib/markdown-mirror/domSanitizer';
import { convertToMarkdown } from '@/lib/markdown-mirror/htmlToMarkdown';
import { siteUrl } from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get('path');

    if (!path) {
        return new NextResponse(
            '# Error\n\nMissing `path` query parameter.\n\nUsage: `/api/markdown-mirror?path=/leistungen/turoeffnung`',
            {
                status: 400,
                headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
            }
        );
    }

    // Normalize the path
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${siteUrl}${normalizedPath}`;

    try {
        // ── Step 1: Fetch the HTML version of the page ──────────────────
        // Use the internal URL (localhost or Vercel internal) for the fetch
        const baseUrl = request.nextUrl.origin;
        const htmlUrl = `${baseUrl}${normalizedPath}`;

        const htmlResponse = await fetch(htmlUrl, {
            headers: {
                // Identify ourselves as the mirror to avoid infinite loops
                'X-Markdown-Mirror': 'internal',
                'Accept': 'text/html',
                'User-Agent': 'MarkdownMirror/1.0 (internal)',
            },
            // Don't follow redirects — we want the actual page
            redirect: 'follow',
        });

        if (!htmlResponse.ok) {
            return new NextResponse(
                `# Error ${htmlResponse.status}\n\nDie Seite \`${normalizedPath}\` konnte nicht geladen werden.\n\n[Zurück zur Startseite](${siteUrl})`,
                {
                    status: htmlResponse.status,
                    headers: {
                        'Content-Type': 'text/markdown; charset=utf-8',
                        'X-Robots-Tag': 'noindex, noarchive',
                    },
                }
            );
        }

        const rawHtml = await htmlResponse.text();

        // ── Step 2: Sanitize the HTML (extract main, remove chrome) ─────
        const sanitizedHtml = sanitizeHtml(rawHtml, normalizedPath);

        // ── Step 3: Convert to GitHub-Flavored Markdown ─────────────────
        const markdown = convertToMarkdown(sanitizedHtml, normalizedPath);

        // ── Step 4: Return with SEO protection headers ──────────────────
        return new NextResponse(markdown, {
            status: 200,
            headers: {
                'Content-Type': 'text/markdown; charset=utf-8',
                // SEO Protection: Canonical link to HTML original
                'Link': `<${canonicalUrl}>; rel="canonical"`,
                // SEO Protection: Prevent indexing of mirror version
                'X-Robots-Tag': 'noindex, noarchive',
                // Caching: Vary by Accept header for correct CDN behavior
                'Vary': 'Accept',
                // Edge cache: 1 hour with 10 min stale-while-revalidate
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
                // Metadata
                'X-Markdown-Mirror': 'true',
                'X-Canonical-URL': canonicalUrl,
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new NextResponse(
            `# Internal Server Error\n\nDie Markdown-Konvertierung für \`${normalizedPath}\` ist fehlgeschlagen.\n\n**Fehler:** ${errorMessage}\n\n[Original-Seite besuchen](${canonicalUrl})`,
            {
                status: 500,
                headers: {
                    'Content-Type': 'text/markdown; charset=utf-8',
                    'X-Robots-Tag': 'noindex, noarchive',
                },
            }
        );
    }
}
