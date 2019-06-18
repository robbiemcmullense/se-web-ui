import { newE2EPage } from '@stencil/core/testing';

describe('IconEcostruxureComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-icon-ecostruxure></se-icon-ecostruxure>');
    element = await page.find('se-icon-ecostruxure');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('has an img element with the "small" class by default', async () => {
    let imgElm = await page.find('se-icon-ecostruxure >>> img');
    expect(imgElm).toBeTruthy();
    expect(imgElm).toHaveClass('small');
  });
});