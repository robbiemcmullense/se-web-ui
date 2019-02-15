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
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() clicked: EventEmitter;

  closeChip() {
    this.el.parentElement.removeChild(this.el);
    this.clicked.emit(this.value);
  }

  render() {
    return (
      <div class="se-chip">
        <div class="value">{this.value}</div>
        <div class="close se-icon" onClick={() => this.closeChip()}>action_delete_cross</div>
      </div>
    );
  }
}