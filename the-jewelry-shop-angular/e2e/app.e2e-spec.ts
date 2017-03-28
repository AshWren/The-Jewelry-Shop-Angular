import { TheJewelryShopAngularPage } from './app.po';

describe('the-jewelry-shop-angular App', () => {
  let page: TheJewelryShopAngularPage;

  beforeEach(() => {
    page = new TheJewelryShopAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
