import { test } from "../utils/base.test";

test.describe("Home Page @homePage", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.gotoHomePage();
  });

  test("Check the Home page", async ({ homePage }) => {
    await homePage.isHomePage();
  });

  test("Check the Mini Web Apps button", async ({ homePage }) => {
    await homePage.clickMiniWebAppsButton();
    await homePage.isMiniWebApps();
  });

  test("Check the Dynamic Table link", async ({
    homePage,
    dynamicTablePage,
  }) => {
    await homePage.clickMiniWebAppsButton();
    await homePage.clickLink("dynamic_table_link");
    await dynamicTablePage.isDynamicTablePage();
  });

  // test("Validate the Verify Your Account link", async () => {
  //   await homePage.clickLink("verify_your_account_link");
  //   await expect(page).toHaveURL(
  //     "https://qaplayground.dev/apps/verify-account/"
  //   );
  // });

  // test("Validate the Tags Input Box link", async () => {
  //   await homePage.clickLink("tags_input_box_link");
  //   await expect(page).toHaveURL(
  //     "https://qaplayground.dev/apps/tags-input-box/"
  //   );
  // });

  // test("Validate the Multi Level Dropdown link", async () => {
  //   await homePage.clickLink("multi_level_dropdown_link");
  //   await expect(page).toHaveURL(
  //     "https://qaplayground.dev/apps/multi-level-dropdown/"
  //   );
  // });

  // test("Validate the Sortable List link", async () => {
  //   await homePage.clickLink("sortable_list_link");
  //   await expect(page).toHaveURL(
  //     "https://qaplayground.dev/apps/sortable-list/"
  //   );
  // });

  // test("Validate the New Tab link", async () => {
  //   await homePage.clickLink("new_tab_link");
  //   await expect(page).toHaveURL("https://qaplayground.dev/apps/new-tab/");
  // });

  // test("Validate the Pop-Up Window link", async () => {
  //   await homePage.clickLink("popup_window_link");
  //   await expect(page).toHaveURL("https://qaplayground.dev/apps/popup/");
  // });

  // test("Validate the Nested Iframe link", async () => {
  //   await homePage.clickLink("nested_frame_link");
  //   await expect(page).toHaveURL("https://qaplayground.dev/apps/iframe/");
  // });

  // test("Validate the Shadow DOM link", async () => {
  //   await homePage.clickLink("shadow_dom_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/shadow-dom/"
  //   );
  // });

  // test("Validate the Stars Rating Widget link", async () => {
  //   await homePage.clickLink("stars_rating_widget_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/rating/"
  //   );
  // });

  // test("Validate the Covered Elements link", async () => {
  //   await homePage.clickLink("covered_elements_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/covered/"
  //   );
  // });

  // test("Validate the Upload File link", async () => {
  //   await homePage.clickLink("upload_file_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/upload/"
  //   );
  // });

  // test("Validate the Download File link", async () => {
  //   await homePage.clickLink("download_file_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/download/"
  //   );
  // });

  // test("Validate the Onboarding Modal Popup link", async () => {
  //   await homePage.clickLink("onboarding_modal_popup_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/onboarding-modal/"
  //   );
  // });

  // test("Validate the Budget Tracker link", async () => {
  //   await homePage.clickLink("budget_tracker_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/budget-tracker/"
  //   );
  // });

  // test("Validate the Right-Click Context Menu link", async () => {
  //   await homePage.clickLink("right_click_context_menu_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/context-menu/"
  //   );
  // });

  // test("Validate the Mouse Hover link", async () => {
  //   await homePage.clickLink("mouse_hover_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/mouse-hover/"
  //   );
  // });

  // test("Validate the Geolocation link", async () => {
  //   await homePage.clickLink("geolocation_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/geolocation/"
  //   );
  // });

  // test("Validate the Navigation Menu link", async () => {
  //   await homePage.clickLink("navigation_menu_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/links/"
  //   );
  // });

  // test("Validate the Redirect Chain link", async () => {
  //   await homePage.clickLink("redirect_chain_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/redirect/"
  //   );
  // });

  // test("Validate the Fetching Data link", async () => {
  //   await homePage.clickLink("fetching_data_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/fetch/"
  //   );
  // });

  // test("Validate the QR Code Generator link", async () => {
  //   await homePage.clickLink("qr_code_generator_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/qr-code-generator/"
  //   );
  // });

  // test("Validate the Changeable Iframe link", async () => {
  //   await homePage.clickLink("changeable_frame_link");
  //   await expect(homePage.page).toHaveURL(
  //     "https://qaplayground.dev/apps/changing-iframe/"
  //   );
  // });

  // test("Validate the Rating Range Slider link", async () => {
  //   await homePage.clickLink("rating_range_slider_link");
  //   await expect(page).toHaveURL("https://qaplayground.dev/apps/range-slider/");
  // });
});
