/**
 * Markdown Mirror — HTML to GFM Converter
 * 
 * Wraps `node-html-markdown` with project-specific configuration
 * and post-processing for clean GitHub-Flavored Markdown output.
 * 
 * @module lib/markdown-mirror/htmlToMarkdown
 */

import { NodeHtmlMarkdown } from 'node-html-markdown';
import { siteUrl } from '@/lib/schema';

// ── Singleton converter instance ────────────────────────────────────────
const nhm = new NodeHtmlMarkdown(
    {
        // Use GFM-compatible output
        bulletMarker: '-',
        codeBlockStyle: 'fenced',
        emDelimiter: '*',
        strongDelimiter: '**',
        // Preserve line breaks in content
        keepDataImages: false,
        // Maximum line length (0 = no wrap)
        maxConsecutiveNewlines: 2,
    },
    // Custom translators for edge cases
    undefined,
    // Ignore these tags completely
    undefined
);

/**
 * Convert sanitized HTML to GitHub-Flavored Markdown.
 * Applies post-processing for clean, readable output.
 */
export function convertToMarkdown(sanitizedHtml: string, originalPath: string): string {
    // Step 1: Convert HTML → Markdown via node-html-markdown
    let markdown = nhm.translate(sanitizedHtml);

    // Step 2: Post-processing

    // 2a: Add front-matter header with source attribution
    const canonicalUrl = `${siteUrl}${originalPath}`;
    const header = [
        `---`,
        `source: ${canonicalUrl}`,
        `mirror: true`,
        `generated: ${new Date().toISOString()}`,
        `---`,
        '',
    ].join('\n');

    // 2b: Clean up excessive whitespace and blank lines
    markdown = markdown
        .replace(/\n{4,}/g, '\n\n\n')   // Max 2 blank lines
        .replace(/^[ \t]+$/gm, '')        // Remove whitespace-only lines
        .replace(/\[([^\]]*)\]\(\)/g, '$1') // Remove empty links [text]()
        .trim();

    // 2c: Remove any remaining HTML tags that slipped through
    markdown = markdown
        .replace(/<\/?(?:div|span|section|article|main)[^>]*>/gi, '')
        .replace(/<br\s*\/?>/gi, '\n');

    // 2d: Add footer with canonical attribution
    const footer = [
        '',
        '---',
        '',
        `> 📄 **Quelle:** [${canonicalUrl}](${canonicalUrl})`,
        `> Dieses Dokument wurde automatisch aus der HTML-Quelle generiert.`,
    ].join('\n');

    return header + markdown + footer;
}

/**
 * Full pipeline: sanitized HTML → clean GFM Markdown string.
 * This is the main entry point for the conversion.
 */
export { sanitizeHtml } from './domSanitizer';
