import { newE2EPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
  let page, element, anchorElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-link url="testURL">test link</se-link>');
    element = await page.find('se-link');
    anchorElement = await page.find('se-link >>> a');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('renders with the href attribute equal to the url property', async() => {
    expect(anchorElement.getAttribute('href')).toEqual('testURL');
  });

  it('renders with a blank target attribute and an external class when the option is set to external', async() => {
    await page.$eval('se-link', (elm: any) => {
      elm.option = 'external';
    });
    await page.waitForChanges();
    expect(anchorElement).toHaveClass('external');
    expect(anchorElement.getAttribute('target')).toEqual('_blank');
  });

  it('renders with a data-disabled attribute when the disabled property is set to true', async() => {
    await page.$eval('se-link', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    expect(anchorElement).toHaveAttribute('data-disabled');
  });
});

describe('Link Screenshots', () => {
  it('tests the internal and external options for the link component', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-link option="internal" url="http://google.com">Link to Google</se-link>
      <se-link option="external" url="http://google.com">Link to Google</se-link>
      `);
    await page.compareScreenshot('multiple links', {fullPage: false});
  });
});