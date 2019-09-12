import '../mutation-observer-mock';
import { SidemenuComponent } from "./sidemenu";
import { newSpecPage } from '@stencil/core/testing';

describe('SidemenuComponent', () => {
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

	it('should render, with a menu-background class', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],
			html: `<se-sidemenu></se-sidemenu>`,
		});
		expect(page.root.shadowRoot.querySelector('.menu-background')).toBeTruthy();
	});

	it('should render with 1 sidemenu item and a corresponding se-list-item element', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],
			html: `<se-sidemenu><se-sidemenu-item></se-sidemenu-item></se-sidemenu>`,
		});
		expect(page.root.shadowRoot.querySelector('se-list-item')).toBeTruthy();
	});

	it('should render with 1 sidemenu item, along with the menu item content', async() => {
		const page = await newSpecPage({
			components: [SidemenuComponent],

			html: `<se-sidemenu><se-sidemenu-item><div></div></se-sidemenu-item></se-sidemenu>`,
		});
		expect(page.root.querySelector('div')).toBeTruthy();
	});

	it('should add to the items array when a sidemenu item is added, and not be active by default', () => {
		let node = document.createElement('se-sidemenu-item');
		node.setAttribute('item', 'Close');
		sidemenu.el.appendChild(node);
		sidemenu.componentWillLoad();
		expect(sidemenu.items.length).toEqual(1);
		expect(sidemenu.items[0].active).toBeFalsy();
	});

	it('should add to the items array and set it as active when a sidemenu item is added and setActive is called', () => {
		let node = document.createElement('se-sidemenu-item');
		node.setAttribute('item', 'Close');
		sidemenu.el.appendChild(node);
		sidemenu.menuInnerEl = {style: {}};
		sidemenu.componentWillLoad();
		sidemenu.setActive(sidemenu.items[0]);
		setTimeout(() => {
			expect(sidemenu.items[0].active).toBeTruthy();
		});
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

	it('should set the menuInnerEl width to 250px by default', () => {
		const item = 'my item';
		sidemenu.menuInnerEl = {style: {}};
		sidemenu.setActive(item); // user clicks on a sidemenu list item
		expect(sidemenu.menuInnerEl.style.width).toEqual('250px');
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