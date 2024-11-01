const { expect } = require("@playwright/test");

exports.MultiLevelDropdownPage = class MultiLevelDropdownPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/multi-level-dropdown/";
    this.page = page;
  }

  async isMultiLevelDropdownPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};