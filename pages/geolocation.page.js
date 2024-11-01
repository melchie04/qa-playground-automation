const { expect } = require("@playwright/test");

exports.TagsInputBoxPage = class TagsInputBoxPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/tags-input-box/";
    this.page = page;
  }

  async isTagsInputBoxPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};