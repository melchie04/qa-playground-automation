const { expect } = require("@playwright/test");

exports.DynamicTablePage = class DynamicTablePage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/dynamic-table/";
    this.page = page;
    this.table = page.locator("//table");
    this.rows = page.locator("//table//tbody//tr");
  }

  async getTableData() {
    await this.page.waitForTimeout(1000);
    let rowCount = await this.rows.count();
    const tableData = [];

    for (let i = 0; i < rowCount; i++) {
      const row = await this.rows.nth(i);
      const superhero = await row
        .locator("td:nth-child(1) div.text-sm.font-medium")
        .textContent();
      const email = await row
        .locator("td:nth-child(1) div.text-sm.text-gray-500")
        .textContent();
      const status = await row.locator("td:nth-child(2) span").textContent();
      const realName = await row.locator("td:nth-child(3) span").textContent();

      tableData.push({
        superhero: superhero.trim(),
        email: email.trim(),
        status: status.trim(),
        realName: realName.trim(),
      });
    }

    return tableData;
  }

  async getSpiderManName() {
    const row = await this.rows.locator(":scope", { hasText: "Spider-Man" });
    return row.locator("td:nth-child(3) span").textContent();
  }

  async isDynamicTablePage() {
    console.log("Expected: " + this.url);
    await expect(this.page).toHaveURL(this.url);
  }

  async isTableDataDynamic(expectedTableData, actualTableData) {
    console.log("Expected: " + JSON.stringify(expectedTableData, null, 2));
    console.log("Actual: " + JSON.stringify(actualTableData, null, 2));
    await expect(actualTableData).not.toEqual(expectedTableData);
  }

  async isSpiderManName(name) {
    const expected = "Peter Parker";
    console.log("Expected: " + expected);
    console.log("Actual: " + name);
    await expect(name).toBe(expected);
  }
};
