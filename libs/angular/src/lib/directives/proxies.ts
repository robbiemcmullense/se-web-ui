/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@se/web-ui';


export declare interface SeAbout extends Components.SeAbout {}
@ProxyCmp({
  inputs: ['appTitle', 'copyright', 'domain', 'imageUrl', 'version']
})
@Component({
  selector: 'se-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appTitle', 'copyright', 'domain', 'imageUrl', 'version']
})
export class SeAbout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeAccessibilityToggle extends Components.SeAccessibilityToggle {}
@ProxyCmp({
  inputs: ['labelModeOff', 'labelModeOn', 'selected']
})
@Component({
  selector: 'se-accessibility-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['labelModeOff', 'labelModeOn', 'selected'],
  outputs: ['didChange']
})
export class SeAccessibilityToggle {
  /** Passes accessibility toggle state to the parent component on a change of the toggle state */
  didChange!: EventEmitter<CustomEvent<{ selected: boolean }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeApp extends Components.SeApp {}
@ProxyCmp({
  inputs: ['option', 'pageScroll', 'theme']
})
@Component({
  selector: 'se-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['option', 'pageScroll', 'theme'],
  outputs: ['themeChanged']
})
export class SeApp {
  /**  */
  themeChanged!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['themeChanged']);
  }
}


export declare interface SeAuthentication extends Components.SeAuthentication {}
@ProxyCmp({
  inputs: ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'version']
})
@Component({
  selector: 'se-authentication',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'version']
})
export class SeAuthentication {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBanner extends Components.SeBanner {}
@ProxyCmp({
  inputs: ['duration']
})
@Component({
  selector: 'se-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['duration']
})
export class SeBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBannerItem extends Components.SeBannerItem {}
@ProxyCmp({
  inputs: ['active', 'imageUrl']
})
@Component({
  selector: 'se-banner-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'imageUrl'],
  outputs: ['didChange']
})
export class SeBannerItem {
  /** Send an event when the banner item changes */
  didChange!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeBlock extends Components.SeBlock {}
@ProxyCmp({
  inputs: ['clickable', 'clickableBar', 'color', 'corner', 'display', 'divider', 'enlarged', 'height', 'loading', 'margin', 'option', 'outline', 'outlineColor', 'width']
})
@Component({
  selector: 'se-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'clickableBar', 'color', 'corner', 'display', 'divider', 'enlarged', 'height', 'loading', 'margin', 'option', 'outline', 'outlineColor', 'width']
})
export class SeBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBlockContent extends Components.SeBlockContent {}
@ProxyCmp({
  inputs: ['maxHeight', 'option']
})
@Component({
  selector: 'se-block-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['maxHeight', 'option']
})
export class SeBlockContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBlockFooter extends Components.SeBlockFooter {}
@ProxyCmp({
  inputs: ['direction', 'divider', 'option']
})
@Component({
  selector: 'se-block-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['direction', 'divider', 'option']
})
export class SeBlockFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBlockHeader extends Components.SeBlockHeader {}
@ProxyCmp({
  inputs: ['divider', 'option']
})
@Component({
  selector: 'se-block-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['divider', 'option']
})
export class SeBlockHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBreadcrumb extends Components.SeBreadcrumb {}
@ProxyCmp({
  inputs: ['ariaLabel', 'breakpoint', 'canSelectLast']
})
@Component({
  selector: 'se-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ariaLabel', 'breakpoint', 'canSelectLast']
})
export class SeBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeBreadcrumbItem extends Components.SeBreadcrumbItem {}
@ProxyCmp({
  inputs: ['canSelect', 'href', 'isLast', 'position']
})
@Component({
  selector: 'se-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canSelect', 'href', 'isLast', 'position'],
  outputs: ['didNavigate']
})
export class SeBreadcrumbItem {
  /** Event firing when breadcrumbs link is clicked. */
  didNavigate!: EventEmitter<CustomEvent<HTMLAnchorElement>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didNavigate']);
  }
}


