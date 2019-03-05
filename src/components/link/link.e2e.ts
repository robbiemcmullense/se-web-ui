import { newE2EPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-link url="testURL">test link</se-link>');
    element = await page.find('se-link');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with an href equal to the url property', async() => {
    expect(element.shadowRoot).toEqualHtml('<a href="testURL" target=""><slot></slot></a>')
  });

  it('renders with a blank target attribute when the type is set to external', async() => {
    await page.$eval('se-link', (elm: any) => {
      elm.type = 'external';
    });
    await page.waitForChanges();
    expect(element.shadowRoot).toEqualHtml('<a class="external" href="testURL" target="_blank"><slot></slot></a>')
  });

  it('renders with a data-disabled attribute when the disabled property is set to true', async() => {
    await page.$eval('se-link', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    expect(element.shadowRoot).toEqualHtml('<a data-disabled href="testURL" target="" data-disabled><slot></slot></a>')
  });
});
