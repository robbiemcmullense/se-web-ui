/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@se/web-ui';

import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

applyPolyfills().then(() => defineCustomElements());

const customElementTags: string[] = [
 'se-about',
 'se-app',
 'se-authentication',
 'se-banner',
 'se-banner-item',
 'se-block',
 'se-block-content',
 'se-block-footer',
 'se-block-header',
 'se-breadcrumb',
 'se-breadcrumb-item',
 'se-button',
 'se-carousel',
 'se-carousel-item',
 'se-checkbox',
 'se-chip',
 'se-container',
 'se-dialog',
 'se-dialog-content',
 'se-dialog-footer',
 'se-dialog-header',
 'se-divider',
 'se-dropdown',
 'se-fab',
 'se-fab-item',
 'se-filtration',
 'se-form-field',
 'se-header',
 'se-icon',
 'se-icon-ecostruxure',
 'se-icon-file',
 'se-icon-lifeison',
 'se-icon-schneider',
 'se-link',
 'se-list',
 'se-list-group',
 'se-list-item',
 'se-loading',
 'se-pagination',
 'se-radio',
 'se-radio-group',
 'se-sidemenu',
 'se-sidemenu-item',
 'se-skeleton',
 'se-slider',
 'se-snackbar',
 'se-stepper',
 'se-stepper-item',
 'se-tabbar',
 'se-table',
 'se-table-group',
 'se-table-group-header',
 'se-table-item',
 'se-table-item-header',
 'se-tooltip',
 'se-tooltip-content',
 'se-tooltip-footer',
 'se-tooltip-header',
 'se-visual-linear',
 'se-visual-radial',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const SeAbout = /*@__PURE__*/ Vue.extend({

  props: {
    appTitle: {} as PropOptions<Components.SeAbout['appTitle']>,
    version: {} as PropOptions<Components.SeAbout['version']>,
    domain: {} as PropOptions<Components.SeAbout['domain']>,
    copyright: {} as PropOptions<Components.SeAbout['copyright']>,
    imageUrl: {} as PropOptions<Components.SeAbout['imageUrl']>,
  },


  render: createCommonRender('se-about', []),
});


export const SeApp = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeApp['option']>,
    pageScroll: {} as PropOptions<Components.SeApp['pageScroll']>,
    theme: {} as PropOptions<Components.SeApp['theme']>,
  },


  render: createCommonRender('se-app', ['themeChanged']),
});


export const SeAuthentication = /*@__PURE__*/ Vue.extend({

  props: {
    appTitle: {} as PropOptions<Components.SeAuthentication['appTitle']>,
    version: {} as PropOptions<Components.SeAuthentication['version']>,
    domain: {} as PropOptions<Components.SeAuthentication['domain']>,
    copyright: {} as PropOptions<Components.SeAuthentication['copyright']>,
    imageUrl: {} as PropOptions<Components.SeAuthentication['imageUrl']>,
    hide: {} as PropOptions<Components.SeAuthentication['hide']>,
  },


  render: createCommonRender('se-authentication', []),
});


export const SeBanner = /*@__PURE__*/ Vue.extend({

  props: {
    duration: {} as PropOptions<Components.SeBanner['duration']>,
  },


  render: createCommonRender('se-banner', []),
});


export const SeBannerItem = /*@__PURE__*/ Vue.extend({

  props: {
    imageUrl: {} as PropOptions<Components.SeBannerItem['imageUrl']>,
    active: {} as PropOptions<Components.SeBannerItem['active']>,
  },


  render: createCommonRender('se-banner-item', ['didChange']),
});


export const SeBlock = /*@__PURE__*/ Vue.extend({

  props: {
    divider: {} as PropOptions<Components.SeBlock['divider']>,
    outline: {} as PropOptions<Components.SeBlock['outline']>,
    outlineColor: {} as PropOptions<Components.SeBlock['outlineColor']>,
    corner: {} as PropOptions<Components.SeBlock['corner']>,
    clickable: {} as PropOptions<Components.SeBlock['clickable']>,
    clickableBar: {} as PropOptions<Components.SeBlock['clickableBar']>,
    margin: {} as PropOptions<Components.SeBlock['margin']>,
    display: {} as PropOptions<Components.SeBlock['display']>,
    color: {} as PropOptions<Components.SeBlock['color']>,
    width: {} as PropOptions<Components.SeBlock['width']>,
    height: {} as PropOptions<Components.SeBlock['height']>,
    enlarged: {} as PropOptions<Components.SeBlock['enlarged']>,
    loading: {} as PropOptions<Components.SeBlock['loading']>,
    option: {} as PropOptions<Components.SeBlock['option']>,
  },


  render: createCommonRender('se-block', []),
});


