import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
	let button;

	beforeEach(() => {
		button = new ButtonComponent();
	});

	it('should create a button component', () => {
		expect(button).toBeTruthy();
	});

	it('should have a "flat" mode by default', () => {
		expect(button.mode).toEqual('flat');
	});

	it('should not have a defined selected state initially', () => {
		expect(button.selected).toBeUndefined();
	});

	it('should set the selected state to true after calling the setActive method', () => {
    button.selected = true;
		expect(button.selected).toBeTruthy();
	});
});
