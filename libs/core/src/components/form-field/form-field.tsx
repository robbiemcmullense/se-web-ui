import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
  Listen,
  Watch,
  State,
} from '@stencil/core';
// import ResizeObserver from 'resize-observer-polyfill';

@Component({
  tag: 'se-form-field',
  styleUrl: 'form-field.scss',
  shadow: false,
})
export class FormFieldComponent {
  @Element() el: HTMLElement;

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }
  private inputWrapper?: HTMLElement;
  // private sizeMedium = 501;

  /**
   * Defines the layout of your form field.
   * `inline` is the default option, and is always applied if the type is set to `checkbox`.  This sets the input or select field adjacent to the label.
   * `stacked` option will render the input or select field below the label.
   * @deprecated use `stacked` property instead
   */
  @Prop() option: 'inline' | 'stacked' = 'inline';

  /**
   * Defines the layout of your form field. If `true`, the input field will render bellow the label.
   */
  @Prop() stacked = false;

  /**
   * Defines the spacing around the inside edge of a container.
   * `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   */
  @Prop() padding: 'none' | 'small' | 'medium' = 'small';

  /**
   * Optional property that defines if the field displays as a block in it's container.
   * When set to true, the field will be as wide as its container.
   * both field label auto adjust when it set to inline
   */
  @Prop() block: boolean;

  /**
   * Optional property to define the proportion of the label width. The content (input) will take the rest of if. Defaulted to 40%
   */

  @Prop() labelWidth = '35%';

  /**
   * Optional property to define how to align the label
   */

  @Prop() labelAlign: 'left' | 'right' = 'right';

  /**
   * Defines whether the form field's input is a text field (`input`), a checkbox (`checkbox`), a radio button (`radio`), or a dropdown menu (`select`).
   * `input` is the default type.
   */
  @Prop() type: 'input' | 'checkbox' | 'radio' | 'select' = 'input';
  /**
   * Sets a red border on an input field if there's an error, an orange border if there's a warning, and a green border if a successful input.
   */
  @Prop() status: 'error' | 'warning' | 'success';
  /**
   * Defines the text value of the label in your form field.
   */
  @Prop() label: string;

  /**
   * Defines if the field is a text, to add a padding and better align with other fields.
   */
  @Prop() textOnly: boolean;

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
  @Prop() required = false;
  /**
   * Optional property that defines if the form field is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;

  /**
   * Optional property that defines if the form-filed should not stack even if the container is small (it won't be responsive).
   */
  @Prop() noStacking = false;
  /**
   * Optional property that defines the minumum width after witch the form field will move to stacked mode.
   */
  @Prop() minWidth = 321;

  /**
   * Passes form data to the parent component on a click (`checkbox` or `radio`), menu change (`select`), or when the input field loses focus.
   */
  @Event() didSubmit: EventEmitter;

  @Listen('change') inputSelectListenerHandler(event) {
    this.handleEvent(event);
  }

  @Listen('didChange') checkboxListenerHandler(event) {
    this.handleEvent(event);
  }

  @Listen('didCheck') radioListenerHandler(event) {
    this.handleEvent(event);
  }

  @Watch('disabled') disabledDidChange() {
    this.initLabel();
  }

  @Watch('type') typeDidChange() {
    this.initLabel();
  }

  initLabel() {
    Array.from(
      this.el.querySelectorAll(
        'input, select, textarea, se-checkbox, se-radio-group'
      )
    ).forEach((item: any) => {
      item.disabled = this.disabled;
    });
  }
  @State() isSmall: boolean;
  // @State() isMedium: boolean;

  ro: ResizeObserver;
  componentDidLoad() {
    this.ro = new ResizeObserver(_ => {
      this.isSmall = this.inputWrapper.clientWidth < this.minWidth;
      // this.isMedium = this.inputWrapper.clientWidth < this.sizeMedium;
    });
    if (this.ro) {
      this.ro.observe(this.inputWrapper);
    }
  }
  componentWillLoad() {
    this.initLabel();
  }

  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }
  }

  handleEvent(event: any) {
    if (!this.disabled) {
      this.value = event.detail ? event.detail.selected : event.target.value;
      this.didSubmit.emit(this.value);
    }
  }

  render() {
    const shouldStack =
      this.option === 'stacked' ||
      this.stacked ||
      (this.isSmall && !this.noStacking);
    return (
      <div
        class={{
          [`ff-${this.status}`]: true,
          'ff-stacked': shouldStack,
          'ff-block': this.block,
          [`ff-padding-${this.padding}`]: true,
          'form-field-wrapper': true,
        }}
      >
        <label
          data-disabled={this.disabled}
          ref={el => (this.inputWrapper = el)}
        >
          <span
            style={{
              width: !shouldStack ? this.labelWidth : 'auto',
              minWidth: !shouldStack ? this.labelWidth : '140px',
            }}
            class={{
              'with-label': !!this.label,
              [`align-${this.labelAlign}`]: true,
            }}
          >
            {' '}
            <span>
              {this.label}
              {this.required && (
                <span class="required" title="required">
                  *
                </span>
              )}
            </span>
          </span>
          <div class={{ 'ff-wrapper': true, textOnly: this.textOnly }}>
            <div class="ff-wrapper-input">
              <slot></slot>
            </div>
          </div>
        </label>
      </div>
    );
  }
}
