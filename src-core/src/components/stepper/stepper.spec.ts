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
	
	it('should render with a nav element', async() => {
		const page = await newSpecPage({
			components: [StepperComponent],
			html: `<se-stepper></se-stepper>`,
		});
		expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
  });
  
  it('should update the last item when the component is about to load', () => {
    const lastItemSpy = jest.spyOn(stepper, 'updateLastItem');
    stepper.componentWillLoad();
    expect(lastItemSpy).toHaveBeenCalled();
  });

  it('should update the last item when the component is about to load', () => {
    const colorSchemaSpy = jest.spyOn(stepper, 'setColorSchema');
    stepper.componentWillLoad();
    expect(colorSchemaSpy).toHaveBeenCalled();
  });
});