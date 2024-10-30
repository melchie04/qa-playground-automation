import { test } from "../utils/base.test";

test.describe("Dynamic Table Page @dynamicTablePage", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.gotoHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.clickLink("dynamic_table_link");
  });

  test("Check that the table data is dynamic", async ({
    homePage,
    dynamicTablePage,
  }) => {
    const expectedTableData = await dynamicTablePage.getTableData();
    await homePage.gotoHomePage();
    await homePage.clickMiniWebAppsButton();
    await homePage.clickLink("dynamic_table_link");
    const actualTableData = await dynamicTablePage.getTableData();
    await dynamicTablePage.isTableDataDynamic(
      expectedTableData,
      actualTableData
    );
  });

  test("Check that Spider-Man name is correct", async ({
    dynamicTablePage,
  }) => {
    const name = await dynamicTablePage.getSpiderManName();
    await dynamicTablePage.isSpiderManName(name);
  });
});
