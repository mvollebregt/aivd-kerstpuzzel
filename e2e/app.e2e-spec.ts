import { AivdPage } from './app.po';

describe('aivd App', function() {
  let page: AivdPage;

  beforeEach(() => {
    page = new AivdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