export const SeBlockContent = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeBlockContent['option']>,
  },


  render: createCommonRender('se-block-content', []),
});


export const SeBlockFooter = /*@__PURE__*/ Vue.extend({

  props: {
    divider: {} as PropOptions<Components.SeBlockFooter['divider']>,
    option: {} as PropOptions<Components.SeBlockFooter['option']>,
    direction: {} as PropOptions<Components.SeBlockFooter['direction']>,
  },


  render: createCommonRender('se-block-footer', []),
});


export const SeBlockHeader = /*@__PURE__*/ Vue.extend({

  props: {
    divider: {} as PropOptions<Components.SeBlockHeader['divider']>,
    option: {} as PropOptions<Components.SeBlockHeader['option']>,
  },


  render: createCommonRender('se-block-header', []),
});


export const SeBreadcrumb = /*@__PURE__*/ Vue.extend({

  props: {
    canSelectLast: {} as PropOptions<Components.SeBreadcrumb['canSelectLast']>,
  },


  render: createCommonRender('se-breadcrumb', []),
});


export const SeBreadcrumbItem = /*@__PURE__*/ Vue.extend({

  props: {
    isLast: {} as PropOptions<Components.SeBreadcrumbItem['isLast']>,
    href: {} as PropOptions<Components.SeBreadcrumbItem['href']>,
    canSelect: {} as PropOptions<Components.SeBreadcrumbItem['canSelect']>,
  },


  render: createCommonRender('se-breadcrumb-item', []),
});


export const SeButton = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeButton['option']>,
    size: {} as PropOptions<Components.SeButton['size']>,
    color: {} as PropOptions<Components.SeButton['color']>,
    value: {} as PropOptions<Components.SeButton['value']>,
    icon: {} as PropOptions<Components.SeButton['icon']>,
    iconColor: {} as PropOptions<Components.SeButton['iconColor']>,
    iconOnly: {} as PropOptions<Components.SeButton['iconOnly']>,
    type: {} as PropOptions<Components.SeButton['type']>,
    padding: {} as PropOptions<Components.SeButton['padding']>,
    disabled: {} as PropOptions<Components.SeButton['disabled']>,
    selected: {} as PropOptions<Components.SeButton['selected']>,
    caption: {} as PropOptions<Components.SeButton['caption']>,
    block: {} as PropOptions<Components.SeButton['block']>,
  },


  methods: {
    setDisabled: createCommonMethod('setDisabled') as Components.SeButton['setDisabled'],
    setGrouped: createCommonMethod('setGrouped') as Components.SeButton['setGrouped'],
  },
  render: createCommonRender('se-button', ['didClick']),
});


export const SeCarousel = /*@__PURE__*/ Vue.extend({

  props: {
    itemMinWidth: {} as PropOptions<Components.SeCarousel['itemMinWidth']>,
  },


  render: createCommonRender('se-carousel', []),
});


export const SeCarouselItem = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('se-carousel-item', []),
});


export const SeCheckbox = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeCheckbox['option']>,
    value: {} as PropOptions<Components.SeCheckbox['value']>,
    label: {} as PropOptions<Components.SeCheckbox['label']>,
    required: {} as PropOptions<Components.SeCheckbox['required']>,
    color: {} as PropOptions<Components.SeCheckbox['color']>,
    disabled: {} as PropOptions<Components.SeCheckbox['disabled']>,
    indeterminate: {} as PropOptions<Components.SeCheckbox['indeterminate']>,
    selected: {} as PropOptions<Components.SeCheckbox['selected']>,
    textOn: {} as PropOptions<Components.SeCheckbox['textOn']>,
    textOff: {} as PropOptions<Components.SeCheckbox['textOff']>,
    header: {} as PropOptions<Components.SeCheckbox['header']>,
    padding: {} as PropOptions<Components.SeCheckbox['padding']>,
    labelPos: {} as PropOptions<Components.SeCheckbox['labelPos']>,
  },

  model: {
    prop: 'selected',
    event: 'didChange'
  },

  methods: {
    setRequired: createCommonMethod('setRequired') as Components.SeCheckbox['setRequired'],
  },
  render: createCommonRender('se-checkbox', ['didChange']),
});


