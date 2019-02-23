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
  @Prop() mode: "nav" | "classic" | "checkbox" | "expander" = "classic";
  @Watch('mode') PropDidChange() {
    this.updateItemMode()
  }

  componentDidLoad() {
    this.updateItemMode();
  }

  private updateItemMode(){
    let items = this.el.querySelectorAll('se-list-item');
    items.forEach((item) => {
      item.mode = this.mode;
    });
  }

  render() {
    return <slot />;
  }
}
