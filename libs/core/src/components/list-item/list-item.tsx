import {
  Component,
  h,
  Prop,
  Element,
  Watch,
  Event,
  EventEmitter,
  Method,
  State,
} from '@stencil/core';
import arrow2Right from '@se/icons/svg/arrow2_right.svg';

@Component({
  tag: 'se-list-item',
  styleUrl: 'list-item.scss',
  shadow: true,
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
   * Disable the item for any interaction.
   */
  @Prop() disabled: boolean;

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
  // @Prop({ mutable: true }) indentation = 0;

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

  @Method()
  async focusElement() {
    this.buttonElm.focus();
  }
  @Method()
  async blurElement() {
    this.buttonElm.blur();
  }

  @Method()
  async setOption(option) {
    this.showNavIcon = option === 'nav';
  }

  @State() showNavIcon: boolean;

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  getClosestParent() {
    // get the closest between se-list or se-list-group
    return this.el.parentElement && this.el.parentElement.closest('se-list');
  }

  getParentConfig() {
    const closest: any = this.getClosestParent() || {};
    if (closest.option && closest.option === 'nav') {
      this.showNavIcon = true;
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
      <TagType
        role="listitem"
        onClick={() => this.buttonElm.blur()}
        {...attrs}
        ref={el => (this.buttonElm = el)}
        title={title}
        class={{
          button: true,
          selected: this.selected,
          disabled: this.disabled,
        }}
        id={id ? `wc-${id}` : ''}
        tabindex={this.disabled && -1}
        disabled={!this.href && this.disabled}
      >
        {this.selected ? <div class="selectedBar"></div> : ''}
        <slot name="start"></slot>
        <slot name="icon"></slot>
        {(!!this.icon as boolean) ? (
          <se-icon class="icon" color={this.iconColor}>
            {this.icon}
          </se-icon>
        ) : (
          ''
        )}
        <div class="content">
          <div class="list-item-label">
            {this.item}
            <slot name="item"></slot>
          </div>
          <small>
            {myDescription}
            <slot name="description"></slot>
          </small>
        </div>
        <slot></slot>
        <slot name="end"></slot>
        {this.showNavIcon ? (
          <se-icon size="medium" color="standard">
            <span innerHTML={arrow2Right}></span>
          </se-icon>
        ) : (
          ''
        )}
      </TagType>
    );
  }
}
