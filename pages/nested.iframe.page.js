const { expect } = require("@playwright/test");

exports.NestedIframePage = class NestedIframePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/iframe/";
    this.page = page;
  }

  async isNestedIframePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};