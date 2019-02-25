import { IconSchneiderComponent } from './icon-schneider';

describe('IconSchneiderComponent', () => {
	let schneiderIcon;

	beforeEach(() => {
		schneiderIcon = new IconSchneiderComponent();
	});

	it('should build', () => {
		expect(schneiderIcon).toBeTruthy();
	});
});