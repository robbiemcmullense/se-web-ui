import { Component, Element, Event, EventEmitter, Prop, Listen, Watch } from '@stencil/core';

@Component({
	tag: 'se-form-field',
	styleUrl: 'form-field.scss',
	shadow: true
})
export class FormFieldComponent {
	/**
	 * Defines the layout of your form field.
	 * `inline` is the default mode and is always applied if the type is set to "checkbox".  This sets the input or select field adjacent to the label.
	 * `stacked` mode will render the input or select field below the label.
	 */
	@Prop() mode: 'inline' | 'stacked' = 'inline';
	/**
	 * Defines whether the form field's input is a text field (input), a checkbox (checkbox), or a dropdown menu (select).
	 * `input` is the default type.
	 */
	@Prop() type: 'input' | 'checkbox' | 'select' = 'input';
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
	@Prop({ mutable: true }) value: string = 'Text';
	/**
	 * Determines if the input is required by the application.
	 * Set to `false` by default.
	 * Setting this value to "true" will render a red asterisk next to your label.
	 */
	@Prop() required: boolean = false;
	/**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
	@Prop() disabled: boolean = false;;
	@Element() el: HTMLElement;
	/**
   * Passes form data to the parent component on a click (checkbox), menu change (select), or when the input field loses focus.
   */
	@Event() submit: EventEmitter;

	@Listen('change')
	checkboxListenerHandler(event) {
		this.value = event.detail ? event.detail.selected : event.target.value;
		this.submit.emit(this.value);
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
		if (this.disabled) {
			this.el.children.item(0).setAttributeNode(document.createAttribute('disabled'));
		}
		if (this.type == 'input') {
			this.el.children.item(0).setAttribute('placeholder', this.value);
		}
	}

	hostData() {
		return {
			class: this.status
		};
	}

	render() {
		return (
			<div class="se-form-field" data-disabled={this.disabled}>
				<se-label value={this.label} required={this.required}></se-label>
				<slot></slot>
			</div>
		)
	}
}
