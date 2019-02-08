import { newE2EPage } from '@stencil/core/testing';

describe('WidgetContentComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-widget-content></se-widget-content>');
    const element = await page.find('se-widget-content');
    expect(element).toHaveClass('hydrated');
  });
});
