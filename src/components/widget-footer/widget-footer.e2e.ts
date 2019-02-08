import { newE2EPage } from '@stencil/core/testing';

describe('WidgetFooterComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<se-widget-footer></se-widget-footer>');
    const element = await page.find('se-widget-footer');
    expect(element).toHaveClass('hydrated');
  });
});
