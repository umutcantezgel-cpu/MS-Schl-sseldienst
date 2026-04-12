/**
 * Markdown Mirror — DOM Sanitizer
 * 
 * Extracts semantic main content from a full HTML page and removes
 * all layout/interactive elements that are irrelevant to text-based
 * consumption by LLMs and API clients.
 * 
 * @module lib/markdown-mirror/domSanitizer
 */

import { siteUrl } from '@/lib/schema';

// ── Elements to completely remove from the DOM ──────────────────────────
const REMOVE_SELECTORS = [
    // Layout chrome
    'nav', 'footer', 'header',
    // Sidebars and asides
    'aside',
    // Modals and overlays
    'dialog', '[role="dialog"]', '[aria-modal="true"]',
    // Scripts and styles
    'script', 'style', 'noscript', 'link[rel="stylesheet"]',
    // Interactive widgets
    'iframe', 'video', 'audio', 'canvas',
    // Next.js internals
    '[data-nextjs-scroll-focus-boundary]',
    '#__next-build-indicator',
    // Cookie banners and consent
    '[class*="cookie"]', '[id*="cookie"]', '[class*="consent"]',
    // WhatsApp widgets
    '[class*="whatsapp"]', '[class*="WhatsApp"]', 'a[href*="wa.me"]',
    // Sticky CTAs and floating elements
    '[class*="sticky"]', '[class*="Sticky"]', '[class*="fixed"]',
    // SVG icons (noise in markdown)
    'svg',
    // Hidden elements
    '[aria-hidden="true"]', '[hidden]', '.sr-only',
    // Breadcrumbs (navigation, not content)
    '[class*="breadcrumb"]', '[class*="Breadcrumb"]', 'nav[aria-label]',
].join(', ');

// ── Interactive elements to replace with blockquote notices ─────────────
const INTERACTIVE_SELECTORS = [
    'form',
    'button[type="submit"]',
    'input', 'textarea', 'select',
    '[class*="calendly"]', '[class*="Calendly"]',
    'iframe',
];

/**
 * Sanitize raw HTML by extracting main content and removing layout elements.
 * Returns cleaned HTML string ready for Markdown conversion.
 */
export function sanitizeHtml(rawHtml: string, originalPath: string): string {
    // Step 1: Extract <main> or <article> content, or fall back to <body>
    let content = extractMainContent(rawHtml);

    // Step 2: Remove all non-content elements
    content = removeElements(content, REMOVE_SELECTORS);

    // Step 3: Replace interactive elements with blockquote notices
    content = replaceInteractiveElements(content, originalPath);

    // Step 4: Absolutize all relative URLs
    content = absolutizeUrls(content);

    // Step 5: Clean up excessive whitespace
    content = content
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]+\n/g, '\n')
        .trim();

    return content;
}

/**
 * Extract the main semantic content block from a full HTML page.
 */
function extractMainContent(html: string): string {
    // Try <main> first
    const mainMatch = html.match(/<main[\s>][\s\S]*?<\/main>/i);
    if (mainMatch) return mainMatch[0];

    // Try <article>
    const articleMatch = html.match(/<article[\s>][\s\S]*?<\/article>/i);
    if (articleMatch) return articleMatch[0];

    // Try role="main"
    const roleMainMatch = html.match(/<div[^>]*role="main"[^>]*>[\s\S]*?<\/div>/i);
    if (roleMainMatch) return roleMainMatch[0];

    // Fallback: extract <body> content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) return bodyMatch[1]!;

    // Last resort: return as-is
    return html;
}

/**
 * Remove all matching elements from HTML string using regex-based approach.
 * Works server-side without DOM parser dependency.
 */
