import '../../stencil.core';
export declare class LabelComponent {
    /**
     * Defines the text that you want your label to display.
     */
    value: string;
    /**
     * When the label is part of a form field, this attribute defines if the input is required, adding a red asterisk next to the label.
     */
    required: boolean;
    el: HTMLElement;
    render(): JSX.Element;
}
