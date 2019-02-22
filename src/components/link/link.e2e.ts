import { newE2EPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-link></se-link>');
    const element = await page.find('se-link');
    expect(element).toHaveClass('hydrated');
  });
});
