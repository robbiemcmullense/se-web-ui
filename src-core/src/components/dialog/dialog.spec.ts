import { DialogComponent} from "./dialog";

describe('DialogComponent', () => {
	let dialogComponent;

	beforeEach(() => {
		dialogComponent = new DialogComponent();
	});

	it('should build', () => {
		expect(dialogComponent).toBeTruthy();
	});

	it('should be medium size by default', () => {
		expect(dialogComponent.size).toEqual('medium');
	});

	it('should be primary color by default', () => {
		expect(dialogComponent.color).toEqual('primary');
	});

	it('should not be open upon load', () => {
		expect(dialogComponent.open).toBeFalsy();
	});

	it('should have a backdrop', () => {
		expect(dialogComponent.canBackdrop).toBeTruthy();
	});
});
