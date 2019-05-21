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
    const slider = await page.find('se-slider >>> div.slider-container');
    expect(slider).toHaveClasses(['slider-container']);
  });
  
});