export const SeChip = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.SeChip['value']>,
    size: {} as PropOptions<Components.SeChip['size']>,
    color: {} as PropOptions<Components.SeChip['color']>,
    canClose: {} as PropOptions<Components.SeChip['canClose']>,
    selected: {} as PropOptions<Components.SeChip['selected']>,
    disabled: {} as PropOptions<Components.SeChip['disabled']>,
    readonly: {} as PropOptions<Components.SeChip['readonly']>,
    block: {} as PropOptions<Components.SeChip['block']>,
  },


  render: createCommonRender('se-chip', ['didClose']),
});


export const SeContainer = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeContainer['option']>,
    position: {} as PropOptions<Components.SeContainer['position']>,
    direction: {} as PropOptions<Components.SeContainer['direction']>,
    display: {} as PropOptions<Components.SeContainer['display']>,
    padding: {} as PropOptions<Components.SeContainer['padding']>,
    columnSize: {} as PropOptions<Components.SeContainer['columnSize']>,
    rowSize: {} as PropOptions<Components.SeContainer['rowSize']>,
    color: {} as PropOptions<Components.SeContainer['color']>,
  },


  render: createCommonRender('se-container', []),
});


export const SeDialog = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.SeDialog['size']>,
    color: {} as PropOptions<Components.SeDialog['color']>,
    open: {} as PropOptions<Components.SeDialog['open']>,
    canBackdrop: {} as PropOptions<Components.SeDialog['canBackdrop']>,
    noBackdrop: {} as PropOptions<Components.SeDialog['noBackdrop']>,
    pageScroll: {} as PropOptions<Components.SeDialog['pageScroll']>,
  },


  render: createCommonRender('se-dialog', ['backdrop', 'didClose']),
});


export const SeDialogContent = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeDialogContent['option']>,
    icon: {} as PropOptions<Components.SeDialogContent['icon']>,
    iconColor: {} as PropOptions<Components.SeDialogContent['iconColor']>,
    isLastChild: {} as PropOptions<Components.SeDialogContent['isLastChild']>,
  },


  render: createCommonRender('se-dialog-content', []),
});


export const SeDialogFooter = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('se-dialog-footer', []),
});


export const SeDialogHeader = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeDialogHeader['option']>,
    color: {} as PropOptions<Components.SeDialogHeader['color']>,
    closeIcon: {} as PropOptions<Components.SeDialogHeader['closeIcon']>,
  },


  render: createCommonRender('se-dialog-header', ['didCloseDialog']),
});


export const SeDivider = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeDivider['option']>,
    color: {} as PropOptions<Components.SeDivider['color']>,
  },


  render: createCommonRender('se-divider', []),
});


export const SeDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    alignment: {} as PropOptions<Components.SeDropdown['alignment']>,
    verticalAlignment: {} as PropOptions<Components.SeDropdown['verticalAlignment']>,
    maxWidth: {} as PropOptions<Components.SeDropdown['maxWidth']>,
    maxHeight: {} as PropOptions<Components.SeDropdown['maxHeight']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.SeDropdown['open'],
    close: createCommonMethod('close') as Components.SeDropdown['close'],
  },
  render: createCommonRender('se-dropdown', ['didOpen', 'didClose', 'cancelAllDropdown']),
});


export const SeFab = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.SeFab['icon']>,
    option: {} as PropOptions<Components.SeFab['option']>,
    position: {} as PropOptions<Components.SeFab['position']>,
    color: {} as PropOptions<Components.SeFab['color']>,
    overlay: {} as PropOptions<Components.SeFab['overlay']>,
  },


  methods: {
    toggleAction: createCommonMethod('toggleAction') as Components.SeFab['toggleAction'],
  },
  render: createCommonRender('se-fab', []),
});


