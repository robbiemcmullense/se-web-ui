import { BreadcrumbItemComponent } from './breadcrumb-item';
import { newSpecPage } from '@stencil/core/testing';

describe('BreadcrumbItemComponent', () => {

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

  it('should add microdata attributes', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbItemComponent],
      html: `<se-breadcrumb-item position="1"></se-breadcrumb>`,
    });
    expect(page.root.getAttribute('itemprop')).toEqual('itemListElement');
    expect(page.root.getAttribute('itemtype')).toEqual(
      'https://schema.org/ListItem'
    );

    const linkEl = page.root.shadowRoot.querySelector('.breadcrumb-item a');
    expect(linkEl.getAttribute('itemprop')).toEqual('item');
    expect(linkEl.firstElementChild.getAttribute('itemprop')).toEqual('name');

    const metaEl = page.root.shadowRoot.querySelector('.breadcrumb-item meta');
    expect(metaEl.getAttribute('itemprop')).toEqual('position');
    expect(metaEl.getAttribute('content')).toEqual('1');
  });
});
