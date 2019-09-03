import { RadioGroupComponent } from './radio-group';
import { newSpecPage } from '@stencil/core/testing';

describe('RadioGroupComponent', () => {
	let radioGroup;

	beforeEach(() => {
		radioGroup = new RadioGroupComponent();
	});

	it('should create a Radio Group component', () => {
		expect(radioGroup).toBeTruthy();
	});

	it('should not be disabled by default', () => {
		expect(radioGroup.disabled).toBeFalsy();
	});

	it('should be the standard color by default', () => {
		expect(radioGroup.color).toEqual('standard');
	});

	it('should have a small size by default', () => {
		expect(radioGroup.size).toEqual('small');
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group></se-radio-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-radio-group>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</se-radio-group>
		`);
	});

	it('should render with a child se-button element', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group><se-button></se-button></se-radio-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-radio-group>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
				<se-button></se-button>
			</se-radio-group>
		`);
	});

	it('should render with a child se-radio element', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group><se-radio></se-radio></se-radio-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-radio-group>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
				<se-radio></se-radio>
			</se-radio-group>
		`);
	});

	it('calls the updateItemMode function when the component loads', () => {
		const eventSpy = jest.spyOn(radioGroup, 'updateItemMode')
		radioGroup.componentDidLoad();
		radioGroup.disabledDidChange();
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});

	it('calls the handleEventChange function twice, when a button or radio element is clicked', () => {
		const event = {detail: {value: 'my value'}};
		const eventSpy = jest.spyOn(radioGroup, 'handleEventChange');
		radioGroup.buttonClickedHandler(event, 'se-button');
		radioGroup.radioButtonCheckedHandler(event, 'se-radio');
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});

	it('emits the didChange event when a child element in the radio group is clicked on', () => {
		const event = {detail: {value: 'my value'}};
		const eventSpy = jest.spyOn(radioGroup.didChange, 'emit');
		radioGroup.handleEventChange(event, 'se-button');
		expect(eventSpy).toHaveBeenCalled();
	});

	it('passes a secondary color value to se-radio child elements when specified', () => {
		radioGroup.color = 'secondary';
		let radioElm = document.createElement('se-radio');
		radioGroup.el.appendChild(radioElm);
		radioGroup.updateItemMode();
		expect(radioElm.color).toEqual('secondary');
	});

	it('passes a nano size and primary color value to se-button child elements when specified', () => {
		radioGroup.size = 'nano';
		radioGroup.color = 'primary';
		let buttonElm = document.createElement('se-button');
		radioGroup.el.appendChild(buttonElm);
		radioGroup.updateItemMode();
		expect(buttonElm.size).toEqual('nano');
		expect(buttonElm.color).toEqual('primary');
	});

	it('passes a disabled property value to se-button child elements when specified', () => {
		radioGroup.disabled = true;
		let buttonElm = document.createElement('se-button');
		radioGroup.el.appendChild(buttonElm);
		radioGroup.updateItemMode();
		expect(buttonElm.disabled).toBeTruthy();
	});
});
