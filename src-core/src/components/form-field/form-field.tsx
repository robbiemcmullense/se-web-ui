import { Component, Element, Event, EventEmitter, h, Prop, Listen, Watch } from '@stencil/core';

@Component({
	tag: 'se-form-field',
	styleUrl: 'form-field.scss',
	shadow: true
})
export class FormFieldComponent {
	/**
	 * Defines the layout of your form field.
	 * `inline` is the default option, and is always applied if the type is set to `checkbox`.  This sets the input or select field adjacent to the label.
	 * `stacked` option will render the input or select field below the label.
	 */
	@Prop() option: 'inline' | 'stacked' = 'inline';
	/**
	 * Defines whether the form field's input is a text field (`input`), a checkbox (`checkbox`), a radio button (`radio`), or a dropdown menu (`select`).
	 * `input` is the default type.
	 */
	@Prop() type: 'input' | 'checkbox' | 'radio' | 'select' = 'input';
	/**
	 * Sets a red border on an input field if there's an error, an orange border if there's a warning, and a green border if a successful input.
	 */
	@Prop({ mutable: true }) status: 'error' | 'warning' | 'success';
	/**
	 * Defines the text value of the label in your form field.
	 */
	@Prop() label: string;
	/**
	 * Defines the value of your form field to get passed to the parent component.
	 * When the type is set to "input", this value will be the default placeholder in your input field.
	 */
	@Prop({ mutable: true }) value: string;
	/**
	 * Determines if the input is required by the application.
	 * Set to `false` by default.
	 * Setting this value to `true` will render a red asterisk next to your label.
	 */
	@Prop() required: boolean = false;
	/**
   * Optional property that defines if the form field is disabled.  Set to `false` by default.
   */
	@Prop() disabled: boolean = false;
	@Element() el: HTMLElement;
	/**
   * Passes form data to the parent component on a click (`checkbox` or `radio`), menu change (`select`), or when the input field loses focus.
   */
	@Event() didSubmit: EventEmitter;

	@Listen('change')
	inputSelectListenerHandler(event) {
		this.handleEvent(event);
	}

	@Listen('didChange')
	checkboxListenerHandler(event) {
		this.handleEvent(event);
	}

	@Listen('didCheck')
	radioListenerHandler(event) {
		this.handleEvent(event);
	}

	@Watch('disabled')
	disabledDidChange() {
		this.initLabel();
	}

	@Watch('type')
	typeDidChange() {
		this.initLabel();
	}

	componentDidLoad() {
		this.initLabel();
	}

	initLabel() {
		Array.from(this.el.querySelectorAll('input, select, se-checkbox, se-radio')).forEach((item: any) => {
			item.disabled = this.disabled;
			if (this.type === "checkbox" || this.type === "radio") {
				item.label = this.label;
				item.required = this.required;
			}
		});
	}

	handleEvent(event: any) {
		if (!this.disabled) {
			this.value = event.detail ? event.detail.selected : event.target.value;
			this.didSubmit.emit(this.value);
		}
	}

	render() {
		return (
			<div class={['se-form-field', this.status, this.option, this.type].join(' ')}>
				<div class="form-field-wrapper" data-disabled={this.disabled}>
					{(this.type === 'input' || this.type === 'select') ? <label class="se-label">{this.label}{this.required ? <span>*</span> : ''}</label> : ''}
					<slot></slot>
				</div>
			</div>
		)
	}
}