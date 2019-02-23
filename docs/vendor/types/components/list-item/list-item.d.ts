import '../../stencil.core';
export declare class ListItemComponent {
    /**
     * Define if the list element should be selected or not
     */
    itemTitle: string;
    /**
     * Define if the list element should be selected or not
     */
    selected: boolean;
    /**
     * Define the them of the list. This them will be handled and modified by the parent element
     */
    mode: "nav" | "classic" | "checkbox" | "expander";
    hostData(): {
        class: string;
    };
    render(): JSX.Element[];
}
