import { FabItemComponent } from './fab-item';
import { newSpecPage } from '@stencil/core/testing';

describe('FabItemComponent', () => {
  let fabItem;

  beforeEach(() => {
    fabItem = new FabItemComponent();
  });

  it('should build', () => {
    expect(fabItem).toBeTruthy();
  });

  it('should render with the se-fab-item class', async() => {
    const page = await newSpecPage({
			components: [FabItemComponent],
			html: `<se-fab-item></se-fab-item>`,
		});
		expect(page.root.shadowRoot.querySelector('.se-fab-item')).toBeTruthy();
  });

  it('should emit the didClick event when clicking on the fab item', () => {
    const eventSpy = jest.spyOn(fabItem.didClick, 'emit');
    fabItem.toggle(); // user clicks on a fab item
    expect(eventSpy).toHaveBeenCalled();
  })
});