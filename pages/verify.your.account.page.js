const { expect } = require("@playwright/test");

exports.VerifyYourAccountPage = class VerifyYourAccountPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/verify-account/";
    this.page = page;
    this.confirmationCode = page.locator(".info");
    this.inputElements = page.locator(".code");
    this.successMessage = page.getByText("Success");
  }

  async isVerifyAccountPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }

  async getValidCode() {
    const confirmationCodeText = await this.confirmationCode.textContent();
    const code = confirmationCodeText
      ?.replace("The confirmation code is ", "")
      .trim()
      .split("-");
    return code;
  }

  async enterValidCode(code) {
    console.log("Valid Code: " + code);
    for (let i = 0; i < code.length; i++) {
      await this.inputElements.nth(i).type(code[i], { delay: 1000 });
    }
  }

  async isSuccessMessageVisible() {
    await expect(this.successMessage).toBeVisible();
  }
};
