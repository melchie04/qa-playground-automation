import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { DynamicTablePage } from "../pages/dynamic.table.page";
import { VerifyYourAccountPage } from "../pages/verify.your.account.page";
import { TagsInputBoxPage } from "../pages/tags.input.box.page";
import { MultiLevelDropdownPage } from "../pages/multi.level.dropdown.page";
import { SortableListPage } from "../pages/sortable.list.page";
import { NewTabPage } from "../pages/new.tab.page";
import { PopupWindowPage } from "../pages/popup.window.page";
import { NestedIframePage } from "../pages/nested.iframe.page";
import { ShadowDomPage } from "../pages/shadow.dom.page";
import { StarRatingWidgetPage } from "../pages/star.rating.widget.page";
import { CoveredElementsPage } from "../pages/covered.elements.page";
import { UploadFilePage } from "../pages/upload.file.page";
import { DownloadFilePage } from "../pages/download.file.page";
import { OnboardingModalPage } from "../pages/onboarding.modal.popup.page";
import { BudgetTrackerPage } from "../pages/budget.tracker.page";
import { RightClickContextMenuPage } from "../pages/right.click.context.menu.page";
import { MouseHoverPage } from "../pages/mouse.hover.page";
import { GeolocationPage } from "../pages/geolocation.page";
import { NavigationMenuPage } from "../pages/navigation.menu.page";
import { RedirectChainPage } from "../pages/redirect.chain.page";
import { FetchingDataPage } from "../pages/fetching.data.page";
import { QrCodeGeneratorPage } from "../pages/qr.code.generator.page";
import { ChangeableIframePage } from "../pages/changeable.iframe.page";
import { RatingRangeSliderPage } from "../pages/rating.range.slider.page";

export const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await context.tracing.start({ snapshots: true, screenshots: true });
    await use(context);
    await context.tracing.stop({ path: "./test-results/test_trace.zip" });
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  dynamicTablePage: async ({ page }, use) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await use(dynamicTablePage);
  },
  verifyYourAccountPage: async ({ page }, use) => {
    const verifyYourAccountPage = new VerifyYourAccountPage(page);
    await use(verifyYourAccountPage);
  },
  tagsInputBoxPage: async ({ page }, use) => {
    const tagsInputBoxPage = new TagsInputBoxPage(page);
    await use(tagsInputBoxPage);
  },
  multiLevelDropdownPage: async ({ page }, use) => {
    const multiLevelDropdownPage = new MultiLevelDropdownPage(page);
    await use(multiLevelDropdownPage);
  },
  sortableListPage: async ({ page }, use) => {
    const sortableListPage = new SortableListPage(page);
    await use(sortableListPage);
  },
  newTabPage: async ({ page }, use) => {
    const newTabPage = new NewTabPage(page);
    await use(newTabPage);
  },
  popupWindowPage: async ({ page }, use) => {
    const popupWindowPage = new PopupWindowPage(page);
    await use(popupWindowPage);
  },
  nestedIframePage: async ({ page }, use) => {
    const nestedIframePage = new NestedIframePage(page);
    await use(nestedIframePage);
  },
  shadowDomPage: async ({ page }, use) => {
    const shadowDomPage = new ShadowDomPage(page);
    await use(shadowDomPage);
  },
  starRatingWidgetPage: async ({ page }, use) => {
    const starRatingWidgetPage = new StarRatingWidgetPage(page);
    await use(starRatingWidgetPage);
  },
  coveredElementsPage: async ({ page }, use) => {
    const coveredElementsPage = new CoveredElementsPage(page);
    await use(coveredElementsPage);
  },
  uploadFilePage: async ({ page }, use) => {
    const uploadFilePage = new UploadFilePage(page);
    await use(uploadFilePage);
  },
  downloadFilePage: async ({ page }, use) => {
    const downloadFilePage = new DownloadFilePage(page);
    await use(downloadFilePage);
  },
  onboardingModalPage: async ({ page }, use) => {
    const onboardingModalPage = new OnboardingModalPage(page);
    await use(onboardingModalPage);
  },
  budgetTrackerPage: async ({ page }, use) => {
    const budgetTrackerPage = new BudgetTrackerPage(page);
    await use(budgetTrackerPage);
  },
  rightClickContextMenuPage: async ({ page }, use) => {
    const rightClickContextMenuPage = new RightClickContextMenuPage(page);
    await use(rightClickContextMenuPage);
  },
  mouseHoverPage: async ({ page }, use) => {
    const mouseHoverPage = new MouseHoverPage(page);
    await use(mouseHoverPage);
  },
  geolocationPage: async ({ page }, use) => {
    const geolocationPage = new GeolocationPage(page);
    await use(geolocationPage);
  },
  navigationMenuPage: async ({ page }, use) => {
    const navigationMenuPage = new NavigationMenuPage(page);
    await use(navigationMenuPage);
  },
  redirectChainPage: async ({ page }, use) => {
    const redirectChainPage = new RedirectChainPage(page);
    await use(redirectChainPage);
  },
  fetchingDataPage: async ({ page }, use) => {
    const fetchingDataPage = new FetchingDataPage(page);
    await use(fetchingDataPage);
  },
  qrCodeGeneratorPage: async ({ page }, use) => {
    const qrCodeGeneratorPage = new QrCodeGeneratorPage(page);
    await use(qrCodeGeneratorPage);
  },
  changeableIframePage: async ({ page }, use) => {
    const changeableIframePage = new ChangeableIframePage(page);
    await use(changeableIframePage);
  },
  ratingRangeSliderPage: async ({ page }, use) => {
    const ratingRangeSliderPage = new RatingRangeSliderPage(page);
    await use(ratingRangeSliderPage);
  },
});
