import { expect, test } from "@playwright/test";

test("foundation homepage labels placeholder data", async ({ page }) => {
  await page.goto("/");
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
});
