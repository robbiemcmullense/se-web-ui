import '../../stencil.core';
export declare class ListComponent {
    el: HTMLElement;
    /**
     * Define the style of the list
     */
    mode: "nav" | "classic" | "checkbox" | "expander";
    PropDidChange(): void;
    componentDidLoad(): void;
    private updateItemMode;
    render(): JSX.Element;
}
