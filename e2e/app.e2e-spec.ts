import { netprojectTemplatePage } from './app.po';

describe('netproject App', function() {
  let page: netprojectTemplatePage;

  beforeEach(() => {
    page = new netprojectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
