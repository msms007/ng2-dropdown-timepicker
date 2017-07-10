import { Ng2DropdownTimepickerPage } from './app.po';

describe('ng2-dropdown-timepicker App', () => {
  let page: Ng2DropdownTimepickerPage;

  beforeEach(() => {
    page = new Ng2DropdownTimepickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
