import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Watch,
  Event,
  EventEmitter,
  Method
} from '@stencil/core';
import arrow2Right from '@se/icons/svg/arrow2_right.svg';

@Component({
  tag: 'se-list-item',
  styleUrl: 'list-item.scss',
  shadow: true
})
export class ListItemComponent {
  buttonElm?: HTMLElement;

  @Element() el: HTMLElement;
  /**
   * Defines the title of the item.
   */
  @Prop() item: string;
  /**
   * Defines the description of the item, placed under its title.
   */
  @Prop() description: string;
  /**
   * Defines if the list element should be selected or not.
   */
  @Prop() selected: boolean;
  /**
   * Places an icon on the left side of the item list.
   */
  @Prop() icon: string;
  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor:
    | 'standard'
    | 'alternative'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  /**
   * Defines the group indentation to add paddings to the list item (used with multiple list groups).
   */
  @Prop({ mutable: true }) indentation = 0;
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  @Prop({ mutable: true }) option:
    | 'nav'
    | 'classic'
    | 'dropdown'
    | 'treeview'
    | 'headline';
  /**
   * Determines if se-item configures an `a` tag with an `href` attibute.
   * Default when href is blank configures as a `button` tag.
   */
  @Prop() href: string;

  /**
   * Event emitted to notify the list-group component that the selected state has changed.
   */
  @Event() didSelectedChange: EventEmitter<void>;
  @Watch('selected') SelectedDidChange() {
    this.didSelectedChange.emit();
  }


  paddingIndentation = 24;


  @Method()
  async focusElement() {
    this.buttonElm.focus();
  }

  getClosestParent() {
    // get the closest between se-list or se-list-group
    return this.el.parentElement.closest('se-list, se-list-group');
  }

  getParentConfig() {
    const closest: any = this.getClosestParent() || {};
    const indentation = closest.indentation;
    if (indentation !== null && indentation !== undefined) {
      this.indentation = indentation + 1;
    }
    if (closest.option) {
      this.option = closest.option;
    }
  }

  componentWillLoad() {
    this.getParentConfig();
  }

  render() {
    let myDescription = null;
    let title = this.item;

    if (!!this.description as boolean) {
      myDescription = <small>{this.description}</small>;
      title = `${title}, ${this.description}`;
    }
    const id = this.el.getAttribute('id');
    const TagType = this.href === undefined ? 'button' : ('a' as any);

    const attrs: any = {};
    if (TagType === 'a') {
      attrs.href = this.href;
    }

    return (
      <Host role="listitem" onClick={() => this.buttonElm.blur()}>
        <TagType
          {...attrs}
          ref={el => (this.buttonElm = el)}
          title={title}
          class={{
            selected: this.selected,
            button: true,
            [this.option]: true,
            ['se-list-item']: true
          }}
          style={{
            paddingLeft: `${this.paddingIndentation * this.indentation}px`
          }}
          id={id ? `wc-${id}` : ''}>
          {this.selected ? <div class="selectedBar"></div> : ''}
          <div class="nav-icon">
            {(!!this.icon as boolean) ? <se-icon color={this.iconColor}>{this.icon}</se-icon> : ''}
            <slot name="icon"></slot>
          </div>
          <div class="nav-content">
            <div class="list-item-label">{this.item}</div>
            {myDescription}
          </div>
          <slot></slot>
          {this.option === 'nav' ? (
            <se-icon size="medium" color="standard">
              <span innerHTML={arrow2Right}></span>
            </se-icon>
          ) : (
            ''
          )}
        </TagType>
      </Host>
    );
  }
}
