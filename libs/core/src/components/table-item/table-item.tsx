import { Component, Host, h, Prop, Element, Watch, State } from "@stencil/core";

@Component({
  tag: "se-table-item",
  styleUrl: "table-item.scss",
  shadow: true
})
export class TableItemComponent {

  @Element() el: HTMLElement;
  /**
  * Defines the specific flex-basis of a block.
  */
  @Prop() flex: string;
  @Watch("flex") flexDidChange() {
    this.updateSize();
  }
  /**
   * Optional property defines the tag type within the `se-table-item`.
   * Default value `false` defines the tag type as `div`.
   * `true` defines the tag type as a `button`.
   */
  @Prop() clickable: boolean = false;

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
  }

  componentWillLoad() {
    this.updateSize();
  }

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    const TagType = this.clickable ? 'button' : 'div' as any;
    return (
      <Host 
        role="cell"
        class={["se-table-item"].join(' ')}
        id={this.innerId}
        >
        <TagType class={"table-item-content"}>
          <div class="table-item-label"><slot></slot></div>
        </TagType>
      </Host>
    )
  }
}
