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
}

module.exports = {
  HMainPage,
};
