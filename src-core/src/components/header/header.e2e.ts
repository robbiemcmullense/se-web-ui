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
    expect(titleLastName.innerHTML).toEqual('&nbsp;Application');
  });
});
