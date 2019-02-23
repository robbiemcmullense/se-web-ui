import '../../stencil.core';
export declare class LabelComponent {
    /**
     * Defines the url the user should get redirected to when clicking on the link.
     */
    url: string;
    /**
     * Defines the text to be displayed in your link.
     */
    link: string;
    /**
     * Determines whether or not the link is disabled.
     */
    disabled: boolean;
    /**
     * Default setting is `internal`.
     * Set to `external` adds an underline to the link, and opens the link in a new web browser tab.
     */
    type: 'internal' | 'external';
    render(): JSX.Element;
}
