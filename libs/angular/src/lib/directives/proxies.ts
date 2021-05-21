/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
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

import { AppComponent as IAppComponent } from 'dist/libs/core/types/components/app/app';
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
  themeChanged!: IAppComponent['themeChanged'];
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

import { BannerItemComponent as IBannerItemComponent } from 'dist/libs/core/types/components/banner-item/banner-item';
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
  didChange!: IBannerItemComponent['didChange'];
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

import { BreadcrumbItemComponent as IBreadcrumbItemComponent } from 'dist/libs/core/types/components/breadcrumb-item/breadcrumb-item';
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
  didNavigate!: IBreadcrumbItemComponent['didNavigate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didNavigate']);
  }
}

import { ButtonComponent as IButtonComponent } from 'dist/libs/core/types/components/button/button';
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
  didClick!: IButtonComponent['didClick'];
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

import { CheckboxComponent as ICheckboxComponent } from 'dist/libs/core/types/components/checkbox/checkbox';
export declare interface SeCheckbox extends Components.SeCheckbox {}
@ProxyCmp({
  inputs: ['color', 'disabled', 'header', 'indeterminate', 'label', 'labelPos', 'labelSuffix', 'option', 'padding', 'required', 'selected', 'size', 'textOff', 'textOn', 'value'],
  methods: ['setRequired']
})
@Component({
  selector: 'se-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'header', 'indeterminate', 'label', 'labelPos', 'labelSuffix', 'option', 'padding', 'required', 'selected', 'size', 'textOff', 'textOn', 'value'],
  outputs: ['didChange']
})
export class SeCheckbox {
  /** Send the checkbox value to the parent component when clicking on the checkbox. */
  didChange!: ICheckboxComponent['didChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

import { ChipComponent as IChipComponent } from 'dist/libs/core/types/components/chip/chip';
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
  didClose!: IChipComponent['didClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose']);
  }
}


export declare interface SeContainer extends Components.SeContainer {}
@ProxyCmp({
  inputs: ['color', 'columnSize', 'direction', 'display', 'option', 'padding', 'position', 'rowSize']
})
@Component({
  selector: 'se-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'columnSize', 'direction', 'display', 'option', 'padding', 'position', 'rowSize']
})
export class SeContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { DialogComponent as IDialogComponent } from 'dist/libs/core/types/components/dialog/dialog';
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
  backdrop!: IDialogComponent['backdrop'];
  /** Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM. */
  didClose!: IDialogComponent['didClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['backdrop', 'didClose']);
  }
}


export declare interface SeDialogContent extends Components.SeDialogContent {}
@ProxyCmp({
  inputs: ['icon', 'iconColor', 'isLastChild', 'option']
})
@Component({
  selector: 'se-dialog-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'iconColor', 'isLastChild', 'option']
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

import { DialogHeaderComponent as IDialogHeaderComponent } from 'dist/libs/core/types/components/dialog-header/dialog-header';
export declare interface SeDialogHeader extends Components.SeDialogHeader {}
@ProxyCmp({
  inputs: ['closeIcon', 'color', 'option']
})
@Component({
  selector: 'se-dialog-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeIcon', 'color', 'option'],
  outputs: ['didCloseDialog']
})
export class SeDialogHeader {
  /** Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM. */
  didCloseDialog!: IDialogHeaderComponent['didCloseDialog'];
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

import { DropdownComponent as IDropdownComponent } from 'dist/libs/core/types/components/dropdown/dropdown';
export declare interface SeDropdown extends Components.SeDropdown {}
@ProxyCmp({
  inputs: ['action', 'alignment', 'maxHeight', 'maxWidth', 'verticalAlignment'],
  methods: ['open', 'close']
})
@Component({
  selector: 'se-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'alignment', 'maxHeight', 'maxWidth', 'verticalAlignment'],
  outputs: ['didOpen', 'didClose', 'cancelAllDropdown']
})
export class SeDropdown {
  /** Event emitted when the dropdown has been opened. */
  didOpen!: IDropdownComponent['didOpen'];
  /** Event emitted when the dropdown has been closed. */
  didClose!: IDropdownComponent['didClose'];
  /** Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time. */
  cancelAllDropdown!: IDropdownComponent['cancelAllDropdown'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose', 'cancelAllDropdown']);
  }
}

import { FabComponent as IFabComponent } from 'dist/libs/core/types/components/fab/fab';
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
  closeTooltips!: IFabComponent['closeTooltips'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeTooltips']);
  }
}

import { FabItemComponent as IFabItemComponent } from 'dist/libs/core/types/components/fab-item/fab-item';
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
  didClick!: IFabItemComponent['didClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}

import { FiltrationComponent as IFiltrationComponent } from 'dist/libs/core/types/components/filtration/filtration';
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
  didSearch!: IFiltrationComponent['didSearch'];
  /** Event emitter for callback to select all items */
  didSelectAll!: IFiltrationComponent['didSelectAll'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSearch', 'didSelectAll']);
  }
}

import { FiltrationSmart as IFiltrationSmart } from 'dist/libs/core/types/components/filtration-smart/filtration-smart';
export declare interface SeFiltrationSmart extends Components.SeFiltrationSmart {}
@ProxyCmp({
  inputs: ['filters', 'headerLabelDesktop', 'headerLabelMobile', 'isMobileViewVisible', 'maxFacetContentHeight', 'resetButtonLabel', 'showProductsLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel', 'visibleFacetsCount', 'visibleRefinementsPerFacetCount'],
  methods: ['reset', 'setIsFilterChecked']
})
@Component({
  selector: 'se-filtration-smart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['filters', 'headerLabelDesktop', 'headerLabelMobile', 'isMobileViewVisible', 'maxFacetContentHeight', 'resetButtonLabel', 'showProductsLabel', 'viewLessFacetsLabel', 'viewLessRefinementsLabel', 'viewMoreFacetsLabel', 'viewMoreRefinementsLabel', 'visibleFacetsCount', 'visibleRefinementsPerFacetCount'],
  outputs: ['filterStateChanged']
})
export class SeFiltrationSmart {
  /** Event that emits list of checked filters. */
  filterStateChanged!: IFiltrationSmart['filterStateChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterStateChanged']);
  }
}

