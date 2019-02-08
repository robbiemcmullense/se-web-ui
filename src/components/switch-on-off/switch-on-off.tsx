import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';
import {  } from 'events';

@Component({
  tag: 'se-switch-on-off',
  styleUrl: 'switch-on-off.scss',
  shadow: false
})
export class SwitchOnOffComponent {

  @Prop() active: string;
  @Prop() inactive: string;
  @Event() switched: EventEmitter<any>;
  @Element() el: HTMLElement;

  render() {
    return (
      <div>
        <button class="active" onClick={() => this.toggleActive(true)}>{this.active}</button>
        <button class="inactive" onClick={() => this.toggleActive(false)}>{this.inactive}</button>
      </div>
    );
  }

  toggleActive(active) {
    this.switched.emit({active});
  }
}
