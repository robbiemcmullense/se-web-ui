import { AuthenticationComponent } from './authentication';

describe('AboutComponent', () => {
	let component;

	beforeEach(() => {
		component = new AuthenticationComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});
});