export const SeFabItem = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.SeFabItem['icon']>,
  },


  render: createCommonRender('se-fab-item', ['didClick']),
});


export const SeFiltration = /*@__PURE__*/ Vue.extend({

  props: {
    item: {} as PropOptions<Components.SeFiltration['item']>,
    labelHint: {} as PropOptions<Components.SeFiltration['labelHint']>,
    collapsed: {} as PropOptions<Components.SeFiltration['collapsed']>,
    shadow: {} as PropOptions<Components.SeFiltration['shadow']>,
    labelViewMore: {} as PropOptions<Components.SeFiltration['labelViewMore']>,
    labelViewLess: {} as PropOptions<Components.SeFiltration['labelViewLess']>,
    labelSelectAll: {} as PropOptions<Components.SeFiltration['labelSelectAll']>,
    minItems: {} as PropOptions<Components.SeFiltration['minItems']>,
    maxItems: {} as PropOptions<Components.SeFiltration['maxItems']>,
    showSelectAll: {} as PropOptions<Components.SeFiltration['showSelectAll']>,
    searchable: {} as PropOptions<Components.SeFiltration['searchable']>,
    search: {} as PropOptions<Components.SeFiltration['search']>,
  },


  render: createCommonRender('se-filtration', ['didSearch', 'didSelectAll']),
});


export const SeFormField = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeFormField['option']>,
    stacked: {} as PropOptions<Components.SeFormField['stacked']>,
    padding: {} as PropOptions<Components.SeFormField['padding']>,
    block: {} as PropOptions<Components.SeFormField['block']>,
    labelWidth: {} as PropOptions<Components.SeFormField['labelWidth']>,
    labelAlign: {} as PropOptions<Components.SeFormField['labelAlign']>,
    type: {} as PropOptions<Components.SeFormField['type']>,
    status: {} as PropOptions<Components.SeFormField['status']>,
    label: {} as PropOptions<Components.SeFormField['label']>,
    textOnly: {} as PropOptions<Components.SeFormField['textOnly']>,
    value: {} as PropOptions<Components.SeFormField['value']>,
    required: {} as PropOptions<Components.SeFormField['required']>,
    disabled: {} as PropOptions<Components.SeFormField['disabled']>,
    noStacking: {} as PropOptions<Components.SeFormField['noStacking']>,
    minWidth: {} as PropOptions<Components.SeFormField['minWidth']>,
  },


  render: createCommonRender('se-form-field', ['didSubmit']),
});


export const SeHeader = /*@__PURE__*/ Vue.extend({

  props: {
    appTitle: {} as PropOptions<Components.SeHeader['appTitle']>,
    domain: {} as PropOptions<Components.SeHeader['domain']>,
    project: {} as PropOptions<Components.SeHeader['project']>,
    hideSeLogo: {} as PropOptions<Components.SeHeader['hideSeLogo']>,
  },


  render: createCommonRender('se-header', []),
});


export const SeIcon = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeIcon['option']>,
    size: {} as PropOptions<Components.SeIcon['size']>,
    color: {} as PropOptions<Components.SeIcon['color']>,
    disabled: {} as PropOptions<Components.SeIcon['disabled']>,
    animation: {} as PropOptions<Components.SeIcon['animation']>,
    rotate: {} as PropOptions<Components.SeIcon['rotate']>,
    mirror: {} as PropOptions<Components.SeIcon['mirror']>,
  },


  render: createCommonRender('se-icon', []),
});


export const SeIconEcostruxure = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.SeIconEcostruxure['size']>,
    color: {} as PropOptions<Components.SeIconEcostruxure['color']>,
  },


  render: createCommonRender('se-icon-ecostruxure', []),
});


export const SeIconFile = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.SeIconFile['value']>,
    option: {} as PropOptions<Components.SeIconFile['option']>,
    size: {} as PropOptions<Components.SeIconFile['size']>,
    color: {} as PropOptions<Components.SeIconFile['color']>,
    disabled: {} as PropOptions<Components.SeIconFile['disabled']>,
  },


  render: createCommonRender('se-icon-file', []),
});


export const SeIconLifeison = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.SeIconLifeison['color']>,
  },


  render: createCommonRender('se-icon-lifeison', []),
});


