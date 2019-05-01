import { IconLifeisonComponent } from './icon-lifeison';

describe('IconLifeisonComponent', () => {
	let lifeisonIcon;

	beforeEach(() => {
		lifeisonIcon = new IconLifeisonComponent();
	});

	it('should build', () => {
		expect(lifeisonIcon).toBeTruthy();
	});

	it('should inherit its color from its parent', () => {
		expect(lifeisonIcon.color).toEqual('inherited');
	});
});
