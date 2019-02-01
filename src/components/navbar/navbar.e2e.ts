import { newE2EPage } from '@stencil/core/testing';

describe('NavbarComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-navbar></se-navbar>');
    const element = await page.find('se-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
