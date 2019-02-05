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
  @Event() hasChanged: EventEmitter<any>;
  @Element() el: HTMLElement;

  render() {
    return (
      <div>
        <button class="active" onClick={(event: UIEvent) => this.toggleActive(event)}>{this.active}</button>
        <button class="inactive" onClick={(event: UIEvent) => this.toggleActive(event)}>{this.inactive}</button>
      </div>
    );
  }

  toggleActive(event) { 
    this.hasChanged.emit(event.target);
  }
}
