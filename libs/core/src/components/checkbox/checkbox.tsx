import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'se-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
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
  @Prop({ mutable: true }) required = false;
  /**
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
   * The default value is `success`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop() color: 'primary' | 'secondary' | 'success' = 'success';

  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;
  /**
   * The "checked" state of the checkbox, `false` by default.
   */
  @Prop({ mutable: true }) selected: boolean;
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
   * optional property. define the padding around the button
   * `none` no padding.
   * `small` 4px padding: default
   * `medium` 8px padding.
   * `large` 16px padding.
   */
  @Prop({ mutable: true }) padding: 'none' | 'small' | 'medium' | 'large' =
    'none';

  /**
   * Sets the position of the label for your checkbox component.
   * The default setting is `right` when the option is set to `checkbox`.
   * The default setting is `left` when the option is set to `switch`.
   */
  @Prop({ mutable: true }) labelPos: 'left' | 'right';
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

  handleClick(state: boolean, event = null) {
    if (event !== null) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!this.disabled) {
      this.selected = state;
      const checkboxObject = { value: this.value, selected: this.selected };
      this.didChange.emit(checkboxObject);
    }
  }

  toggleSelect() {
    this.handleClick(!this.selected);
  }

  componentWillLoad() {
    // to take care of angular bundling issue:
    this.selected =
      this.selected === undefined ? !!this.el['checked'] : this.selected;

    if (!this.labelPos) {
      this.labelPos = this.option === 'checkbox' ? 'right' : 'left';
    }
  }

  render() {
    let markup: any;
    const id = this.el.getAttribute('id');

    switch (this.option) {
      case 'onoff':
        markup = (
          <div class="on-off-wrapper">
            <button
              disabled={this.disabled}
              class={{ active: true, selected: this.selected }}
              onClick={e => this.handleClick(true, e)}
              id={id ? `wc-${id}-active` : ''}
            >
              {this.textOn}
            </button>
            <button
              disabled={this.disabled}
              class={{ inactive: true, selected: !this.selected }}
              onClick={e => this.handleClick(false, e)}
              id={id ? `wc-${id}-inactive` : ''}
            >
              {this.textOff}
            </button>
          </div>
        );
        break;
      default:
        markup = (
          <span class="checkbox-container" onClick={() => this.toggleSelect()}>
            <input
              type="checkbox"
              tabindex="-1"
              checked={this.selected}
              disabled={this.disabled}
              value={this.value}
              id={id ? `wc-${id}` : ''}
            />
            <button
              class={{
                checkmark: true,
                [this.color]: !!this.color,
                checked: this.selected,
              }}
              disabled={this.disabled}
            ></button>
          </span>
        );
        break;
    }

    return (
      <label
        class={{
          [`checkbox-label-${this.labelPos}`]: !!this.labelPos,
          disabled: this.disabled,
          'checkbox-wrapper': true,
          [`opt-${this.option}`]: true,
          [`p-${this.padding}`]: !!this.padding,
          header: !!this.header,
        }}
      >
        <span>
          <span class="checkbox-label">{this.label}</span>
          {this.required && <span class="required">*</span>}
        </span>
        {markup}
      </label>
    );
  }
}
