import { Angular2AuthenticationTutorialPage } from './app.po';

describe('angular2-authentication-tutorial App', function() {
  let page: Angular2AuthenticationTutorialPage;

  beforeEach(() => {
    page = new Angular2AuthenticationTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
