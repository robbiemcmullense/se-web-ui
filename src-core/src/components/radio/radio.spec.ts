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
});
