import { Component, Element, Event, EventEmitter, h, Method, Prop } from "@stencil/core";

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
  @Prop() required = false;
  /**
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
   * The default value is `success`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop() color: 'primary' | 'secondary' | 'success' = 'success';
  /**
   * Defines the color schema of the checkbox when the option is set to `onoff`.
   * The default value is `standard`.
   */
  @Prop() background: 'standard' | 'alternative' = 'standard';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;
  /**
	 * The "checked" state of the checkbox, `false` by default.
	 */
  @Prop({ mutable: true }) selected = false;
  /**
   * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.
   */
  @Prop() textOn = 'ON';
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.
   */
  @Prop() textOff = 'OFF';
  /**
   * Reduces the visual height of the checkbox when the option is set to `onoff`.
   * Useful if the on/off checkbox is within a header element.
   */
  @Prop() header = false;
  /**
   * Sets the position of the label for your checkbox component.
   * The default setting is `right` when the option is set to `checkbox`.
   * The default setting is `left` when the option is set to `switch`.
   */
  @Prop() labelPos: 'left' | 'right';
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
    const id = this.el.getAttribute('id');
    if (id && this.option === 'onoff') {
      this.el.shadowRoot.querySelector('button.active').setAttribute('id', 'wc-' + id + '-active');
      this.el.shadowRoot.querySelector('button.inactive').setAttribute('id', 'wc-' + id + '-inactive');
    } else if (id) {
      this.el.shadowRoot.querySelector('input').setAttribute('id', 'wc-' + id);
    }
  }

  handleClick() {
    if (!this.disabled) {
      this.selected = !this.selected;
      const checkboxObject = { value: this.value, selected: this.selected };
      this.didChange.emit(checkboxObject);
    }
  }

  componentDidLoad() {
    if (!this.labelPos) {
      this.labelPos = this.option === 'switch' ? 'left' : 'right';
    }
    this.setElementId();
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
          <button class={['active', this.selected ? ' selected' : ''].join(' ')} onClick={() => this.handleClick()}>{this.textOn}</button>
          <button class={['inactive', !this.selected ? ' selected' : ''].join(' ')} onClick={() => this.handleClick()}>{this.textOff}</button>
        </div>
      )
    } else {
      markup = (
        <div class="checkbox-wrapper">
          {this.option === 'switch' && this.labelPos === 'left' ? switchMarkup : ''}
          <label class={["checkbox-container", `checkbox-label-${this.labelPos}`].join(' ')} data-disabled={this.disabled}>
            {this.option === 'checkbox' ? this.label : ''}
            {this.option === 'checkbox' && this.required ? <span class="required">*</span> : ''}
            <input type="checkbox" checked={this.selected} disabled={this.disabled} onClick={() => this.handleClick()} value={this.value}/>
            <span class="checkmark" data-color={this.color}></span>
          </label>
          {this.option === 'switch' && this.labelPos === 'right' ? switchMarkup : ''}
        </div>
      )
    }
    return <div class={[this.option, this.background, this.header ? 'header' : '', this.disabled ? 'disabled' : ''].join(' ')}>{markup}</div>;
  }
}
