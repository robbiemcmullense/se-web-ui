import '../../stencil.core';
export declare class SidenavComponent {
    backdropEl?: HTMLElement;
    menuInnerEl?: HTMLElement;
    el: HTMLElement;
    open: boolean;
    items: HTMLElement[];
    selectedItem?: HTMLElement;
    toggle(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private initSelect;
    private setActive;
    private addAnimation;
    private removeAnimation;
    renderList(): JSX.Element[][];
    render(): JSX.Element[];
}
