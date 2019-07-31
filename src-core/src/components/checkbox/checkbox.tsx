import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from "@stencil/core";

@Component({
  tag: "se-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})

export class CheckboxComponent {
  /**
   * Determines the visual appearance of the component.
   * `checkbox` is the default option, which will render the component like a standard HTML checkbox.
   * `switch` renders the component like a toggle switch.
   * `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button.
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
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
   * The default value is `primary`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';
  /**
   * Defines the color schema of the checkbox when the option is set to `onoff`.
   * The default value is `standard`.
   */
  @Prop() background: 'standard' | 'alternative' = 'standard';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
	 * Determines whether or not the checkbox is checked when you initialize it.  Set to `false` by default.
	 */
  @Prop({ mutable: true }) selected: boolean = false;
  /**
   * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.
   */
  @Prop() textOn: string = 'ON';
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.
   */
  @Prop() textOff: string = 'OFF';
  /**
   * Reduces the visual height of the checkbox when the option is set to `onoff`.
   * Useful if the on/off checkbox is within a header element.
   */
  @Prop() header: boolean = false;
  @State() checked: boolean;
  /**
   * Sets the required property on the checkbox element.  Used when the checkbox is within a form field.
   */
  @Method()
  async setRequired() {
    this.required = true;
  }
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didChange: EventEmitter;
  @Element() el: HTMLElement;

  setElementId() {
    let id = this.el.getAttribute('id');
    if (id && this.option === 'onoff') {
      let firstTarget = this.el.shadowRoot.querySelector('button.active');
      let secondTarget = this.el.shadowRoot.querySelector('button.inactive');
      firstTarget.setAttribute('id', 'wc-' + id + '-active');
      secondTarget.setAttribute('id', 'wc-' + id + '-inactive');
    } else if (id) {
      let input = this.el.shadowRoot.querySelector('input');
      input.setAttribute('id', 'wc-' + id);
    }
  }

  emitEvent() {
    if (!this.disabled) {
      this.checked = !this.checked;
      let checkboxObject = { value: this.value, selected: this.checked };
      this.didChange.emit(checkboxObject);
    }
  }

  componentDidLoad() {
    this.setElementId();
    if (this.selected) {
      this.checked = this.selected;
    }
  }

  render() {
    let markup, switchMarkup: any;
    if (this.option === 'switch' && this.required) {
      switchMarkup = [
        <span class="checkbox-label">{this.label}</span>,
        <span class="required">*</span>
      ];
    } else if (this.option === 'switch' && !this.required) {
      switchMarkup = <span class="checkbox-label">{this.label}</span>;
    }
    if (this.option === 'onoff') {
      markup = (
        <div class="on-off-wrapper">
          <button class={['active', this.checked ? ' selected' : ''].join(' ')} onClick={() => this.emitEvent()}>{this.textOn}</button>
          <button class={['inactive', !this.checked ? ' selected' : ''].join(' ')} onClick={() => this.emitEvent()}>{this.textOff}</button>
        </div>
      )
    } else {
      markup = (
        <div class="checkbox-wrapper">
          <label class="checkbox-container" data-disabled={this.disabled}>
            {this.option === 'checkbox' ? this.label : ''}
            {this.option === 'checkbox' && this.required ? <span class="required">*</span> : ''}
            <input type="checkbox" checked={this.checked} disabled={this.disabled} onClick={() => this.emitEvent()} />
            <span class="checkmark" data-color={this.color}></span>
          </label>
          {this.option === 'switch' ? switchMarkup : ''}
        </div>
      )
    }
    return <div class={[this.option, this.background, this.header ? 'header' : '', this.disabled ? 'disabled' : ''].join(' ')}>{markup}</div>;
  }
}