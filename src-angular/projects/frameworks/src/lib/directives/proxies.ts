/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { proxyInputs, proxyMethods, proxyOutputs } from './proxies-utils';

import { Components } from '@se/web-ui';

export declare interface SeAbout extends Components.SeAbout {}
@Component({ selector: 'se-about', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'copyright', 'domain', 'imageUrl', 'link', 'version'] })
export class SeAbout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeAbout, ['appTitle', 'copyright', 'domain', 'imageUrl', 'link', 'version']);

export declare interface SeApp extends Components.SeApp {}
@Component({ selector: 'se-app', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['option'] })
export class SeApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeApp, ['option']);

export declare interface SeAuthentication extends Components.SeAuthentication {}
@Component({ selector: 'se-authentication', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'link', 'logo', 'version'] })
export class SeAuthentication {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeAuthentication, ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'link', 'logo', 'version']);

export declare interface SeBlock extends Components.SeBlock {}
@Component({ selector: 'se-block', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'display', 'enlarged', 'height', 'loading', 'option', 'width'] })
export class SeBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeBlock, ['color', 'display', 'enlarged', 'height', 'loading', 'option', 'width']);

export declare interface SeBlockContent extends Components.SeBlockContent {}
@Component({ selector: 'se-block-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['option'] })
export class SeBlockContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeBlockContent, ['option']);

export declare interface SeBlockFooter extends Components.SeBlockFooter {}
@Component({ selector: 'se-block-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['direction', 'option'] })
export class SeBlockFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeBlockFooter, ['direction', 'option']);

export declare interface SeBlockHeader extends Components.SeBlockHeader {}
@Component({ selector: 'se-block-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['option'] })
export class SeBlockHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeBlockHeader, ['option']);

export declare interface SeBreadcrumb extends Components.SeBreadcrumb {}
@Component({ selector: 'se-breadcrumb', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(SeBreadcrumb, ['updateChildren']);

export declare interface SeBreadcrumbItem extends Components.SeBreadcrumbItem {}
@Component({ selector: 'se-breadcrumb-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['href', 'isLast'] })
export class SeBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeBreadcrumbItem, ['href', 'isLast']);

export declare interface SeButton extends Components.SeButton {}
@Component({ selector: 'se-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'option', 'selected', 'size', 'type', 'value'] })
export class SeButton {
  didClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}
proxyMethods(SeButton, ['setDisabled', 'setGrouped']);
proxyInputs(SeButton, ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'option', 'selected', 'size', 'type', 'value']);

export declare interface SeCheckbox extends Components.SeCheckbox {}
@Component({ selector: 'se-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['background', 'color', 'disabled', 'header', 'label', 'option', 'required', 'selected', 'textOff', 'textOn', 'value'] })
export class SeCheckbox {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}
proxyMethods(SeCheckbox, ['setRequired']);
proxyInputs(SeCheckbox, ['background', 'color', 'disabled', 'header', 'label', 'option', 'required', 'selected', 'textOff', 'textOn', 'value']);

export declare interface SeChip extends Components.SeChip {}
@Component({ selector: 'se-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'canClose', 'color', 'disabled', 'selected', 'value'] })
export class SeChip {
  didClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose']);
  }
}
proxyInputs(SeChip, ['block', 'canClose', 'color', 'disabled', 'selected', 'value']);

export declare interface SeContainer extends Components.SeContainer {}
@Component({ selector: 'se-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'columnSize', 'direction', 'display', 'option', 'position', 'rowSize'] })
export class SeContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeContainer, ['color', 'columnSize', 'direction', 'display', 'option', 'position', 'rowSize']);

export declare interface SeDialog extends Components.SeDialog {}
@Component({ selector: 'se-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canBackdrop', 'color', 'open', 'size'] })
export class SeDialog {
  backdrop!: EventEmitter<CustomEvent>;
  didClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['backdrop', 'didClose']);
  }
}
proxyMethods(SeDialog, ['backdropClicked']);
proxyInputs(SeDialog, ['canBackdrop', 'color', 'open', 'size']);

export declare interface SeDialogContent extends Components.SeDialogContent {}
@Component({ selector: 'se-dialog-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon', 'iconColor', 'option'] })
export class SeDialogContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeDialogContent, ['icon', 'iconColor', 'option']);

export declare interface SeDialogFooter extends Components.SeDialogFooter {}
@Component({ selector: 'se-dialog-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeDialogFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeDialogHeader extends Components.SeDialogHeader {}
@Component({ selector: 'se-dialog-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] })
export class SeDialogHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeDialogHeader, ['color']);

export declare interface SeDivider extends Components.SeDivider {}
@Component({ selector: 'se-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'option'] })
export class SeDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeDivider, ['color', 'option']);

export declare interface SeDropdown extends Components.SeDropdown {}
@Component({ selector: 'se-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment'] })
export class SeDropdown {
  didOpen!: EventEmitter<CustomEvent>;
  didClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose']);
  }
}
proxyMethods(SeDropdown, ['open', 'close']);
proxyInputs(SeDropdown, ['alignment']);

export declare interface SeFab extends Components.SeFab {}
@Component({ selector: 'se-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'icon', 'option', 'position'] })
export class SeFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(SeFab, ['toggleAction']);
proxyInputs(SeFab, ['color', 'icon', 'option', 'position']);

export declare interface SeFormField extends Components.SeFormField {}
@Component({ selector: 'se-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'label', 'option', 'required', 'status', 'type', 'value'] })
export class SeFormField {
  didSubmit!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSubmit']);
  }
}
proxyInputs(SeFormField, ['disabled', 'label', 'option', 'required', 'status', 'type', 'value']);

export declare interface SeHeader extends Components.SeHeader {}
@Component({ selector: 'se-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'domain', 'project'] })
export class SeHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeHeader, ['appTitle', 'domain', 'project']);

export declare interface SeIcon extends Components.SeIcon {}
@Component({ selector: 'se-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'option', 'size'] })
export class SeIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeIcon, ['color', 'option', 'size']);

export declare interface SeIconEcostruxure extends Components.SeIconEcostruxure {}
@Component({ selector: 'se-icon-ecostruxure', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['size'] })
export class SeIconEcostruxure {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeIconEcostruxure, ['size']);

export declare interface SeIconLifeison extends Components.SeIconLifeison {}
@Component({ selector: 'se-icon-lifeison', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] })
export class SeIconLifeison {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeIconLifeison, ['color']);

export declare interface SeIconSchneider extends Components.SeIconSchneider {}
@Component({ selector: 'se-icon-schneider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeIconSchneider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeLink extends Components.SeLink {}
@Component({ selector: 'se-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'option', 'url'] })
export class SeLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeLink, ['disabled', 'option', 'url']);

export declare interface SeList extends Components.SeList {}
@Component({ selector: 'se-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canCollapse', 'option'] })
export class SeList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeList, ['canCollapse', 'option']);

export declare interface SeListGroup extends Components.SeListGroup {}
@Component({ selector: 'se-list-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canCollapse', 'collapsed', 'description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected', 'selectedChild'] })
export class SeListGroup {
  didGroupClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didGroupClick']);
  }
}
proxyInputs(SeListGroup, ['canCollapse', 'collapsed', 'description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected', 'selectedChild']);

export declare interface SeListItem extends Components.SeListItem {}
@Component({ selector: 'se-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected'] })
export class SeListItem {
  didSelectedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSelectedChange']);
  }
}
proxyInputs(SeListItem, ['description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected']);

export declare interface SeLoading extends Components.SeLoading {}
@Component({ selector: 'se-loading', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['loading', 'option'] })
export class SeLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeLoading, ['loading', 'option']);

export declare interface SeRadio extends Components.SeRadio {}
@Component({ selector: 'se-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'label', 'required', 'selected', 'value'] })
export class SeRadio {
  didCheck!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didCheck']);
  }
}
proxyMethods(SeRadio, ['setRequired']);
proxyInputs(SeRadio, ['color', 'disabled', 'label', 'required', 'selected', 'value']);

export declare interface SeRadioGroup extends Components.SeRadioGroup {}
@Component({ selector: 'se-radio-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'size', 'value'] })
export class SeRadioGroup {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}
proxyInputs(SeRadioGroup, ['color', 'disabled', 'size', 'value']);

export declare interface SeSidemenu extends Components.SeSidemenu {}
@Component({ selector: 'se-sidemenu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label'] })
export class SeSidemenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(SeSidemenu, ['toggle']);
proxyInputs(SeSidemenu, ['label']);

export declare interface SeSidemenuItem extends Components.SeSidemenuItem {}
@Component({ selector: 'se-sidemenu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'item'] })
export class SeSidemenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeSidemenuItem, ['active', 'item']);

export declare interface SeSlider extends Components.SeSlider {}
@Component({ selector: 'se-slider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'max', 'min'] })
export class SeSlider {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}
proxyMethods(SeSlider, ['setDisabled']);
proxyInputs(SeSlider, ['disabled', 'max', 'min']);

export declare interface SeSnackbar extends Components.SeSnackbar {}
@Component({ selector: 'se-snackbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canClose', 'closeText', 'icon', 'message', 'open', 'type'] })
export class SeSnackbar {
  didClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose']);
  }
}
proxyInputs(SeSnackbar, ['canClose', 'closeText', 'icon', 'message', 'open', 'type']);

export declare interface SeTabbar extends Components.SeTabbar {}
@Component({ selector: 'se-tabbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'option'] })
export class SeTabbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeTabbar, ['color', 'option']);

export declare interface SeTooltip extends Components.SeTooltip {}
@Component({ selector: 'se-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['action', 'position'] })
export class SeTooltip {
  didOpen!: EventEmitter<CustomEvent>;
  didClose!: EventEmitter<CustomEvent>;
  closeTooltips!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose', 'closeTooltips']);
  }
}
proxyMethods(SeTooltip, ['open', 'close']);
proxyInputs(SeTooltip, ['action', 'position']);

export declare interface SeTooltipContent extends Components.SeTooltipContent {}
@Component({ selector: 'se-tooltip-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class SeTooltipContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeTooltipContent, ['icon']);

export declare interface SeTooltipFooter extends Components.SeTooltipFooter {}
@Component({ selector: 'se-tooltip-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeTooltipFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTooltipHeader extends Components.SeTooltipHeader {}
@Component({ selector: 'se-tooltip-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class SeTooltipHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeTooltipHeader, ['icon']);

export declare interface SeVisualLinear extends Components.SeVisualLinear {}
@Component({ selector: 'se-visual-linear', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'option', 'percentage', 'secolor', 'value'] })
export class SeVisualLinear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeVisualLinear, ['label', 'option', 'percentage', 'secolor', 'value']);

export declare interface SeVisualRadial extends Components.SeVisualRadial {}
@Component({ selector: 'se-visual-radial', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'percentage', 'secolor', 'size', 'value'] })
export class SeVisualRadial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(SeVisualRadial, ['label', 'percentage', 'secolor', 'size', 'value']);
