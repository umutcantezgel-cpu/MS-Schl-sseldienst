import { describe, it, expect } from "vitest";
import {
  formatDate,
  formatDateTime,
  formatNumber,
  formatCurrency,
  formatPhone,
  formatPhoneHref,
  germanQuotes,
} from "@/lib/formatters";

describe("formatDate", () => {
  it("formats a Date object to DD.MM.YYYY", () => {
    const result = formatDate(new Date(2026, 2, 23)); // Month is 0-indexed
    expect(result).toBe("23.03.2026");
  });

  it("formats a string date", () => {
    const result = formatDate(new Date(2025, 0, 15)); // Jan 15, 2025
    expect(result).toBe("15.01.2025");
  });
});

describe("formatDateTime", () => {
  it("includes time in output", () => {
    const result = formatDateTime(new Date("2026-03-23T14:30:00"));
    expect(result).toContain("23.03.2026");
  });
});

describe("formatNumber", () => {
  it("formats with German locale separator", () => {
    expect(formatNumber(1234)).toBe("1.234");
  });

  it("handles zero", () => {
    expect(formatNumber(0)).toBe("0");
  });
});

describe("formatCurrency", () => {
  it("formats as EUR with German locale", () => {
    const result = formatCurrency(99);
    expect(result).toContain("99");
    expect(result).toContain("€");
  });

  it("handles decimal values", () => {
    const result = formatCurrency(149.5);
    expect(result).toContain("149,5");
    expect(result).toContain("€");
  });
});

describe("formatPhone", () => {
  it("formats international +49 number", () => {
    const result = formatPhone("+4964418056279");
    expect(result).toContain("+49");
    expect(result).toContain("6441");
  });

  it("formats local 0-prefixed number", () => {
    const result = formatPhone("06441-8056279");
    expect(result).toContain("06441");
  });

  it("returns unparseable input as-is", () => {
    expect(formatPhone("abc")).toBe("abc");
  });
});

describe("formatPhoneHref", () => {
  it("converts 0-prefix to +49 tel: link", () => {
    expect(formatPhoneHref("06441-8056279")).toBe("tel:+4964418056279");
  });

  it("keeps +49 prefix as tel: link", () => {
    expect(formatPhoneHref("+4964418056279")).toBe("tel:+4964418056279");
  });
});

describe("germanQuotes", () => {
  it("converts double quotes to German typographic quotes", () => {
    const result = germanQuotes('"Hallo Welt"');
    expect(result).toContain("\u201E"); // „
    expect(result).toContain("\u201C"); // "
  });

  it("converts single quotes to German typographic quotes", () => {
    const result = germanQuotes("'Test'");
    expect(result).toContain("\u201A"); // ‚
    expect(result).toContain("\u2018"); // '
  });
});