export const SeIconSchneider = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('se-icon-schneider', []),
});


export const SeLink = /*@__PURE__*/ Vue.extend({

  props: {
    url: {} as PropOptions<Components.SeLink['url']>,
    disabled: {} as PropOptions<Components.SeLink['disabled']>,
    download: {} as PropOptions<Components.SeLink['download']>,
    option: {} as PropOptions<Components.SeLink['option']>,
  },


  render: createCommonRender('se-link', []),
});


export const SeList = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeList['option']>,
    selectedColor: {} as PropOptions<Components.SeList['selectedColor']>,
    canCollapse: {} as PropOptions<Components.SeList['canCollapse']>,
  },


  render: createCommonRender('se-list', []),
});


export const SeListGroup = /*@__PURE__*/ Vue.extend({

  props: {
    item: {} as PropOptions<Components.SeListGroup['item']>,
    description: {} as PropOptions<Components.SeListGroup['description']>,
    selected: {} as PropOptions<Components.SeListGroup['selected']>,
    icon: {} as PropOptions<Components.SeListGroup['icon']>,
    iconColor: {} as PropOptions<Components.SeListGroup['iconColor']>,
    collapsed: {} as PropOptions<Components.SeListGroup['collapsed']>,
    indentation: {} as PropOptions<Components.SeListGroup['indentation']>,
    disabled: {} as PropOptions<Components.SeListGroup['disabled']>,
    flex: {} as PropOptions<Components.SeListGroup['flex']>,
    canCollapse: {} as PropOptions<Components.SeListGroup['canCollapse']>,
  },


  methods: {
    toggleCollapseTreeview: createCommonMethod('toggleCollapseTreeview') as Components.SeListGroup['toggleCollapseTreeview'],
    focusElement: createCommonMethod('focusElement') as Components.SeListGroup['focusElement'],
    setOption: createCommonMethod('setOption') as Components.SeListGroup['setOption'],
  },
  render: createCommonRender('se-list-group', ['didGroupClick', 'didGroupCollapse']),
});


export const SeListItem = /*@__PURE__*/ Vue.extend({

  props: {
    item: {} as PropOptions<Components.SeListItem['item']>,
    description: {} as PropOptions<Components.SeListItem['description']>,
    selected: {} as PropOptions<Components.SeListItem['selected']>,
    disabled: {} as PropOptions<Components.SeListItem['disabled']>,
    icon: {} as PropOptions<Components.SeListItem['icon']>,
    iconColor: {} as PropOptions<Components.SeListItem['iconColor']>,
    href: {} as PropOptions<Components.SeListItem['href']>,
  },


  methods: {
    focusElement: createCommonMethod('focusElement') as Components.SeListItem['focusElement'],
    blurElement: createCommonMethod('blurElement') as Components.SeListItem['blurElement'],
    setOption: createCommonMethod('setOption') as Components.SeListItem['setOption'],
  },
  render: createCommonRender('se-list-item', ['didSelectedChange']),
});


export const SeLoading = /*@__PURE__*/ Vue.extend({

  props: {
    loading: {} as PropOptions<Components.SeLoading['loading']>,
    option: {} as PropOptions<Components.SeLoading['option']>,
    color: {} as PropOptions<Components.SeLoading['color']>,
    overlay: {} as PropOptions<Components.SeLoading['overlay']>,
    fullPage: {} as PropOptions<Components.SeLoading['fullPage']>,
  },


  render: createCommonRender('se-loading', []),
});


export const SePagination = /*@__PURE__*/ Vue.extend({

  props: {
    perPage: {} as PropOptions<Components.SePagination['perPage']>,
    perPageList: {} as PropOptions<Components.SePagination['perPageList']>,
    value: {} as PropOptions<Components.SePagination['value']>,
    total: {} as PropOptions<Components.SePagination['total']>,
    hideEdge: {} as PropOptions<Components.SePagination['hideEdge']>,
    labelFirst: {} as PropOptions<Components.SePagination['labelFirst']>,
    labelPrev: {} as PropOptions<Components.SePagination['labelPrev']>,
    labelNext: {} as PropOptions<Components.SePagination['labelNext']>,
    labelLast: {} as PropOptions<Components.SePagination['labelLast']>,
    labelPerPage: {} as PropOptions<Components.SePagination['labelPerPage']>,
    labelValue: {} as PropOptions<Components.SePagination['labelValue']>,
  },


  render: createCommonRender('se-pagination', ['didChange']),
});


