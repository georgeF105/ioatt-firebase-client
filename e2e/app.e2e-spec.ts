import { IoattFirebaseClientPage } from './app.po';

describe('ioatt-firebase-client App', () => {
  let page: IoattFirebaseClientPage;

  beforeEach(() => {
    page = new IoattFirebaseClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
