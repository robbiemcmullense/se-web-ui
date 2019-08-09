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
    let imageContainer = await page.find('se-banner-item >>> .image-container');
    expect(imageContainer).toBeTruthy();
  });

  it('should render a div element with the banner section wrapper class', async() => {
    let bannerSection = await page.find('se-banner-item >>> .banner-section-wrapper');
    expect(bannerSection).toBeTruthy();
  });

  it('should apply the active class on the host element when it is the active item', async() => {
    await page.$eval('se-banner-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('active');
  });

  it('emits the didChange event when a banner item active state changes', async() => {
    const eventSpy = await page.spyOnEvent('didChange');
    await page.$eval('se-banner-item', (elm: any) => {
      elm.active = true;
    });
    await page.waitForChanges();
    expect(eventSpy).toHaveReceivedEvent();
  });
});

describe('BannerItemComponent with block and button components', () => {
  let page, blockElement, buttonElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-banner-item>><se-block id="block"><se-button id="button"></se-button></se-block></se-banner-item>');  
    blockElement = await page.find('se-block#block');
    buttonElement = await page.find('se-button#button');
  });
  
  it('adds a banneritem class to the host block element and the transparent color to its internal markup', async() => {
    expect(blockElement).toBeTruthy();
    expect(blockElement).toHaveClass('banneritem');
    expect(blockElement.shadowRoot.querySelector('.block-body')).toHaveClass('transparent');
  });

  it('adds a banneritem class to the host button element', async() => {
    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toHaveClass('banneritem');
  });
});