import { StepperItemComponent } from './stepper-item';

describe('StepperItemComponent', () => {
	let stepperItem;

	beforeEach(() => {
		stepperItem = new StepperItemComponent();
	});

	it('should build', () => {
		expect(stepperItem).toBeTruthy();
  });

  it('should not be the last stepper item by defualt', () => {
    expect(stepperItem.isLast).toBeFalsy();
  });
});