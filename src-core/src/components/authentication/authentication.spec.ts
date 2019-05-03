import { AuthenticationComponent } from './authentication';

describe('AboutComponent', () => {
	let component;

	beforeEach(() => {
		component = new AuthenticationComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

	it('should not be hidden by default', () => {
		expect(component.hide).toBeFalsy();
	});

	it('should populate link, domain, and copyright information from the app info file', () => {
		expect(component.link).toEqual('www.schneider-electric.com');
		expect(component.domain).toEqual('ecostruxure');
		expect(component.copyright).toEqual('This application is protected by copyright law and international treaties. © 2017 Schneider Electric Industries SAS. All Rights Reserved.');
	});
});