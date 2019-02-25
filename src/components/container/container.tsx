import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-container',
  styleUrl: 'container.scss',
  shadow: true
})
export class ContainerComponent {
  /**
   * Defines the inner apparance of a container.
   * `widget` Add a small spacing all around the container so all widgets are spaced with the same distance.
   * `fill` Default. Take the full space of the container.
   * `centered` center the container so the content does no exceed a max width.
   */
  @Prop() mode: 'widget' | 'fill' | 'centered' | 'card' = 'fill';
 /**
   * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box.
   * `relative` Default. Perfect to use with flex content.
   * `absolute` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() position: 'relative' | 'absolute' = 'relative';

  hostData() {
    return {
      'class': {
        'widget-content': this.mode === 'widget',
        'full-content': this.mode === 'fill',
        'card-content': this.mode === 'card',
        'centered-content': this.mode === 'centered',
        'relative': this.position === 'relative',
        'absolute': this.position === 'absolute'
      }
    };
  }
  render() {
    return <slot />;
  }
}
