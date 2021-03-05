import { BreadcrumbItemComponent } from './breadcrumb-item';
import { newSpecPage } from '@stencil/core/testing';

describe('BreadcrumbItemComponent', () => {
  let breadcrumbItem;

  beforeEach(() => {
    breadcrumbItem = new BreadcrumbItemComponent();
  });

  it('should build', () => {
    expect(breadcrumbItem).toBeTruthy();
  });

  it('should not be selected by default', () => {
    expect(breadcrumbItem.selected).toBeFalsy();
  });

  it('should not have an initially defined value', () => {
    expect(breadcrumbItem.value).toBeUndefined();
  });

  it('should not have an initially defined href', () => {
    expect(breadcrumbItem.href).toBeUndefined();
  });

  it('should render, with an se-icon element present by default', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItemComponent],
      html: `<se-breadcrumb-item></se-breadcrumb-item>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });

  it('should render without an icon because it is the last item', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItemComponent],
      html: `<se-breadcrumb-item is-last="true"></se-breadcrumb-item>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeFalsy();
  });

  it('should add microdata attributes if `withMicrodata` is set to true', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItemComponent],
      html: `<se-breadcrumb-item with-microdata="true" position="1"></se-breadcrumb>`,
    });
    expect(page.root.getAttribute('itemprop')).toEqual('itemListElement');
    expect(page.root.getAttribute('itemtype')).toEqual(
      'https://schema.org/ListItem'
    );
    expect(page.root.getAttribute('itemscope')).toEqual('');

    const linkEl = page.root.shadowRoot.querySelector('.breadcrumb-item a');
    expect(linkEl.getAttribute('itemprop')).toEqual('item');
    expect(linkEl.firstElementChild.getAttribute('itemprop')).toEqual('name');

    const metaEl = page.root.shadowRoot.querySelector('.breadcrumb-item meta');
    expect(metaEl.getAttribute('itemprop')).toEqual('position');
    expect(metaEl.getAttribute('content')).toEqual('1');
  });

  it('should not have any microdata attributes if `withMicrodata` is not set', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItemComponent],
      html: `<se-breadcrumb-item></se-breadcrumb>`,
    });

    expect(
      page.root.shadowRoot.querySelector('[itemprop], [itemscope], [itemtype]')
    ).toEqual(null);
    expect(page.root.matches('[itemprop]')).toEqual(false);
    expect(page.root.matches('[itemtype]')).toEqual(false);
    expect(page.root.matches('[itemscope]')).toEqual(false);
  });
});
