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
  @Prop() mode: "nav" | "classic" = "classic";
  @Watch('mode') PropDidChange() {
    this.updateItemMode()
  }

  componentDidLoad() {
    this.updateItemMode();
  }

  private updateItemMode(){
    const items: any = this.el.querySelectorAll("se-list-item");
    const groups: any = this.el.querySelectorAll("se-list-group");
    const allItems: any[] = [ ...items, ...groups];

    allItems.forEach(item => {
      item.mode = this.mode;
    });
  }

  render() {
    return <slot />;
  }
}
