import { describe, it, expect } from "vitest";
import {
  escapeHTML,
  sanitizeInput,
  stripHTML,
  sanitizeSearchParam,
  sanitizeEmail,
} from "@/lib/sanitize";

describe("escapeHTML", () => {
  it("escapes < and >", () => {
    expect(escapeHTML("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#x27;xss&#x27;)&lt;&#x2F;script&gt;"
    );
  });

  it("escapes &", () => {
    expect(escapeHTML("foo & bar")).toBe("foo &amp; bar");
  });

  it("escapes double and single quotes", () => {
    expect(escapeHTML('"hello"')).toContain("&quot;");
    expect(escapeHTML("'hello'")).toContain("&#x27;");
  });

  it("returns safe strings unchanged", () => {
    expect(escapeHTML("Hello World")).toBe("Hello World");
  });
});

describe("sanitizeInput", () => {
  it("trims whitespace", () => {
    expect(sanitizeInput("  hello  ")).toBe("hello");
  });

  it("enforces max length", () => {
    const long = "a".repeat(100);
    expect(sanitizeInput(long, 10)).toHaveLength(10);
  });

  it("returns empty string for non-string input", () => {
    expect(sanitizeInput(null)).toBe("");
    expect(sanitizeInput(undefined)).toBe("");
    expect(sanitizeInput(42)).toBe("");
  });

  it("escapes HTML in user input", () => {
    expect(sanitizeInput("<img onerror=alert(1)>")).not.toContain("<img");
  });
});

describe("stripHTML", () => {
  it("strips all HTML tags", () => {
    expect(stripHTML("<p>Hello <b>World</b></p>")).toBe("Hello World");
  });

  it("handles self-closing tags", () => {
    expect(stripHTML("text<br/>more")).toBe("textmore");
  });

  it("returns plain text unchanged", () => {
    expect(stripHTML("No tags here")).toBe("No tags here");
  });
});

describe("sanitizeSearchParam", () => {
  it("returns empty string for null/undefined", () => {
    expect(sanitizeSearchParam(null)).toBe("");
    expect(sanitizeSearchParam(undefined)).toBe("");
  });

  it("escapes and trims", () => {
    expect(sanitizeSearchParam("  <script>  ")).toContain("&lt;script&gt;");
  });

  it("enforces max length", () => {
    const long = "a".repeat(500);
    expect(sanitizeSearchParam(long, 100)).toHaveLength(100);
  });
});

describe("sanitizeEmail", () => {
  it("accepts valid email", () => {
    expect(sanitizeEmail("test@example.com")).toBe("test@example.com");
  });

  it("lowercases email", () => {
    expect(sanitizeEmail("Test@Example.COM")).toBe("test@example.com");
  });

  it("rejects invalid email", () => {
    expect(sanitizeEmail("not-an-email")).toBe("");
    expect(sanitizeEmail("@missing-local.com")).toBe("");
  });

  it("trims whitespace", () => {
    expect(sanitizeEmail("  user@test.de  ")).toBe("user@test.de");
  });
});
