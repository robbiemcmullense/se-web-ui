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
    await page.setContent('<se-sidenav><se-sidenav-item item-title="one"><div>First</div></se-sidenav-item><se-sidenav-item item-title="two"><div>Second</div></se-sidenav-item></se-sidenav>');
    const firstSidenavElement = await page.find('se-sidenav >>> se-list-item:first-child');
    const secondSidenavElement = await page.find('se-sidenav >>> se-list-item:nth-child(2)');
    
    expect(firstSidenavElement).toHaveClass('selected');
    expect(firstSidenavElement).toEqualHtml('<se-list-item class="hydrated nav selected" item-title="one"></se-list-item>');
    expect(secondSidenavElement).not.toHaveClass('selected');
    expect(secondSidenavElement).toEqualHtml('<se-list-item class="hydrated nav false" item-title="two"></se-list-item>');
  });
});