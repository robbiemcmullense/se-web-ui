import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
  Host,
} from '@stencil/core';

@Component({
  tag: 'se-radio',
  styleUrl: 'radio.scss',
  shadow: true,
})
export class RadioComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the name of the form field to attach the .
   */
  @Prop() name: string;

  /**
   * Defines the value you want to pass to the parent component when the radio button is checked.
   */
  @Prop() value: string;
  /**
   * Defines the label that will display next to the radio button.
   */
  @Prop() label: string;
  /**
   * Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.
   */
  @Prop({ mutable: true }) required = false;
  /**
   * Defines the color of the checkbox.
   * The default setting is `primary`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';

  /**
   * optional property. define the padding around the button
   * `none` no padding.
   * `small` 4px padding: default
   * `medium` 8px padding.
   * `large` 16px padding.
   */
  @Prop({ mutable: true }) padding: 'none' | 'small' | 'medium' | 'large' =
    'small';

  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;
  /**
   * Determines whether or not the checkbox is checked when you initialize it.
   * The default setting is `false`.
   * Checked if set to `true`.
   */
  @Prop({ mutable: true }) selected = false;
  /**
   * Sets the position of the label for your checkbox component.
   * The default setting is `right`.
   */
  @Prop() labelPos: 'left' | 'right' = 'right';
  /**
   * Sets the required property on the radio button element.
   */
  @Method()
  async setRequired() {
    this.required = true;
  }
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didCheck: EventEmitter;

  handleClick() {
    // console.log('radio handleClick');
    this.selected = !this.selected;
    const checkboxObject = { value: this.value, selected: this.selected };
    this.didCheck.emit(checkboxObject);
  }

  render() {
    const id = this.el.getAttribute('id');

    return (
      <Host class={{ [`p-${this.padding}`]: !!this.padding }}>
        <div
          role="radio"
          aria-disabled={this.disabled ? 'true' : null}
          aria-checked={`${this.selected}`}
          aria-label={this.label}
          aria-required={this.required}
          class={{
            [`label-${this.labelPos}`]: !!this.labelPos,
            'radio-label': true,
          }}
          data-disabled={this.disabled ? true : null}
          onClick={() => this.handleClick()}
        >
          {this.label}
          {this.required ? <span class="required">*</span> : ''}
          <input
            type="radio"
            tabindex="-1"
            name={this.name}
            checked={this.selected}
            disabled={this.disabled ? true : null}
            id={id ? `wc-${id}` : ''}
          />
          <button
            class={{ [this.color]: !!this.color, checked: this.selected }}
            disabled={this.disabled ? true : null}
          ></button>
        </div>
      </Host>
    );
  }
}
