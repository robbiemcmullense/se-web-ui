import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ButtonsComponent {
    /**
     * Defines the functionality of your button group.
     * `checkbox` is the default option, where all buttons in the group can be selected.
     * `radio` mode indicates that only one button in the group can be selected at a time.
     */
    mode: 'checkbox' | 'radio';
    /**
     * Optional property that defines the background color of each button in the group.
     * `primary` is a green color.
     * `accent` is a blue color.
     * `warn` is an orange color.
     * `error` is a red color.
     */
    color: 'primary' | 'accent' | 'warn' | 'error';
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    disabled: boolean;
    value: Array<any>;
    el: HTMLElement;
    /**
     * Passes the selected button value to the parent component when clicking on a button in the group.
     */
    change: EventEmitter;
    buttonClickedHandler(event: CustomEvent): void;
    render(): JSX.Element;
}
