import { RadioComponent } from './radio';

describe('RadioComponent', () => {
	let radio;

	beforeEach(() => {
		radio = new RadioComponent();
	});

	it('should create a radio component', () => {
		expect(radio).toBeTruthy();
	});

	it('should have a primary color value by default', () => {
    expect(radio.color).toBe('primary');
  });

  it('should not be selected by default', () => {
    expect(radio.selected).toBeFalsy();
	});
	
	it('should not be required by default in a form field', () => {
		expect(radio.required).toBeFalsy();
	});

	it('should set required to true when the setRequired method is called', () => {
		radio.setRequired();
		expect(radio.required).toBeTruthy();
	});
});
