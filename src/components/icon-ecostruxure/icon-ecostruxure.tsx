import { Component } from '@stencil/core';
// import svgContent from './icon-ecostruxure.svg';

@Component({
  tag: 'se-icon-ecostruxure',
  styleUrl: 'icon-ecostruxure.scss',
  shadow: true
})
export class IconEcostruxureComponent {

  render() {
    return <span>EcoStruxure</span>;

    // return <div innerHTML={svgContent}></div>;
  }
}
