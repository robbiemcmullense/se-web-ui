import { AboutComponent } from './widget';
import { newSpecPage } from "@stencil/core/testing";

describe('AboutComponent', () => {
	let component;

	beforeEach(() => {
		component = new AboutComponent();
	});

	it('should build', () => {
		expect(component).toBeTruthy();
	});

});
