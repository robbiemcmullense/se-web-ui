import { ButtonComponent } from './button';
import { newSpecPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
	let button;

	beforeEach(() => {
		button = new ButtonComponent();
	});

	it('should create a button component', () => {
		expect(button).toBeTruthy();
	});

	it('should have a "flat" option by default', () => {
		expect(button.option).toEqual('flat');
	});

	it('should have a small size by default', () => {
		expect(button.size).toEqual('small');
	});

	it('should have a "standard" color property by default', () => {
		expect(button.color).toEqual('standard');
	});

	it('should have a "button" type property by default', () => {
		expect(button.type).toEqual('button');
	});

	it('should not have a defined selected state initially', () => {
		expect(button.selected).toBeUndefined();
	});

	it('should not be disabled by default', () => {
		expect(button.disabled).toBeFalsy();
	});

	it('should not have an undefined block value', () => {
		expect(button.block).toBeUndefined();
	});

	it('should set the disabled property to true after calling the setDisabled method', () => {
    button.setDisabled(true);
		expect(button.disabled).toBeTruthy();
	});

	it('should set the grouped property to true after calling the setGrouped method', () => {
    button.setGrouped(true);
		expect(button.grouped).toBeTruthy();
	});

	it('should render with the flat class by default', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button></se-button>`,
		});
		expect(page.root.shadowRoot.querySelector('button.flat')).toBeTruthy();
	});

	it('should render with an icon element when the button has an icon', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button icon="my icon"></se-button>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
	});

	it('should render with an span element that has class equal to text when the button has inner html markup', async() => {
		const page = await newSpecPage({
			components: [ButtonComponent],
			html: `<se-button>label</se-button>`,
		});
		expect(page.root.shadowRoot.querySelector('.text')).toBeTruthy();
	});

	it('should have a primary color and the block property set to true when set to the "login" option', () => {
		button.option = 'login';
		button.componentWillLoad();
		expect(button.color).toEqual('primary');
		expect(button.block).toBeTruthy();
	});

	it('should have a secondary color and the block property set to true when set to the "signup" option', () => {
		button.option = 'signup';
		button.componentWillLoad();
		expect(button.color).toEqual('secondary');
		expect(button.block).toBeTruthy();
	});

	it('should call the setButtonId function when the componentDidLoad function is called', async() => {
		const eventSpy = jest.spyOn(button, 'setButtonId');
		button.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should set the innerId property when the host element has a defined id', () => {
    button.el.id = 'button-id';
    button.componentDidLoad();
    expect(button.innerId).toEqual('wc-button-id');
	});
	
	it('should append a separate button element to submit a form when an se-button component is a child of an HTML form element', () => {
		const event = {preventDefault: jest.fn()};
		const form = document.createElement('form');
		button.type = 'submit';
		form.appendChild(button.el);
		button.buttonClickedHandler(event); // user clicks on the button
		expect(document.querySelector('form > button')).toBeDefined();
	});

	it('should not emit the didClick event when a standalone standard button is clicked as it is not part of a group', () => {
		const eventSpy = jest.spyOn(button.didClick, 'emit');
		button.toggle();  // user clicks on the button
		expect(eventSpy).not.toHaveBeenCalled();
	});

	it('should emit the didClick event when the button is part of a group', () => {
		button.grouped = true;
		const eventSpy = jest.spyOn(button.didClick, 'emit');
		button.toggle(); // user clicks on the button
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should emit the didClick event when the button is a minifab', () => {
		button.option = 'minifab';
		const eventSpy = jest.spyOn(button.didClick, 'emit');
		button.toggle(); // user clicks on the button
		expect(eventSpy).toHaveBeenCalled();
	});
});