export declare interface SeButton extends Components.SeButton {}
@ProxyCmp({
  inputs: ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'iconOnly', 'option', 'padding', 'selected', 'size', 'type', 'value'],
  methods: ['setDisabled', 'setGrouped']
})
@Component({
  selector: 'se-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'iconOnly', 'option', 'padding', 'selected', 'size', 'type', 'value'],
  outputs: ['didClick']
})
export class SeButton {
  /** Passes button data to the parent component on a click. */
  didClick!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}


export declare interface SeCarousel extends Components.SeCarousel {}
@ProxyCmp({
  inputs: ['arrowsOverlay', 'hintWidth', 'itemMinWidth', 'pagination']
})
@Component({
  selector: 'se-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['arrowsOverlay', 'hintWidth', 'itemMinWidth', 'pagination']
})
export class SeCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeCarouselItem extends Components.SeCarouselItem {}

@Component({
  selector: 'se-carousel-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SeCarouselItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeCarouselPagination extends Components.SeCarouselPagination {}
@ProxyCmp({
  inputs: ['activeIndex', 'size']
})
@Component({
  selector: 'se-carousel-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeIndex', 'size']
})
export class SeCarouselPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeCheckbox extends Components.SeCheckbox {}
@ProxyCmp({
  inputs: ['color', 'disabled', 'header', 'indeterminate', 'label', 'labelPos', 'labelSuffix', 'name', 'noInteractive', 'option', 'padding', 'required', 'selected', 'size', 'textOff', 'textOn', 'value'],
  methods: ['setRequired']
})
@Component({
  selector: 'se-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'header', 'indeterminate', 'label', 'labelPos', 'labelSuffix', 'name', 'noInteractive', 'option', 'padding', 'required', 'selected', 'size', 'textOff', 'textOn', 'value'],
  outputs: ['didChange']
})
export class SeCheckbox {
  /** Send the checkbox value to the parent component when clicking on the checkbox. */
  didChange!: EventEmitter<CustomEvent<{ value: string; selected: boolean }>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeChip extends Components.SeChip {}
@ProxyCmp({
  inputs: ['block', 'canClose', 'color', 'dashed', 'disabled', 'readonly', 'selected', 'size', 'value']
})
@Component({
  selector: 'se-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'canClose', 'color', 'dashed', 'disabled', 'readonly', 'selected', 'size', 'value'],
  outputs: ['didClose']
})
export class SeChip {
  /** Send the chip value to the parent component when clicking the close button of a chip. */
  didClose!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose']);
  }
}


export declare interface SeContainer extends Components.SeContainer {}
@ProxyCmp({
  inputs: ['color', 'columnSize', 'direction', 'display', 'gap', 'option', 'padding', 'position', 'rowSize']
})
@Component({
  selector: 'se-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'columnSize', 'direction', 'display', 'gap', 'option', 'padding', 'position', 'rowSize']
})
export class SeContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeDialog extends Components.SeDialog {}
@ProxyCmp({
  inputs: ['canBackdrop', 'color', 'noBackdrop', 'open', 'pageScroll', 'size']
})
@Component({
  selector: 'se-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canBackdrop', 'color', 'noBackdrop', 'open', 'pageScroll', 'size'],
  outputs: ['backdrop', 'didClose']
})
export class SeDialog {
  /** Send data to the parent component when the backdrop is clicked. */
  backdrop!: EventEmitter<CustomEvent<any>>;
  /** Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM. */
  didClose!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['backdrop', 'didClose']);
  }
}


export declare interface SeDialogContent extends Components.SeDialogContent {}
@ProxyCmp({
  inputs: ['icon', 'iconColor', 'isLastChild', 'option', 'padding']
})
@Component({
  selector: 'se-dialog-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'iconColor', 'isLastChild', 'option', 'padding']
})
export class SeDialogContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeDialogFooter extends Components.SeDialogFooter {}

