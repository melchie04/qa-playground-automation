const { expect } = require("@playwright/test");

exports.QrCodeGeneratorPage = class QrCodeGeneratorPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/qr-code-generator/";
    this.page = page;
  }

  async isQrCodeGeneratorPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};