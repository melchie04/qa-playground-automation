const { expect } = require("@playwright/test");

exports.RatingRangeSliderPage = class RatingRangeSliderPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/range-slider/";
    this.page = page;
  }

  async isRatingRangeSliderPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};