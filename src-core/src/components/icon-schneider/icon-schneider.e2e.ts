import { newE2EPage } from '@stencil/core/testing';

describe('IconSchneiderComponent', () => {
  it('renders', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-icon-schneider></se-icon-schneider>');
    const element = await page.find('se-icon-schneider');
    expect(element).toHaveClass('hydrated');
  });
});

describe('Icon Screenshots', () => {
  it('renders the Schneider Electric icon', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-icon-schneider></se-icon-schneider>
    `);
    await page.compareScreenshot('Schneider Electric Icon', {fullPage: false});
  });
});