import { AngularTourOfHeroesVTwoPage } from './app.po';

describe('angular-tour-of-heroes-v-two App', () => {
  let page: AngularTourOfHeroesVTwoPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesVTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
