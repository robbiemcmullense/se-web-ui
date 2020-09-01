/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import { JSX } from '@se/web-ui';

import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

applyPolyfills().then(() => defineCustomElements());

export const SeAbout = /*@__PURE__*/ defineContainer<JSX.SeAbout>('se-about', [
  'appTitle',
  'version',
  'domain',
  'copyright',
  'imageUrl',
]);

export const SeApp = /*@__PURE__*/ defineContainer<JSX.SeApp>('se-app', [
  'option',
  'theme',
  'themeChanged',
]);

export const SeAuthentication = /*@__PURE__*/ defineContainer<
  JSX.SeAuthentication
>('se-authentication', [
  'appTitle',
  'version',
  'domain',
  'copyright',
  'imageUrl',
  'hide',
]);

export const SeBanner = /*@__PURE__*/ defineContainer<JSX.SeBanner>(
  'se-banner',
  ['duration']
);

export const SeBannerItem = /*@__PURE__*/ defineContainer<JSX.SeBannerItem>(
  'se-banner-item',
  ['imageUrl', 'active', 'didChange']
);

export const SeBlock = /*@__PURE__*/ defineContainer<JSX.SeBlock>('se-block', [
  'divider',
  'outline',
  'outlineColor',
  'corner',
  'clickable',
  'clickableBar',
  'margin',
  'display',
  'color',
  'width',
  'height',
  'enlarged',
  'loading',
  'option',
]);

export const SeBlockContent = /*@__PURE__*/ defineContainer<JSX.SeBlockContent>(
  'se-block-content',
  ['option']
);

export const SeBlockFooter = /*@__PURE__*/ defineContainer<JSX.SeBlockFooter>(
  'se-block-footer',
  ['divider', 'option', 'direction']
);

export const SeBlockHeader = /*@__PURE__*/ defineContainer<JSX.SeBlockHeader>(
  'se-block-header',
  ['divider', 'option']
);

export const SeBreadcrumb = /*@__PURE__*/ defineContainer<JSX.SeBreadcrumb>(
  'se-breadcrumb',
  ['canSelectLast']
);

export const SeBreadcrumbItem = /*@__PURE__*/ defineContainer<
  JSX.SeBreadcrumbItem
>('se-breadcrumb-item', ['isLast', 'href', 'canSelect']);

export const SeButton = /*@__PURE__*/ defineContainer<JSX.SeButton>(
  'se-button',
  [
    'option',
    'size',
    'color',
    'value',
    'icon',
    'iconColor',
    'iconOnly',
    'type',
    'padding',
    'disabled',
    'selected',
    'caption',
    'block',
    'didClick',
  ]
);

export const SeCheckbox = /*@__PURE__*/ defineContainer<JSX.SeCheckbox>(
  'se-checkbox',
  [
    'option',
    'value',
    'label',
    'required',
    'color',
    'disabled',
    'selected',
    'textOn',
    'textOff',
    'header',
    'padding',
    'labelPos',
    'didChange',
  ]
);

export const SeChip = /*@__PURE__*/ defineContainer<JSX.SeChip>('se-chip', [
  'value',
  'size',
  'color',
  'canClose',
  'selected',
  'disabled',
  'block',
  'didClose',
]);

export const SeContainer = /*@__PURE__*/ defineContainer<JSX.SeContainer>(
  'se-container',
  [
    'option',
    'position',
    'direction',
    'display',
    'padding',
    'columnSize',
    'rowSize',
    'color',
  ]
);

export const SeDialog = /*@__PURE__*/ defineContainer<JSX.SeDialog>(
  'se-dialog',
  ['size', 'color', 'open', 'canBackdrop', 'backdrop', 'didClose']
);

export const SeDialogContent = /*@__PURE__*/ defineContainer<
  JSX.SeDialogContent
>('se-dialog-content', ['option', 'icon', 'iconColor']);

export const SeDialogFooter = /*@__PURE__*/ defineContainer<JSX.SeDialogFooter>(
  'se-dialog-footer'
);

export const SeDialogHeader = /*@__PURE__*/ defineContainer<JSX.SeDialogHeader>(
  'se-dialog-header',
  ['color']
);

export const SeDivider = /*@__PURE__*/ defineContainer<JSX.SeDivider>(
  'se-divider',
  ['option', 'color']
);

export const SeDropdown = /*@__PURE__*/ defineContainer<JSX.SeDropdown>(
  'se-dropdown',
  [
    'alignment',
    'verticalAlignment',
    'maxWidth',
    'maxHeight',
    'didOpen',
    'didClose',
    'cancelAllDropdown',
  ]
);

export const SeFab = /*@__PURE__*/ defineContainer<JSX.SeFab>('se-fab', [
  'icon',
  'option',
  'position',
  'color',
  'overlay',
]);

export const SeFabItem = /*@__PURE__*/ defineContainer<JSX.SeFabItem>(
  'se-fab-item',
  ['icon', 'didClick']
);

export const SeFormField = /*@__PURE__*/ defineContainer<JSX.SeFormField>(
  'se-form-field',
  [
    'option',
    'padding',
    'block',
    'labelWidth',
    'labelAlign',
    'type',
    'status',
    'label',
    'value',
    'required',
    'disabled',
    'didSubmit',
  ]
);

export const SeHeader = /*@__PURE__*/ defineContainer<JSX.SeHeader>(
  'se-header',
  ['appTitle', 'domain', 'project', 'hideSeLogo']
);

export const SeIcon = /*@__PURE__*/ defineContainer<JSX.SeIcon>('se-icon', [
  'option',
  'size',
  'color',
  'disabled',
]);

export const SeIconEcostruxure = /*@__PURE__*/ defineContainer<
  JSX.SeIconEcostruxure
