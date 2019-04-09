import { Component, Element, Event, EventEmitter, Prop } from "@stencil/core";

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
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary' = 'standard';
  /**
   * Indicates whether or not the chip has a close button.  Set to `true` by default.
   */
  @Prop() canClose: boolean = true;
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() didClose: EventEmitter;

  closeChip() {
    this.didClose.emit(this.value);
  }

  hostData() {
    return {
      'class': this.color
    };
  }

  render() {
    return [
      <div class="value">{this.value}</div>,
      this.canClose && <div class="close se-icon" onClick={() => this.closeChip()}>action_delete_cross</div>
    ];
  }
}