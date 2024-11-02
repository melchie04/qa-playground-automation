import { test } from "../utils/base.test";

test.describe("Tags Input Box Page", () => {
  test.beforeEach(async ({ homePage, tagsInputBoxPage }) => {
    await homePage.gotoHomePage();
    await homePage.isHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
    await homePage.clickChallengeCard("tags_input_box");
    await tagsInputBoxPage.isTagsInputBoxPage();
  });

  test("Should Add Tag And Assert Presence And Count", async ({
    tagsInputBoxPage,
  }) => {
    const tag = "playwright";
    const tagsCount = await tagsInputBoxPage.getTagsCount();
    await tagsInputBoxPage.addTag(tag);
    await tagsInputBoxPage.isTagAdded(tag, tagsCount);
  });

  test("Should Remove Tag And Assert Presence And Count", async ({
    tagsInputBoxPage,
  }) => {
    const tag = "javascript";
    const tagsCount = await tagsInputBoxPage.getTagsCount();
    await tagsInputBoxPage.removeTag(tag);
    await tagsInputBoxPage.isTagRemoved(tag, tagsCount);
  });

  test("Should Remove All Tags And Assert Presence And Count", async ({
    tagsInputBoxPage,
  }) => {
    await tagsInputBoxPage.removeAll();
    await tagsInputBoxPage.isAllTagsRemoved();
  });
});
