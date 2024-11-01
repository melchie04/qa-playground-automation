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

  test("Verify Your Account: Should Enter Valid Code And Assert Success Message", async ({
    homePage,
    verifyYourAccountPage,
  }) => {
    await homePage.clickLink("verify_your_account_link");
    await verifyYourAccountPage.isVerifyAccountPage();
    const code = await verifyYourAccountPage.getValidCode();
    await verifyYourAccountPage.enterValidCode(code);
    await verifyYourAccountPage.isSuccessMessageVisible();
  });

  test.only("Tags Input Box: ", async () => {

  })

  // test("Test", async () => {

  // })
});
