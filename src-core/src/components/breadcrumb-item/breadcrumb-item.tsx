import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "se-breadcrumb-item",
  styleUrl: "breadcrumb-item.scss",
  shadow: true
})
export class BreadcrumbItemComponent {
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
      <Host role="listitem">
        <div class={{ 'selected': this.isLast }}>
          {this.isLast ?
            <span aria-current='page' class="breadcrumb-item"><slot/></span>
            :
            [<span class="breadcrumb-item"><a href={this.href}><slot/></a></span>,
            <se-icon size="small">arrow2_right</se-icon>]}
        </div>
      </Host>
    )
  }
}