import { newE2EPage } from '@stencil/core/testing';

describe('BreadcrumbItemComponent', () => {
  let page, element, listItemElement, linkElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-breadcrumb-item value="Click Me!"></se-breadcrumb-item>');
    element = await page.find('se-breadcrumb-item');
    listItemElement = await page.find('se-breadcrumb-item >>> li');
    linkElement = await page.find('se-breadcrumb-item >>> a');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have an aria-current value of false, and text in the anchor element equal to the value property', async() => {
    expect(linkElement.innerText).toEqual('Click Me!');
  });

  it('should have an href attribute on the anchor element equal to the defined href value on the host element', async() => {
    await page.$eval('se-breadcrumb-item', (elm: any) => {
      elm.href = '#home';
    });
    await page.waitForChanges();
    expect(linkElement.getAttribute('href')).toBeTruthy();
    expect(linkElement.getAttribute('href')).toEqual('#home');
  });

  it('should have the selected class on the host element when the isLast property is set to true, and an aria-current property equal to page', async() => {
    await page.$eval('se-breadcrumb-item', (elm: any) => {
      elm.isLast = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('selected');
    expect(listItemElement.getAttribute('aria-current')).toEqual('page');
  });
});