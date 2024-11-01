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

  test("Tags Input Box: Should Add And Remove Tags And Assert It's Presence And Count", async ({
    homePage,
    tagsInputBoxPage,
  }) => {
    await homePage.clickLink("tags_input_box_link");
    await tagsInputBoxPage.isTagsInputBoxPage();
    const tag = "Playwright";
    const tagsCount = await tagsInputBoxPage.getTagsCount();
    await tagsInputBoxPage.addTag(tag);
    await tagsInputBoxPage.isTagAdded(tag, tagsCount);
    await tagsInputBoxPage.removeTag(tag);
    await tagsInputBoxPage.isTagRemoved(tag, tagsCount);
    await tagsInputBoxPage.removeAll();
    await tagsInputBoxPage.isAllTagsRemoved();
  });

  // test("Test", async () => {

  // })
});
