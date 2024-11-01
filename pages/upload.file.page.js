const { expect } = require("@playwright/test");

exports.UploadFilePage = class UploadFilePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/upload/";
    this.page = page;
  }

  async isUploadFilePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};