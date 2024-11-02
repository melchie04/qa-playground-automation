import { test } from "../utils/base.test";

test.describe("Verify Your Account Page", () => {
  test.beforeEach(async ({ homePage, verifyYourAccountPage }) => {
    await homePage.gotoHomePage();
    await homePage.isHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
    await homePage.clickChallengeCard("verify_your_account");
    await verifyYourAccountPage.isVerifyAccountPage();
  });

  test("Should Enter Valid Code And Assert Success Message", async ({
    verifyYourAccountPage,
  }) => {
    const code = await verifyYourAccountPage.getValidCode();
    await verifyYourAccountPage.enterValidCode(code);
    await verifyYourAccountPage.isSuccessMessageVisible();
  });
});
