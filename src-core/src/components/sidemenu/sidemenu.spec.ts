import '../mutation-observer-mock';
import { SidemenuComponent } from "./sidemenu";
// import { newSpecPage } from '@stencil/core/testing';

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

	it('should open the sidemenu when the toggle method is called', () => {
		sidemenu.toggle();
		expect(sidemenu.open).toBeTruthy();
	});

	it('should not have any items by default', () => {
		expect(sidemenu.items.length).toEqual(0);
	});

	it('should return a true value for noSelectedItem by default', () => {
		expect(sidemenu.noSelectedItem()).toBeTruthy();
	})


	it('should add to the items array when a sidemenu item is added, and not be active by default', () => {
		let node = document.createElement('se-sidemenu-item');
		node.setAttribute('item', 'Close');
    sidemenu.el.appendChild(node);
		sidemenu.componentWillLoad();
		expect(sidemenu.items.length).toEqual(1);
		expect(sidemenu.selectedItem).toBeUndefined();
	});

	it('should add to the items array and set it as active when a sidemenu item is added and setActive is called', () => {
		let node = document.createElement('se-sidemenu-item');
		node.setAttribute('item', 'Close');
    sidemenu.el.appendChild(node);
		sidemenu.componentWillLoad();
		sidemenu.setActive(sidemenu.items[0]);
		setTimeout(() => {
      // It take 100 ms to get the item to be changed to active=true
			expect(sidemenu.items[0].active).toBeTruthy();
		}, 200);
  });
});

describe('SidemenuComponent with spy', () => {
  let sidemenu;

  beforeEach(() => {
    sidemenu = new SidemenuComponent();
    sidemenu.menuInnerEl = {classList: {
      add: (value: any) => { return value;},
      remove: (value: any) => { return value;}
    }};
    sidemenu.backdropEl = {classList: {
      add: (value: any) => { return value;},
      remove: (value: any) => { return value;}
    }};
  });

	it('should call the watchItemList function when the component loads', () => {
		const eventSpy = jest.spyOn(sidemenu, 'watchItemList');
		sidemenu.componentWillLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should assign a mutation observer for Edge browsers when componentDidLoad is called', () => {
		sidemenu.observer = {observe: jest.fn()};
		const eventSpy = jest.spyOn(sidemenu.observer, 'observe');
		Object.defineProperty(window.navigator, 'userAgent', {value: 'Edge'});
		sidemenu.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should call the addAnimation method when the toggle method is called and the sidemenu is closed', () => {
		const eventSpy = jest.spyOn(sidemenu, 'addAnimation');
		sidemenu.toggle(); // user clicks on "X" button
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should add and remove classes to the menu and backdrop elements when the toggle method is called', () => {
		const menuAddSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'add');
		const menuRemoveSpy = jest.spyOn(sidemenu.menuInnerEl.classList, 'remove');
		const backdropAddSpy = jest.spyOn(sidemenu.backdropEl.classList, 'add');
		const backdropRemoveSpy = jest.spyOn(sidemenu.backdropEl.classList, 'remove');
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
		const backdropRemoveSpy = jest.spyOn(sidemenu.backdropEl.classList, 'remove');
		sidemenu.toggle();
		expect(menuAddSpy).toHaveBeenCalled();
		expect(backdropAddSpy).toHaveBeenCalled();
		setTimeout(() => {
			expect(menuRemoveSpy).toHaveBeenCalled();
			expect(backdropRemoveSpy).toHaveBeenCalled();
		}, 300);
	});

  it('should open the menu to a specified menu item and mark it as active', () => {
    let node1 = document.createElement('se-sidemenu-item');
    let node2 = document.createElement('se-sidemenu-item');
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
    let node1 = document.createElement('se-sidemenu-item');
    let node2 = document.createElement('se-sidemenu-item');
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

	it('should set the selected item to undefined and return the items length to zero when componentDidUnload is called', () => {
		sidemenu.items = ['first item', 'second item'];
		sidemenu.selectedItem = 'selected item';
		sidemenu.observer = {disconnect: jest.fn()};
		sidemenu.componentDidUnload();
		expect(sidemenu.selectedItem).toBeUndefined();
		expect(sidemenu.items.length).toEqual(0);
	});

	it('should disconnect the mutation observer when componentDidUnload is called', () => {
		sidemenu.observer = {disconnect: jest.fn()};
		const eventSpy = jest.spyOn(sidemenu.observer, 'disconnect');
		sidemenu.componentDidUnload();
		expect(eventSpy).toHaveBeenCalled();
	});
});