import { FiltrationSmartCheckbox as IFiltrationSmartCheckbox } from 'dist/libs/core/types/components/filtration-smart/checkbox/checkbox';
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
  refinementStateChanged!: IFiltrationSmartCheckbox['refinementStateChanged'];
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

import { FiltrationSmartFacet as IFiltrationSmartFacet } from 'dist/libs/core/types/components/filtration-smart/facet/facet';
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
  toggleIsSectionExpanded!: IFiltrationSmartFacet['toggleIsSectionExpanded'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleIsSectionExpanded']);
  }
}

import { FiltrationSmartGroup as IFiltrationSmartGroup } from 'dist/libs/core/types/components/filtration-smart/group/group';
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
  toggleIsSectionExpanded!: IFiltrationSmartGroup['toggleIsSectionExpanded'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleIsSectionExpanded']);
  }
}

import { FiltrationSmartMobileView as IFiltrationSmartMobileView } from 'dist/libs/core/types/components/filtration-smart/mobile-view/mobile-view';
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
  toggleMobileView!: IFiltrationSmartMobileView['toggleMobileView'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMobileView']);
  }
}

import { FiltrationSmartMobileViewTrigger as IFiltrationSmartMobileViewTrigger } from 'dist/libs/core/types/components/filtration-smart/mobile-view-trigger/mobile-view-trigger';
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
  toggleMobileView!: IFiltrationSmartMobileViewTrigger['toggleMobileView'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleMobileView']);
  }
}

import { FiltrationSmartResetButton as IFiltrationSmartResetButton } from 'dist/libs/core/types/components/filtration-smart/reset-button/reset-button';
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
  resetAllClicked!: IFiltrationSmartResetButton['resetAllClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['resetAllClicked']);
  }
}

import { FiltrationSmartTab as IFiltrationSmartTab } from 'dist/libs/core/types/components/filtration-smart/tab/tab';
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
  refinementStateChanged!: IFiltrationSmartTab['refinementStateChanged'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['refinementStateChanged']);
  }
}

import { FiltrationSmartViewMoreSectionsButton as IFiltrationSmartViewMoreSectionsButton } from 'dist/libs/core/types/components/filtration-smart/view-more-facets-button/view-more-facets-button';
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
  toggleViewMoreFacets!: IFiltrationSmartViewMoreSectionsButton['toggleViewMoreFacets'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleViewMoreFacets']);
  }
}

import { FiltrationSmartViewMoreRefinementsButton as IFiltrationSmartViewMoreRefinementsButton } from 'dist/libs/core/types/components/filtration-smart/view-more-refinements-button/view-more-refinements-button';
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
  toggleViewMoreRefinements!: IFiltrationSmartViewMoreRefinementsButton['toggleViewMoreRefinements'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggleViewMoreRefinements']);
  }
}

import { FormFieldComponent as IFormFieldComponent } from 'dist/libs/core/types/components/form-field/form-field';
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
  didSubmit!: IFormFieldComponent['didSubmit'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSubmit']);
  }
}


