const { expect } = require("@playwright/test");

exports.PopupWindowPage = class PopupWindowPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/popup/";
    this.page = page;
  }

  async isPopupWindowPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};