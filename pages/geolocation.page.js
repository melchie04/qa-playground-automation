const { expect } = require("@playwright/test");

exports.GeolocationPage = class GeolocationPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/geolocation/";
    this.page = page;
  }

  async isGeolocationPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};