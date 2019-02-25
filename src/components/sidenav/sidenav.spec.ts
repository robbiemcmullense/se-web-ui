import { SidenavComponent } from "./sidenav";

describe('SidenavComponent', () => {
	let sidenav;

	beforeEach(() => {
		sidenav = new SidenavComponent();
	});

	it('should build', () => {
		expect(sidenav).toBeTruthy();
	});

	it('should be closed by default', () => {
		expect(sidenav.open).toBeFalsy()
	});
});