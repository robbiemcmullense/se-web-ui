import { SidemenuItemComponent } from "./sidemenu-item";

describe('SidemenuItemComponent', () => {
	let sidemenuItem;

	beforeEach(() => {
		sidemenuItem = new SidemenuItemComponent();
	});

	it('should build', () => {
		expect(sidemenuItem).toBeTruthy();
	});

	it('should be inactive by default', () => {
		expect(sidemenuItem.active).toBeFalsy();
	});
});