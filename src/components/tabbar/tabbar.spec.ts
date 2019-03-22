import { TabbarComponent } from "./tabbar";

describe('TabbarComponent', () => {
	let tabBar;

	beforeEach(() => {
		tabBar = new TabbarComponent();
	});

	it('should build', () => {
		expect(tabBar).toBeTruthy();
	});

	it('should have a primary color by default', () => {
		expect(tabBar.color).toEqual('primary');
	});
});
