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
  });

  it('renders with flex class due to no specified with, along with the default alternative color class', async() => {
    expect(element).toHaveClasses(['alternative', 'flex', 'hydrated']);
  });

  it('renders without a flex class because there is a specified width', async() => {
    await page.$eval('se-widget', (elm: any) => {
      elm.width = '300px';
    });
    await page.waitForChanges();
    expect(element).not.toHaveClass('flex');
  });

  it('renders a standard class when the color property is set to standard', async() => {
    await page.$eval('se-widget', (elm: any) => {
      elm.color = 'standard';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('standard');
  });
});
