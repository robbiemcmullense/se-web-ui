import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class CheckboxComponent {
    /**
     * The value you want to pass to the parent component when the checkbox is checked.
     */
    value: string;
    /**
     * Defines the background color of the button.
     * `primary` is a green color and is the default value.
     * `accent` is a blue color.
     * `warn` is an orange color.
     * `error` is a red color.
     */
    color: 'primary' | 'accent' | 'warn' | 'error';
    /**
     * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
     */
    disabled: boolean;
    checked: boolean;
    /**
     * Send the checkbox value to the parent component when clicking on the checkbox.
     */
    change: EventEmitter;
    emitEvent(): void;
    render(): JSX.Element;
}
