import { newE2EPage } from '@stencil/core/testing';

describe('FormFieldComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-form-field></se-form-field>');
    const element = await page.find('se-form-field');
    expect(element).toHaveClass('hydrated');
  });
});
