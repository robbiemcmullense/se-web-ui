import { newE2EPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-link link="test link" url="testURL"></se-link>');
    element = await page.find('se-link');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with an href equal to the url property', async() => {
    expect(element.shadowRoot).toEqualHtml('<a href="testURL" target="">test link</a>')
  });

  it('renders with a blank target attribute when the type is set to external', async() => {
    await page.$eval('se-link', (elm: any) => {
      elm.type = 'external';
    });
    await page.waitForChanges();
    expect(element.shadowRoot).toEqualHtml('<a class="external" href="testURL" target="_blank">test link</a>')
  });
});

describe('LinkComponent internal DOM', () => {
  it('renders with text equal to the link property', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-link link="test link"></se-link>');   
    const element = await page.find('se-link >>> a');
    expect(element.innerText).toEqual('test link');
  });
});