const { expect } = require("@playwright/test");

exports.StarRatingWidgetPage = class StarRatingWidgetPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/rating/";
    this.page = page;
  }

  async isStarRatingWidgetPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};