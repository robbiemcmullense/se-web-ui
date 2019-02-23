import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ButtonComponent {
    /**
     * Defines the visual appearance of the button.
     * `flat` is the default mode, which includes a gray background.
     * `raised` adds a box shadow to the button.
     * `outline` adds a border to the button.
     * `text` mode has no border or background color.
     * `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application.
     */
    mode: 'flat' | 'raised' | 'outline' | 'text' | 'login' | 'signup';
    /**
     * Optional property that defines the background color of the button.
     * `primary` is a green color.
     * `accent` is a blue color.
     * `warn` is an orange color.
     * `error` is a red color.
     */
    color: 'primary' | 'accent' | 'warn' | 'error';
    /**
     * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
     */
    value: string;
    /**
     * Optional property that determines if your button includes an icon.
     */
    icon: string;
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    disabled: boolean;
    selected: boolean;
    el: HTMLElement;
    /**
     * Passes button data to the parent component on a click.
     */
    clicked: EventEmitter<any>;
    /**
     * Set a selected button from the parent component.
     * @param val set to `true` or `false`.
     */
    setActive(val: boolean): void;
    /**
     * Set a color for your button from the parent component.
     * @param val set to `primary`, `accent`, `warn`, or `error`.  See the color property description for color values.
     */
    setColor(val: 'primary' | 'accent' | 'warn' | 'error'): void;
    /**
     * Set the disabled property for your button from the parent component.
     * @param val set to `true` or `false`.
     */
    setDisabled(val: boolean): void;
    /**
     * Indicate if the button is part of a group of buttons within the `se-buttons` component.
     */
    setGrouped(): void;
    emitEvent(): void;
    hostData(): {
        'class': {
            'active': boolean;
        };
    };
    render(): JSX.Element;
}
