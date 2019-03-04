import { AboutComponent } from './about';

describe('AboutComponent', () => {
	let app;

	beforeEach(() => {
		app = new AboutComponent();
	});

	it('should build', () => {
		expect(app).toBeTruthy();
	});
});
