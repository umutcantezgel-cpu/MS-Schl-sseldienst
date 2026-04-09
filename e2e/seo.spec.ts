import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /.+/);
  });

  test("homepage has canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /^https?:\/\/.+/);
  });

  test("homepage has JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("homepage has Open Graph tags", async ({ page }) => {
    await page.goto("/");
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });

  test("all pages have lang=de on html tag", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "de");
  });

  test("all pages have a single h1", async ({ page }) => {
    await page.goto("/");
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);
  });
});