@Component({
  selector: 'se-dialog-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SeDialogFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeDialogHeader extends Components.SeDialogHeader {}
@ProxyCmp({
  inputs: ['closeIcon', 'color', 'option', 'padding']
})
@Component({
  selector: 'se-dialog-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeIcon', 'color', 'option', 'padding'],
  outputs: ['didCloseDialog']
})
export class SeDialogHeader {
  /** Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM. */
  didCloseDialog!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didCloseDialog']);
  }
}


export declare interface SeDivider extends Components.SeDivider {}
@ProxyCmp({
  inputs: ['color', 'option']
})
@Component({
  selector: 'se-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'option']
})
export class SeDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeDropdown extends Components.SeDropdown {}
@ProxyCmp({
  inputs: ['action', 'alignment', 'autoHide', 'maxHeight', 'maxWidth', 'verticalAlignment'],
  methods: ['open', 'close']
})
@Component({
  selector: 'se-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'alignment', 'autoHide', 'maxHeight', 'maxWidth', 'verticalAlignment'],
  outputs: ['didOpen', 'didClose', 'cancelAllDropdown']
})
export class SeDropdown {
  /** Event emitted when the dropdown has been opened. */
  didOpen!: EventEmitter<CustomEvent<any>>;
  /** Event emitted when the dropdown has been closed. */
  didClose!: EventEmitter<CustomEvent<any>>;
  /** Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time. */
  cancelAllDropdown!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose', 'cancelAllDropdown']);
  }
}


export declare interface SeFab extends Components.SeFab {}
@ProxyCmp({
  inputs: ['color', 'icon', 'option', 'overlay', 'position'],
  methods: ['toggleAction']
})
@Component({
  selector: 'se-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'icon', 'option', 'overlay', 'position'],
  outputs: ['closeTooltips']
})
export class SeFab {
  /** Event emitted to close the tooltip (if there is one) when interacting with the fab button. */
  closeTooltips!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeTooltips']);
  }
}


export declare interface SeFabItem extends Components.SeFabItem {}
@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'se-fab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon'],
  outputs: ['didClick']
})
export class SeFabItem {
  /** Send the value of the caption to the parent when clicking on the item. */
  didClick!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}


export declare interface SeFiltration extends Components.SeFiltration {}
@ProxyCmp({
  inputs: ['collapsed', 'item', 'labelHint', 'labelSelectAll', 'labelViewLess', 'labelViewMore', 'maxItems', 'minItems', 'search', 'searchable', 'shadow', 'showSelectAll']
})
@Component({
  selector: 'se-filtration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapsed', 'item', 'labelHint', 'labelSelectAll', 'labelViewLess', 'labelViewMore', 'maxItems', 'minItems', 'search', 'searchable', 'shadow', 'showSelectAll'],
  outputs: ['didSearch', 'didSelectAll']
})
export class SeFiltration {
  /**  */
  didSearch!: EventEmitter<CustomEvent<any>>;
  /** Event emitter for callback to select all items */
  didSelectAll!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSearch', 'didSelectAll']);
  }
}

import { FilterEmittedState as IFiltrationSmartFilterEmittedState } from '@se/web-ui/types/components/filtration-smart/types';
export declare interface SeFiltrationSmart extends Components.SeFiltrationSmart {}
@ProxyCmp({
  inputs: ['dataAttrsData', 'filters', 'headerLabelDesktop', 'headerLabelMobile', 'isMobileViewVisible', 'maxFacetContentHeight', 'resetButtonLabel', 'showProductsLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel', 'visibleFacetsCount', 'visibleRefinementsPerFacetCount'],
  methods: ['reset', 'setIsFilterChecked']
})
@Component({
  selector: 'se-filtration-smart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataAttrsData', 'filters', 'headerLabelDesktop', 'headerLabelMobile', 'isMobileViewVisible', 'maxFacetContentHeight', 'resetButtonLabel', 'showProductsLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel', 'visibleFacetsCount', 'visibleRefinementsPerFacetCount'],
  outputs: ['filterStateChanged', 'seFiltrationSmartDidRender']
})
export class SeFiltrationSmart {
  /** Event that emits list of checked filters. */
  filterStateChanged!: EventEmitter<CustomEvent<IFiltrationSmartFilterEmittedState>>;
  /** Event that emits after every filters render. */
  seFiltrationSmartDidRender!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterStateChanged', 'seFiltrationSmartDidRender']);
  }
}


