const { expect } = require("@playwright/test");

exports.DownloadFilePage = class DownloadFilePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/download/";
    this.page = page;
  }

  async isDownloadFilePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};