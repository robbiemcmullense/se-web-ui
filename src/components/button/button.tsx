import { Component, Element, Event, EventEmitter, Prop, State, Method, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {
  @Element() el: HTMLElement;
  @Prop({ context: 'window' }) win!: Window;

  /**
   * Defines the visual appearance of the button.
   * `flat` is the default mode, which includes a gray background.
   * `raised` adds a box shadow to the button.
   * `outline` adds a border to the button.
   * `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application.
   */
  @Prop() mode: 'flat' | 'raised' | 'outline' | 'login' | 'signup' | 'inherit' = 'flat';
  @Watch('mode') modeDidChange() {
    if(this.mode === 'login'){
      this.color = 'primary'
    }
    if(this.mode === 'signup'){
      this.color = 'secondary'
    }
  }


  /**
   * Optional property that defines the background color of the button. Default is standard.
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
   * Optional type property of the button.
   * `button`	The button is a clickable button (default)
   * `submit`	The button is a submit button (submits form-data)
   * `reset`	The button is a reset button (resets the form-data to its initial values)
   */
  @Prop() type: 'button'|'submit'|'reset' = 'button';

   /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;

  /**
   * Optional property that define if the button should be shown as selected. Used with `se-buttons`
   */
  @Prop({mutable: true}) selected: boolean;
  /**
   * Passes button data to the parent component on a click.
   */
  @Event() clicked: EventEmitter<any>;

  /**
   * Set the disabled property for your button from the parent component.
   * @param val set to `true` or `false`.
   */
  @Method()
  setDisabled(val: boolean): void {
    this.disabled = val;
  }

  @State() grouped: boolean;
  /**
   * Indicate if the button is part of a group of buttons within the `se-buttons` component.
   */
  @Method()
  setGrouped() {
    this.grouped = true
  }

  toggle() {
    if(this.disabled) return;

    if (this.grouped) {
      this.selected = !this.selected;
      this.clicked.emit({selected: this.selected, value: this.value});
    }
  }


  @Listen('click')
  onClick(ev: Event) {
    if (this.type !== 'button') {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      // https://github.com/ionic-team/ionic/blob/master/core/src/components/button/button.tsx
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = this.win.document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  @State() hasChild: boolean;

  componentWillLoad() {
    // console.log('Slot: ', this.el.innerHTML)
    this.hasChild = this.el.innerHTML && this.el.innerHTML.length > 0;
    this.modeDidChange();
  }

  hostData() {
    return {
      'class': [
        !!this.icon && 'hasIcon',
        this.hasChild && 'hasChild',
        this.grouped && 'grouped',
        this.mode
      ].join(' ')
    };
  }

  render() {
    return (
      <button disabled={this.disabled} type={this.type} class={[this.color, this.mode, this.selected && 'selected'].join(' ')} onClick={() => this.toggle()}>
        {this.icon ? <span class="se-icon">{this.icon}</span> : ''}
        { this.hasChild && <span class="text"><slot></slot></span>}
      </button>
    )
  }
}
