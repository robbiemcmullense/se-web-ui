import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'se-filtration-smart-reset-button',
  styleUrl: 'reset-button.scss',
  shadow: true,
})
export class FiltrationSmartResetButton {
  /**
   * Text label of the button.
   */
  @Prop() label!: string;

  /**
   * Defines if the button should be disabled.
   */
  @Prop({ mutable: true }) disabled = false;

  /**
   * Event that reset Smart Filter to initial state.
   */
  @Event()
  resetAllClicked: EventEmitter<void>;

  private handleClick = (): void => {
    this.resetAllClicked.emit();
  };

  render(): HTMLElement {
    return (
      <button
        class={{
          'reset-button': true,
          'reset-button--disabled': this.disabled,
        }}
        onClick={this.handleClick}
        disabled={this.disabled}
      >
        <se-icon
          size="medium"
          color="secondary"
          class="reset-button__icon"
          disabled={this.disabled}
        >
          data_refresh_stroke
        </se-icon>
        <span class="reset-button__label">{this.label}</span>
      </button>
    );
  }
}
