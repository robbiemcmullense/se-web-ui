import {
  Component,
  h,
  Prop,
  State,
  Method,
  Element,
  Event,
  EventEmitter,
  Listen,
  Host,
  Watch,
} from '@stencil/core';

import { isTouchDevice, createPopper } from '../../utils';

@Component({
  tag: 'se-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class DropdownComponent {
  elmButton: HTMLSpanElement;
  elmDropdown: HTMLDivElement;
  popperInstance;

  @Element() el: HTMLElement;

  /**
   * Defines how to align the dropdown container.
   * `end`: Position the container with respect to the end side (right) of the trigger element.
   * `start`: Position the container with respect to the right side of the trigger element.
   * `right` (deprecated): Position the container with respect to the right side of the trigger element.
   * `left` (deprecated): Position the container with respect to the left side of the trigger element.
   */
  @State() _alignment;
  @Prop() alignment: 'end' | 'start' | 'right' | 'left' = 'start';
  @Watch('alignment') alignmentChange() {
    this._alignment = ['left', 'start'].includes(this.alignment)
      ? 'start'
      : 'end';
  }
  /**
   * Defines the preferred vertically align of the dropdown. It will automatically re-position if the there is not enough space.
   * `top`: Position the container with respect to the top side of the trigger element.
   * `bottom`: Position the container with respect to the bottom side of the trigger element.
   */
  @Prop() verticalAlignment: 'top' | 'bottom' = 'bottom';

  /**
   * Sets the maximum width of the dropdown.  Default setting is "200px".
   */
  @Prop() maxWidth = '200px';
  /**
   * Sets the maximum height of the dropdown.  Default setting is "400px".
   */
  @Prop() maxHeight = '400px';

  /**
   * Define the type of even needed to open the modal. By default it's on click. If `hover` is selected, then the dropdown will close when the mouse goes away as well.
   */
  @Prop() action: 'click' | 'hover' = 'click';

  /**
   * By default, when opened, the dropdown will visible to the user even if inside an se-block that scrolls. Use `auto-hide` to automatically hide the dropdown if not visible by the user. For conveniences, this option is automatically set to `true` if the dropdown is inside an `se-table`.
   */
  @Prop() autoHide: boolean;

  getDefaultModifiers(listener = true) {
    return [
      {
        name: 'eventListeners',
        enabled: listener,
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: [
            `${this.verticalAlignment === 'bottom' ? 'top' : 'bottom'}-${
              this._alignment
            }`,
          ],
        },
      },
    ];
  }

  createPopper(listener: boolean): void {
    this.popperInstance = createPopper(this.elmButton, this.elmDropdown, {
      strategy: 'fixed',
      placement: `${this.verticalAlignment}-${this._alignment}` as any,
      modifiers: this.getDefaultModifiers(listener),
    });
  }

  /**
   * Method to open the dropdown from outside its parent element.
   */
  @Method()
  async open() {
    this.opened = true;
    this.didOpen.emit();

    // Enable the event listeners
    this.popperInstance.setOptions({
      modifiers: this.getDefaultModifiers(),
    });
    // Update its position
    this.popperInstance.update();
    // create popper
  }
  /**
   * Method to close the dropdown from outside its parent element.
   */
  @Method()
  async close() {
    this.opened = false;
    this.didClose.emit();

    // Disable the event listeners
    this.popperInstance.setOptions({
      modifiers: [
        {
          name: 'eventListeners',
          enabled: false,
        },
      ],
    });
  }
  /**
   * Event emitted when the dropdown has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the dropdown has been closed.
   */
  @Event({
    bubbles: false,
  })
  didClose: EventEmitter;

  /**
   * Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time.
   */
  @Event({
    composed: false,
  })
  cancelAllDropdown: EventEmitter;

  /**
   * Define if we actively manipulate the dropdown
   */
  @State() isActive: boolean;

  @State() opened = false;
  @State() inTable = false;

  @Listen('click', { target: 'window' })
  handleClick() {
    if (this.opened) {
      this.close();
    }
  }

  @Listen('cancelAllDropdown', { target: 'window' })
  handleCancelAllDropdown() {
    if (!this.isActive && this.opened) {
      this.close();
    }
  }

  @Listen('mouseenter') handleMouseEnter() {
    // On touch device, we remove hover or the dropdown keep open and closing
    if (this.action === 'hover' && !isTouchDevice()) {
      this.open();
    }
  }

  @Listen('mouseleave') handleMouseLeave() {
    if (this.action === 'hover' && !isTouchDevice() && this.opened) {
      this.close();
    }
  }

  getClosestParent(selector) {
    return this.el?.parentElement && this.el?.parentElement.closest(selector);
  }

  _toggle(ev: Event) {
    ev.stopPropagation();
    this.isActive = true;
    if (this.opened) {
      this.close();
    } else {
      // close others only when trying to open one
      this.cancelAllDropdown.emit();
      this.open();
    }
    this.isActive = false;
  }

  componentWillLoad(): void {
    this.alignmentChange();
    this.inTable = !!this.getClosestParent('se-table-item');
  }

  componentDidLoad(): void {
    this.createPopper(false);
  }

  render() {
    const autoHideNotDefined = this.autoHide === undefined || this.autoHide === null 
    return (
      <Host>
        <span
          ref={el => (this.elmButton = el)}
          aria-haspopup="true"
          class="block"
          aria-expanded={this.opened}
          onClick={ev => this._toggle(ev)}
        >
          <slot name="trigger"></slot>
        </span>
        <div
          ref={el => (this.elmDropdown = el)}
          class={{
            show: this.opened,
            content: true,
            'auto-hide': autoHideNotDefined ? this.inTable : this.autoHide, // hide automatically if inside a table
          }}
          style={{ maxWidth: this.maxWidth, maxHeight: this.maxHeight }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
