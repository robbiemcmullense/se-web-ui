import { BannerItemComponent } from './banner-item';

describe('BannerItemComponent', () => {
	let component;

	beforeEach(() => {
		component = new BannerItemComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

	it('should not have an initially defined image url', () => {
		expect(component.imageUrl).toBeUndefined();
	});

	it('should not be active by default', () => {
		expect(component.active).toBeFalsy();
	});
	
	it('should set active to true when the setActive method is called', () => {
		component.setActive(true);
		expect(component.active).toBeTruthy();
	});
});