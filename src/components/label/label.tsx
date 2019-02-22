import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'se-label',
  styleUrl: 'label.scss',
  shadow: true
})
export class LabelComponent {
  /**
   * Defines the text that you want your label to display.
   */
  @Prop() value: string;
  /**
   * When the label is part of a form field, this attribute defines if the input is required, adding a red asterisk next to the label.
   */
  @Prop() required: boolean;
  @Element() el: HTMLElement;

  render() {
    return (
      <label class="se-label">{this.value}
        {this.required ? <span>*</span> : ''}
      </label>
    )
  }
}
