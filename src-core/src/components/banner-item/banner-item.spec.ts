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

	it('should not have an initially defined background color', () => {
		expect(component.backgroundColor).toBeUndefined();
	});
	

});