export const SeRadio = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.SeRadio['name']>,
    value: {} as PropOptions<Components.SeRadio['value']>,
    label: {} as PropOptions<Components.SeRadio['label']>,
    required: {} as PropOptions<Components.SeRadio['required']>,
    color: {} as PropOptions<Components.SeRadio['color']>,
    padding: {} as PropOptions<Components.SeRadio['padding']>,
    disabled: {} as PropOptions<Components.SeRadio['disabled']>,
    selected: {} as PropOptions<Components.SeRadio['selected']>,
    labelPos: {} as PropOptions<Components.SeRadio['labelPos']>,
  },

  model: {
    prop: 'selected',
    event: 'didChange'
  },

  methods: {
    setRequired: createCommonMethod('setRequired') as Components.SeRadio['setRequired'],
  },
  render: createCommonRender('se-radio', ['didCheck']),
});


export const SeRadioGroup = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.SeRadioGroup['color']>,
    size: {} as PropOptions<Components.SeRadioGroup['size']>,
    direction: {} as PropOptions<Components.SeRadioGroup['direction']>,
    disabled: {} as PropOptions<Components.SeRadioGroup['disabled']>,
    value: {} as PropOptions<Components.SeRadioGroup['value']>,
  },

  model: {
    prop: 'value',
    event: 'didChange'
  },

  render: createCommonRender('se-radio-group', ['didChange']),
});


export const SeSidemenu = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.SeSidemenu['label']>,
    link: {} as PropOptions<Components.SeSidemenu['link']>,
  },


  methods: {
    toggle: createCommonMethod('toggle') as Components.SeSidemenu['toggle'],
  },
  render: createCommonRender('se-sidemenu', ['toggled']),
});


export const SeSidemenuItem = /*@__PURE__*/ Vue.extend({

  props: {
    item: {} as PropOptions<Components.SeSidemenuItem['item']>,
    active: {} as PropOptions<Components.SeSidemenuItem['active']>,
  },


  render: createCommonRender('se-sidemenu-item', ['didClick']),
});


export const SeSkeleton = /*@__PURE__*/ Vue.extend({

  props: {
    count: {} as PropOptions<Components.SeSkeleton['count']>,
    width: {} as PropOptions<Components.SeSkeleton['width']>,
    height: {} as PropOptions<Components.SeSkeleton['height']>,
    circle: {} as PropOptions<Components.SeSkeleton['circle']>,
  },


  render: createCommonRender('se-skeleton', []),
});


export const SeSlider = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.SeSlider['value']>,
    min: {} as PropOptions<Components.SeSlider['min']>,
    max: {} as PropOptions<Components.SeSlider['max']>,
    label: {} as PropOptions<Components.SeSlider['label']>,
    disabled: {} as PropOptions<Components.SeSlider['disabled']>,
  },

  model: {
    prop: 'value',
    event: 'didChange'
  },

  methods: {
    setDisabled: createCommonMethod('setDisabled') as Components.SeSlider['setDisabled'],
  },
  render: createCommonRender('se-slider', ['didChange']),
});


export const SeSnackbar = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.SeSnackbar['type']>,
    icon: {} as PropOptions<Components.SeSnackbar['icon']>,
    message: {} as PropOptions<Components.SeSnackbar['message']>,
    canClose: {} as PropOptions<Components.SeSnackbar['canClose']>,
    actionText: {} as PropOptions<Components.SeSnackbar['actionText']>,
    open: {} as PropOptions<Components.SeSnackbar['open']>,
    duration: {} as PropOptions<Components.SeSnackbar['duration']>,
  },


  render: createCommonRender('se-snackbar', ['didClose', 'actionClicked']),
});


export const SeStepper = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.SeStepper['color']>,
    linear: {} as PropOptions<Components.SeStepper['linear']>,
    block: {} as PropOptions<Components.SeStepper['block']>,
    interactive: {} as PropOptions<Components.SeStepper['interactive']>,
  },


  methods: {
    reset: createCommonMethod('reset') as Components.SeStepper['reset'],
    previous: createCommonMethod('previous') as Components.SeStepper['previous'],
    next: createCommonMethod('next') as Components.SeStepper['next'],
  },
  render: createCommonRender('se-stepper', []),
});


