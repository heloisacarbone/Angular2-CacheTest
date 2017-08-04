import { CachetestPage } from './app.po';

describe('cachetest App', function() {
  let page: CachetestPage;

  beforeEach(() => {
    page = new CachetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
