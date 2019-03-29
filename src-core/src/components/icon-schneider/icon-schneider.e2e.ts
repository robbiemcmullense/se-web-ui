import { newE2EPage } from '@stencil/core/testing';

describe('IconSchneiderComponent', () => {
  it('renders', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-icon-schneider></se-icon-schneider>');
    const element = await page.find('se-icon-schneider');
    expect(element).toHaveClass('hydrated');
  });
});