export declare interface SeFiltrationSmartCheckbox extends Components.SeFiltrationSmartCheckbox {}
@ProxyCmp({
  inputs: ['isMobile', 'refinementId']
})
@Component({
  selector: 'se-filtration-smart-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isMobile', 'refinementId'],
  outputs: ['refinementStateChanged']
})
export class SeFiltrationSmartCheckbox {
  /** Event that has info about refinement whose state should be changed. Root component listens to it. */
  refinementStateChanged!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['refinementStateChanged']);
  }
}


export declare interface SeFiltrationSmartDesktopView extends Components.SeFiltrationSmartDesktopView {}
@ProxyCmp({
  inputs: ['headerLabel', 'maxFacetContentHeight', 'resetButtonLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel']
})
@Component({
  selector: 'se-filtration-smart-desktop-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['headerLabel', 'maxFacetContentHeight', 'resetButtonLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel']
})
export class SeFiltrationSmartDesktopView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeFiltrationSmartFacet extends Components.SeFiltrationSmartFacet {}
@ProxyCmp({
  inputs: ['facetId', 'isMobile', 'maxContentHeight', 'viewLessLabel', 'viewMoreLabel']
})
@Component({
  selector: 'se-filtration-smart-facet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['facetId', 'isMobile', 'maxContentHeight', 'viewLessLabel', 'viewMoreLabel'],
  outputs: ['toggleIsSectionExpanded']
})
export class SeFiltrationSmartFacet {
  /** Event that has info about facet whose collapsed/expanded state should be changed.
 Root Filter component listens to it. */
  toggleIsSectionExpanded!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleIsSectionExpanded']);
  }
}


export declare interface SeFiltrationSmartGroup extends Components.SeFiltrationSmartGroup {}
@ProxyCmp({
  inputs: ['isMobile', 'level', 'sectionId']
})
@Component({
  selector: 'se-filtration-smart-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isMobile', 'level', 'sectionId'],
  outputs: ['toggleIsSectionExpanded']
})
export class SeFiltrationSmartGroup {
  /** Event that has info about the section whose collapsed/expanded state should be changed.
 Root Filter component listens to it. */
  toggleIsSectionExpanded!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleIsSectionExpanded']);
  }
}

import { ToggleMobileViewVisibility as IFiltrationSmartMobileViewToggleMobileViewVisibility } from '@se/web-ui/types/components/filtration-smart/types';
export declare interface SeFiltrationSmartMobileView extends Components.SeFiltrationSmartMobileView {}
@ProxyCmp({
  inputs: ['headerLabel', 'isVisible', 'resetButtonLabel', 'showProductsLabel']
})
@Component({
  selector: 'se-filtration-smart-mobile-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['headerLabel', 'isVisible', 'resetButtonLabel', 'showProductsLabel'],
  outputs: ['toggleMobileView']
})
export class SeFiltrationSmartMobileView {
  /** Event that closes mobile view with two options:
 { restore: true } -- closes mobile view and undoes changes made in mobile view
 { restore: false } -- closes mobile view and applies changes made in mobile view */
  toggleMobileView!: EventEmitter<CustomEvent<IFiltrationSmartMobileViewToggleMobileViewVisibility>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMobileView']);
  }
}


export declare interface SeFiltrationSmartMobileViewTrigger extends Components.SeFiltrationSmartMobileViewTrigger {}
@ProxyCmp({
  inputs: ['count', 'label']
})
@Component({
  selector: 'se-filtration-smart-mobile-view-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'label'],
  outputs: ['toggleMobileView']
})
export class SeFiltrationSmartMobileViewTrigger {
  /** Event that toggle visibility of the mobile view. */
  toggleMobileView!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMobileView']);
  }
}


