import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import {  } from 'events';

@Component({
  tag: 'se-switch-on-off',
  styleUrl: 'switch-on-off.scss',
  shadow: false
})
export class SwitchOnOffComponent {

  @Prop() textOn: string;
  @Prop() textOff: string;
  @Prop() isDisabled: boolean = false;
  @State() selected: boolean;
  @Event() change: EventEmitter<any>;

  render() {
    return (
      <div class={'se-switch-on-off' + (this.isDisabled ? ' disabled' : '')}>
        <button class={'active' + (this.selected ? ' selected' : '')} onClick={() => this.toggleActive(true)}>{this.textOn}</button>
        <button class={'inactive' + (!this.selected ? ' selected' : '')} onClick={() => this.toggleActive(false)}>{this.textOff}</button>
      </div>
    );
  }

  toggleActive(val) {
    if (!this.isDisabled) {
      this.selected = val;
      this.change.emit({selected: this.selected});
    }
  }
}
