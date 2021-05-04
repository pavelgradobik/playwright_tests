class HMainPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://hotline.ua/');
  }

  async makeSearch(serchParams) {
    await this.page.fill('#searchbox', serchParams);
    await this.page.click('#doSearch');
  }

  async openUsingSecondaryMenu(mainOption, secondaryOption) {
    await this.page.focus(
      `.menu-main-list li[class="menu-main-item ${mainOption}"]`
    );
    await this.page.click(`a=${secondaryOption}`) // Пральні та сушильні машини 
  }
}

module.exports = {
  HMainPage,
};
