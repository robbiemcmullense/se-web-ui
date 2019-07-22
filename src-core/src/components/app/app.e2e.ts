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

  it('should render a div element with an "se-app-body" class', async() => {
    expect(element.querySelector('div')).toHaveClass('se-app-body');
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
