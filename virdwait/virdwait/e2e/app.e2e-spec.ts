import { VirdwaitPage } from './app.po';

describe('virdwait App', () => {
  let page: VirdwaitPage;

  beforeEach(() => {
    page = new VirdwaitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
