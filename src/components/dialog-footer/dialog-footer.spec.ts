import { DialogFooterComponent} from "./dialog-footer";

describe('DialogFooter', () => {
	let dialogFooter;

	beforeEach(() => {
		dialogFooter = new DialogFooterComponent();
	});

	it('should build', () => {
		expect(dialogFooter).toBeTruthy();
	});
});
