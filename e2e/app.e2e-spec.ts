import { HomeAutoPage } from './app.po';

describe('home-auto App', () => {
  let page: HomeAutoPage;

  beforeEach(() => {
    page = new HomeAutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