>('se-icon-ecostruxure', ['size', 'color']);

export const SeIconLifeison = /*@__PURE__*/ defineContainer<JSX.SeIconLifeison>(
  'se-icon-lifeison',
  ['color']
);

export const SeIconSchneider = /*@__PURE__*/ defineContainer<
  JSX.SeIconSchneider
>('se-icon-schneider');

export const SeLink = /*@__PURE__*/ defineContainer<JSX.SeLink>('se-link', [
  'url',
  'disabled',
  'option',
]);

export const SeList = /*@__PURE__*/ defineContainer<JSX.SeList>('se-list', [
  'option',
  'canCollapse',
]);

export const SeListGroup = /*@__PURE__*/ defineContainer<JSX.SeListGroup>(
  'se-list-group',
  [
    'item',
    'description',
    'selected',
    'icon',
    'iconColor',
    'collapsed',
    'indentation',
    'option',
    'canCollapse',
    'selectedChild',
    'didGroupClick',
    'didGroupCollapse',
  ]
);

export const SeListItem = /*@__PURE__*/ defineContainer<JSX.SeListItem>(
  'se-list-item',
  [
    'item',
    'description',
    'selected',
    'icon',
    'iconColor',
    'indentation',
    'option',
    'href',
    'didSelectedChange',
  ]
);

export const SeLoading = /*@__PURE__*/ defineContainer<JSX.SeLoading>(
  'se-loading',
  ['loading', 'option', 'color', 'overlay', 'fullPage']
);

export const SePagination = /*@__PURE__*/ defineContainer<JSX.SePagination>(
  'se-pagination',
  [
    'perPage',
    'perPageList',
    'value',
    'total',
    'hideEdge',
    'labelFirst',
    'labelPrev',
    'labelNext',
    'labelLast',
    'labelPerPage',
    'labelValue',
    'didChange',
  ]
);

export const SeRadio = /*@__PURE__*/ defineContainer<JSX.SeRadio>('se-radio', [
  'name',
  'value',
  'label',
  'required',
  'color',
  'padding',
  'disabled',
  'selected',
  'labelPos',
  'didCheck',
]);

export const SeRadioGroup = /*@__PURE__*/ defineContainer<JSX.SeRadioGroup>(
  'se-radio-group',
  ['color', 'size', 'direction', 'disabled', 'value', 'didChange']
);

export const SeSidemenu = /*@__PURE__*/ defineContainer<JSX.SeSidemenu>(
  'se-sidemenu',
  ['label', 'link', 'toggled']
);

export const SeSidemenuItem = /*@__PURE__*/ defineContainer<JSX.SeSidemenuItem>(
  'se-sidemenu-item',
  ['item', 'active', 'didClick']
);

export const SeSlider = /*@__PURE__*/ defineContainer<JSX.SeSlider>(
  'se-slider',
  ['value', 'min', 'max', 'label', 'disabled', 'didChange']
);

export const SeSnackbar = /*@__PURE__*/ defineContainer<JSX.SeSnackbar>(
  'se-snackbar',
  [
    'type',
    'icon',
    'message',
    'canClose',
    'actionText',
    'open',
    'duration',
    'didClose',
    'actionClicked',
  ]
);

export const SeStepper = /*@__PURE__*/ defineContainer<JSX.SeStepper>(
  'se-stepper',
  ['color', 'linear', 'block', 'interactive']
);

export const SeStepperItem = /*@__PURE__*/ defineContainer<JSX.SeStepperItem>(
  'se-stepper-item',
  ['label', 'active', 'interactive', 'validated', 'didValidate']
);

export const SeTabbar = /*@__PURE__*/ defineContainer<JSX.SeTabbar>(
  'se-tabbar',
  ['option', 'overflow', 'color']
);

export const SeTable = /*@__PURE__*/ defineContainer<JSX.SeTable>('se-table');

export const SeTableGroup = /*@__PURE__*/ defineContainer<JSX.SeTableGroup>(
  'se-table-group',
  ['selectable', 'selected']
);

export const SeTableGroupHeader = /*@__PURE__*/ defineContainer<
  JSX.SeTableGroupHeader
>('se-table-group-header');

export const SeTableItem = /*@__PURE__*/ defineContainer<JSX.SeTableItem>(
  'se-table-item',
  ['option', 'flex', 'width', 'minWidth', 'clickable']
);

export const SeTableItemHeader = /*@__PURE__*/ defineContainer<
  JSX.SeTableItemHeader
>('se-table-item-header', ['flex', 'width', 'minWidth', 'clickable', 'sort']);

export const SeTooltip = /*@__PURE__*/ defineContainer<JSX.SeTooltip>(
  'se-tooltip',
  ['position', 'action', 'didOpen', 'didClose', 'closeTooltips']
);

export const SeTooltipContent = /*@__PURE__*/ defineContainer<
  JSX.SeTooltipContent
>('se-tooltip-content', ['icon']);

export const SeTooltipFooter = /*@__PURE__*/ defineContainer<
  JSX.SeTooltipFooter
>('se-tooltip-footer');

export const SeTooltipHeader = /*@__PURE__*/ defineContainer<
  JSX.SeTooltipHeader
>('se-tooltip-header', ['icon']);

export const SeVisualLinear = /*@__PURE__*/ defineContainer<JSX.SeVisualLinear>(
  'se-visual-linear',
  ['option', 'label', 'value', 'secolor', 'percentage']
);

export const SeVisualRadial = /*@__PURE__*/ defineContainer<JSX.SeVisualRadial>(
  'se-visual-radial',
  ['size', 'label', 'value', 'secolor', 'percentage']
);
