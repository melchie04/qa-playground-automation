const { expect } = require("@playwright/test");

exports.MouseHoverPage = class MouseHoverPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/mouse-hover/";
    this.page = page;
  }

  async isMouseHoverPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};