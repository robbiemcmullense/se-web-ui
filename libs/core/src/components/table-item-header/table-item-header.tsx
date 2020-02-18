import { Component, Host, h, Prop, Element, Watch, State } from "@stencil/core";

@Component({
  tag: "se-table-item-header",
  styleUrl: "table-item-header.scss",
  shadow: true
})
export class TableItemHeaderComponent {

  @Element() el: HTMLElement;
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
  @Prop() clickable: boolean = false;
  /**
   * Optional property that provides the arrow icon based on which string is provided, and also causes the `clickable` property to `true`.
   * `asc` defines the icon as an upwards arrow in black.
   * `desc` defines the icon as a downwards arrow in black.
   * `none` defines the icon as an upwards arrow in grey.
   */
  @Prop() sort: "asc" | "desc" | "none";

  @State() innerId;

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      this.innerId = `wc-${id}`;
    }
  }

  private updateSize() {
    // reset all sizes first
    this.el.style.flex = '';
    if (this.flex) {
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

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    let ariaLabelSort
    let color
    if (!!this.sort) {
      this.clickable = true;
      if (this.sort === "asc") {
        ariaLabelSort = "sort asc";
      } else if (this.sort === "desc") {
        ariaLabelSort = "sort desc";
      } else {
        color = "standard"
      }
    } else {
      ariaLabelSort = null;
    }
    const TagType = this.clickable || !!this.sort ? 'button' : 'div' as any;
    return (
      <Host 
        role="cell"
        class={["se-table-item", !!this.sort ? `sort-${this.sort}` : ''].join(' ')}
        id={this.innerId}
        >
        <TagType class={"table-item-content"} aria-label={ariaLabelSort}>
          <div class="table-item-label"><slot></slot></div>
          {!!this.sort ? 
            <se-icon 
              class={["sortable", !!this.sort ? `sort-${this.sort}` : ''].join(' ')}
              aria-hidden="true" 
              size="nano"
              color={color}>
                arrow4_top
            </se-icon> : ''}
        </TagType>
      </Host>
    )
  }
}
