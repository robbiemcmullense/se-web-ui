import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'se-container',
  styleUrl: 'container.scss',
  shadow: true
})
export class ContainerComponent {
  /**
   * Defines the inner appearance of a container.
   * `widget` Add a small spacing all around the container so all widgets are spaced with the same distance. Widget automatically set color property to `standard` (gray)
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

  /**
   * Defines the direction of the flex element
   * `column` Default. Perfect to use with flex content.
   * `row` Help in specific cases. Make sure you know that you are doing.
   */
  @Prop() direction: 'column' | 'row' = 'row';

  /**
   * Define the color of the background of the container. The default is light gray.
   * `standard` Default. Light grey.
   * `alternative` white background.
   */
  @Prop() color: 'standard' | 'alternative' = 'standard';

  hostData() {
    return {
      'class': [
          `${this.mode}-content`,
          this.position,
          this.color,
          this.direction
        ].join(' ')
    }
  };

  render() {
    return <slot />;
  }
}
