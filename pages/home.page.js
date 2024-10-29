const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.url = "https://qaplayground.dev";
    this.miniWebAppsUrl = "https://qaplayground.dev/#apps";
    this.page = page;
    this.mini_web_apps_button = page.getByRole("link", {
      name: "Mini Web Apps",
    });
    this.links = {
      dynamic_table_link: page.getByRole("link", {
        name: "Dynamic Table",
      }),
      verify_your_account_link: page.getByRole("link", {
        name: "Verify Your Account",
      }),
      tags_input_box_link: page.getByRole("link", {
        name: "Tags Input Box",
      }),
      multi_level_dropdown_link: page.getByRole("link", {
        name: "Multi Level Dropdown",
      }),
      sortable_list_link: page.getByRole("link", {
        name: "Sortable List",
      }),
      new_tab_link: page.getByRole("link", {
        name: "New Tab",
      }),
      popup_window_link: page.getByRole("link", {
        name: "Pop-Up Window",
      }),
      nested_frame_link: page.getByRole("link", {
        name: "Nested Iframe",
      }),
      shadow_dom_link: page.getByRole("link", {
        name: "Shadow DOM",
      }),
      stars_rating_widget_link: page.getByRole("link", {
        name: "Stars Rating Widget",
      }),
      covered_elements_link: page.getByRole("link", {
        name: "Covered Elements",
      }),
      upload_file_link: page.getByRole("link", {
        name: "Upload File",
      }),
      download_file_link: page.getByRole("link", {
        name: "Download File",
      }),
      onboarding_modal_popup_link: page.getByRole("link", {
        name: "Onboarding Modal Popup",
      }),
      budget_tracker_link: page.getByRole("link", {
        name: "Budget Tracker",
      }),
      right_click_context_menu_link: page.getByRole("link", {
        name: "Right-Click Context Menu",
      }),
      mouse_hover_link: page.getByRole("link", {
        name: "Mouse Hover",
      }),
      geolocation_link: page.getByRole("link", {
        name: "Geolocation",
      }),
      navigation_menu_link: page.getByRole("link", {
        name: "Navigation Menu",
      }),
      redirect_chain_link: page.getByRole("link", {
        name: "Redirect Chain",
      }),
      fetching_data_link: page.getByRole("link", {
        name: "Fetching Data",
      }),
      qr_code_generator_link: page.getByRole("link", {
        name: "QR Code Generator",
      }),
      changeable_frame_link: page.getByRole("link", {
        name: "Changeable Iframe",
      }),
      rating_range_slider_link: page.getByRole("link", {
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

  async clickLink(linkName) {
    if (this.links[linkName]) {
      await this.links[linkName].click();
    } else {
      throw new Error(`Link ${linkName} not found.`);
    }
  }

  async isHomePage() {
    await expect(this.page).toHaveURL(this.url);
  }

  async isMiniWebApps() {
    await expect(this.page).toHaveURL(this.miniWebAppsUrl);
  }
};
