import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "se-breadcrumb-item",
  styleUrl: "breadcrumb-item.scss",
  shadow: true
})
export class BreadcrumbItemComponent {
  /**
   * Defines the value of your breadcrumb item.
   */
  @Prop() value: string;
  /**
   * Indicates whether or not the breadcrumb item should be selected.  The default setting is `false`.
   */
  @Prop() isLast: boolean = false;
  /**
   * Indicates the URL you wish to navigate to when clicking on your breadcrumb item.
   */
  @Prop() href: string;

  render() {
    return (
      <Host class={{ 'selected': this.isLast }}>
        {this.isLast ?
          <li aria-current='page' class="breadcrumb-item">{this.value}</li>
          :
          [<li class="breadcrumb-item"><a href={this.href}>{this.value}</a></li>,
          <se-icon size="small">arrow2_right</se-icon>]}
      </Host>
    )
  }
}