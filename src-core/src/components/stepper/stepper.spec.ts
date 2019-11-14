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

	it('should not be linear by default', () => {
		expect(stepper.linear).toBeFalsy();
	});
	
	it('should add to the items array when a stepper item is added, and be active and last by default', () => {
		let node = document.createElement('se-stepper-item');
		stepper.el.appendChild(node);

		let contentNode = document.createElement('div');
		contentNode.setAttribute('slot', 'stepper-item-content');
		stepper.el.appendChild(contentNode);
		
		stepper.componentDidLoad();
		expect(stepper.stepperItems.length).toEqual(1);
		expect(stepper.stepperItems[0].isLast).toBeTruthy();
		expect(stepper.stepperItems[0]).toHaveClass('selected');
	});

	it('should not set the isLast property to the first stepper item when there are two stepper items', () => {
		let nodeOne = document.createElement('se-stepper-item');
		stepper.el.appendChild(nodeOne);
		let nodeTwo = document.createElement('se-stepper-item');
		stepper.el.appendChild(nodeTwo);
		
		let contentNodeOne = document.createElement('div');
		contentNodeOne.setAttribute('slot', 'stepper-item-content');
		stepper.el.appendChild(contentNodeOne);
		let contentNodeTwo = document.createElement('div');
		contentNodeTwo.setAttribute('slot', 'stepper-item-content');
		stepper.el.appendChild(contentNodeTwo);

		stepper.componentDidLoad();
		expect(stepper.stepperItems.length).toEqual(2);
		expect(stepper.stepperItems[0].isLast).toBeFalsy();
		expect(stepper.stepperItems[1]).not.toHaveClass('selected');
	});
	
	it('should render', async() => {
		const page = await newSpecPage({
      components: [StepperComponent],
			html: `<se-stepper>
				<se-stepper-item label="One"></se-stepper-item>
				<se-stepper-item label="Two"></se-stepper-item>
				<div slot="stepper-item-content">Step 1</div>
				<div slot="stepper-item-content">Step 2</div>
			</se-stepper>`,
    });
		expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
	});
});