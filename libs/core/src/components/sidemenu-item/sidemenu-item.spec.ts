import { SidemenuItemComponent } from './sidemenu-item';
import { newSpecPage } from '@stencil/core/testing';

describe('SidemenuItemComponent', () => {
  let sidemenuItem;

  beforeEach(() => {
    sidemenuItem = new SidemenuItemComponent();
  });

  it('should build', () => {
    expect(sidemenuItem).toBeTruthy();
  });

  it('should render, with a slot element', async () => {
    const page = await newSpecPage({
      components: [SidemenuItemComponent],
      html: `<se-sidemenu-item></se-sidemenu-item>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should emit the didClick event when the active property changes from true to false', () => {
    sidemenuItem.active = true;
    const eventSpy = jest.spyOn(sidemenuItem.didClick, 'emit');
    sidemenuItem.activeDidChange(); // user clicks on another sidemenu item
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit the didClick event when the active property changes from false to true', () => {
    const eventSpy = jest.spyOn(sidemenuItem.didClick, 'emit');
    sidemenuItem.activeDidChange(); // user clicks on the sidemenu item, and it becomes active
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
