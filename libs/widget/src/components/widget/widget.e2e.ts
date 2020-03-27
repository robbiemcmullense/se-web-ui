import { newE2EPage } from '@stencil/core/testing';

describe('AboutComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-widget></se-widget>');
    element = await page.find('se-widget');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

});
