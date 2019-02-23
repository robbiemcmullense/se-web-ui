import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class RadioOnOffComponent {
    /**
     * Defines the visual appearance of the on/off radio switch.
     * `default` is the default mode.
     * Use `header` if the on/off radio switch is within a header element to reduce its visual height.
     */
    mode: 'default' | 'header';
    /**
     * Defines the text the user will see for the "on" or "active" part of the radio switch.
     */
    textOn: string;
    /**
     * Defines the text the user will see for the "off" or "inactive" part of the radio switch.
     */
    textOff: string;
    /**
     * Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.
     */
    disabled: boolean;
    selected: boolean;
    /**
     * Passes the current state (true or false) to the parent component when clicking on a button in the group.
     */
    change: EventEmitter<any>;
    render(): JSX.Element;
    toggleActive(): void;
}
