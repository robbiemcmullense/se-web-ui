import { BannerComponent } from './banner';

describe('BannerComponent', () => {
	let component;

	beforeEach(() => {
		component = new BannerComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

	it('should have an empty items array by default', () => {
		expect(component.items.length).toEqual(0);
	});

	it('should not have a selected item by default', () => {
		expect(component.selectedItem).toBeUndefined();
	});

	it('should not have a selected item index by default', () => {
		expect(component.selectedItemIndex).toBeUndefined();
	});
});