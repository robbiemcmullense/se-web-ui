import { newE2EPage } from '@stencil/core/testing';

describe('AppComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-app></se-app>');
    
    const element = await page.find('se-app');
    expect(element).toHaveClass('hydrated');
  });

  it('includes "Hello App" text', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-app><div>Hello App!</div></se-app>');

    const element = await page.find('se-app');
    expect(element.innerText).toEqual('Hello App!');
  });

  it('should render an "se-app-body" class and slot elements', async () => {
    const page = await newE2EPage();
    const renderedHTML = '<se-app class="hydrated"><div class="se-app-body"></div></se-app>'
    await page.setContent('<se-app></se-app>');

    const element = await page.find('se-app');
    expect(element).toEqualHtml(renderedHTML);
  });
});
