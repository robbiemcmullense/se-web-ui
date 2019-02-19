import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { } from 'events';

@Component({
  tag: 'se-sidenav-item',
  styleUrl: 'sidenav-item.scss',
  shadow: true
})
export class SidenavItemComponent {
  @Prop() title: string = 'default';

  render() {
    return (
      <div>{this.title}</div>
    );
  }
}
