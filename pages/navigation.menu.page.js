const { expect } = require("@playwright/test");

exports.NavigationMenuPage = class NavigationMenuPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/links/";
    this.page = page;
  }

  async isNavigationMenuPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};