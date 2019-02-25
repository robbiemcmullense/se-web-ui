import { LinkComponent } from "./link";

describe('linkComponent', () => {
	let link;

	beforeEach(() => {
		link = new LinkComponent();
	});

	it('should build', () => {
		expect(link).toBeTruthy();
	});

	it('should be internal type by default', () => {
		expect(link.type).toEqual('internal');
	});
});