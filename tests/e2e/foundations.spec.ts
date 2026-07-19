import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("foundation homepage labels placeholder data", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-frame-options"]).toBe("DENY");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Plan smarter",
  );
  await expect(page.getByLabel("Data status")).toContainText(
    "not official GuildRun data",
  );
  const mobileNavigation = page.locator('nav[aria-label="Mobile navigation"]');
  await expect(mobileNavigation).toBeAttached();

  if ((page.viewportSize()?.width ?? 0) < 1024) {
    await expect(mobileNavigation).toBeVisible();
  }

  const accessibilityScan = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(accessibilityScan.violations).toEqual([]);
});
