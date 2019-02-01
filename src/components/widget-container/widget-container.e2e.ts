import { newE2EPage } from '@stencil/core/testing';

describe('WidgetContainerComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-widget-container></se-widget-container>');
    const element = await page.find('se-widget-container');
    expect(element).toHaveClass('hydrated');
  });
});
