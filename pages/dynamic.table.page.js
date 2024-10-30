const { expect } = require("@playwright/test");

exports.DynamicTablePage = class DynamicTablePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/dynamic-table/";
    this.page = page;
    this.rows = page.locator("//table//tbody//tr");
  }

  async isDynamicTablePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }

  async getSpiderManName() {
    const row = await this.rows.locator(":scope", { hasText: "Spider-Man" });
    return row.locator("td:nth-child(3) span").textContent();
  }

  async isSpiderManName(name) {
    const expected = "Peter Parker";
    console.log("Expected: " + expected);
    console.log("Actual: " + name);
    await expect(name).toBe(expected);
  }
};
