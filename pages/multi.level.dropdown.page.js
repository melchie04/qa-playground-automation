const { expect } = require("@playwright/test");

exports.MultiLevelDropdownPage = class MultiLevelDropdownPage {
  constructor(page) {
    this.url = "https://qaplayground.dev/apps/multi-level-dropdown/";
    this.page = page;
    this.menuButton = page.locator("#root").getByRole("link").nth(3);
    this.menuOptions = {
      my_profile: page.getByRole("link", { name: "My Profile" }),
      settings: page.getByRole("link", { name: "Settings" }),
      animals: page.getByRole("link", { name: "Animals" }),
    };
    this.subMenuOptions = {
      html: page.getByRole("link", { name: "HTML" }),
      css: page.getByRole("link", { name: "CSS" }),
      javascript: page.getByRole("link", { name: "JavaScript" }),
      awesome: page.getByRole("link", { name: "Awesome!" }),
      kangaroo: page.getByRole("link", { name: "Kangaroo" }),
      frog: page.getByRole("link", { name: "Frog" }),
      horse: page.getByRole("link", { name: "Horse" }),
      hedgehog: page.getByRole("link", { name: "Hedgehog" }),
    };
    this.links = {
      menu: "https://qaplayground.dev/apps/multi-level-dropdown/#home",
      my_profile:
        "https://qaplayground.dev/apps/multi-level-dropdown/#undefined",
      settings: "https://qaplayground.dev/apps/multi-level-dropdown/#settings",
      animals: "https://qaplayground.dev/apps/multi-level-dropdown/#animals",
      html: "https://qaplayground.dev/apps/multi-level-dropdown/#!HTML",
      css: "https://qaplayground.dev/apps/multi-level-dropdown/#!CSS",
      javascript:
        "https://qaplayground.dev/apps/multi-level-dropdown/#!JavaScript",
      awesome: "https://qaplayground.dev/apps/multi-level-dropdown/#!Awesome",
      kangaroo: "https://qaplayground.dev/apps/multi-level-dropdown/#!Kangaroo",
      frog: "https://qaplayground.dev/apps/multi-level-dropdown/#!Frog",
      horse: "https://qaplayground.dev/apps/multi-level-dropdown/#!Horse",
      hedgehog: "https://qaplayground.dev/apps/multi-level-dropdown/#!Hedgehog",
    };
  }

  async isMultiLevelDropdownPage() {
    console.log("Expected: " + this.url);
    await expect.soft(this.page).toHaveURL(this.url);
  }

  async clickMenu() {
    await this.menuButton.click();
  }

  async clickMenuOption(menuName) {
    if (this.menuOptions[menuName]) {
      await this.menuOptions[menuName].click();
    } else {
      throw new Error(`Menu Option ${menuName} not found.`);
    }
  }

  async clickSubMenuOption(subMenuName) {
    if (this.subMenuOptions[subMenuName]) {
      await this.subMenuOptions[subMenuName].click();
    } else {
      throw new Error(`Sub-menu Option ${subMenuName} not found.`);
    }
  }

  async isMenuOptionVisible(menuName) {
    if (this.menuOptions[menuName]) {
      await expect(this.menuOptions[menuName]).toBeVisible();
    } else {
      throw new Error(`Menu Option ${menuName} not found.`);
    }
  }

  async isSubMenuOptionVisible(subMenuName) {
    if (this.subMenuOptions[subMenuName]) {
      await expect(this.subMenuOptions[subMenuName]).toBeVisible();
    } else {
      throw new Error(`Sub-menu Option ${subMenuName} not found.`);
    }
  }

  async isUrlHave(urlName) {
    if (this.links[urlName]) {
      console.log("Expected: " + this.links[urlName]);
      await expect(this.page).toHaveURL(this.links[urlName]);
    } else {
      throw new Error(`Link ${urlName} not found.`);
    }
  }
};