export const SeStepperItem = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.SeStepperItem['label']>,
    active: {} as PropOptions<Components.SeStepperItem['active']>,
    interactive: {} as PropOptions<Components.SeStepperItem['interactive']>,
    validated: {} as PropOptions<Components.SeStepperItem['validated']>,
  },


  render: createCommonRender('se-stepper-item', ['didValidate']),
});


export const SeTabbar = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeTabbar['option']>,
    overflow: {} as PropOptions<Components.SeTabbar['overflow']>,
    color: {} as PropOptions<Components.SeTabbar['color']>,
  },


  render: createCommonRender('se-tabbar', []),
});


export const SeTable = /*@__PURE__*/ Vue.extend({

  props: {
    compact: {} as PropOptions<Components.SeTable['compact']>,
  },


  render: createCommonRender('se-table', []),
});


export const SeTableGroup = /*@__PURE__*/ Vue.extend({

  props: {
    selectable: {} as PropOptions<Components.SeTableGroup['selectable']>,
    selected: {} as PropOptions<Components.SeTableGroup['selected']>,
  },


  render: createCommonRender('se-table-group', []),
});


export const SeTableGroupHeader = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('se-table-group-header', []),
});


export const SeTableItem = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeTableItem['option']>,
    flex: {} as PropOptions<Components.SeTableItem['flex']>,
    width: {} as PropOptions<Components.SeTableItem['width']>,
    minWidth: {} as PropOptions<Components.SeTableItem['minWidth']>,
    clickable: {} as PropOptions<Components.SeTableItem['clickable']>,
  },


  render: createCommonRender('se-table-item', []),
});


export const SeTableItemHeader = /*@__PURE__*/ Vue.extend({

  props: {
    flex: {} as PropOptions<Components.SeTableItemHeader['flex']>,
    width: {} as PropOptions<Components.SeTableItemHeader['width']>,
    minWidth: {} as PropOptions<Components.SeTableItemHeader['minWidth']>,
    clickable: {} as PropOptions<Components.SeTableItemHeader['clickable']>,
    sort: {} as PropOptions<Components.SeTableItemHeader['sort']>,
  },


  render: createCommonRender('se-table-item-header', []),
});


export const SeTooltip = /*@__PURE__*/ Vue.extend({

  props: {
    position: {} as PropOptions<Components.SeTooltip['position']>,
    action: {} as PropOptions<Components.SeTooltip['action']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.SeTooltip['open'],
    close: createCommonMethod('close') as Components.SeTooltip['close'],
  },
  render: createCommonRender('se-tooltip', ['didOpen', 'didClose', 'closeTooltips']),
});


export const SeTooltipContent = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.SeTooltipContent['icon']>,
  },


  render: createCommonRender('se-tooltip-content', []),
});


export const SeTooltipFooter = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('se-tooltip-footer', []),
});


export const SeTooltipHeader = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.SeTooltipHeader['icon']>,
  },


  render: createCommonRender('se-tooltip-header', []),
});


export const SeVisualLinear = /*@__PURE__*/ Vue.extend({

  props: {
    option: {} as PropOptions<Components.SeVisualLinear['option']>,
    label: {} as PropOptions<Components.SeVisualLinear['label']>,
    value: {} as PropOptions<Components.SeVisualLinear['value']>,
    secolor: {} as PropOptions<Components.SeVisualLinear['secolor']>,
    percentage: {} as PropOptions<Components.SeVisualLinear['percentage']>,
  },


  render: createCommonRender('se-visual-linear', []),
});


export const SeVisualRadial = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.SeVisualRadial['size']>,
    label: {} as PropOptions<Components.SeVisualRadial['label']>,
    value: {} as PropOptions<Components.SeVisualRadial['value']>,
    secolor: {} as PropOptions<Components.SeVisualRadial['secolor']>,
    percentage: {} as PropOptions<Components.SeVisualRadial['percentage']>,
  },


  render: createCommonRender('se-visual-radial', []),
});

