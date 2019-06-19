import { BlockContent} from "./block-content";

describe('BlockContent', () => {
	let blockContent;

	beforeEach(() => {
		blockContent = new BlockContent();
	});

	it('should build', () => {
		expect(blockContent).toBeTruthy();
	});
});