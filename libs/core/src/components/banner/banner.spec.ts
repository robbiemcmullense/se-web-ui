import '../../../mock/mutation-observer-mock';
import { BannerComponent } from './banner';
import { newSpecPage } from '@stencil/core/testing';

describe('BannerComponent', () => {
  let banner, eventSpy;

  beforeEach(() => {
    banner = new BannerComponent();
  });

  it('should build', () => {
    expect(banner).toBeTruthy();
  });

  it('should have an empty items array by default', () => {
    expect(banner.items.length).toEqual(0);
  });

  it('should not have a selected item by default', () => {
    expect(banner.selectedItem).toBeUndefined();
  });

  it('should not have a selected item index by default', () => {
    expect(banner.selectedItemIndex).toBeUndefined();
  });

  it('should have a duration property equal to 6000 by default', () => {
    expect(banner.duration).toEqual(6000);
  });

  // need to see if we can update Jest to include MutationObserver
  it('should render with a div element with a banner-items class', async () => {
    const page = await newSpecPage({
      components: [BannerComponent],
      html: `<se-banner></se-banner>`,
    });
    expect(page.root.shadowRoot.querySelector('.banner-items')).toBeTruthy();
  });

  // need to see if we can update Jest to include MutationObserver
  it('should render with two banner item elements, as well as elements with previous-indicator and next-indicator classes', async () => {
    const page = await newSpecPage({
      components: [BannerComponent],
      html: `<se-banner><se-banner-item></se-banner-item><se-banner-item></se-banner-item></se-banner>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.previous.indicator')
    ).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.next.indicator')).toBeTruthy();
  });

  it('should call the watchItemList function when componentWillLoad is executed', () => {
    eventSpy = jest.spyOn(banner, 'watchItemList');
    banner.componentWillLoad();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should set the selectedItem and selectedItemIndex to undefined when disconnectedCallback is called', () => {
    banner.selectedItem = 'selected item';
    banner.selectedItemIndex = 2;
    banner.disconnectedCallback();
    expect(banner.selectedItem).toBeUndefined();
    expect(banner.selectedItemIndex).toBeUndefined();
  });
});
