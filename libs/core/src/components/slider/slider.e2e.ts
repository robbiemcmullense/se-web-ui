import { newE2EPage } from '@stencil/core/testing';

 describe('SliderComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-slider></se-slider>');
    element = await page.find('se-slider');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('adds a "slider-element" class to a div element', async() => {
    await page.waitForChanges();
    const slider = await page.find('se-slider >>> .slider-container');
    expect(slider).toHaveClasses(['slider-container']);
  });
});

describe('Slider with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-slider id="my-id"></se-slider>');

    const element = await page.find('se-slider');
    expect(element.shadowRoot.querySelector('input')).toHaveAttribute('id');
    expect(element.shadowRoot.querySelector('input').getAttribute('id')).toEqual('wc-my-id');
  });
});

describe('Slider Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders with a value of zero by default', async() => {
    await page.setContent('<se-slider></se-slider>');
    await page.compareScreenshot('slider at zero', {fullPage: false});
  });
});