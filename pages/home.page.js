const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.url = "https://qaplayground.dev";
    this.miniWebAppsUrl = "https://qaplayground.dev/#apps";
    this.page = page;
    this.mini_web_apps_button = page.getByRole("link", {
      name: "Mini Web Apps",
    });
    this.challengeCards = {
      dynamic_table: page.getByRole("link", {
        name: "Dynamic Table",
      }),
      verify_your_account: page.getByRole("link", {
        name: "Verify Your Account",
      }),
      tags_input_box: page.getByRole("link", {
        name: "Tags Input Box",
      }),
      multi_level_dropdown: page.getByRole("link", {
        name: "Multi Level Dropdown",
      }),
      sortable_list: page.getByRole("link", {
        name: "Sortable List",
      }),
      new_tab: page.getByRole("link", {
        name: "New Tab",
      }),
      popup_window: page.getByRole("link", {
        name: "Pop-Up Window",
      }),
      nested_frame: page.getByRole("link", {
        name: "Nested Iframe",
      }),
      shadow_dom: page.getByRole("link", {
        name: "Shadow DOM",
      }),
      stars_rating_widget: page.getByRole("link", {
        name: "Stars Rating Widget",
      }),
      covered_elements: page.getByRole("link", {
        name: "Covered Elements",
      }),
      upload_file: page.getByRole("link", {
        name: "Upload File",
      }),
      download_file: page.getByRole("link", {
        name: "Download File",
      }),
      onboarding_modal_popup: page.getByRole("link", {
        name: "Onboarding Modal Popup",
      }),
      budget_tracker: page.getByRole("link", {
        name: "Budget Tracker",
      }),
      right_click_context_menu: page.getByRole("link", {
        name: "Right-Click Context Menu",
      }),
      mouse_hover: page.getByRole("link", {
        name: "Mouse Hover",
      }),
      geolocation: page.getByRole("link", {
        name: "Geolocation",
      }),
      navigation_menu: page.getByRole("link", {
        name: "Navigation Menu",
      }),
      redirect_chain: page.getByRole("link", {
        name: "Redirect Chain",
      }),
      fetching_data: page.getByRole("link", {
        name: "Fetching Data",
      }),
      qr_code_generator: page.getByRole("link", {
        name: "QR Code Generator",
      }),
      changeable_frame: page.getByRole("link", {
        name: "Changeable Iframe",
      }),
      rating_range_slider: page.getByRole("link", {
        name: "Rating Range Slider",
      }),
    };
  }

  async gotoHomePage() {
    await this.page.goto(this.url);
  }

  async clickMiniWebAppsButton() {
    await this.mini_web_apps_button.click();
  }

  async clickChallengeCard(cardName) {
    if (this.challengeCards[cardName]) {
      await this.challengeCards[cardName].click();
    } else {
      throw new Error(`Card ${cardName} not found.`);
    }
  }

  async isHomePage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }

  async isMiniWebApps() {
    console.log("Expected: " + this.miniWebAppsUrl);
    await expect.soft(this.page).toHaveURL(this.miniWebAppsUrl);
  }
};
