import { SidemenuComponent } from "./sidemenu";

describe('SidemenuComponent', () => {
	let sidemenu;

	beforeEach(() => {
		sidemenu = new SidemenuComponent();
	});

	it('should build', () => {
		expect(sidemenu).toBeTruthy();
	});

	it('should be closed by default', () => {
		expect(sidemenu.open).toBeFalsy();
	});
});