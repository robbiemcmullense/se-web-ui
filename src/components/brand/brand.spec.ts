import { BrandComponent } from './brand';

describe('AboutComponent', () => {
	let app;

	beforeEach(() => {
		app = new BrandComponent();
	});

	it('should build', () => {
		expect(app).toBeTruthy();
	});
});
