import { StepperComponent } from './stepper';
import { newSpecPage } from '@stencil/core/testing';

describe('StepperComponent', () => {
	let stepper;

	beforeEach(() => {
		stepper = new StepperComponent();
	});

	it('should build', () => {
		expect(stepper).toBeTruthy();
  });

  it('should have a primary color by default', () => {
    expect(stepper.color).toBe('primary');
  });
	
	it('should render', async() => {
		const page = await newSpecPage({
      components: [StepperComponent],
			html: `<se-stepper>
				<se-stepper-item label="One"></se-stepper-item>
				<se-stepper-item label="Two"></se-stepper-item>
			</se-stepper>`,
    });
		expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
	});
});