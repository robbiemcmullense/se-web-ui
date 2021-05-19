import '../../../mock/mutation-observer-mock';
import { BreadcrumbComponent } from './breadcrumb';
import { newSpecPage } from '@stencil/core/testing';

describe('BreadcrumbComponent', () => {
  let breadcrumb;

  beforeEach(() => {
    breadcrumb = new BreadcrumbComponent();
  });

  it('should build', () => {
    expect(breadcrumb).toBeTruthy();
  });

  it('should not have any items by default', () => {
    expect(breadcrumb.items.length).toEqual(0);
  });

  it('should have a defined element property', () => {
    expect(breadcrumb.el).toBeDefined();
  });

  it('should render with a nav element', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbComponent],
      html: `<se-breadcrumb></se-breadcrumb>`,
    });
    expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
  });

  it('should render with two breadcrumb items', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbComponent],
      html: `<se-breadcrumb><se-breadcrumb-item>First</se-breadcrumb-item><se-breadcrumb-item>Second</se-breadcrumb-item></se-breadcrumb>`,
    });
    expect(page.root.querySelectorAll('se-breadcrumb-item').length).toEqual(2);
  });

  it('should call the watchItemList function when componentWillLoad is executed', () => {
    const eventSpy = jest.spyOn(breadcrumb, 'watchItemList');
    breadcrumb.componentWillLoad();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should disconnect the mutation observer when componentWillUnload is called', () => {
    breadcrumb.observer = { disconnect: jest.fn() };
    const eventSpy = jest.spyOn(breadcrumb.observer, 'disconnect');
    breadcrumb.componentWillUnload();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should add to the items array when the component loads', () => {
    const node = document.createElement('se-breadcrumb-item');
    const textNode = document.createTextNode('New');
    node.appendChild(textNode);
    breadcrumb.el.appendChild(node);
    breadcrumb.componentWillLoad();
    expect(breadcrumb.items.length).toEqual(1);
  });

  it('should add two items array when the component loads, setting isLast=false to the first item and isLast=true for the second', () => {
    const nodeOne = document.createElement('se-breadcrumb-item');
    const firstTextNode = document.createTextNode('New 1');
    nodeOne.appendChild(firstTextNode);
    const nodeTwo = document.createElement('se-breadcrumb-item');
    const secondTextNode = document.createTextNode('New 2');
    nodeOne.appendChild(secondTextNode);
    breadcrumb.el.appendChild(nodeOne);
    breadcrumb.el.appendChild(nodeTwo);
    breadcrumb.componentWillLoad();
    expect(breadcrumb.items.length).toEqual(2);
    expect(breadcrumb.items[0].isLast).toBeFalsy();
    expect(breadcrumb.items[1].isLast).toBeTruthy();
  });

  it('should allow aria-label on navigation landmark to be configured', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbComponent],
      html: `<se-breadcrumb></se-breadcrumb>`,
    });
    const nav = page.root.shadowRoot.querySelector('nav');
    expect(nav.getAttribute('aria-label')).toEqual('breadcrumb');

    page.root.ariaLabel = 'breadcrumb translation';
    await page.waitForChanges();
    expect(nav.getAttribute('aria-label')).toEqual('breadcrumb translation');
  });

  it('should add microdata attributes to itself and children', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbComponent],
      html: `<se-breadcrumb>
              <se-breadcrumb-item href="/">Home</se-breadcrumb-item>
            </se-breadcrumb>`,
    });

    expect(
      page.root.shadowRoot.querySelector('ol').getAttribute('itemscope')
    ).toEqual('');
    expect(
      page.root.shadowRoot.querySelector('ol').getAttribute('itemtype')
    ).toEqual('https://schema.org/BreadcrumbList');

    const children = page.root.querySelectorAll('se-breadcrumb-item');
    children.forEach((node, index) => {
      expect(node.getAttribute('position')).toEqual(index + 1 + '');
    });
  });

  it('should keep microdata attributes up to date', async () => {
    const spy = jest.spyOn(breadcrumb, 'updateChildMicrodataAttributes');
    breadcrumb.componentWillLoad();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
