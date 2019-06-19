import { BlockComponent } from "./block";

describe('BlockComponent', () => {
	let block;

	beforeEach(() => {
		block = new BlockComponent();
	});

	it('should build', () => {
		expect(block).toBeTruthy();
	});

	it('should have the basic option by default', () => {
		expect(block.option).toEqual('basic');
	});

	it('should initially be in flex mode', () => {
		expect(block.display).toBe('flex');
	});

	it('should have an alternative color by default', () => {
		expect(block.color).toBe('alternative');
	});

	it('should not be loading by default', () => {
		expect(block.loading).toBeFalsy();
	});

	it('should not be enlarged by default', () => {
		expect(block.enlarged).toBeFalsy();
	});
});