export declare interface SeHeader extends Components.SeHeader {}
@ProxyCmp({
  inputs: ['appTitle', 'domain', 'hideSeLogo', 'project']
})
@Component({
  selector: 'se-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appTitle', 'domain', 'hideSeLogo', 'project']
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
  inputs: ['animation', 'color', 'disabled', 'mirror', 'option', 'rotate', 'size']
})
@Component({
  selector: 'se-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animation', 'color', 'disabled', 'mirror', 'option', 'rotate', 'size']
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
  inputs: ['disabled', 'download', 'option', 'unicolor', 'url']
})
@Component({
  selector: 'se-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'option', 'unicolor', 'url']
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

import { ListGroupComponent as IListGroupComponent } from 'dist/libs/core/types/components/list-group/list-group';
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
  didGroupClick!: IListGroupComponent['didGroupClick'];
  /** Emitted when the group item is collapsed/uncollapsed. */
  didGroupCollapse!: IListGroupComponent['didGroupCollapse'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didGroupClick', 'didGroupCollapse']);
  }
}

import { ListItemComponent as IListItemComponent } from 'dist/libs/core/types/components/list-item/list-item';
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
  didSelectedChange!: IListItemComponent['didSelectedChange'];
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

import { PaginationComponent as IPaginationComponent } from 'dist/libs/core/types/components/pagination/pagination';
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
  didChange!: IPaginationComponent['eventEmitter'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

import { RadioComponent as IRadioComponent } from 'dist/libs/core/types/components/radio/radio';
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
  didCheck!: IRadioComponent['didCheck'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didCheck']);
  }
}

import { RadioGroupComponent as IRadioGroupComponent } from 'dist/libs/core/types/components/radio-group/radio-group';
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
  didChange!: IRadioGroupComponent['didChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

import { SidemenuComponent as ISidemenuComponent } from 'dist/libs/core/types/components/sidemenu/sidemenu';
export declare interface SeSidemenu extends Components.SeSidemenu {}
@ProxyCmp({
  inputs: ['label', 'link'],
  methods: ['toggle']
})
@Component({
  selector: 'se-sidemenu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'link'],
  outputs: ['toggled']
})
export class SeSidemenu {
  /** When the menu is opened, it will trigger a `toggled` event with `event.detail.state` set to `open`.
When the menu is closed, it will trigger a `toggled` event with `event.detail.state` set to `closed`. */
  toggled!: ISidemenuComponent['toggled'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggled']);
  }
}

import { SidemenuItemComponent as ISidemenuItemComponent } from 'dist/libs/core/types/components/sidemenu-item/sidemenu-item';
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
  didClick!: ISidemenuItemComponent['didClick'];
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

import { SliderComponent as ISliderComponent } from 'dist/libs/core/types/components/slider/slider';
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
  didChange!: ISliderComponent['didChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

import { SnackbarComponent as ISnackbarComponent } from 'dist/libs/core/types/components/snackbar/snackbar';
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
  didClose!: ISnackbarComponent['didClose'];
  /** Sends information to the parent component when clicking a custom action button. */
  actionClicked!: ISnackbarComponent['actionClicked'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose', 'actionClicked']);
  }
}

import { StepperComponent as IStepperComponent } from 'dist/libs/core/types/components/stepper/stepper';
export declare interface SeStepper extends Components.SeStepper {}
@ProxyCmp({
  inputs: ['block', 'color', 'interactive', 'linear'],
  methods: ['reset', 'previous', 'next']
})
@Component({
  selector: 'se-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['block', 'color', 'interactive', 'linear'],
  outputs: ['didChange']
})
export class SeStepper {
  /** Event to send to the parent component when a stepper item is clicked and next and previous will be clicked.
The Stepper Item data is passed to the parent. */
  didChange!: IStepperComponent['didChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

import { StepperItemComponent as IStepperItemComponent } from 'dist/libs/core/types/components/stepper-item/stepper-item';
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
  didValidate!: IStepperItemComponent['didValidate'];
  /** Event to send to the parent component when a stepper item's data is active true or false.
The boolean validated property is passed to the parent. */
  didActivate!: IStepperItemComponent['didActivate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didValidate', 'didActivate']);
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
  inputs: ['compact']
})
@Component({
  selector: 'se-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['compact']
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
  inputs: ['clickable', 'flex', 'minWidth', 'option', 'width']
})
@Component({
  selector: 'se-table-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'flex', 'minWidth', 'option', 'width']
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
  inputs: ['clickable', 'flex', 'minWidth', 'sort', 'width']
})
@Component({
  selector: 'se-table-item-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'flex', 'minWidth', 'sort', 'width']
})
export class SeTableItemHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { TooltipComponent as ITooltipComponent } from 'dist/libs/core/types/components/tooltip/tooltip';
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
  didOpen!: ITooltipComponent['didOpen'];
  /** Event emitted when the tooltip has been closed. */
  didClose!: ITooltipComponent['didClose'];
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
