import { AppComponent } from './app';

describe('AppComponent', () => {
	let app;

	beforeEach(() => {
		app = new AppComponent();
	});

	it('should build', () => {
		expect(app).toBeTruthy();
	});
});