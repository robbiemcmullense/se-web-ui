import { newE2EPage } from '@stencil/core/testing';

describe('WidgetComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-widget></se-widget>');
    const element = await page.find('se-widget');
    expect(element).toHaveClass('hydrated');
  });
});
