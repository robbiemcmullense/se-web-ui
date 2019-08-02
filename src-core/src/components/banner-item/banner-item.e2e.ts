import { newE2EPage } from '@stencil/core/testing';

describe('BannerItemComponent', () => {
  let page, element, imageContainer;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-banner-item></se-banner-item>');  
    element = await page.find('se-banner-item');
    imageContainer = await page.find('se-banner-item >>> .image-container');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have the hide class on the host element and the image container div element because it is not active by default', async () => {
    expect(element).toHaveClass('hide');
    expect(imageContainer).toHaveClass('hide');
  });

  it('should render an img element', async() => {
    let image = element.shadowRoot.querySelector('img');
    expect(image).toBeTruthy();
  });

  it('should render a div element with the banner section wrapper class', async() => {
    expect(element.shadowRoot.querySelector('div.banner-section-wrapper')).toBeTruthy();
  });

  it('should remove the hide class from the host element and image container element when active', async() => {
    await page.$eval('se-banner-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(element).not.toHaveClass('hide');
    expect(imageContainer).not.toHaveClass('hide');
  });
});