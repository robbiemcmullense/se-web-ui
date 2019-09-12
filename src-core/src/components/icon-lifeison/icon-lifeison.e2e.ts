import { newE2EPage } from '@stencil/core/testing';

describe('IconLifeIsOnComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-icon-lifeison></se-icon-lifeison>');
    element = await page.find('se-icon-lifeison');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
  });

  it('has an img element with the "inherited" class by default', async () => {
    let imgElm = await page.find('se-icon-lifeison >>> img');
    expect(imgElm).toBeTruthy();
    expect(imgElm).toHaveClass('inherited');
  });
});

describe('Icon Screenshots', () => {
  it('renders the small and medium sized versions of the Life Is On icon', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-icon-lifeison color="standard"></se-icon-lifeison>
      <se-icon-lifeison color="inherited"></se-icon-lifeison>
    `);
    await page.compareScreenshot('Life Is On Icons', {fullPage: false});
  });
});