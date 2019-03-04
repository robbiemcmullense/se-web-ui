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

  it('should render 2 sidenav items, with the first item selected by default', async() => {
    await page.setContent('<se-sidenav><se-sidenav-item text="one"><div>First</div></se-sidenav-item><se-sidenav-item text="two"><div>Second</div></se-sidenav-item></se-sidenav>');
    const firstSidenavElement = await page.find('se-sidenav >>> se-list-item:first-child');
    const secondSidenavElement = await page.find('se-sidenav >>> se-list-item:nth-child(2)');

    expect(firstSidenavElement).toHaveClass('selected');
    expect(firstSidenavElement).toEqualHtml('<se-list-item class="hydrated nav selected" text="one"></se-list-item>');
    expect(secondSidenavElement).not.toHaveClass('selected');
    expect(secondSidenavElement).toEqualHtml('<se-list-item class="hydrated nav false" text="two"></se-list-item>');
  });

  it('should open the sidenav when the toggle method is called', async() => {
    await page.setContent('<se-sidenav></se-sidenav>');
    const element = await page.find('se-sidenav');
    await element.callMethod('toggle');
    await page.waitForChanges();
    expect(element).toHaveClass('show-menu');
  });
});
