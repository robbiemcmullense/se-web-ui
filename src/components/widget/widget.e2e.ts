import { newE2EPage } from '@stencil/core/testing';

describe('WidgetComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-widget></se-widget>');
    element = await page.find('se-widget');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a flex class by default with no specified height or width', async() => {
    expect(element).toHaveClass('flex');
  });

  it('renders without a flex class because there is a specified width', async() => {
    await page.$eval('se-widget', (elm: any) => {
      elm.width = '300px';
    });
    await page.waitForChanges();
    expect(element).not.toHaveClass('flex');
  });
});
