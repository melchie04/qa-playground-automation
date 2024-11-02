import { test } from "../utils/base.test";

test.describe("Multi Level Dropdown Page", () => {
  test.beforeEach(async ({ homePage, multiLevelDropdownPage }) => {
    await homePage.gotoHomePage();
    await homePage.isHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
    await homePage.clickChallengeCard("multi_level_dropdown");
    await multiLevelDropdownPage.isMultiLevelDropdownPage();
    await multiLevelDropdownPage.clickMenu();
  });

  test("Should Open Menu And Assert Menu Items And Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.isUrlHave("menu");
    await multiLevelDropdownPage.isMenuOptionVisible("my_profile");
    await multiLevelDropdownPage.isMenuOptionVisible("settings");
    await multiLevelDropdownPage.isMenuOptionVisible("animals");
  });

  test("Should Navigate To My Profile And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("my_profile");
    await multiLevelDropdownPage.isUrlHave("my_profile");
  });

  test("Should Navigate To Settings And Assert Menu Items And Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("settings");
    await multiLevelDropdownPage.isUrlHave("settings");
    await multiLevelDropdownPage.isSubMenuOptionVisible("html");
    await multiLevelDropdownPage.isSubMenuOptionVisible("css");
    await multiLevelDropdownPage.isSubMenuOptionVisible("javascript");
    await multiLevelDropdownPage.isSubMenuOptionVisible("awesome");
  });

  test("Should Navigate To HTML And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("settings");
    await multiLevelDropdownPage.clickSubMenuOption("html");
    await multiLevelDropdownPage.isUrlHave("html");
  });

  test("Should Navigate To CSS And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("settings");
    await multiLevelDropdownPage.clickSubMenuOption("css");
    await multiLevelDropdownPage.isUrlHave("css");
  });

  test("Should Navigate To JavaScript And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("settings");
    await multiLevelDropdownPage.clickSubMenuOption("javascript");
    await multiLevelDropdownPage.isUrlHave("javascript");
  });

  test("Should Navigate To Awesome And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("settings");
    await multiLevelDropdownPage.clickSubMenuOption("awesome");
    await multiLevelDropdownPage.isUrlHave("awesome");
  });

  test("Should Navigate To Animals And Assert Menu Items And Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("animals");
    await multiLevelDropdownPage.isUrlHave("animals");
    await multiLevelDropdownPage.isSubMenuOptionVisible("kangaroo");
    await multiLevelDropdownPage.isSubMenuOptionVisible("frog");
    await multiLevelDropdownPage.isSubMenuOptionVisible("horse");
    await multiLevelDropdownPage.isSubMenuOptionVisible("hedgehog");
  });

  test("Should Navigate To Kangaroo And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("animals");
    await multiLevelDropdownPage.clickSubMenuOption("kangaroo");
    await multiLevelDropdownPage.isUrlHave("kangaroo");
  });

  test("Should Navigate To Frog And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("animals");
    await multiLevelDropdownPage.clickSubMenuOption("frog");
    await multiLevelDropdownPage.isUrlHave("frog");
  });

  test("Should Navigate To Horse And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("animals");
    await multiLevelDropdownPage.clickSubMenuOption("horse");
    await multiLevelDropdownPage.isUrlHave("horse");
  });

  test("Should Navigate To Hedgehog And Assert Link", async ({
    multiLevelDropdownPage,
  }) => {
    await multiLevelDropdownPage.clickMenuOption("animals");
    await multiLevelDropdownPage.clickSubMenuOption("hedgehog");
    await multiLevelDropdownPage.isUrlHave("hedgehog");
  });
});
