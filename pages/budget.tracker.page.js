const { expect } = require("@playwright/test");

exports.BudgetTrackerPage = class BudgetTrackerPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/budget-tracker/";
    this.page = page;
  }

  async isBudgetTrackerPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }
};