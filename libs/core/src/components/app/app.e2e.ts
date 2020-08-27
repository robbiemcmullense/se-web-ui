import { newE2EPage } from '@stencil/core/testing';

describe('AppComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-app></se-app>');
    element = await page.find('se-app');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render with an "se-app-body" class', async () => {
    expect(element).toHaveClass('se-app-body');
  });
});

describe('AppComponent with custom div element', () => {
  it('includes "Hello App" text', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-app>Hello App!</se-app>');
    const element = await page.find('se-app');
    expect(element.innerText).toEqual('Hello App!');
  });
});
