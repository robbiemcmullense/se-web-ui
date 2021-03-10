import {
  Component,
  h,
  Watch,
  Element,
  Event,
  EventEmitter,
  Prop,
  Listen,
  Host,
} from '@stencil/core';

@Component({
  tag: 'se-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadioGroupComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background.
   */
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary' =
    'standard';
  /**
   * Defines the height of each button in the group.
   * `small` is the default setting, rendering a 32px height and a 14px font size.
   * `nano` sets the height to 24px and the font size to 12px.
   */
  @Prop() size: 'small' | 'nano' = 'small';

  /**
   * Defines the direction of the flex element.
   * `row` is the default if used with `se-button`.
   * `column` is the default if used with `se-radio`.
   */
  @Prop({ mutable: true }) direction: 'column' | 'row';

  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;
  @Watch('disabled') disabledDidChange() {
    this.updateItemMode();
  }
  /**
   * Defines the selected values of the array.
   */
  @Prop({ mutable: true }) value: string;
  @Watch('value') valueDidChange() {
    this.selectChild();
  }

  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  @Event() didChange: EventEmitter;
  children: NodeList;

  @Listen('didClick') buttonClickedHandler(event: CustomEvent) {
    this.handleChildClicked(event);
    this.didChange.emit(this.value);
  }

  @Listen('didCheck') radioButtonCheckedHandler(event: CustomEvent) {
    this.handleChildClicked(event);
    this.didChange.emit(this.value);
  }

  updateItemMode() {
    this.children.forEach((child: any) => {
      if (child.localName === 'se-button') {
        child.setGrouped();
        if (child.icon) {
          child.iconOnly = true;
        }
      }
      child.disabled = this.disabled;
      child.size = this.size;
      child.color = this.color;
    });
  }

  handleChildClicked(event: CustomEvent) {
    const buttonInfo = event.detail;
    this.value = buttonInfo.value;
  }

  selectChild() {
    if (this.children) {
      this.children.forEach((child: any) => {
        child.selected = child.value === this.value;
      });
    }
  }

  componentWillLoad() {
    this.children = this.el.querySelectorAll('se-button, se-radio');
    if (!this.direction && this.children && this.children.length) {
      switch (this.children[0].nodeName) {
        case 'SE-BUTTON': {
          this.direction = 'row';
          break;
        }
        case 'SE-RADIO': {
          this.direction = 'column';
        }
      }
    }
    this.updateItemMode();
    this.selectChild();
  }

  render() {
    return (
      <Host class={{ [`flex-${this.direction}`]: !!this.direction }}>
        <slot></slot>
      </Host>
    );
  }
}
