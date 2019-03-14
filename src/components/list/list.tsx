import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-list",
  styleUrl: "list.scss",
  shadow: true
})
export class ListComponent {
  @Element() el: HTMLElement;

  /**
   * Define the style of the list
   */
  @Prop() mode: "nav" | "classic" | "dropdown" | "treeview" = "classic";
  @Watch('mode') PropDidChange() {
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item: any) => {
      item.mode = this.mode;
    });
  }

  componentWillLoad() {
    this.PropDidChange();
  }

  render() {
    return <slot />;
  }
}