export declare interface SeFiltrationSmartResetButton extends Components.SeFiltrationSmartResetButton {}
@ProxyCmp({
  inputs: ['disabled', 'label']
})
@Component({
  selector: 'se-filtration-smart-reset-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label'],
  outputs: ['resetAllClicked']
})
export class SeFiltrationSmartResetButton {
  /** Event that reset Smart Filter to initial state. */
  resetAllClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['resetAllClicked']);
  }
}


export declare interface SeFiltrationSmartTab extends Components.SeFiltrationSmartTab {}
@ProxyCmp({
  inputs: ['refinementId']
})
@Component({
  selector: 'se-filtration-smart-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['refinementId'],
  outputs: ['refinementStateChanged']
})
export class SeFiltrationSmartTab {
  /** Event that has info about tab whose state should be changed. Root Filter component listens to it. */
  refinementStateChanged!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['refinementStateChanged']);
  }
}


export declare interface SeFiltrationSmartViewMoreFacetsButton extends Components.SeFiltrationSmartViewMoreFacetsButton {}
@ProxyCmp({
  inputs: ['count', 'isAllFacetsVisible', 'viewLessLabel', 'viewMoreLabel']
})
@Component({
  selector: 'se-filtration-smart-view-more-facets-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'isAllFacetsVisible', 'viewLessLabel', 'viewMoreLabel'],
  outputs: ['toggleViewMoreFacets']
})
export class SeFiltrationSmartViewMoreFacetsButton {
  /** Event that signals Smart Filter to toggle visibility of all its facets. */
  toggleViewMoreFacets!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleViewMoreFacets']);
  }
}


export declare interface SeFiltrationSmartViewMoreRefinementsButton extends Components.SeFiltrationSmartViewMoreRefinementsButton {}
@ProxyCmp({
  inputs: ['count', 'facetId', 'isAllRefinementsVisible', 'viewLessLabel', 'viewMoreLabel']
})
@Component({
  selector: 'se-filtration-smart-view-more-refinements-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'facetId', 'isAllRefinementsVisible', 'viewLessLabel', 'viewMoreLabel'],
  outputs: ['toggleViewMoreRefinements']
})
export class SeFiltrationSmartViewMoreRefinementsButton {
  /** Event that signals Smart Filter to toggle visibility of all its refinements. */
  toggleViewMoreRefinements!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleViewMoreRefinements']);
  }
}


export declare interface SeFormField extends Components.SeFormField {}
@ProxyCmp({
  inputs: ['block', 'disabled', 'label', 'labelAlign', 'labelWidth', 'minWidth', 'noStacking', 'option', 'padding', 'required', 'stacked', 'status', 'textOnly', 'type', 'value']
})
@Component({
  selector: 'se-form-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'disabled', 'label', 'labelAlign', 'labelWidth', 'minWidth', 'noStacking', 'option', 'padding', 'required', 'stacked', 'status', 'textOnly', 'type', 'value'],
  outputs: ['didSubmit']
})
export class SeFormField {
  /** Passes form data to the parent component on a click (`checkbox` or `radio`), menu change (`select`), or when the input field loses focus. */
  didSubmit!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSubmit']);
  }
}


