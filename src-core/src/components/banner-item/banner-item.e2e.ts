import { newE2EPage } from '@stencil/core/testing';

describe('BannerItemComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-banner-item></se-banner-item>');  
    element = await page.find('se-banner-item');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});