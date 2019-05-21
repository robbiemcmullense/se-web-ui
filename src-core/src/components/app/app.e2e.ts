import { newE2EPage } from '@stencil/core/testing';

describe('AppComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-app></se-app>');  
    element = await page.find('se-app');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render an "se-app-body" class and slot elements', async() => {
    const renderedHTML = '<se-app class="hydrated"><div class="se-app-body"></div></se-app>'
    expect(element).toEqualHtml(renderedHTML);
  });
});

describe('AppComponent with custom div element', () => {
  it('includes "Hello App" text', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-app><div>Hello App!</div></se-app>');
    let element = await page.find('se-app');
    expect(element.innerText).toEqual('Hello App!');
  });
});