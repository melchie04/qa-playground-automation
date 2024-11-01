const { expect } = require("@playwright/test");

exports.FetchingDataPage = class FetchingDataPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/fetch/";
    this.page = page;
  }

  async isFetchingDataPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};