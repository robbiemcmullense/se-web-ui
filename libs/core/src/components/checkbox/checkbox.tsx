import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
} from '@stencil/core';
import { option, size } from './constants';
import { CommonProps, Option, Size } from './types';
import { CheckboxOnOff } from './checkbox-onoff';
import { CheckboxFake } from './checkbox-fake';
import { CheckboxCommon } from './checkbox-common';

@Component({
  tag: 'se-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class CheckboxComponent {
  @Element() el: HTMLElement;

  /**
   * Determines the visual appearance of the component.
   * `checkbox` is the default option, which will render the component like a standard HTML checkbox.
   * `checkbox-fake` will render the component exactly like `checkbox` but it will not have any interactive elements.
   *    It means it will not be accessible with keyboard, it will not trigger any unwanted events -- totally "dumb" component.
   * `switch` renders the component like a toggle switch.
   * `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button.
   */
  @Prop({ mutable: true }) option: Option = option.CHECKBOX;

  /**
   * The value you want to pass to the parent component when the checkbox is checked.
   */
  @Prop() value: string;

  /**
   * The label of the checkbox that will be attached to the box.
   */
  @Prop() label: string;

  /**
   * Sets suffix of the label shown with semi-transparent text just after the label.
   */
  @Prop() labelSuffix: string;

  /**
   * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
   */
  @Prop({ mutable: true }) required = false;

  /**
   * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
   * The default value is `success`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop({ mutable: true }) color: 'primary' | 'secondary' | 'success' =
    'success';

  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop({ mutable: true }) disabled = false;

  /**
   * Optional property that defines if the checkbox is in indeterminate state (only work with option="checkbox").  Set to `false` by default.
   */
  @Prop({ mutable: true }) indeterminate = false;

  /**
   * The "checked" state of the checkbox, `false` by default.
   */
  @Prop({ mutable: true }) selected: boolean;

  /**
   * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.
   */
  @Prop({ mutable: true }) textOn = 'ON';

  /**
   * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.
   */
  @Prop({ mutable: true }) textOff = 'OFF';

  /**
   * Reduces the visual height of the checkbox when the option is set to `onoff`.
   * Useful if the on/off checkbox is within a header element.
   */
  @Prop({ mutable: true }) header = false;

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
   * Defines the size of the control. So far it's only supported by checkbox.
   *
   * There are two options:
   * `s`: 16px
   * `m`: 20px (default)
   *
   * Also affects the font size of the checkbox text label:
   * `s`: 14px
   * `m`: 16px (default)
   */
  @Prop({ mutable: true }) size: Size = size.SMALL;

  /**
   * Sets the required property on the checkbox element.  Used when the checkbox is within a form field.
   */
  @Method()
  async setRequired(): Promise<void> {
    this.required = true;
  }

  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didChange: EventEmitter<{ value: string; selected: boolean }>;

  handleClick(state: boolean, event = null): void {
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

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  toggleSelect = (): void => {
    this.handleClick(!this.selected);
  };

  componentWillLoad(): void {
    // to take care of angular bundling issue:
    this.selected =
      this.selected === undefined ? !!this.el['checked'] : this.selected;

    if (!this.labelPos) {
      this.labelPos =
        this.option === option.CHECKBOX || this.option === option.CHECKBOX_FAKE
          ? 'right'
          : 'left';
    }
  }

  render(): HTMLElement {
    const commonProps: CommonProps = {
      option: this.option,
      label: this.label,
      labelPos: this.labelPos,
      labelSuffix: this.labelSuffix,
      required: this.required,
      disabled: this.disabled,
      selected: this.selected,
      header: this.header,
      padding: this.padding,
      size: this.size,
    };

    switch (this.option) {
      case option.ONOFF: {
        return (
          <CheckboxOnOff
            {...commonProps}
            id={this.el.getAttribute('id')}
            textOn={this.textOn}
            textOff={this.textOff}
            onOnClick={e => this.handleClick(true, e)}
            onOffClick={e => this.handleClick(false, e)}
          />
        );
      }
      case option.CHECKBOX_FAKE: {
        return (
          <CheckboxFake
            {...commonProps}
            value={this.value}
            color={this.color}
            indeterminate={this.indeterminate}
          />
        );
      }
      default: {
        return (
          <CheckboxCommon
            {...commonProps}
            id={this.el.getAttribute('id')}
            onToggle={this.toggleSelect}
            value={this.value}
            color={this.color}
            indeterminate={this.indeterminate}
          />
        );
      }
    }
  }
}
