import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
	let header;

	beforeEach(() => {
		header = new HeaderComponent();
	});

	it('should build', () => {
		expect(header).toBeTruthy();
	});

	it('should have a domain name set to ecostruxure by default', () => {
		expect(header.domain).toEqual('ecostruxure');
	});
});