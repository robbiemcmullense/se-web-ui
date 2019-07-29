import { BannerComponent } from './banner';

describe('BannerComponent', () => {
	let component;

	beforeEach(() => {
		component = new BannerComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

});