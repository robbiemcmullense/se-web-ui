import '../mutation-observer-mock';
import { SidemenuComponent } from './sidemenu';

describe('SidemenuComponent', () => {
  let sidemenu;

  beforeEach(() => {
    sidemenu = new SidemenuComponent();
  });

  it('should build', () => {
    expect(sidemenu).toBeTruthy();
  });

  it('should have a label property equal to "Menu" by default', () => {
    expect(sidemenu.label).toEqual('Menu');
  });

  it('should be closed by default', () => {
    expect(sidemenu.open).toBeFalsy();
  });

  it('should not have any items by default', () => {
    expect(sidemenu.items.length).toEqual(0);
  });

  it('should return a true value for noSelectedItem by default', () => {
    expect(sidemenu.noSelectedItem()).toBeTruthy();
  });

  it('should add to the items array when a sidemenu item is added, and not be active by default', () => {
    const node = document.createElement('se-sidemenu-item');
    node.setAttribute('item', 'Close');
    sidemenu.el.appendChild(node);
    sidemenu.componentWillLoad();
    expect(sidemenu.items.length).toEqual(1);
    expect(sidemenu.selectedItem).toBeUndefined();
  });

  it('should add to the items array and set it as active when a sidemenu item is added and setActive is called', () => {
    const node = document.createElement('se-sidemenu-item');
    node.setAttribute('item', 'Close');
    sidemenu.el.appendChild(node);
    sidemenu.componentWillLoad();
    sidemenu.setActive(sidemenu.items[0]);
    setTimeout(() => {
      // It takes 100 ms to get the item to be changed to active=true
      expect(sidemenu.items[0].active).toBeTruthy();
    }, 200);
  });

  it('should call the watchItemList and setItemsArray functions when the component is about to load', () => {
    const listSpy = jest.spyOn(sidemenu, 'watchItemList');
    const arraySpy = jest.spyOn(sidemenu, 'setItemsArray');
    sidemenu.componentWillLoad();
    expect(listSpy).toHaveBeenCalled();
    expect(arraySpy).toHaveBeenCalled();
  });

  it('should set the selected item to undefined and return the items length to zero when disconnectedCallback is called', () => {
    sidemenu.items = ['first item', 'second item'];
    sidemenu.selectedItem = 'selected item';
    sidemenu.observer = { disconnect: jest.fn() };
    sidemenu.disconnectedCallback();
    expect(sidemenu.selectedItem).toBeUndefined();
    expect(sidemenu.items.length).toEqual(0);
  });

  it('should disconnect the mutation observer when disconnectedCallback is called', () => {
    sidemenu.observer = { disconnect: jest.fn() };
    const eventSpy = jest.spyOn(sidemenu.observer, 'disconnect');
    sidemenu.disconnectedCallback();
    expect(eventSpy).toHaveBeenCalled();
  });
});

describe('SidemenuComponent toggle method', () => {
  let sidemenu;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  beforeEach(() => {
    sidemenu = new SidemenuComponent();
    sidemenu.menuInnerEl = {
      classList: {
        add: (value: any) => value,
        remove: (value: any) => value,
      },
    };
    sidemenu.backdropEl = {
      classList: {
        add: (value: any) => value,
        remove: (value: any) => value,
      },
    };
  });
  /* eslint-enable @typescript-eslint/no-explicit-any */

  it('should open the sidemenu when the toggle method is called', () => {
    const eventSpyEmit = jest.spyOn(sidemenu.toggled, 'emit');
    sidemenu.toggle();
    expect(sidemenu.open).toBeTruthy();
    expect(eventSpyEmit).toHaveBeenCalledWith({ state: 'open' });
  });

  it('should call the addAnimation method when the toggle method is called and the sidemenu is closed', () => {
    const eventSpy = jest.spyOn(sidemenu, 'addAnimation');
    const eventSpyEmit = jest.spyOn(sidemenu.toggled, 'emit');

    // to open
    sidemenu.toggle();
    // to close
    sidemenu.toggle(); // user clicks on "X" button

    expect(eventSpy).toHaveBeenCalled();
    expect(eventSpyEmit).toHaveBeenCalledWith({ state: 'closed' });
  });

  it('should add and remove classes to the menu and backdrop elements when the toggle method is called', () => {
    const menuAddSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'add');
    const menuRemoveSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'remove');
    const backdropAddSpy = jest.spyOn(sidemenu.backdropEl.classList, 'add');
    const backdropRemoveSpy = jest.spyOn(
      sidemenu.backdropEl.classList,
      'remove'
    );
    sidemenu.toggle();
    expect(menuAddSpy).toHaveBeenCalled();
    expect(backdropAddSpy).toHaveBeenCalled();
    setTimeout(() => {
      expect(menuRemoveSpy).toHaveBeenCalled();
      expect(backdropRemoveSpy).toHaveBeenCalled();
    }, 300);
  });

  it('should call the removeAnimation method when the toggle method is called and the sidemenu is open', () => {
    sidemenu.open = true;
    const eventSpy = jest.spyOn(sidemenu, 'removeAnimation');
    sidemenu.toggle();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should add and remove classes to the menu and backdrop elements when the toggle method is called', () => {
    const menuAddSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'add');
    const menuRemoveSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'remove');
    const backdropAddSpy = jest.spyOn(sidemenu.backdropEl.classList, 'add');
    const backdropRemoveSpy = jest.spyOn(
      sidemenu.backdropEl.classList,
      'remove'
    );
    sidemenu.toggle();
    expect(menuAddSpy).toHaveBeenCalled();
    expect(backdropAddSpy).toHaveBeenCalled();
    setTimeout(() => {
      expect(menuRemoveSpy).toHaveBeenCalled();
      expect(backdropRemoveSpy).toHaveBeenCalled();
    }, 300);
  });

  it('should open the menu to a specified menu item and mark it as active', () => {
    const node1 = document.createElement('se-sidemenu-item');
    const node2 = document.createElement('se-sidemenu-item');
    node1.setAttribute('item', 'foo');
    node2.setAttribute('item', 'bar');
    node2.setAttribute('id', 'bar-id');
    sidemenu.el.appendChild(node1);
    sidemenu.el.appendChild(node2);
    sidemenu.componentWillLoad();
    sidemenu.toggle('foo');
    setTimeout(() => {
      expect(sidemenu.selectedItem.getAttribute('item')).toEqual('foo');
      sidemenu.toggle('bar-id');
      setTimeout(() => {
        expect(sidemenu.selectedItem.getAttribute('item')).toEqual('bar');
      }, 200);
    }, 200);
  });

  it('should use default behavior if given item does not exist', () => {
    const node1 = document.createElement('se-sidemenu-item');
    const node2 = document.createElement('se-sidemenu-item');
    node1.setAttribute('item', 'foo');
    node2.setAttribute('item', 'bar');
    sidemenu.el.appendChild(node1);
    sidemenu.el.appendChild(node2);
    sidemenu.componentWillLoad();
    sidemenu.toggle('baz');
    setTimeout(() => {
      expect(sidemenu.selectedItem).toBeUndefined();
    }, 200);
  });

  it('should set the selectedItem without a child element count to undefined when the toggle method is called and the sidemenu is open', () => {
    sidemenu.open = true;
    sidemenu.selectedItem = 'selected item';
    sidemenu.toggle();
    expect(sidemenu.selectedItem).toBeUndefined();
  });
});
