import { Component, h, Host, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'se-radio-on-off',
  styleUrl: 'radio-on-off.scss',
  shadow: true
})

export class RadioOnOffComponent {
  /**
   * Defines the visual appearance of the on/off radio switch.
   * `default` is the default option.
   * Use `header` if the on/off radio switch is within a header element to reduce its visual height.
   */
  @Prop() option: 'default' | 'header' = 'default';
  /**
   * Defines the background color of the button. Default is `standard`, rendering a light gray background color.
   */
  @Prop() color: 'standard' | 'alternative' = 'standard';
  /**
   * Defines the text the user will see for the "on" or "active" part of the radio switch.  Set to `ON` by default.
   */
  @Prop() textOn: string = 'ON';
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the radio switch.  Set to `OFF` by default.
   */
  @Prop() textOff: string = 'OFF';
  /**
   * Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
	 * Determines whether or not the switch is "on" or "off" when you initialize it.
	 * Sets the switch to the "on" position if `true`.
	 */
  @Prop({mutable: true}) value: boolean;
  @State() selected: boolean;
  /**
   * Passes the current state (true or false) to the parent component when clicking on a button in the group.
   */
  @Event() didChange: EventEmitter<any>;

  toggleActive() {
    if (!this.disabled) {
      this.selected = !this.selected;
      this.didChange.emit({ selected: this.selected });
    }
  }

  componentDidLoad() {
		if (this.value) {
			this.selected = this.value;
		}
	}

  render() {
    return (
      <Host class={[this.option, this.color, this.disabled ? 'disabled' : ''].join(' ')}>
        <button class={['active', this.selected ? ' selected' : ''].join(' ')} onClick={() => this.toggleActive()}>{this.textOn}</button>
        <button class={['inactive', !this.selected ? ' selected' : ''].join(' ')} onClick={() => this.toggleActive()}>{this.textOff}</button>
      </Host>
    )
  }
}