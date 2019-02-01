import { newE2EPage } from '@stencil/core/testing';

describe('WidgetHeaderComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-widget-header></se-widget-header>');
    const element = await page.find('se-widget-header');
    expect(element).toHaveClass('hydrated');
  });
});
