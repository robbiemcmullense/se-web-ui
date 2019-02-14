import { newE2EPage } from '@stencil/core/testing';

describe('ButtonsComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-buttons></se-buttons>');
    const element = await page.find('se-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
