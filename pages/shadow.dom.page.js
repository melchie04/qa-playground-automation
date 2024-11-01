const { expect } = require("@playwright/test");

exports.ShadowDomPage = class ShadowDomPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/shadow-dom/";
    this.page = page;
  }

  async isShadowDomPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};