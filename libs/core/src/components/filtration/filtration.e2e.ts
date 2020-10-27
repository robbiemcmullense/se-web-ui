import { newE2EPage } from '@stencil/core/testing';

describe('filtration', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<filtration></filtration>');
    const element = await page.find('filtration');
    expect(element).toHaveClass('hydrated');
  });
});
