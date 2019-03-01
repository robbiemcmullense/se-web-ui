import { Component, Element, Event, EventEmitter, Prop, State, Method, Watch } from '@stencil/core';

@Component({
  tag: 'se-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonComponent {
  @Element() el: HTMLElement;

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

  @State() hasChild: boolean;

  componentWillLoad() {
    this.hasChild = Array.from(this.el.children).length > 0 || this.el.innerText.length > 0;
  }

  componentDidLoad() {
    this.modeDidChange();
  }


  hostData() {
    return {
      'class': [
        !!this.icon && 'hasIcon',
        this.hasChild && 'hasChild',
        this.grouped && 'grouped'
      ].join(' ')
    };
  }

  render() {
    return (
      <button disabled={this.disabled} class={[this.color, this.mode, this.selected && 'selected'].join(' ')} onClick={() => this.toggle()}>
        {this.icon ? <se-icon>{this.icon}</se-icon> : ''}
        <span class="text"><slot></slot></span>
      </button>
    )
  }
}
