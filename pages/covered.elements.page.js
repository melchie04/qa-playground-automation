const { expect } = require("@playwright/test");

exports.CoveredElementsPage = class CoveredElementsPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/covered/";
    this.page = page;
  }

  async isCoveredElementsPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};