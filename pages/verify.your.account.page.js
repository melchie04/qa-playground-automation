const { expect } = require("@playwright/test");

exports.VerifyYourAccountPage = class VerifyYourAccountPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/verify-account/";
    this.page = page;
  }

  async isVerifyAccountPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};