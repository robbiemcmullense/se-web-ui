import { newE2EPage } from '@stencil/core/testing';

describe('HeaderComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-header></se-header>');
    const element = await page.find('se-header');
    expect(element).toHaveClass('hydrated');
  });
});
