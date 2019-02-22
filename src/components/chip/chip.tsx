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
   * Indicates whether or not the chip has a close button.  Set to `true` by default.
   */
  @Prop() canClose: boolean = true;
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() close: EventEmitter;

  closeChip() {
    this.close.emit(this.value);
  }

  render() {
    return (
      <div class="se-chip">
        <div class="value">{this.value}</div>
        <div class="close se-icon" data-hide={!this.canClose} onClick={() => this.closeChip()}>action_delete_cross</div>
      </div>
    );
  }
}