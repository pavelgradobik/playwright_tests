const { chromium } = require('playwright');
const { HMainPage } = require('../framework');
describe('Hotline', function () {
  let browser = null;
  beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
  });

  afterEach(async () => {
    await browser.close();
  });

  it('can be opened', async function () {
    const context = await browser.newContext();
    const page = await context.newPage();
    const mainHotlinePage = new HMainPage(page);

    mainHotlinePage.open();

    mainHotlinePage.makeSearch('Electrolux');
  });

  it('can open selected item submenu', async function () {
    const context = await browser.newContext();
    const page = await context.newPage();
    const mainHotlinePage = new HMainPage(page);

    mainHotlinePage.openUsingSecondaryMenu('bt', 'Пральні та сушильні машини');


    
  });
});
