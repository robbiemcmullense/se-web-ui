import { newE2EPage } from '@stencil/core/testing';

describe('SidenavComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders', async() => {
    await page.setContent('<se-sidenav></se-sidenav>');
    const element = await page.find('se-sidenav');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should open the sidenav when the toggle method is called', async() => {
    await page.setContent('<se-sidenav></se-sidenav>');
    const element = await page.find('se-sidenav');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});