export declare interface SeHeader extends Components.SeHeader {}
@ProxyCmp({
  inputs: ['appTitle', 'disabled', 'domain', 'hideSeLogo', 'project']
})
@Component({
  selector: 'se-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appTitle', 'disabled', 'domain', 'hideSeLogo', 'project']
})
export class SeHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeIcon extends Components.SeIcon {}
@ProxyCmp({
  inputs: ['animation', 'color', 'disabled', 'hoverColor', 'mirror', 'noHover', 'option', 'rotate', 'size']
})
@Component({
  selector: 'se-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animation', 'color', 'disabled', 'hoverColor', 'mirror', 'noHover', 'option', 'rotate', 'size']
})
export class SeIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeIconEcostruxure extends Components.SeIconEcostruxure {}
@ProxyCmp({
  inputs: ['color', 'size']
})
@Component({
  selector: 'se-icon-ecostruxure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'size']
})
export class SeIconEcostruxure {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeIconFile extends Components.SeIconFile {}
@ProxyCmp({
  inputs: ['color', 'disabled', 'option', 'size', 'value']
})
@Component({
  selector: 'se-icon-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'option', 'size', 'value']
})
export class SeIconFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeIconLifeison extends Components.SeIconLifeison {}
@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'se-icon-lifeison',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class SeIconLifeison {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeIconSchneider extends Components.SeIconSchneider {}

@Component({
  selector: 'se-icon-schneider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SeIconSchneider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeLink extends Components.SeLink {}
@ProxyCmp({
  inputs: ['disabled', 'download', 'noSpacing', 'option', 'unicolor', 'url']
})
@Component({
  selector: 'se-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'noSpacing', 'option', 'unicolor', 'url']
})
export class SeLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeList extends Components.SeList {}
@ProxyCmp({
  inputs: ['canCollapse', 'option', 'selectedColor']
})
@Component({
  selector: 'se-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canCollapse', 'option', 'selectedColor']
})
export class SeList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { GroupCollapseEvent as IListGroupComponentGroupCollapseEvent } from '@se/web-ui/types/components/list-group/list-group';
export declare interface SeListGroup extends Components.SeListGroup {}
@ProxyCmp({
  inputs: ['canCollapse', 'collapsed', 'description', 'disabled', 'flex', 'icon', 'iconColor', 'indentation', 'item', 'selected'],
  methods: ['toggleCollapseTreeview', 'focusElement', 'setOption']
})
@Component({
  selector: 'se-list-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canCollapse', 'collapsed', 'description', 'disabled', 'flex', 'icon', 'iconColor', 'indentation', 'item', 'selected'],
  outputs: ['didGroupClick', 'didGroupCollapse']
})
export class SeListGroup {
  /** Emitted when the group item is clicked. */
  didGroupClick!: EventEmitter<CustomEvent<boolean>>;
  /** Emitted when the group item is collapsed/uncollapsed. */
  didGroupCollapse!: EventEmitter<CustomEvent<IListGroupComponentGroupCollapseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didGroupClick', 'didGroupCollapse']);
  }
}


export declare interface SeListItem extends Components.SeListItem {}
@ProxyCmp({
  inputs: ['description', 'disabled', 'href', 'icon', 'iconColor', 'item', 'selected'],
  methods: ['focusElement', 'blurElement', 'setOption']
})
@Component({
  selector: 'se-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'disabled', 'href', 'icon', 'iconColor', 'item', 'selected'],
  outputs: ['didSelectedChange']
})
export class SeListItem {
  /** Event emitted to notify the list-group component that the selected state has changed. */
  didSelectedChange!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSelectedChange']);
  }
}


export declare interface SeLoading extends Components.SeLoading {}
@ProxyCmp({
  inputs: ['color', 'fullPage', 'loading', 'option', 'overlay']
})
@Component({
  selector: 'se-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'fullPage', 'loading', 'option', 'overlay']
})
export class SeLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { PageEvent as IPaginationComponentPageEvent } from '@se/web-ui/types/components/pagination/pagination';
export declare interface SePagination extends Components.SePagination {}
@ProxyCmp({
  inputs: ['hideEdge', 'labelFirst', 'labelLast', 'labelNext', 'labelPerPage', 'labelPrev', 'labelValue', 'perPage', 'perPageList', 'total', 'value']
})
@Component({
  selector: 'se-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hideEdge', 'labelFirst', 'labelLast', 'labelNext', 'labelPerPage', 'labelPrev', 'labelValue', 'perPage', 'perPageList', 'total', 'value'],
  outputs: ['didChange']
})
export class SePagination {
  /** Event emitted when the selected page or the number of item per page changed.
Return `{value: number; perPage: number;}`. */
  didChange!: EventEmitter<CustomEvent<IPaginationComponentPageEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeRadio extends Components.SeRadio {}
@ProxyCmp({
  inputs: ['color', 'disabled', 'label', 'labelPos', 'name', 'padding', 'required', 'selected', 'value'],
  methods: ['setRequired']
})
@Component({
  selector: 'se-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'label', 'labelPos', 'name', 'padding', 'required', 'selected', 'value'],
  outputs: ['didCheck']
})
export class SeRadio {
  /** Send the checkbox value to the parent component when clicking on the checkbox. */
  didCheck!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didCheck']);
  }
}


