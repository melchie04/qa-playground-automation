const { expect } = require("@playwright/test");

exports.RightClickContextMenuPage = class RightClickContextMenuPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/context-menu/";
    this.page = page;
  }

  async isRightClickContextMenuPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};