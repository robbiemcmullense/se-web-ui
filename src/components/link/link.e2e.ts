import { newE2EPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-link></se-link>');

    const element = await page.find('se-link');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with text equal to the link property', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-link link="test link"></se-link>');
    
    const element = await page.find('se-link >>> a');
    expect(element.innerText).toEqual('test link');
  });

  it('renders with an href equal to the url property', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-link url="testURL"></se-link>');
    
    const element = await page.find('se-link');
    expect(element.shadowRoot).toEqualHtml('<a href="testURL" target=""></a>')
  });

  it('renders with a blank target attribute when the type is set to external', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-link url="testURL" type="external"></se-link>');
    
    const element = await page.find('se-link');
    expect(element.shadowRoot).toEqualHtml('<a class="external" href="testURL" target="_blank"></a>')
  });
});
