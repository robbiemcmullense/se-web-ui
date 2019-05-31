import { newE2EPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-header app-title="Test Application"></se-header>');
  });

  it('renders', async() => {
    element = await page.find('se-header');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('sets the application title to 2 separate span elements within the h1 element', async() => {
    const titleFirstName = await page.find('se-header >>> h1 span:first-child');
    const titleLastName = await page.find('se-header >>> h1 span.light');
    expect(titleFirstName.innerText).toEqual('Test');
    expect(titleLastName.innerHTML).toEqual(' Application');
  });

  it('should render a se-icon-ecostruxure element because the domain is ecostruxure by default', async() => {
    const iconElm = await page.find('se-header >>> se-icon-ecostruxure');
    expect(iconElm).toBeTruthy();
  });
});

describe('Header Component with Sidenav Child', () => {
  it('should render a se-icon element with the burger_menu text', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-header><se-sidemenu><se-sidemenu-item></se-sidemenu-item></se-sidemenu></se-header>');
    const element = await page.find('se-header >>> se-icon');
    expect(element).toBeTruthy();
    expect(element.innerText).toEqual('burger_menu');
  });
});
