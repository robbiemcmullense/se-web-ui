import { newE2EPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-checkbox></se-checkbox>');
    const element = await page.find('se-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
