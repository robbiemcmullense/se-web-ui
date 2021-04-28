import { newE2EPage } from '@stencil/core/testing';

describe('se-carousel-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-carousel-pagination></se-carousel-pagination>');
    const element = await page.find('se-carousel-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
