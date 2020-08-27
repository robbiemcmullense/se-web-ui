import { Component, h, Host, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'se-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class ContainerComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the inner appearance of a container.
   * `fill` is the default option, taking the full space of the container. This option automatically sets the color property to `standard` (gray) if color has not been set.
   * `widget` adds a `small` padding around the container to equally space all child elements. This option automatically sets the color property to `standard` (gray) if color has not been set.
   * `centered` centers the container so the content does not exceed a maximum width.
   * `card` adds a `medium` padding around each child element.  This option automatically sets the color property to `alternative` (white) if color has not been set.
   * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
   * `inherited` will insure that no specific style is applied to the container.
   */
  @Prop() option:
    | 'fill'
    | 'widget'
    | 'card'
    | 'card-old'
    | 'centered'
    | 'inherited' = 'fill';
  @Watch('option') optionDidChange() {
    if (this.color === undefined || this.color === null) {
      if (this.option === 'widget') {
        this.color = 'standard';
        this.setProps();
      } else if (this.option === 'card') {
        this.color = 'alternative';
        this.setProps();
      }
    }
  }
  /**
   * In specific cases, it may be necessary to define the container with an absolute position (such as inside an angular router-container). Most of the time, the default position will work perfectly with CSS flex box.
   * `relative` is the default position. This is perfect to use with flex content.
   * `absolute` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() position: 'relative' | 'absolute' = 'relative';
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() direction: 'column' | 'row' = 'row';
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` will set each container to be as large and high as it's content. Selecting this display will automatically configure each child element to have "display: block".
   */
  @Prop() display: 'flex' | 'block' | 'grid' = 'flex';
  @Watch('display') displayDidChange() {
    // Only direct children will be impacted by the display property
    Array.from(this.el.querySelectorAll('se-container > se-block')).forEach(
      (item: any) => {
        item.display = this.display;
      }
    );
  }
  /**
   * Defines the spacing around the inside edge of a container.
   * `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   * `large` is 16px.
   * `xlarge` is 32px.
   */
  @Prop() padding: 'none' | 'small' | 'medium' | 'large' | 'xlarge';

  /**
   * When in `display="grid"`, defines the mininimum width of a column. It automatically figures out the appropriate number of columns from there.
   * Default is `350px`.
   */
  @Prop() columnSize = '350px';
  @Watch('columnSize') columnSizeDidChange() {
    if (this.display === 'grid') {
      this.el.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.columnSize}, 1fr))`;
    }
  }
  /**
   * When in `display="grid"`, defines the height of each container.  Default is `300px`.
   */
  @Prop() rowSize = '300px';
  @Watch('rowSize') rowSizeDidChange() {
    if (this.display === 'grid') {
      this.el.style.gridAutoRows = this.rowSize;
    }
  }
  /**
   * Defines the background color of the container.
   * `none` has no background.
   * `standard` is `se-background`, light gray.
   * `alternative` is a white background.
   */
  @Prop({ mutable: true }) color: 'none' | 'standard' | 'alternative';

  setProps() {
    Array.from(this.el.querySelectorAll('se-container > se-block')).forEach(
      (item: any) => {
        if (
          this.option === 'widget' ||
          this.option === 'card' ||
          this.option === 'card-old'
        ) {
          item.option = this.option;
        }
      }
    );
  }

  componentWillLoad() {
    this.setProps(); // not having this called here makes the original/new function not actually work as expected. the original function would return this.option as undefined.
    this.optionDidChange();
    this.displayDidChange();
    this.columnSizeDidChange();
    this.rowSizeDidChange();
  }

  render() {
    return (
      <Host
        class={[
          this.option !== 'card-old'
            ? `${this.option}-content`
            : 'card-content',
          this.position,
          this.color ? `ct-bg-${this.color}` : '',
          `${this.direction}-dir`,
          `${this.display}-display`,
          this.padding ? `ct-padding-${this.padding}` : '',
        ].join(' ')}
      >
        {this.option === 'centered' ? (
          <div class="wrapper-center">
            <slot></slot>
          </div>
        ) : (
          <slot></slot>
        )}
      </Host>
    );
  }
}
