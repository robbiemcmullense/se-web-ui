import '../../stencil.core';
export declare class SidenavItemComponent {
    /**
     * Define the title of the tab
     */
    itemTitle: string;
    /**
     * Defines if the tab is active or not.
     */
    active: boolean;
    setActive(): Promise<void>;
    hostData(): {
        'role': string;
        'aria-hidden': string;
        'class': {
            'navitem-hidden': boolean;
        };
    };
    render(): JSX.Element;
}
