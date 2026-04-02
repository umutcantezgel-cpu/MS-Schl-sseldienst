/**
 * German locale formatting utilities.
 * Used as React components for consistent date, number, and phone formatting.
 */

// ─── Date Formatting ───
const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDate(date: Date | string | number): string {
  return dateFormatter.format(new Date(date));
}

export function formatDateTime(date: Date | string | number): string {
  return dateTimeFormatter.format(new Date(date));
}

// ─── Number Formatting ───
const numberFormatter = new Intl.NumberFormat("de-DE");

const currencyFormatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

// ─── Phone Formatting ───
/**
 * Formats a German phone number for display.
 * Input: any format (06441-8056279, +4964418056279, etc.)
 * Output: +49 (0) 6441 8056279
 */
export function formatPhone(phone: string): string {
  // Strip everything except digits and +
  const digits = phone.replace(/[^\d+]/g, "");

  // If starts with +49, format as international
  if (digits.startsWith("+49")) {
    const local = digits.slice(3);
    if (local.length >= 10) {
      return `+49 (0) ${local.slice(0, 4)} ${local.slice(4)}`;
    }
    return `+49 ${local}`;
  }

  // If starts with 0, format as local
  if (digits.startsWith("0")) {
    const area = digits.slice(0, 5); // e.g. 06441
    const number = digits.slice(5);
    return `${area} ${number}`;
  }

  return phone; // Fallback: return as-is
}

/**
 * Formats a phone number as tel: href (strips formatting).
 */
export function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("0")) {
    return `tel:+49${digits.slice(1)}`;
  }
  if (digits.startsWith("+")) {
    return `tel:${digits}`;
  }
  return `tel:${digits}`;
}

// ─── German Typography ───
/**
 * Converts straight quotes to German typographic quotes.
 * "text" becomes lower-99 + upper-66 style German quotes.
 * 'text' becomes single German quotes.
 */
export function germanQuotes(text: string): string {
  // Double quotes: „ = \u201E, " = \u201C
  let result = text.replace(/"([^"]+)"/g, "\u201E$1\u201C");
  // Single quotes: ‚ = \u201A, ' = \u2018
  result = result.replace(/'([^']+)'/g, "\u201A$1\u2018");
  return result;
}
