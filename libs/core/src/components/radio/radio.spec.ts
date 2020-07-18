import { RadioComponent } from './radio';
import { newSpecPage } from '@stencil/core/testing';

describe('RadioComponent', () => {
	let radio;

	beforeEach(() => {
		radio = new RadioComponent();
	});

	it('should create a radio component', () => {
		expect(radio).toBeTruthy();
	});

	it('should have a primary color value by default', () => {
    expect(radio.color).toBe('primary');
  });

  it('should not be selected by default', () => {
    expect(radio.selected).toBeFalsy();
	});

	it('should not be required by default in a form field', () => {
		expect(radio.required).toBeFalsy();
	});

	it('should set required to true when the setRequired method is called', () => {
		radio.setRequired();
		expect(radio.required).toBeTruthy();
	});

	it('should render, with a radio-container class', async() => {
		const page = await newSpecPage({
			components: [RadioComponent],
			html: `<se-radio></se-radio>`,
		});
		expect(page.root.shadowRoot.querySelector('.radio-container')).toBeTruthy();
	});

	it('calls the setInputId function when the component loads', () => {
		const eventSpy = jest.spyOn(radio, 'setInputId')
		radio.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should assign an id to the input element with the wc prefix when the host element has an id', () => {
		radio.el.id = 'radio-id';
		const input = document.createElement('input');
		const shadow = radio.el.attachShadow({mode: 'open'});
		shadow.appendChild(input);
		radio.componentDidLoad();
		expect(input).toHaveAttribute('id');
		expect(input.getAttribute('id')).toEqual('wc-radio-id');
	});

	it('should emit the didCheck event when a radio button is clicked', () => {
		const eventSpy = jest.spyOn(radio.didCheck, 'emit');
		radio.handleClick(); // user clicks on radio button
		expect(eventSpy).toHaveBeenCalled();
	});
});
