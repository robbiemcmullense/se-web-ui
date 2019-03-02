import { DialogContentComponent} from "./dialog-content";

describe('DialogContentComponent', () => {
	let dialogContentComponent;

	beforeEach(() => {
		dialogContentComponent = new DialogContentComponent();
	});

	it('should build', () => {
		expect(dialogContentComponent).toBeTruthy();
	});
});
