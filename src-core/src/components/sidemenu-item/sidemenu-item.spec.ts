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

	it('should not have a defined item by default', () => {
		expect(sidemenuItem.item).toBeUndefined();
	});
});