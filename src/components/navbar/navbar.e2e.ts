import { newE2EPage } from '@stencil/core/testing';

describe('NavbarComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-navbar></se-navbar>');
    element = await page.find('se-navbar');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default and two slot elements', async() => {
    const renderedHTML = '<se-navbar class="hydrated"><nav class="primary d-flex-main">'
      + '<div class="nav-left-wrapper"></div>'
      + '<div class="fill-space nav-center-wrapper"></div>'
      + '<div class="nav-right-wrapper"></div></nav></se-navbar>';
    expect(element).toEqualHtml(renderedHTML);
  });
});

describe('NavbarComponent with Custom Slot Elements', () => {
  it('renders with a nav start slot, a div middle slot, and a span end slot', async() => {    
    const page = await newE2EPage();
    await page.setContent('<se-navbar><nav slot="start">My Nav</nav><div id="middle-slot">Middle</div><span slot="end">End Slot</span></se-navbar>');
    const element = await page.find('se-navbar');

    const renderedHTML = '<se-navbar class="hydrated"><nav class="primary d-flex-main">'
      + '<div class="nav-left-wrapper"><nav slot="start">My Nav</nav></div>'
      + '<div class="fill-space nav-center-wrapper"><div id="middle-slot">Middle</div></div>'
      + '<div class="nav-right-wrapper"><span slot="end">End Slot</span></div></nav></se-navbar>';
    expect(element).toEqualHtml(renderedHTML);
  });
});