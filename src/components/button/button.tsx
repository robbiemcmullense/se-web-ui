import { Component, Element, Event, EventEmitter, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {
  /**
   * Defines the visual appearance of the button.
   * `flat` is the default mode, which includes a gray background.
   * `raised` adds a box shadow to the button.
   * `outline` adds a border to the button.
   * `text` mode has no border or background color.
   * `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application.
   */
  @Prop() mode: 'flat' | 'raised' | 'outline' | 'text' | 'login' | 'signup' = 'flat';
  /**
   * Optional property that defines the background color of the button.
   * `primary` is a green color.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   */
  @Prop({mutable: true}) color: 'primary' | 'accent' | 'warn' | 'error';
  /**
   * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
   */
  @Prop() value: string;
  /**
   * Optional property that determines if your button includes an icon.
   */
  @Prop() icon: string;
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop({mutable: true}) disabled: boolean = false;
  @State() selected: boolean;
  @Element() el: HTMLElement;
  /**
   * Passes button data to the parent component on a click.
   */
  @Event() clicked: EventEmitter<any>;
  /**
   * Set a selected button from the parent component.
   * @param val set to `true` or `false`.
   */
  @Method()
  setActive(val: boolean): void {
    this.selected = val;
  }
  /**
   * Set a color for your button from the parent component.
   * @param val set to `primary`, `accent`, `warn`, or `error`.  See the color property description for color values.
   */
  @Method()
  setColor(val: 'primary' | 'accent' | 'warn' | 'error'): void {
    this.color = val;
    this.el.classList.add(this.color);
  }
  /**
   * Set the disabled property for your button from the parent component.
   * @param val set to `true` or `false`.
   */
  @Method()
  setDisabled(val: boolean): void {
    this.disabled = val;
    this.el.classList.add('disabled');
  }
  /**
   * Indicate if the button is part of a group of buttons within the `se-buttons` component.
   */
  @Method()
  setGrouped() {
    this.el.classList.add('grouped');
  }
  
  emitEvent() {
    if (!this.disabled) {
      this.selected = !this.selected;
      this.clicked.emit(this.el);
    } 
  }

  hostData() {
    return {
      'class': { 'active': this.selected }
    };
  }

  render() {
    if (this.icon) {
      this.el.classList.add('hasIcon');
    }

    return (
      <button data-mode={this.mode} color={this.color} disabled={this.disabled} onClick={() => this.emitEvent()}>
        {this.icon ? <i class="se-icon">{this.icon}</i> : ''}
        <slot></slot>
      </button>
    )
  }
}