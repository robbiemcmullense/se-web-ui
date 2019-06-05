import { Component, h, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-list",
  styleUrl: "list.scss",
  shadow: true
})
export class ListComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the style of the list.  The default setting is `classic`.
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" | "headline" = "classic";
  @Watch('option') optionDidChange() {
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item: any) => {
      item.option = this.option;
    });
  }

  /**
   * Defines if list groups can be collapsed, true by default.
   */
  @Prop() canCollapse: boolean = true;
  @Watch('canCollapse') canCollapseDidChange() {
    Array.from(this.el.querySelectorAll('se-list-group')).forEach((item: any) => {
      item.canCollapse = this.canCollapse;
    });
  }

  componentWillLoad() {
    this.optionDidChange();
    this.canCollapseDidChange();
  }

  render() {
    return <slot></slot>;
  }
}
