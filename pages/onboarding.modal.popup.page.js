const { expect } = require("@playwright/test");

exports.OnboardingModalPage = class OnboardingModalPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/onboarding-modal/";
    this.page = page;
  }

  async isOnboardingModalPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};