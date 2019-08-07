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


  it('should render an image container element', async() => {
    let imageContainer = await page.find('se-banner-item .image-container');
    expect(imageContainer).toBeTruthy();
  });

  it('should render a div element with the banner section wrapper class', async() => {
    let bannerSection = await page.find('se-banner-item .banner-section-wrapper');
    expect(bannerSection).toBeTruthy();
  });
});