import { newE2EPage } from '@stencil/core/testing';

describe('se-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-skeleton></se-skeleton>');
    const element = await page.find('se-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
