import { newE2EPage } from '@stencil/core/testing';

describe('se-carousel-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-carousel-item></se-carousel-item>');
    const element = await page.find('se-carousel-item');
    expect(element).toHaveClass('hydrated');
  });
});
