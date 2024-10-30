import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { DynamicTablePage } from "../pages/dynamic.table.page";
import { VerifyYourAccountPage } from "../pages/verify.your.account.page";

export const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await context.tracing.start({ snapshots: true, screenshots: true });
    await use(context);
    await context.tracing.stop({ path: "./test-results/test_trace.zip" });
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  dynamicTablePage: async ({ page }, use) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await use(dynamicTablePage);
  },
  verifyYourAccountPage: async ({ page }, use) => {
    const verifyYourAccountPage = new VerifyYourAccountPage(page);
    await use(verifyYourAccountPage);
  },
});
