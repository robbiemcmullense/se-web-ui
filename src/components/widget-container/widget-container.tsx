import { Component } from '@stencil/core';

@Component({
  tag: 'se-widget-container',
  styleUrl: 'widget-container.scss',
  shadow: true
})
export class MyComponent {

  render() {
    return <slot />;
  }
}
