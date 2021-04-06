import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget } from '@stencil/react-output-target';
import {
  vueOutputTarget,
  ComponentModelConfig,
} from '@stencil/vue-output-target';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
const EVENTS = {
  Change: 'didChange',
};

const ATTRS = {
  Value: 'value',
  Selected: 'selected',
};

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['se-checkbox'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Selected,
    type: 'boolean',
  },
  {
    elementSelectors: ['se-radio'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Selected,
    type: 'radio',
  },
  {
    elementSelectors: ['se-radio-group'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
    type: 'select',
  },
  {
    elementSelectors: ['se-slider'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
    type: 'number',
  },
];

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['se-checkbox', 'se-radio'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Selected,
  },
  {
    elements: ['se-radio-group', 'se-slider'],
    event: EVENTS.Change,
    targetAttr: ATTRS.Value,
  },
];

const distFolder = '../../dist/libs/core';

const copy = [
  { src: '../../../node_modules/@se/fonts/css', dest: 'fonts/css' },
  { src: '../../../node_modules/@se/fonts/fonts', dest: 'fonts/fonts' },
  { src: '../../../node_modules/@se/icons/css', dest: 'icons/css' },
  { src: '../../../node_modules/@se/icons/fonts', dest: 'icons/fonts' },
];

export const config: Config = {
  namespace: 'se-components',
  buildEs5: true,
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        // Expose all web-ui variables and mixin to each scss files
        'src/theme/theme.scss',
      ],
    }),
    inlineSvg(),
    postcss({
      plugins: [autoprefixer({ grid: 'no-autoplace' })],
    }),
  ],
  outputTargets: [
    {
      type: 'docs-readme',
    },
    {
      type: 'dist-custom-elements-bundle',
      dir: `${distFolder}/custom-elements`,
    },
    {
      type: 'dist',
      dir: distFolder,
      collectionDir: `collection`,
      typesDir: `types`,
      esmLoaderPath: `loader`,
      copy: [
        {
          src: '../_package.json',
        },
        {
          src: 'theme',
          dest: '../styles',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-json',
      file: `${distFolder}/se-components.json`,
    },
    {
      type: 'dist-hydrate-script',
      dir: `${distFolder}/hydrate`,
    },
    {
      type: 'www',
      copy,
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@se/web-ui',
      directivesProxyFile: '../angular/src/lib/directives/proxies.ts',
      directivesUtilsFile: '../angular/src/lib/directives/proxies-utils.ts',
      directivesArrayFile: '../angular/src/lib/directives/proxies-list.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@se/web-ui',
      loaderDir: 'loader',
      proxiesFile: '../react/src/components.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@se/web-ui',
      loaderDir: 'loader',
      proxiesFile: '../vue/src/components.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
      componentModels: vueComponentModels,
    }),
  ],
  bundles: [
    {
      components: [
        'se-app',
        'se-button',
        'se-container',
        'se-block',
        'se-block-header',
        'se-block-content',
        'se-block-footer',
        'se-divider',
        'se-icon',
        'se-loading',
        'se-skeleton',
      ],
    },
    {
      components: [
        'se-dialog',
        'se-dialog-header',
        'se-dialog-content',
        'se-dialog-footer',
      ],
    },
    { components: ['se-list', 'se-list-group', 'se-list-item'] },
    {
      components: [
        'se-tooltip',
        'se-tooltip-header',
        'se-tooltip-content',
        'se-tooltip-footer',
      ],
    },
    {
      components: [
        'se-header',
        'se-sidemenu',
        'se-sidemenu-item',
        'se-icon-ecostruxure',
        'se-icon-lifeison',
        'se-icon-schneider',
      ],
    },
    { components: ['se-stepper', 'se-stepper-item'] },
    { components: ['se-breadcrumb', 'se-breadcrumb-item'] },
    { components: ['se-banner', 'se-banner-item'] },
    {
      components: [
        'se-table',
        'se-table-group',
        'se-table-group-header',
        'se-table-item',
        'se-table-item-header',
      ],
    },
    {
      components: [
        'se-form-field',
        'se-radio',
        'se-radio-group',
        'se-checkbox',
        'se-chip',
        'se-dropdown',
        'se-slider',
      ],
    },
    { components: ['se-fab', 'se-fab-item'] },
    { components: ['se-visual-linear', 'se-visual-radial'] },
    { components: ['se-filtration'] },
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transform: {
      '^.+\\.svg$': '<rootDir>/svgTransform.js',
    },
    transformIgnorePatterns: ['/node_modules/(?!@se/icons/svg)'],
  },
  tsconfig: './tsconfig.json',
};
