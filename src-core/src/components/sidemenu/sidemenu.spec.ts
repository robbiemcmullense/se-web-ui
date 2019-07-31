import { SidemenuComponent } from "./sidemenu";

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
});