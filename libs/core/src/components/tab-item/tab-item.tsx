import {
  Component,
  h,
  Prop,
  Element,
} from '@stencil/core';

@Component({
  tag: 'se-tab-item',
  styleUrl: 'tab-item.scss',
  shadow: true,
})
export class TabItemComponent {
  buttonElm?: HTMLElement;

  @Element() el: HTMLElement;
 
  /**
   * Defines if the list element should be selected or not.
   */
  @Prop() selected: boolean;


  /**
   * Disable the item for any interaction.
   */
  @Prop() disabled: boolean;


  /**
   * Determines if se-item configures an `a` tag with an `href` attibute.
   * Default when href is blank configures as a `button` tag.
   */
  @Prop() href: string;

 
  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render() {
 
    const id = this.el.getAttribute('id');
    const TagType = this.href === undefined ? 'button' : ('a' as any);

    const attrs: any = {};
    if (TagType === 'a') {
      attrs.href = this.href;
    }

    return (
      <TagType
        role="listitem"
        onClick={() => this.buttonElm.blur()}
        {...attrs}
        ref={el => (this.buttonElm = el)}
        class={{
          item: true,
          active: this.selected,
          disabled: this.disabled,
        }}
        id={id ? `wc-${id}` : ''}
        
        disabled={!this.href && this.disabled}
        >
        <slot name="start"></slot>
        <div class="text">
          <slot></slot>
        </div>
        <slot name="end"></slot>
        <div class={{indicator: true, display: this.selected}}></div>
      </TagType>
    );
  }
}
