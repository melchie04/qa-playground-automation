const { expect } = require("@playwright/test");

exports.DynamicTablePage = class DynamicTablePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/dynamic-table/";
    this.page = page;
  }

  async isDynamicTablePage() {
    await expect(this.page).toHaveURL(this.url);
  }
};
