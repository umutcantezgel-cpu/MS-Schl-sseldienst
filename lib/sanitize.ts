/**
 * ══════════════════════════════════════════════════════════════
 * Phase 16 — Input Sanitization Utilities
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
