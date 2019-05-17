import { Component, h } from '@stencil/core';

@Component({
  tag: 'se-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class AppComponent {

  render() {
    return <div class="se-app-body"><slot></slot></div>;
  }
}
