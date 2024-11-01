const { expect } = require("@playwright/test");

exports.SortableListPage = class SortableListPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/sortable-list/";
    this.page = page;
  }

  async isSortableListPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};