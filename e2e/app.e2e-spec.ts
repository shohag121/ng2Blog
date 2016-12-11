import { Shohag'sBlogPage } from './app.po';

describe('shohag's-blog App', function() {
  let page: Shohag'sBlogPage;

  beforeEach(() => {
    page = new Shohag'sBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
