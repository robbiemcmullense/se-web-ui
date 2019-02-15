import { Component } from '@stencil/core';
// import svgContent from './icon-ecostruxure.svg';

@Component({
  tag: 'se-icon-schneider',
  styleUrl: 'icon-schneider.scss',
  shadow: true
})
export class IconSchneiderComponent {

  render() {
    // return <div innerHTML={svgContent}></div>;
    return <span>schneider Logo</span>
  }
}
