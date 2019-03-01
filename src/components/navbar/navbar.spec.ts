import { NavbarComponent } from "./navbar";

describe('NavbarComponent', () => {
	let navbar;

	beforeEach(() => {
		navbar = new NavbarComponent();
	});

	it('should build', () => {
		expect(navbar).toBeTruthy();
	});

	it('should have a primary color by default', () => {
		expect(navbar.mode).toEqual('primary');
	});
});
