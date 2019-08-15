import { FormFieldComponent } from './form-field';
import { newSpecPage } from '@stencil/core/testing';

describe('FormFieldComponent', () => {
	let formField;

	beforeEach(() => {
		formField = new FormFieldComponent();
	});

	it('should build', () => {
		expect(formField).toBeTruthy();
	});

	it('should have a default option equal to inline', () => {
		expect(formField.option).toEqual('inline');
	});

	it('should have a default type equal to input', () => {
		expect(formField.type).toEqual('input');
	});

	it('should render in input mode by default', async() => {
		const page = await newSpecPage({
			components: [FormFieldComponent],
			html: `<se-form-field></se-form-field>`,
		});
		expect(page.root).toEqualHtml(`
			<se-form-field>
				<mock:shadow-root>
					<div class="inline input se-form-field">
						<div class="form-field-wrapper">
							<label class="se-label"></label>
							<slot></slot>
						</div>
					</div>
				</mock:shadow-root>
			</se-form-field>
		`);
	});

	it('should render in select mode when the option is set to select, and the required symbol when required is set to true', async() => {
		const page = await newSpecPage({
			components: [FormFieldComponent],
			html: `<se-form-field type="select" label="Label" required="true"></se-form-field>`,
		});
		expect(page.root).toEqualHtml(`
			<se-form-field type="select" label="Label" required="true">
				<mock:shadow-root>
					<div class="inline se-form-field select">
						<div class="form-field-wrapper">
							<label class="se-label">Label<span>*</span></label>
							<slot></slot>
						</div>
					</div>
				</mock:shadow-root>
			</se-form-field>
		`);
	});

	it('should call the initLabel function 3 times, when the component loads, when the type changes, or if the disabled property changes', async() => {
		const eventSpy = jest.spyOn(formField, 'initLabel');
		formField.componentDidLoad();
		formField.typeDidChange();
		formField.disabledDidChange();
		expect(eventSpy).toHaveBeenCalledTimes(3);
	});

	it('should call the handleEvent function 3 times, when a user input changes on the radio, checkbox, or input, element', () => {
		const event = {detail: {selected: true}};
		const eventSpy = jest.spyOn(formField, 'handleEvent');
		formField.inputSelectListenerHandler(event);
		formField.radioListenerHandler(event);
		formField.checkboxListenerHandler(event);
		expect(eventSpy).toHaveBeenCalledTimes(3);
	});
});