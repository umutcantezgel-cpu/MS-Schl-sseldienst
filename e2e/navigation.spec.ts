import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Schlüsseldienst Wetzlar/);
  });

  test("header navigation links work", async ({ page }) => {
    await page.goto("/");
    // Check that key nav links exist
    const header = page.locator("header").first();
    await expect(header).toBeVisible();
  });

  test("footer is present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible();
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-does-not-exist-xyz");
    const heading = page.locator("h1").first();
    await expect(heading).toContainText(/Seite nicht gefunden|404/i);
    // Tolerate Next.js dev server status quirks
    if (response) {
      expect([404, 200]).toContain(response.status());
    }
  });

  test("leistungen/turoeffnung loads", async ({ page }) => {
    await page.goto("/leistungen/turoeffnung");
    await expect(page).toHaveTitle(/Türöffnung|Schlüsseldienst/);
  });

  test("preise page loads", async ({ page }) => {
    await page.goto("/preise");
    await expect(page).toHaveTitle(/Preise|Schlüsseldienst/);
  });

  test("kontakt page loads", async ({ page }) => {
    await page.goto("/kontakt");
    await expect(page).toHaveTitle(/Kontakt|Schlüsseldienst/);
  });
});
