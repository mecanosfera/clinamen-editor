import { ClinamenEditorPage } from './app.po';

describe('clinamen-editor App', function() {
  let page: ClinamenEditorPage;

  beforeEach(() => {
    page = new ClinamenEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
