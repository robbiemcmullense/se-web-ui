import { Component, Prop, Watch, Element } from "@stencil/core";

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
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" = "classic";
  @Watch('option') PropDidChange() {
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item: any) => {
      item.option = this.option;
    });
  }

  componentWillLoad() {
    this.PropDidChange();
  }

  render() {
    return <slot />;
  }
}