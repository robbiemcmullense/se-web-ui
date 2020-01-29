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

  it('has a span element with the "small" class by default', async () => {
    let imgElm = await page.find('se-icon-ecostruxure >>> span');
    expect(imgElm).toBeTruthy();
    expect(imgElm).toHaveClass('small');
  });
});

describe('Icon Screenshots', () => {
  it('renders the small and medium sized versions of the Ecostruxure icon', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-icon-ecostruxure size="small"></se-icon-ecostruxure>
      <se-icon-ecostruxure size="medium"></se-icon-ecostruxure>
    `);
    await page.compareScreenshot('Ecostruxure Icons', {fullPage: false});
  });
});