import '../../stencil.core';
export declare class HeaderComponent {
    /**
     * Title of the application
     */
    appTitle: string;
    /**
     * domain define the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed
     */
    domain: string;
    /**
     * domain define project name (usefull for small project) that can be used for versioning as well. It will be placed at the right side of the title.
     */
    project: string;
    el: HTMLElement;
    hasMenu: boolean;
    elLeftNav: any;
    componentDidLoad(): Promise<void>;
    onClickMenu(): void;
    getFullTitle(): {
        first: string;
        last: string;
    };
    render(): JSX.Element;
}
