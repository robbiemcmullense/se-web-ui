import { Component } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {

  render() {
    return (
      <button type="button">
        <slot></slot>
      </button>
    )
  }
}



