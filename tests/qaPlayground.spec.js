import { test } from "../utils/base.test";

test.describe("QA Playground", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.gotoHomePage();
    await homePage.isHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
  });

  test("Dynamic Table Page: Should Find Spider Man And Assert Real Name", async ({
    homePage,
    dynamicTablePage,
  }) => {
    await homePage.clickLink("dynamic_table_link");
    await dynamicTablePage.isDynamicTablePage();
    const name = await dynamicTablePage.getSpiderManName();
    await dynamicTablePage.isSpiderManName(name);
  });

  test("Test", async () => {
    
  })

  // test("Test", async () => {
    
  // })
});
