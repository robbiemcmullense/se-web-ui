import { Component, Element, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

@Component({
  tag: "se-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})

export class CheckboxComponent {
  /**
   * Determines the visual appearance of the component.
   * `checkbox` is the default option and the component renders like a standard HTML checkbox.
   * `switch` renders the component like a toggle switch.
   */
  @Prop() option: 'checkbox' | 'onoff' | 'switch' = 'checkbox';
  /**
   * The value you want to pass to the parent component when the checkbox is checked.
   */
  @Prop() value: string;
  /**
   * The label of the checkbox that will be attached to the box.
   */
  @Prop() label: string;
  /**
   * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
   */
  @Prop() required: boolean = false;
  /**
   * Defines the color of the checkbox for checkbox and switch options.
   * The default value is `primary`.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';
  /**
   * Defines the color of the checkbox for onoff option.
   * The default value is `standard`.
   */
  @Prop() onOffColor: 'standard' | 'alternative' = 'standard';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
	 * Determines whether or not the checkbox is checked when you initialize it.  Checked if `true`.
	 */
  @Prop({mutable: true}) selected: boolean = false;
  /**
   * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to 'onoff'.  Set to `OFF` by default.
   */
  @Prop() textOn: string = 'ON';
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to 'onoff'.  Set to `OFF` by default.
   */
  @Prop() textOff: string = 'OFF';
  /**
   * Reduce the visual height of the checkbox when the option is set to 'onoff'.
   */
  @Prop() header: boolean = false;
  @State() checked: boolean;
  /**
   * Set the required property on the checkbox element.  Used when the checkbox is within a form field.
   */
  @Method()
  setRequired() {
    this.required = true;
  }
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didChange: EventEmitter;
  @Element() el: HTMLElement;

  emitEvent() {
    if (!this.disabled) {
      this.checked = !this.checked;
      if (this.option === 'switch' && this.checked) {
        this.el.classList.add('selected');
      } else {
        setTimeout(() => {
          this.el.classList.remove('selected');
        }, 200)
      }
      let checkboxObject = {value: this.value, selected: this.checked};
      this.didChange.emit(checkboxObject);
    }
  }

  componentDidLoad() {
    if (this.selected) {
      this.checked = this.selected;
      if (this.option === 'switch') {
        this.el.classList.add('selected');
      }
    }
  }

  hostData() {
    return {
      'class': [
        this.option,
        this.onOffColor,
        this.header ? 'header' : '',
        this.disabled ? 'disabled': ''
      ].join(' ')
    };
  }

  render() {
    let markup;
    if (this.option === 'onoff') {
      markup = [<button class={['active', this.checked ? ' selected' : ''].join(' ')} onClick={() => this.emitEvent()}>{this.textOn}</button>,
      <button class={['inactive', !this.checked ? ' selected' : ''].join(' ')} onClick={() => this.emitEvent()}>{this.textOff}</button>];
    } else {
      markup = (<label class="checkbox-container" data-disabled={this.disabled}>
      {this.option === 'checkbox' ? this.label : ''}
      {this.required ? <span class="required">*</span> : ''}
      <input type="checkbox" checked={this.checked} disabled={this.disabled} onClick={() => this.emitEvent()}/>
      <span class="checkmark" data-color={this.color}></span>
    </label>)
    }
    return markup;
  }
}