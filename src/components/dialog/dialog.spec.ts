import { DialogComponent} from "./dialog";

describe('DialogComponent', () => {
	let dialogComponent;

	beforeEach(() => {
		dialogComponent = new DialogComponent();
	});

	it('should build', () => {
		expect(dialogComponent).toBeTruthy();
	});
});
