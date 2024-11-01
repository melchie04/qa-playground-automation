const { expect } = require("@playwright/test");

exports.NewTabPage = class TagsInputBoxPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/new-tab/";
    this.page = page;
  }

  async isTagsInputBoxPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};