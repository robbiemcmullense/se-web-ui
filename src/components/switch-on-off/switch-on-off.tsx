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
  @Prop() isDisabled: boolean;
  @State() selected: boolean;
  @Event() change: EventEmitter<any>;

  render() {
    return (
      <div class="se-switch-on-off">
        <button class={'active' + (this.selected ? ' selected' : '')} onClick={(event: UIEvent) => this.toggleActive(event)}>{this.textOn}</button>
        <button class={'inactive' + (!this.selected ? ' selected' : '')} onClick={(event: UIEvent) => this.toggleActive(event)}>{this.textOff}</button>
      </div>
    );
  }

  toggleActive(event) {
    this.selected = !this.selected;
    this.change.emit(event.target);
  }
}
