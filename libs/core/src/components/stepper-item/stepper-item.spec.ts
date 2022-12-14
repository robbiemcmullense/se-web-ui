import { StepperItemComponent } from './stepper-item';
import { newSpecPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let stepperItem;

  beforeEach(() => {
    stepperItem = new StepperItemComponent();
  });


  it('should render with a list item with the stepper-item class', async () => {
    const page = await newSpecPage({
      components: [StepperItemComponent],
      html: `<se-stepper-item></se-stepper-item>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render with a navitem-hidden class by default', async () => {
    const page = await newSpecPage({
      components: [StepperItemComponent],
      html: `<se-stepper-item></se-stepper-item>`,
    });
    expect(page.root).toHaveClass('navitem-hidden');
  });

  it('should emit the itemValidated event when the validated property changes', () => {
    const eventSpy = jest.spyOn(stepperItem.didValidate, 'emit');
    stepperItem.validatedDidChange(); // validated property changes
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the didActivate event when the active property changes', () => {
    const eventSpy = jest.spyOn(stepperItem.didActivate, 'emit');
    stepperItem.activatedDidChange(); // Active property changes
    expect(eventSpy).toHaveBeenCalled();
  });
});
