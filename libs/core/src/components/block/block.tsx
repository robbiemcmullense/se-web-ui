import { Component, h, Host, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'se-block',
  styleUrl: 'block.scss',
  shadow: true,
})
export class BlockComponent {
  @Element() el: HTMLElement;
  /**
   * Defines whether or not a divider will be applied to the se-block header and footer.
   * `true` will add a divider to the se-block-header and se-block-footer, if they are present.
   * `false` will remove dividers on the se-block header and se-block-footer, if they are present.
   */
  @Prop({ mutable: true }) divider = false;
  @Watch('divider') dividerDidChange() {
    this.updateItem();
  }
  /**
   * Defines the se-block outline.
   * Default setting is `false`.
   * Setting this property to `true` will add a 1px border.
   */
  @Prop() outline = false;
  /**
   * Defines the se-block outline color.
   * Default setting is `standard`, which renders the outline with the `$se-super-light-grey` color.
   * `primary` defines the outline color as `$se-life-green`, used primarily for technical applications when the block is selected.
   * `secondary` defines the outline color as `$se-sky-blue`.
   */
  @Prop() outlineColor: 'standard' | 'secondary' | 'primary' = 'standard';
  /**
   * Defines the se-block corner radius.
   * Default setting is `small`, rendering a rounded, 4px rounded corner.
   * `none` is for a sharp, 90 degree corner.
   * `nano` is for a slightly rounded, 2px rounded corner.
   */
  @Prop() corner: 'none' | 'nano' | 'small';
  /**
   * Defines the se-block item's ability to appear clickable / selectable.
   * Default setting is `false`, resulting in no hover effects on the block level.
   * `true` adds a hover effect on the se-block. The cursor will change to `pointer`, a box-shadow will appear, and a `$se-life-green` bar will appear at the top of the block.
   */
  @Prop() clickable = false;
  /**
   * Defines clickable se-block item's bar on hover.
   * Default setting is `false`.
   * `true` renders a `$se-life-green` colored bar on a hover.
   */
  @Prop() clickableBar = false;
  /**
   * Defines the spacing around the outside edge of a block.
   * Default `none` is 0px.
   * `small` is 4px.
   * `medium` is 8px.
   * `large` is 16px.
   * `xlarge` is 32px.
   */
  @Prop() margin: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Defines how to display the element.
   * `flex` is the default display.
   * `block` helps in specific cases. Make sure you know what you are doing.
   */
  @Prop() display: 'flex' | 'block' | 'grid' = 'flex';
  /**
   * Optional property that defines the background color of the block.
   * Default setting is `alternative`, rendering the "alternative" theme background.
   * `none` has no background.
   * `standard` renders the "standard" theme background.
   */
  @Prop() color: 'none' | 'standard' | 'alternative' = 'alternative';
  /**
   * Defines the specific width of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  @Prop() width: string;
  @Watch('width') widthDidChange() {
    this.el.style.width = this.width || 'auto';
    this.el.style.minWidth = this.width || 'auto';
  }
  /**
   * Defines the specific height of a block.  Useful to create easy layouts under `se-container` which uses `flex` by default.
   */
  @Prop() height: string;
  @Watch('height') heightDidChange() {
    this.el.style.height = this.height || 'auto';
    this.el.style.minHeight = this.height || 'auto';
  }
  /**
   * When the display is set to `grid`, this property determines if the block should have double the width and height of a standard grid item.
   * Default setting is `false`, spanning 1 row and 1 column (1/1).
   * `true` spans 2 rows and 2 columns (2/2).
   * `vertical` spans 2 rows (2/1).
   * `horizontal` spans 2 columns (1/2).
   */
  @Prop() enlarged: 'vertical' | 'horizontal' | boolean = false;
  /**
   * Displays the loading icon if set to `true`.  Default setting is `false`.
   */
  @Prop() loading = false;
  /**
   * Defines the visual appearance of a block.
   * Default setting is `basic`, which will remove any spacing.
   * `widget` will create a flat widget look and feel with a `medium` margin around it.
   * `card` will create a card look and feel with rounded corners, and with a `large` margin around it.
   * Pending deprecation - `card-old` follows a prior design pattern with a box-shadow and will be deprecated.
   */
  @Prop() option: 'basic' | 'card' | 'card-old' | 'widget' | 'fill' = 'basic';
  @Watch('option') optionDidChange() {
    this.updateItem();
  }

  componentWillLoad() {
    this.updateSize();
    this.updateItem();
  }

  updateItem() {
    if (this.option !== undefined && this.divider === undefined) {
      this.divider = this.option === 'card' || this.option === 'card-old';
    }

    const childElms = 'se-block-header, se-block-content, se-block-footer';
    Array.from(this.el.querySelectorAll(childElms)).forEach((item: any) => {
      // have to do this because otherwise blocks inside other blocks get settings overridden by higher ancestors
      // Using "closest" function in case the current element is wrapped inside another one
      if (item.closest('se-block') === this.el) {
        if (item.divider === undefined || item.divider === null) {
          item.divider = this.divider;
        }
        if (!item.option) {
          item.option = this.option;
        }
      }
    });
  }

  updateSize() {
    if (this.width) {
      this.el.style.width = this.width;
      this.el.style.minWidth = this.width;
    }
    if (this.height) {
      this.el.style.height = this.height;
      this.el.style.minHeight = this.height;
    }
  }

  render() {
    const outline =
      this.outline === true ? `outline-${this.outlineColor}` : '';
    let enlargedClass = '';

    if (this.display === 'grid') {
      switch (this.enlarged) {
        case false:
          break;
        case 'vertical':
          enlargedClass = 'grid-vertical';
          break;
        case 'horizontal':
          enlargedClass = 'grid-horizontal';
          break;
        default:
          enlargedClass = 'grid-large';
          break;
      }
    }

    return (
      <Host
        class={{
          [`block-${this.display}`]: !!this.display,
          [enlargedClass]: true,
        }}
      >
        <div
          class={[
            'block-body',
            this.clickable === true
              ? `${
                  this.clickableBar !== false ? 'clickable' : 'clickable-nobar'
                }`
              : '',
            this.option,
            this.outline !== undefined ? outline : '',
            this.corner !== undefined ? `corner-${this.corner}` : '',
            this.margin !== undefined ? `margin-${this.margin}` : '',
            this.color !== undefined ? `block-bg-${this.color}` : '',
          ].join(' ')}
        >
          {this.loading ? <se-loading loading={this.loading} /> : ''}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
