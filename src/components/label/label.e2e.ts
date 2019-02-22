import { newE2EPage } from '@stencil/core/testing';

describe('LabelComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-label></se-label>');
    const element = await page.find('se-label');
    expect(element).toHaveClass('hydrated');
  });
});
