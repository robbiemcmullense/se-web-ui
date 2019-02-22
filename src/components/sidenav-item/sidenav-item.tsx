import { Component, Prop } from '@stencil/core';
import { } from 'events';

@Component({
  tag: 'se-sidenav-item',
  styleUrl: 'sidenav-item.scss',
  shadow: true
})
export class SidenavItemComponent {
  @Prop() itemTitle: string = 'default';

  render() {
    return (
      <div>{this.itemTitle} <slot></slot></div>
    );
  }
}
