/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './proxies-utils';

import { Components } from '@se/web-ui'

export declare interface SeAbout extends Components.SeAbout {}
@ProxyCmp({inputs: ['appTitle', 'copyright', 'domain', 'imageUrl', 'version']})
@Component({ selector: 'se-about', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'copyright', 'domain', 'imageUrl', 'version'] })
export class SeAbout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeApp extends Components.SeApp {}
@ProxyCmp({inputs: ['option']})
@Component({ selector: 'se-app', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['option'] })
export class SeApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeAuthentication extends Components.SeAuthentication {}
@ProxyCmp({inputs: ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'version']})
@Component({ selector: 'se-authentication', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'copyright', 'domain', 'hide', 'imageUrl', 'version'] })
export class SeAuthentication {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBanner extends Components.SeBanner {}
@ProxyCmp({inputs: ['duration']})
@Component({ selector: 'se-banner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['duration'] })
export class SeBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBannerItem extends Components.SeBannerItem {}
@ProxyCmp({inputs: ['active', 'imageUrl']})
@Component({ selector: 'se-banner-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'imageUrl'] })
export class SeBannerItem {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

export declare interface SeBlock extends Components.SeBlock {}
@ProxyCmp({inputs: ['clickable', 'clickableBar', 'color', 'corner', 'display', 'divider', 'enlarged', 'height', 'loading', 'margin', 'option', 'outline', 'outlineColor', 'width']})
@Component({ selector: 'se-block', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clickable', 'clickableBar', 'color', 'corner', 'display', 'divider', 'enlarged', 'height', 'loading', 'margin', 'option', 'outline', 'outlineColor', 'width'] })
export class SeBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBlockContent extends Components.SeBlockContent {}
@ProxyCmp({inputs: ['option']})
@Component({ selector: 'se-block-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['option'] })
export class SeBlockContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBlockFooter extends Components.SeBlockFooter {}
@ProxyCmp({inputs: ['direction', 'divider', 'option']})
@Component({ selector: 'se-block-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['direction', 'divider', 'option'] })
export class SeBlockFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBlockHeader extends Components.SeBlockHeader {}
@ProxyCmp({inputs: ['divider', 'option']})
@Component({ selector: 'se-block-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['divider', 'option'] })
export class SeBlockHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBreadcrumb extends Components.SeBreadcrumb {}

@Component({ selector: 'se-breadcrumb', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeBreadcrumbItem extends Components.SeBreadcrumbItem {}
@ProxyCmp({inputs: ['href', 'isLast']})
@Component({ selector: 'se-breadcrumb-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['href', 'isLast'] })
export class SeBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeButton extends Components.SeButton {}
@ProxyCmp({inputs: ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'iconOnly', 'option', 'selected', 'size', 'type', 'value'], 'methods': ['setDisabled', 'setGrouped']})
@Component({ selector: 'se-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'caption', 'color', 'disabled', 'icon', 'iconColor', 'iconOnly', 'option', 'selected', 'size', 'type', 'value'] })
export class SeButton {
  didClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}

export declare interface SeCheckbox extends Components.SeCheckbox {}
@ProxyCmp({inputs: ['background', 'color', 'disabled', 'header', 'label', 'labelPos', 'option', 'required', 'selected', 'textOff', 'textOn', 'value'], 'methods': ['setRequired']})
@Component({ selector: 'se-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['background', 'color', 'disabled', 'header', 'label', 'labelPos', 'option', 'required', 'selected', 'textOff', 'textOn', 'value'] })
export class SeCheckbox {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

export declare interface SeChip extends Components.SeChip {}
@ProxyCmp({inputs: ['block', 'canClose', 'color', 'disabled', 'selected', 'size', 'value']})
@Component({ selector: 'se-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'canClose', 'color', 'disabled', 'selected', 'size', 'value'] })
export class SeChip {
  didClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose']);
  }
}

export declare interface SeContainer extends Components.SeContainer {}
@ProxyCmp({inputs: ['color', 'columnSize', 'direction', 'display', 'option', 'padding', 'position', 'rowSize']})
@Component({ selector: 'se-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'columnSize', 'direction', 'display', 'option', 'padding', 'position', 'rowSize'] })
export class SeContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeDialog extends Components.SeDialog {}
@ProxyCmp({inputs: ['canBackdrop', 'color', 'open', 'size'], 'methods': ['backdropClicked']})
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

export declare interface SeDialogContent extends Components.SeDialogContent {}
@ProxyCmp({inputs: ['icon', 'iconColor', 'option']})
@Component({ selector: 'se-dialog-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon', 'iconColor', 'option'] })
export class SeDialogContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

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
@ProxyCmp({inputs: ['color']})
@Component({ selector: 'se-dialog-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] })
export class SeDialogHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeDivider extends Components.SeDivider {}
@ProxyCmp({inputs: ['color', 'option']})
@Component({ selector: 'se-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'option'] })
export class SeDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeDropdown extends Components.SeDropdown {}
@ProxyCmp({inputs: ['alignment', 'maxHeight', 'maxWidth', 'verticalAlignment'], 'methods': ['open', 'close']})
@Component({ selector: 'se-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'maxHeight', 'maxWidth', 'verticalAlignment'] })
export class SeDropdown {
  didOpen!: EventEmitter<CustomEvent>;
  didClose!: EventEmitter<CustomEvent>;
  cancelAllDropdown!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didOpen', 'didClose', 'cancelAllDropdown']);
  }
}

export declare interface SeFab extends Components.SeFab {}
@ProxyCmp({inputs: ['color', 'icon', 'option', 'position'], 'methods': ['toggleAction']})
@Component({ selector: 'se-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'icon', 'option', 'position'] })
export class SeFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeFabItem extends Components.SeFabItem {}
@ProxyCmp({inputs: ['icon']})
@Component({ selector: 'se-fab-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class SeFabItem {
  didClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}

export declare interface SeFormField extends Components.SeFormField {}
@ProxyCmp({inputs: ['block', 'disabled', 'label', 'labelWidth', 'option', 'padding', 'required', 'status', 'type', 'value']})
@Component({ selector: 'se-form-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['block', 'disabled', 'label', 'labelWidth', 'option', 'padding', 'required', 'status', 'type', 'value'] })
export class SeFormField {
  didSubmit!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSubmit']);
  }
}

export declare interface SeHeader extends Components.SeHeader {}
@ProxyCmp({inputs: ['appTitle', 'domain', 'project']})
@Component({ selector: 'se-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['appTitle', 'domain', 'project'] })
export class SeHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeIcon extends Components.SeIcon {}
@ProxyCmp({inputs: ['color', 'disabled', 'option', 'size']})
@Component({ selector: 'se-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'option', 'size'] })
export class SeIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeIconEcostruxure extends Components.SeIconEcostruxure {}
@ProxyCmp({inputs: ['color', 'size']})
@Component({ selector: 'se-icon-ecostruxure', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'size'] })
export class SeIconEcostruxure {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeIconLifeison extends Components.SeIconLifeison {}
@ProxyCmp({inputs: ['color']})
@Component({ selector: 'se-icon-lifeison', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color'] })
export class SeIconLifeison {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

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
@ProxyCmp({inputs: ['disabled', 'option', 'url']})
@Component({ selector: 'se-link', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'option', 'url'] })
export class SeLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeList extends Components.SeList {}
@ProxyCmp({inputs: ['canCollapse', 'option']})
@Component({ selector: 'se-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canCollapse', 'option'] })
export class SeList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeListGroup extends Components.SeListGroup {}
@ProxyCmp({inputs: ['canCollapse', 'collapsed', 'description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected', 'selectedChild']})
@Component({ selector: 'se-list-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['canCollapse', 'collapsed', 'description', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected', 'selectedChild'] })
export class SeListGroup {
  didGroupClick!: EventEmitter<CustomEvent>;
  didGroupCollapse!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didGroupClick', 'didGroupCollapse']);
  }
}

export declare interface SeListItem extends Components.SeListItem {}
@ProxyCmp({inputs: ['description', 'href', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected']})
@Component({ selector: 'se-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['description', 'href', 'icon', 'iconColor', 'indentation', 'item', 'option', 'selected'] })
export class SeListItem {
  didSelectedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didSelectedChange']);
  }
}

export declare interface SeLoading extends Components.SeLoading {}
@ProxyCmp({inputs: ['loading', 'option']})
@Component({ selector: 'se-loading', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['loading', 'option'] })
export class SeLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeRadio extends Components.SeRadio {}
@ProxyCmp({inputs: ['color', 'disabled', 'label', 'labelPos', 'required', 'selected', 'value'], 'methods': ['setRequired']})
@Component({ selector: 'se-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'label', 'labelPos', 'required', 'selected', 'value'] })
export class SeRadio {
  didCheck!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didCheck']);
  }
}

export declare interface SeRadioGroup extends Components.SeRadioGroup {}
@ProxyCmp({inputs: ['color', 'disabled', 'size', 'value']})
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

export declare interface SeSidemenu extends Components.SeSidemenu {}
@ProxyCmp({inputs: ['label', 'link'], 'methods': ['toggle']})
@Component({ selector: 'se-sidemenu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'link'] })
export class SeSidemenu {
  toggled!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggled']);
  }
}

export declare interface SeSidemenuItem extends Components.SeSidemenuItem {}
@ProxyCmp({inputs: ['active', 'item']})
@Component({ selector: 'se-sidemenu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'item'] })
export class SeSidemenuItem {
  didClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClick']);
  }
}

export declare interface SeSlider extends Components.SeSlider {}
@ProxyCmp({inputs: ['disabled', 'label', 'max', 'min', 'value'], 'methods': ['setDisabled']})
@Component({ selector: 'se-slider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'label', 'max', 'min', 'value'] })
export class SeSlider {
  didChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didChange']);
  }
}

export declare interface SeSnackbar extends Components.SeSnackbar {}
@ProxyCmp({inputs: ['actionText', 'canClose', 'duration', 'icon', 'message', 'open', 'type']})
@Component({ selector: 'se-snackbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['actionText', 'canClose', 'duration', 'icon', 'message', 'open', 'type'] })
export class SeSnackbar {
  didClose!: EventEmitter<CustomEvent>;
  actionClicked!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didClose', 'actionClicked']);
  }
}

export declare interface SeStepper extends Components.SeStepper {}
@ProxyCmp({inputs: ['color', 'linear'], 'methods': ['reset', 'previous', 'next']})
@Component({ selector: 'se-stepper', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'linear'] })
export class SeStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeStepperItem extends Components.SeStepperItem {}
@ProxyCmp({inputs: ['active', 'label', 'validated']})
@Component({ selector: 'se-stepper-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['active', 'label', 'validated'] })
export class SeStepperItem {
  didValidate!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didValidate']);
  }
}

export declare interface SeTabbar extends Components.SeTabbar {}
@ProxyCmp({inputs: ['color', 'option', 'overflow']})
@Component({ selector: 'se-tabbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'option', 'overflow'] })
export class SeTabbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTable extends Components.SeTable {}

@Component({ selector: 'se-table', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTableGroup extends Components.SeTableGroup {}
@ProxyCmp({inputs: ['selectable', 'selected']})
@Component({ selector: 'se-table-group', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['selectable', 'selected'] })
export class SeTableGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTableGroupHeader extends Components.SeTableGroupHeader {}

@Component({ selector: 'se-table-group-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>' })
export class SeTableGroupHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTableItem extends Components.SeTableItem {}
@ProxyCmp({inputs: ['clickable', 'flex', 'minWidth', 'option', 'width']})
@Component({ selector: 'se-table-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clickable', 'flex', 'minWidth', 'option', 'width'] })
export class SeTableItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTableItemHeader extends Components.SeTableItemHeader {}
@ProxyCmp({inputs: ['clickable', 'flex', 'minWidth', 'sort', 'width']})
@Component({ selector: 'se-table-item-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['clickable', 'flex', 'minWidth', 'sort', 'width'] })
export class SeTableItemHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeTooltip extends Components.SeTooltip {}
@ProxyCmp({inputs: ['action', 'position'], 'methods': ['open', 'close']})
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

export declare interface SeTooltipContent extends Components.SeTooltipContent {}
@ProxyCmp({inputs: ['icon']})
@Component({ selector: 'se-tooltip-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class SeTooltipContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

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
@ProxyCmp({inputs: ['icon']})
@Component({ selector: 'se-tooltip-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['icon'] })
export class SeTooltipHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeVisualLinear extends Components.SeVisualLinear {}
@ProxyCmp({inputs: ['label', 'option', 'percentage', 'secolor', 'value']})
@Component({ selector: 'se-visual-linear', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'option', 'percentage', 'secolor', 'value'] })
export class SeVisualLinear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface SeVisualRadial extends Components.SeVisualRadial {}
@ProxyCmp({inputs: ['label', 'percentage', 'secolor', 'size', 'value']})
@Component({ selector: 'se-visual-radial', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['label', 'percentage', 'secolor', 'size', 'value'] })
export class SeVisualRadial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
