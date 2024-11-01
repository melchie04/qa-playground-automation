const { expect } = require("@playwright/test");
const { count } = require("console");

exports.TagsInputBoxPage = class TagsInputBoxPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/tags-input-box/";
    this.page = page;
    this.tagsInput = page.getByRole("textbox");
    this.tags = page.locator("//ul//li");
    this.removeAllButton = page.getByRole("button", { name: "Remove All" });
  }

  async isTagsInputBoxPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }

  async getTagsCount() {
    await this.page.waitForTimeout(1000);
    return await this.tags.count();
  }

  async addTag(tag) {
    await this.tagsInput.fill(tag);
    await this.page.waitForTimeout(1000);
    await this.tagsInput.press("Enter");
  }

  async isTagAdded(tag, tagsCount) {
    await expect(this.tags.filter({ hasText: tag }).locator("i")).toBeVisible();
    const expected = tagsCount + 1;
    console.log("Expected: Added Count " + expected);
    const actual = await this.tags.count();
    console.log("Actual: Added Count " + actual);
    await expect(actual).toEqual(expected);
  }

  async removeTag(tag) {
    await this.tags.filter({ hasText: tag }).locator("i").click();
  }

  async isTagRemoved(tag, tagsCount) {
    await expect(
      this.tags.filter({ hasText: tag }).locator("i")
    ).not.toBeVisible();
    const expected = tagsCount;
    console.log("Expected: Removed Count " + expected);
    const actual = await this.tags.count();
    console.log("Actual: Removed Count " + actual);
    await expect(actual).toEqual(expected);
  }

  async removeAll() {
    await this.removeAllButton.click();
  }

  async isAllTagsRemoved() {
    const expected = 0;
    console.log("Expected: Removed Count " + expected);
    const actual = await this.tags.count();
    console.log("Actual: Removed Count " + actual);
    await expect(actual).toEqual(expected);
  }
};
