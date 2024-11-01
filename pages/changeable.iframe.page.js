const { expect } = require("@playwright/test");

exports.ChangeableIframePage = class ChangeableIframePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/changing-iframe/";
    this.page = page;
  }

  async isChangeableIframePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};