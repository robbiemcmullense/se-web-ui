import { BlockFooter} from "./block-footer";

describe('blockFooter', () => {
	let blockFooter;

	beforeEach(() => {
		blockFooter = new BlockFooter();
	});

	it('should build', () => {
		expect(blockFooter).toBeTruthy();
	});
});