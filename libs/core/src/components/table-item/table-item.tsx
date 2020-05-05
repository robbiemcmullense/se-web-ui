import { Component, Host, h, Prop, Element, Watch } from "@stencil/core";

@Component({
  tag: "se-table-item",
  styleUrl: "table-item.scss",
  shadow: true
})
export class TableItemComponent {

  @Element() el: HTMLElement;


  @Prop() option: 'dropdown' | 'text' | 'custom' = 'text';

  /**
  * Defines the specific flex-basis of a block.
  */
  @Prop() flex: string;
  @Watch("flex") flexDidChange() {
    this.updateSize();
  }
  /**
  * Defines the specific width of a block, for items that should not be flexible.
  */
  @Prop() width: string;
  @Watch("width") widthDidChange() {
    this.updateSize();
  }
  /**
   * Optional property defines the tag type within the `se-table-item`.
   * Default value `false` defines the tag type as `div`.
   * `true` defines the tag type as a `button`.
   */
  @Prop() clickable = false;


  updateSize() {
    // reset all sizes first
    this.el.style.flex = '';
    if (!!this.flex) {
      this.el.style.flex = this.flex;
    }
    this.el.style.maxWidth = '';
    if (!!this.width) {
      this.el.style.maxWidth = this.width;
    }
  }

  componentWillLoad() {
    this.updateSize();
  }

  render() {
    return (
      <Host
        role="cell"
        class={["se-table-item", `opt-${this.option}`].join(' ')}
        >
        <div class="table-item-content">
          <div class="table-item-label"><slot></slot></div>
        </div>
      </Host>
    )
  }
}
