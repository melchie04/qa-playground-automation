const { expect } = require("@playwright/test");

exports.RedirectChainPage = class RedirectChainPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/redirect/";
    this.page = page;
  }

  async isRedirectChainPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};