export declare interface SeRadioGroup extends Components.SeRadioGroup {}
@ProxyCmp({
  inputs: ['color', 'direction', 'disabled', 'size', 'value']
})
@Component({
  selector: 'se-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'direction', 'disabled', 'size', 'value'],
  outputs: ['didChange']
})
export class SeRadioGroup {
  /** Passes the selected button value to the parent component when clicking on a button in the group. */
  didChange!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeSidemenu extends Components.SeSidemenu {}
@ProxyCmp({
  inputs: ['disabled', 'label', 'link'],
  methods: ['toggle']
})
@Component({
  selector: 'se-sidemenu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'link'],
  outputs: ['toggled', 'didNavigationClick']
})
export class SeSidemenu {
  /** When the menu is opened, it will trigger a `toggled` event with `event.detail.state` set to `open`.
When the menu is closed, it will trigger a `toggled` event with `event.detail.state` set to `closed`. */
  toggled!: EventEmitter<CustomEvent<any>>;
  /**  */
  didNavigationClick!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggled', 'didNavigationClick']);
  }
}


export declare interface SeSidemenuItem extends Components.SeSidemenuItem {}
@ProxyCmp({
  inputs: ['active', 'item']
})
@Component({
  selector: 'se-sidemenu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'item'],
  outputs: ['didClick']
})
export class SeSidemenuItem {
  /** Send an event when the sidemenu item changes */
  didClick!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}


export declare interface SeSkeleton extends Components.SeSkeleton {}
@ProxyCmp({
  inputs: ['circle', 'count', 'height', 'width']
})
@Component({
  selector: 'se-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['circle', 'count', 'height', 'width']
})
export class SeSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeSlider extends Components.SeSlider {}
@ProxyCmp({
  inputs: ['disabled', 'label', 'max', 'min', 'value'],
  methods: ['setDisabled']
})
@Component({
  selector: 'se-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'max', 'min', 'value'],
  outputs: ['didChange']
})
export class SeSlider {
  /** Event emitted when the slider has been changed. */
  didChange!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeSnackbar extends Components.SeSnackbar {}
@ProxyCmp({
  inputs: ['actionText', 'canClose', 'duration', 'icon', 'message', 'open', 'type']
})
@Component({
  selector: 'se-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionText', 'canClose', 'duration', 'icon', 'message', 'open', 'type'],
  outputs: ['didClose', 'actionClicked']
})
export class SeSnackbar {
  /** Sends information to the parent component when closing the snackbar. */
  didClose!: EventEmitter<CustomEvent<void>>;
  /** Sends information to the parent component when clicking a custom action button. */
  actionClicked!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose', 'actionClicked']);
  }
}


export declare interface SeStepper extends Components.SeStepper {}
@ProxyCmp({
  inputs: ['block', 'color', 'interactive', 'labelMaxWidth', 'linear', 'spacing', 'stacked'],
  methods: ['reset', 'previous', 'next']
})
@Component({
  selector: 'se-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'color', 'interactive', 'labelMaxWidth', 'linear', 'spacing', 'stacked'],
  outputs: ['didChange']
})
export class SeStepper {
  /** Event to send to the parent component when a stepper item is clicked and next and previous will be clicked.
The Stepper Item data is passed to the parent. */
  didChange!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}


