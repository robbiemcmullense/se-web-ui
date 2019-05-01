import { DialogHeaderComponent} from "./dialog-header";

describe('DialogHeaderComponent', () => {
	let dialogHeaderComponent;

	beforeEach(() => {
		dialogHeaderComponent = new DialogHeaderComponent();
	});

	it('should build', () => {
		expect(dialogHeaderComponent).toBeTruthy();
	});

	it('should be primary color by default', () => {
		expect(dialogHeaderComponent.color).toEqual('primary');
	});
});
