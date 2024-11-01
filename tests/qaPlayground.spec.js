import { test } from "../utils/base.test";

test.beforeEach(async ({ homePage }) => {
  await homePage.gotoHomePage();
  await homePage.isHomePage();
  await homePage.clickMiniWebAppsButton();
  await homePage.isMiniWebApps();
});

test.describe("Dynamic Table Page", () => {
  test("Should Find Spider Man And Assert Real Name", async ({
    homePage,
    dynamicTablePage,
  }) => {
    await homePage.clickLink("dynamic_table_link");
    await dynamicTablePage.isDynamicTablePage();
    const name = await dynamicTablePage.getSpiderManName();
    await dynamicTablePage.isSpiderManName(name);
  });
});

test.describe("Verify Your Account Page", () => {
  test("Should Enter Valid Code And Assert Success Message", async ({
    homePage,
    verifyYourAccountPage,
  }) => {
    await homePage.clickLink("verify_your_account_link");
    await verifyYourAccountPage.isVerifyAccountPage();
    const code = await verifyYourAccountPage.getValidCode();
    await verifyYourAccountPage.enterValidCode(code);
    await verifyYourAccountPage.isSuccessMessageVisible();
  });
});

test.describe("Tags Input Box Page", () => {
  test("Should Add Tag And Assert Presence And Count", async ({
    homePage,
    tagsInputBoxPage,
  }) => {
    await homePage.clickLink("tags_input_box_link");
    await tagsInputBoxPage.isTagsInputBoxPage();
    const tag = "playwright";
    const tagsCount = await tagsInputBoxPage.getTagsCount();
    await tagsInputBoxPage.addTag(tag);
    await tagsInputBoxPage.isTagAdded(tag, tagsCount);
  });

  test("Should Remove Tag And Assert Presence And Count", async ({
    homePage,
    tagsInputBoxPage,
  }) => {
    await homePage.clickLink("tags_input_box_link");
    await tagsInputBoxPage.isTagsInputBoxPage();
    const tag = "javascript";
    const tagsCount = await tagsInputBoxPage.getTagsCount();
    await tagsInputBoxPage.removeTag(tag);
    await tagsInputBoxPage.isTagRemoved(tag, tagsCount);
  });

  test("Should Remove All Tags And Assert Presence And Count", async ({
    homePage,
    tagsInputBoxPage,
  }) => {
    await homePage.clickLink("tags_input_box_link");
    await tagsInputBoxPage.isTagsInputBoxPage();
    const tag = "Playwright";
    await tagsInputBoxPage.removeAll();
    await tagsInputBoxPage.isAllTagsRemoved();
  });
});

// test.describe("Describe", () => {
//   test("Test", async () => {

//   });
// });
