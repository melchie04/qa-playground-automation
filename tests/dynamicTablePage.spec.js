import { test } from "../utils/base.test";

test.describe("Dynamic Table Page", () => {
  test.beforeEach(async ({ homePage, dynamicTablePage }) => {
    await homePage.gotoHomePage();
    await homePage.isHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
    await homePage.clickChallengeCard("dynamic_table");
    await dynamicTablePage.isDynamicTablePage();
  });

  test("Should Find Spider Man And Assert Real Name", async ({
    dynamicTablePage,
  }) => {
    const name = await dynamicTablePage.getSpiderManName();
    await dynamicTablePage.isSpiderManName(name);
  });
});
