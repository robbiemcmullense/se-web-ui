import { newE2EPage } from '@stencil/core/testing';

describe('AppComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-app></se-app>');
    const element = await page.find('se-app');
    expect(element).toHaveClass('hydrated');
  });
});
