import { Component, h } from '@stencil/core';
import IconSchneider from './icon-schneider.svg';

@Component({
  tag: 'se-icon-schneider',
  styleUrl: 'icon-schneider.scss',
  shadow: true
})
export class IconSchneiderComponent {

  render() {
    return <div innerHTML={IconSchneider}></div>;
  }
}
