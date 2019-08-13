import { CheckboxComponent } from './checkbox';
import { newSpecPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
	let checkbox;

	beforeEach(() => {
		checkbox = new CheckboxComponent();
	});

	it('should create a checkbox component', () => {
		expect(checkbox).toBeTruthy();
	});

	it('should have the checkbox option by default', () => {
		expect(checkbox.option).toEqual('checkbox');
	});

	it('should have its color set to "primary" by default', () => {
		expect(checkbox.color).toEqual('primary');
	});

	it('should not be disabled by default', () => {
		expect(checkbox.disabled).toBeFalsy();
	});

	it('should not be checked by default', () => {
		expect(checkbox.checked).toBeFalsy();
	});

	it('should not be required by default', () => {
		expect(checkbox.required).toBeFalsy();
	});

	it('should have the "standard" background by default', () => {
		expect(checkbox.background).toEqual('standard');
	});

	it('should have textOn and textOff values equal to "ON" and "OFF" initially', () => {
		expect(checkbox.textOn).toEqual('ON');
		expect(checkbox.textOff).toEqual('OFF');
	});

	it('should have a header value equal to false initially', () => {
		expect(checkbox.header).toBeFalsy();
	});

	it('should be checked when selected is set to true', () => {
		checkbox.selected = true;
		checkbox.componentDidLoad();
		expect(checkbox.checked).toBeTruthy();
	});

	it('should render in checkbox mode by default', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox label="my label" required="true"></se-checkbox>`,
		});
		expect(page.root).toEqualHtml(`
			<se-checkbox label="my label" required="true">
				<mock:shadow-root>
					<div class="checkbox standard">
						<div class="checkbox-wrapper">
							<label class="checkbox-container">
								my label
								<span class="required">*</span>
								<input type="checkbox" />
								<span class="checkmark" data-color="primary"></span>
							</label>
						</div>
					</div>
				</mock:shadow-root>
			</se-checkbox>
		`);
	});

	it('should render in onoff mode with unique markup and ON and OFF labels', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox option="onoff"></se-checkbox>`,
		});
		expect(page.root).toEqualHtml(`
			<se-checkbox option="onoff">
				<mock:shadow-root>
					<div class="onoff standard">
						<div class="on-off-wrapper">
							<button class="active">ON</button>
							<button class="inactive selected">OFF</button>
						</div>
					</div>
				</mock:shadow-root>
			</se-checkbox>
		`);
	});

	it('should call the updateSize function when the component loads', async() => {
		const eventSpy = jest.spyOn(checkbox, 'setElementId');
		checkbox.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});
});