function removeElements(html: string, selectorsStr: string): string {
    const selectors = selectorsStr.split(', ').map(s => s.trim());
    let result = html;

    for (const selector of selectors) {
        if (selector.startsWith('[') && selector.includes('*=')) {
            // Attribute contains selector: [class*="cookie"]
            const attrMatch = selector.match(/\[(\w+)\*="([^"]+)"\]/);
            if (attrMatch && attrMatch[1] && attrMatch[2]) {
                const attr = attrMatch[1];
                const value = attrMatch[2];
                const regex = new RegExp(
                    `<\\w+[^>]*${attr}="[^"]*${value}[^"]*"[^>]*>[\\s\\S]*?<\\/\\w+>`,
                    'gi'
                );
                result = result.replace(regex, '');
            }
        } else if (selector.startsWith('[')) {
            // Attribute exact selector: [hidden], [aria-hidden="true"]
            const attrMatch = selector.match(/\[(\w[\w-]*)(?:="([^"]*)")?\]/);
            if (attrMatch && attrMatch[1]) {
                const attr = attrMatch[1];
                const value = attrMatch[2];
                const pattern = value
                    ? `<\\w+[^>]*${attr}="${value}"[^>]*>[\\s\\S]*?<\\/\\w+>`
                    : `<\\w+[^>]*${attr}[^>]*>[\\s\\S]*?<\\/\\w+>`;
                const regex = new RegExp(pattern, 'gi');
                result = result.replace(regex, '');
            }
        } else if (selector.startsWith('#')) {
            // ID selector
            const id = selector.slice(1);
            const regex = new RegExp(
                `<\\w+[^>]*id="${id}"[^>]*>[\\s\\S]*?<\\/\\w+>`,
                'gi'
            );
            result = result.replace(regex, '');
        } else if (selector.startsWith('.')) {
            // Class selector
            const cls = selector.slice(1);
            const regex = new RegExp(
                `<\\w+[^>]*class="[^"]*${cls}[^"]*"[^>]*>[\\s\\S]*?<\\/\\w+>`,
                'gi'
            );
            result = result.replace(regex, '');
        } else if (selector.includes('[')) {
            // Tag with attribute: a[href*="wa.me"], link[rel="stylesheet"]
            const tagAttrMatch = selector.match(/^(\w+)\[([^\]]+)\]/);
            if (tagAttrMatch && tagAttrMatch[1] && tagAttrMatch[2]) {
                const tag = tagAttrMatch[1];
                const attrPart = tagAttrMatch[2];
                if (attrPart.includes('*=')) {
                    const parts = attrPart.split('*=');
                    const attr = parts[0] || '';
                    const cleanVal = (parts[1] || '').replace(/"/g, '');
                    const regex = new RegExp(
                        `<${tag}[^>]*${attr}="[^"]*${cleanVal}[^"]*"[^>]*(?:\\/>|>[\\s\\S]*?<\\/${tag}>)`,
                        'gi'
                    );
                    result = result.replace(regex, '');
                } else {
                    const parts = attrPart.split('=');
                    const attr = parts[0] || '';
                    const cleanVal = (parts[1] || '').replace(/"/g, '');
                    const regex = new RegExp(
                        `<${tag}[^>]*${attr}="${cleanVal}"[^>]*(?:\\/>|>[\\s\\S]*?<\\/${tag}>)`,
                        'gi'
                    );
                    result = result.replace(regex, '');
                }
            }
        } else {
            // Simple tag selector: nav, footer, header, etc.
            // Handle both self-closing and paired tags
            const regex = new RegExp(
                `<${selector}[\\s>][\\s\\S]*?<\\/${selector}>`,
                'gi'
            );
            result = result.replace(regex, '');
            // Also handle self-closing variant
            const selfClosing = new RegExp(`<${selector}[^>]*\\/?>`, 'gi');
            result = result.replace(selfClosing, '');
        }
    }

    return result;
}

/**
 * Replace interactive elements with standardized blockquote notices.
 */
function replaceInteractiveElements(html: string, originalPath: string): string {
    let result = html;
    const canonicalUrl = `${siteUrl}${originalPath}`;

    // Replace forms
    result = result.replace(
        /<form[\s\S]*?<\/form>/gi,
        `<blockquote><p><strong>Interaktives Formular:</strong> Dieses Formular ist im Textformat nicht verfügbar. Bitte besuchen Sie die <a href="${canonicalUrl}">Original-Webseite</a> für diese Funktion.</p></blockquote>`
    );

    // Replace iframes (Calendly, Maps, etc.)
    result = result.replace(
        /<iframe[\s\S]*?(?:<\/iframe>|\/>)/gi,
        `<blockquote><p><strong>Eingebetteter Inhalt:</strong> Dieser interaktive Inhalt ist im Textformat nicht verfügbar. Bitte besuchen Sie die <a href="${canonicalUrl}">Original-Webseite</a>.</p></blockquote>`
    );

    return result;
}

/**
 * Convert all relative URLs to absolute URLs using the site's base URL.
 */
function absolutizeUrls(html: string): string {
    // href="/..." → href="https://domain/..."
    let result = html.replace(
        /href="\/(?!\/)/g,
        `href="${siteUrl}/`
    );

    // src="/..." → src="https://domain/..."
    result = result.replace(
        /src="\/(?!\/)/g,
        `src="${siteUrl}/`
    );

    return result;
}
