import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

// import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
// const EVENTS = {
//   Change: "didChange",
// };

// const ATTRS = {
//   Value: "value",
//   Selected: "selected"
// };

// const angularValueAccessorBindings: ValueAccessorConfig[] = [
//   {
//     elementSelectors: [ "se-checkbox", "se-radio"],
//     event: EVENTS.Change,
//     targetAttr: ATTRS.Selected,
//     type: "boolean"
//   },
//   {
//     elementSelectors: [ "se-radio-group" ],
//     event: EVENTS.Change,
//     targetAttr: ATTRS.Value,
//     type: "text"
//   }
// ];

const distFolder = '../../dist/libs/core';

export const config: Config = {
  namespace: 'se-components',
  plugins: [sass(), inlineSvg()],
  outputTargets: [
    {
      type: 'docs-readme'
    },
    {
      type: 'dist',
      dir: distFolder,
      collectionDir: `collection`,
      typesDir: `types`,
      esmLoaderPath: `loader`,
      copy: [
        {
          src: '../package.json'
        },
        {
          src: 'theme',
          dest: '../styles',
          warn: true
        }
      ]
    },
    {
      type: 'docs-json',
      file: `${distFolder}/se-components.json`
    },
    {
      type: 'dist-hydrate-script',
      dir: `${distFolder}/hydrate`
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@se/web-ui',
      directivesProxyFile: '../angular/src/lib/directives/proxies.ts',
      directivesUtilsFile: '../angular/src/lib/directives/proxies-utils.ts',
      directivesArrayFile: '../angular/src/lib/directives/proxies-list.ts'
      //   valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@se/web-ui',
      proxiesFile: '../react/src/components.ts'
    })
  ],
  bundles: [
    { components: ['se-app', 'se-container', 'se-block', 'se-block-header', 'se-block-content', 'se-block-footer', 'se-divider'] },
    { components: ['se-dialog', 'se-dialog-header', 'se-dialog-content', 'se-dialog-footer'] },
    { components: ['se-list', 'se-list-group', 'se-list-item'] },
    { components: ['se-tooltip', 'se-tooltip-header', 'se-tooltip-content', 'se-tooltip-footer'] },
    { components: ['se-header', 'se-sidemenu', 'se-sidemenu-item'] },
    { components: ['se-stepper', 'se-stepper-item'] },
    { components: ['se-breadcrumb', 'se-breadcrumb-item'] },
    { components: ['se-banner', 'se-banner-item'] },
    { components: ['se-table', 'se-table-group', 'se-table-group-header', 'se-table-item', 'se-table-item-header'] },
    { components: ['se-form-field', 'se-radio', 'se-radio-group', 'se-checkbox', 'se-chip'] },
    { components: ['se-fab', 'se-fab-item'] },

  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transform: {
      '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    transformIgnorePatterns: ['/node_modules/(?!@se/icons/svg)']
  },
  tsconfig: './tsconfig.json',
  globalScript: 'src/lib/global/global.ts'
};
