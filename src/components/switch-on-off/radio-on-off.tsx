import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { } from 'events';

@Component({
  tag: 'se-radio-on-off',
  styleUrl: 'radio-on-off.scss',
  shadow: false
})
export class SwitchOnOffComponent {

  @Prop() mode: 'default' | 'header' = 'default';
  @Prop() textOn: string = 'ON';
  @Prop() textOff: string = 'OFF';
  @Prop() isDisabled: boolean = false;
  @State() selected: boolean;
  @Event() change: EventEmitter<any>;

  render() {
    return (
      <div data-mode={this.mode} class={'se-switch-on-off' + (this.isDisabled ? ' disabled' : '')}>
        <button class={'active' + (this.selected ? ' selected' : '')} onClick={() => this.toggleActive()}>{this.textOn}</button>
        <button class={'inactive' + (!this.selected ? ' selected' : '')} onClick={() => this.toggleActive()}>{this.textOff}</button>
      </div>
    );
  }

  toggleActive() {
    if (!this.isDisabled) {
      this.selected = !this.selected;
      this.change.emit({ selected: this.selected });
    }
  }
}