export declare interface SeStepperItem extends Components.SeStepperItem {}
@ProxyCmp({
  inputs: ['active', 'interactive', 'label', 'validated']
})
@Component({
  selector: 'se-stepper-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'interactive', 'label', 'validated'],
  outputs: ['didValidate', 'didActivate']
})
export class SeStepperItem {
  /** Event to send to the parent component when a stepper item's data is validated. */
  didValidate!: EventEmitter<CustomEvent<any>>;
  /** Event to send to the parent component when a stepper item's data is active true or false.
The boolean validated property is passed to the parent. */
  didActivate!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didValidate', 'didActivate']);
  }
}


export declare interface SeTab extends Components.SeTab {}
@ProxyCmp({
  inputs: ['option', 'overflow']
})
@Component({
  selector: 'se-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['option', 'overflow']
})
export class SeTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTabItem extends Components.SeTabItem {}
@ProxyCmp({
  inputs: ['disabled', 'href', 'selected']
})
@Component({
  selector: 'se-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'selected']
})
export class SeTabItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTabbar extends Components.SeTabbar {}
@ProxyCmp({
  inputs: ['color', 'option', 'overflow']
})
@Component({
  selector: 'se-tabbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'option', 'overflow']
})
export class SeTabbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTable extends Components.SeTable {}
@ProxyCmp({
  inputs: ['alignItems', 'compact']
})
@Component({
  selector: 'se-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignItems', 'compact']
})
export class SeTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTableGroup extends Components.SeTableGroup {}
@ProxyCmp({
  inputs: ['selectable', 'selected']
})
@Component({
  selector: 'se-table-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selectable', 'selected']
})
export class SeTableGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTableGroupHeader extends Components.SeTableGroupHeader {}

@Component({
  selector: 'se-table-group-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SeTableGroupHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTableItem extends Components.SeTableItem {}
@ProxyCmp({
  inputs: ['alignItems', 'clickable', 'flex', 'maxWidth', 'minWidth', 'option', 'width']
})
@Component({
  selector: 'se-table-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignItems', 'clickable', 'flex', 'maxWidth', 'minWidth', 'option', 'width']
})
export class SeTableItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTableItemHeader extends Components.SeTableItemHeader {}
@ProxyCmp({
  inputs: ['clickable', 'flex', 'maxWidth', 'minWidth', 'resizable', 'sort', 'width']
})
@Component({
  selector: 'se-table-item-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'flex', 'maxWidth', 'minWidth', 'resizable', 'sort', 'width'],
  outputs: ['didWidthChange']
})
export class SeTableItemHeader {
  /** Event emitted to notify the table-group-header component that the width has changed. */
  didWidthChange!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didWidthChange']);
  }
}


export declare interface SeTooltip extends Components.SeTooltip {}
@ProxyCmp({
  inputs: ['action', 'color', 'position', 'showDelay'],
  methods: ['open', 'close']
})
@Component({
  selector: 'se-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'color', 'position', 'showDelay'],
  outputs: ['didOpen', 'didClose']
})
export class SeTooltip {
  /** Event emitted when the tooltip has been opened. */
  didOpen!: EventEmitter<CustomEvent<any>>;
  /** Event emitted when the tooltip has been closed. */
  didClose!: EventEmitter<CustomEvent<any>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose']);
  }
}


export declare interface SeTooltipContent extends Components.SeTooltipContent {}
@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'se-tooltip-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon']
})
export class SeTooltipContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTooltipFooter extends Components.SeTooltipFooter {}

@Component({
  selector: 'se-tooltip-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SeTooltipFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeTooltipHeader extends Components.SeTooltipHeader {}
@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'se-tooltip-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon']
})
export class SeTooltipHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeVisualLinear extends Components.SeVisualLinear {}
@ProxyCmp({
  inputs: ['label', 'option', 'percentage', 'secolor', 'value']
})
@Component({
  selector: 'se-visual-linear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'option', 'percentage', 'secolor', 'value']
})
export class SeVisualLinear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SeVisualRadial extends Components.SeVisualRadial {}
@ProxyCmp({
  inputs: ['label', 'percentage', 'secolor', 'size', 'value']
})
@Component({
  selector: 'se-visual-radial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'percentage', 'secolor', 'size', 'value']
})
export class SeVisualRadial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
