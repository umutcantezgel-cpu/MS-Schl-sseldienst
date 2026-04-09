/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 und Input Sanitization Utilities
 * ══════════════════════════════════════════════════════════════
 * Defense-in-depth: sanitize all user inputs before rendering.
 * React already escapes JSX values, but these are extra layers
 * for URL params, dangerouslySetInnerHTML, and API routes.
 * ══════════════════════════════════════════════════════════════
 */

/**
 * Escape HTML entities in a string.
 * Converts <, >, &, ", ' to safe HTML entities.
 */
export function escapeHTML(input: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  return input.replace(/[&<>"'/]/g, (char) => map[char] || char);
}

/**
 * Sanitize user input for API/form processing.
 * Escapes HTML entities, trims, and enforces max length.
 */
export function sanitizeInput(input: unknown, maxLength: number = 5000): string {
  if (typeof input !== "string") return "";
  return escapeHTML(input.trim().slice(0, maxLength));
}

/**
 * Strip ALL HTML tags from a string (for display-only contexts).
 */
export function stripHTML(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

/**
 * Sanitize a URL search parameter for safe display.
 * Escapes HTML, trims whitespace, enforces max length.
 */
export function sanitizeSearchParam(
  param: string | null | undefined,
  maxLength: number = 200
): string {
  if (!param) return "";
  return escapeHTML(param.trim().slice(0, maxLength));
}

/**
 * Validate and sanitize an email address.
 * Returns the sanitized email or empty string if invalid.
 */
export function sanitizeEmail(email: string): string {
  const trimmed = email.trim().toLowerCase().slice(0, 254);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(trimmed) ? trimmed : "";
}

/**
 * Sanitize HTML content for safe rendering via dangerouslySetInnerHTML.
 * Strips dangerous tags (script, iframe, object, embed, form) and
 * removes all on* event handler attributes while preserving safe
 * formatting HTML (p, h2, h3, strong, em, a, ul, ol, li, br, span, div).
 */
export function sanitizeHTML(input: string): string {
  if (typeof input !== "string") return "";
  // Remove dangerous tags entirely (including their content)
  let clean = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")
    .replace(/<embed\b[^>]*\/?>/gi, "")
    .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  // Remove all on* event handlers (onclick, onerror, onload, etc.)
  clean = clean.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
  // Remove javascript: protocol in href/src attributes
  clean = clean.replace(/(href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, "$1=\"\"");
  return clean;
}
