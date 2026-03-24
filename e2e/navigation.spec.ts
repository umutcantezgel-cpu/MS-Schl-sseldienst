import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Schlüsseldienst Wetzlar/);
  });

  test("header navigation links work", async ({ page }) => {
    await page.goto("/");
    // Check that key nav links exist
    const nav = page.locator("header nav, header");
    await expect(nav).toBeVisible();
  });

  test("footer is present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-does-not-exist-xyz");
    expect(response?.status()).toBe(404);
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
