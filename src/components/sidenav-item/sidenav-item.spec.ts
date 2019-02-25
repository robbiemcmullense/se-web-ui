import { SidenavItemComponent } from "./sidenav-item";

describe('NavbarComponent', () => {
	let sidenavItem;

	beforeEach(() => {
		sidenavItem = new SidenavItemComponent();
	});

	it('should build', () => {
		expect(sidenavItem).toBeTruthy();
	});

	it('should be inactive by default', () => {
		expect(sidenavItem.active).toBeFalsy();
	});
});