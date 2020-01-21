import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Method, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the visual appearance of the button.
   * `flat` is the default option, which includes a gray background.
   * `raised` adds a box shadow to the button.
   * `outline` adds a border to the button.
   * `login` and `signup` are specific options for "Login" and "Sign Up" buttons in your application.
   */
  @Prop() option: 'flat' | 'raised' | 'outline' | 'login' | 'signup' | 'inherit' |'fab'| 'minifab' = 'flat';
  @Watch('option') optionDidChange() {
    if (this.option === 'login'){
      this.color = 'primary';
      this.block = true;
    }
    if (this.option === 'signup'){
      this.color = 'secondary';
      this.block = true;
    }
  }
  /**
   * Defines the size of the button.
   * `small` is the default option, with a 14px font and a 32px height.
   * `medium` sets the font to 16px and the height to 40px.
   * `large` sets the font to 18px and the height to 48px.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'small';
  /**
   * Defines the background color of the button. The default setting is `standard`.
   */
  @Prop({mutable: true}) color: 'standard' | 'alternative' | 'primary' | 'secondary' = 'standard'
  /**
   * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
   */
  @Prop() value: string;
  /**
   * Optional property that determines if your button includes an icon.
   */
  @Prop() icon: string;
  /**
   * Optional property to change the color of the icon when needed. For example, the user dropdown in the header component.
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';
   /**
   * Optional property.
   * `button`	is the default setting, creating a clickable button.
   * `submit`	creates a "submit" button (useful to submit form-data).
   * `reset`	creates a reset button (useful to reset form-data to its initial values).
   */
  @Prop() type: 'button' | 'submit' |'reset' = 'button';
   /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
   * Optional property that defines if the button should be shown as selected. Used with the `se-radio-group` component.
   */
  @Prop({mutable: true}) selected: boolean;
   /**
   * Optional property that defines if the button has a caption or tooltip text.
   */
  @Prop() caption: string;
  /**
   * Optional property that defines if the button displays as a block in it's container.
   * When set to true, the button will be as wide as its container.
   */
  @Prop({mutable: true}) block: boolean;

  @State() grouped: boolean;
  @State() hasChild: boolean;
  /**
   * Passes button data to the parent component on a click.
   */
  @Event() didClick: EventEmitter<any>;
  /**
   * Sets the disabled property for your button from the parent component.
   * @param val set to `true` or `false`.
   */
  @Method()
  async setDisabled(val: boolean) {
    this.disabled = val;
  }
  /**
   * Indicates if the button is part of a group of buttons within the `se-radio-group` component.
   */
  @Method()
  async setGrouped() {
    this.grouped = true;
  }

  @Listen('click')
  buttonClickedHandler(ev: Event) {
    if (this.type !== 'button') {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      // https://github.com/ionic-team/ionic/blob/master/core/src/components/button/button.tsx
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = window.document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  @State() innerId;
  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      this.innerId = `wc-${id}`;
    }
  }

  toggle() {
    if (this.disabled) return;

    if (this.grouped) {
      this.selected = !this.selected;
      this.didClick.emit({selected: this.selected, value: this.value});
    }

    if (this.option === 'minifab') {
      this.didClick.emit({value: this.caption});
    }
  }

  componentWillLoad() {
    this.hasChild = this.el.innerHTML && this.el.innerHTML !== '<!---->'; // MS Edge still renders innerHTML for icon only buttons
    this.optionDidChange();
  }

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    return (
      <Host class={{'disabled': this.disabled, 'grouped': this.grouped, 'display-block': this.block, 'minifab': this.option === 'minifab'}}>
        <button disabled={this.disabled} data-tooltip={this.caption} type={this.type}
          id={this.innerId}
          class={
            [!!this.icon ? 'hasIcon' : '', this.hasChild ? 'hasChild' : '', this.color, this.size, this.option, this.selected ? 'selected' : ''].join(' ')}
          onClick={() => this.toggle()}>
          {this.icon ? <span class={["se-icon", this.iconColor].join(' ')}>{this.icon}</span> : ''}
          {this.hasChild ? <span class="text"><slot></slot></span> : ''}
        </button>
      </Host>
    )
  }
}