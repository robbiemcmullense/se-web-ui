import { Component, Element, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "se-chip",
  styleUrl: "chip.scss",
  shadow: true
})

export class ChipComponent {
  /**
   * The text you want to display in your chip.
   */
  @Prop() value: string;
  /**
   * Defines the background color of the chip.  The default setting is `standard`, which is a light gray color.
   */
  @Prop() color: 'standard' | 'alternative' = 'standard';
  /**
   * Indicates whether or not the chip has a close button.  Set to `false` by default.
   */
  @Prop() canClose: boolean = false;
  /**
   * Indicates whether or not the chip is selected.  Set to `false` by default.
   */
  @Prop() selected: boolean = false;
  /**
   * Indicates whether or not the chip is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
   * Optional property that defines if the chip displays as a block in it's container.
   * When set to true, the chip will be as wide as its container.
   */
  @Prop({mutable: true}) block: boolean;
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() didClose: EventEmitter;

  closeChip() {
    if (!this.disabled) {
      this.didClose.emit(this.value);
    }
  }

  render() {
    return (
      <div class={[
        'se-chip',
        this.color,
        this.selected ? 'selected' : '',
        this.disabled ? 'disabled' : '',
        this.block ? 'display-block' : ''].join(' ')}>
        <div class={['value', this.canClose ? 'can-close' : ''].join(' ')}>{this.value}</div>
        {this.canClose ? <div class="close se-icon" onClick={() => this.closeChip()}>action_delete_cross</div> : ''}
      </div>
    );
  }
}
