import { BlockHeader} from "./block-header";

describe('blockHeader', () => {
	let blockHeader;

	beforeEach(() => {
		blockHeader = new BlockHeader();
	});

	it('should build', () => {
		expect(blockHeader).toBeTruthy();
	});
});