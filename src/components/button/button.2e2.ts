import { newE2EPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-button></se-button>');
    const element = await page.find('se-button');
    expect(element).toHaveClass('hydrated');
  });
});
