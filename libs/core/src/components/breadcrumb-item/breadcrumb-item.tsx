import { Component, Host, h, Prop } from "@stencil/core";
import arrow2Right from "@se/icons/svg/arrow2_right.svg";

@Component({
  tag: "se-breadcrumb-item",
  styleUrl: "breadcrumb-item.scss",
  shadow: true
})
export class BreadcrumbItemComponent {
  /**
   * Indicates whether or not the breadcrumb item should be show a arrow at the end.  The default setting is `false`.
   */
  @Prop() isLast = false;
  /**
   * Indicates the URL you wish to navigate to when clicking on your breadcrumb item.
   */
  @Prop() href: string;

  /**
   * Indicates whether or not the breadcrumb item should be selected.  The default setting is `true`.
   */
  @Prop() canSelect = true;

  render() {
    return (
      <Host role="listitem">
        <div class={{ 'disabled': !this.canSelect }}>
          {this.canSelect ?
            <span class="breadcrumb-item"><a href={this.href}><slot/></a></span>
            :
            <span aria-current='page' class="breadcrumb-item"><slot/></span>}
          {!this.isLast && <se-icon size="small"><span innerHTML={arrow2Right}></span></se-icon>}
        </div>
      </Host>
    )
  }
}
