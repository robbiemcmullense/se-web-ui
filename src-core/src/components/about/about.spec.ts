import { AboutComponent } from './about';

describe('AboutComponent', () => {
	let component;

	beforeEach(() => {
		component = new AboutComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});
});
