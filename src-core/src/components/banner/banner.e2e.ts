import { newE2EPage } from '@stencil/core/testing';

describe('BannerComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-banner></se-banner>');  
    element = await page.find('se-banner');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});