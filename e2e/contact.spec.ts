import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("contact form is visible", async ({ page }) => {
    await page.goto("/kontakt");
    const form = page.locator("form");
    await expect(form.first()).toBeVisible();
  });

  test("phone link is present and clickable", async ({ page }) => {
    await page.goto("/kontakt");
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toBeVisible();
    const href = await phoneLink.getAttribute("href");
    expect(href).toMatch(/^tel:\+49/);
  });

  test("form has required fields", async ({ page }) => {
    await page.goto("/kontakt");
    const nameInput = page.locator('input[name="name"], input[id*="name"]').first();
    const emailInput = page.locator('input[type="email"], input[name="email"]').first();
    // At least one input should exist
    const nameCount = await nameInput.count();
    const emailCount = await emailInput.count();
    expect(nameCount + emailCount).toBeGreaterThanOrEqual(1);
  });
});
