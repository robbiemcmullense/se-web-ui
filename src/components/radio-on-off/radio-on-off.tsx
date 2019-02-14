import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { } from 'events';

@Component({
  tag: 'se-radio-on-off',
  styleUrl: 'radio-on-off.scss',
  shadow: true
})
export class RadioOnOffComponent {
  /**
   * Defines the visual appearance of the on/off radio switch.
   * `default` is the default mode.
   * Use `header` if the on/off radio switch is within a header element to reduce its visual height.
   */
  @Prop() mode: 'default' | 'header' = 'default';
  /**
   * Defines the text the user will see for the "on" or "active" part of the radio switch.
   */
  @Prop() textOn: string = 'ON';
  /**
   * Defines the text the user will see for the "off" or "inactive" part of the radio switch.
   */
  @Prop() textOff: string = 'OFF';
  /**
   * Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.
   */
  @Prop({mutable: true}) disabled: boolean = false;
  @State() selected: boolean;
  /**
   * Passes the current state (true or false) to the parent component when clicking on a button in the group.
   */
  @Event() change: EventEmitter<any>;

  render() {
    return (
      <div data-mode={this.mode} class={'se-radio-on-off' + (this.disabled ? ' disabled' : '')}>
        <button class={'active' + (this.selected ? ' selected' : '')} onClick={() => this.toggleActive()}>{this.textOn}</button>
        <button class={'inactive' + (!this.selected ? ' selected' : '')} onClick={() => this.toggleActive()}>{this.textOff}</button>
      </div>
    );
  }

  toggleActive() {
    if (!this.disabled) {
      this.selected = !this.selected;
      this.change.emit({ selected: this.selected });
    }
  }
}