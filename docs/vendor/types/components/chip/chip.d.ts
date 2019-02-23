import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class ChipComponent {
    /**
     * The text you want to display in your chip.
     */
    value: string;
    /**
     * Optional property that defines the background color of the button.
     * `primary` is a green color.
     * `accent` is a blue color.
     * `warn` is an orange color.
     * `error` is a red color.
     * `light` is a gray color.
     */
    color: 'primary' | 'accent' | 'warn' | 'error';
    /**
     * Indicates whether or not the chip has a close button.  Set to `true` by default.
     */
    canClose: boolean;
    el: HTMLElement;
    /**
     * Send the chip value to the parent component when clicking the close button of a chip.
     */
    close: EventEmitter;
    closeChip(): void;
    hostData(): {
        'class': "error" | "warn" | "primary" | "accent";
    };
    render(): JSX.Element[];
}
