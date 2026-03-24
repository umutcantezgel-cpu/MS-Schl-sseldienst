import { test, expect } from "@playwright/test";

test.describe("Performance & Quality", () => {
  test("no console errors on homepage", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/", { waitUntil: "networkidle" });
    expect(errors).toHaveLength(0);
  });

  test("all images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `Image ${i} missing alt`).not.toBeNull();
    }
  });

  test("skip nav link exists for accessibility", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });

  test("main content landmark exists", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("main#main-content");
    await expect(main).toBeVisible();
  });

  test("health endpoint returns ok", async ({ page }) => {
    const response = await page.goto("/api/health");
    expect(response?.status()).toBe(200);
    const body = await response?.json();
    expect(body.status).toBe("ok");
  });
});
