import { Component, Host, h, Prop, Watch, Element} from "@stencil/core";

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
      const closeList = item.closest('se-list');
      // Make sure we only change the style of the current list. Handy if list has a dropdown with a different list style
      if(closeList === this.el){
        item.option = this.option;
      }
    });
  }

  /**
   * Defines if list groups can be collapsed.  The default setting is `true`.
   */
  @Prop() canCollapse = true;
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
    return <Host role="list"><slot></slot></Host>;
  }
}
