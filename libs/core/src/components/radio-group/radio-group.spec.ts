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

	it('should render, with a slot element', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group></se-radio-group>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
	});

	it('should render with a child se-button element', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group><se-button></se-button></se-radio-group>`,
		});
		expect(page.root.querySelector('se-button')).toBeTruthy();
	});

	it('should render with a child se-radio element', async() => {
		const page = await newSpecPage({
			components: [RadioGroupComponent],
			html: `<se-radio-group><se-radio></se-radio></se-radio-group>`,
		});
		expect(page.root.querySelector('se-radio')).toBeTruthy();
	});

	it('passes a nano size and primary color value to se-button child elements when specified', () => {
		radioGroup.size = 'nano';
		radioGroup.color = 'primary';
		const buttonElm = document.createElement('se-button');
		radioGroup.el.appendChild(buttonElm);
		radioGroup.componentDidLoad();
		expect(buttonElm.size).toEqual('nano');
		expect(buttonElm.color).toEqual('primary');
	});

	it('passes a secondary color value to se-radio child elements when specified', () => {
		radioGroup.color = 'secondary';
		const radioElm = document.createElement('se-radio');
		radioGroup.el.appendChild(radioElm);
		radioGroup.componentDidLoad();
		expect(radioElm.color).toEqual('secondary');
	});

	it('passes a disabled property value to se-button child elements when specified', () => {
		radioGroup.disabled = true;
		const buttonElm = document.createElement('se-button');
		radioGroup.el.appendChild(buttonElm);
		radioGroup.componentDidLoad();
		expect(buttonElm.disabled).toBeTruthy();
	});

	it('calls the updateItemMode function when the component loads or the disabled value changes', () => {
		const eventSpy = jest.spyOn(radioGroup, 'updateItemMode')
		radioGroup.componentDidLoad();
		radioGroup.disabledDidChange();
		expect(eventSpy).toHaveBeenCalledTimes(2);
	});

	// it('emits the didChange event when a child element in the radio group is clicked on', () => {
	// 	const event = {detail: {value: 'my value'}};
	// 	const eventSpy = jest.spyOn(radioGroup.didChange, 'emit');
	// 	radioGroup.componentDidLoad();
	// 	radioGroup.buttonClickedHandler(event);
	// 	radioGroup.radioButtonCheckedHandler(event);
	// 	expect(eventSpy).toHaveBeenCalledTimes(2);
	// });
});
