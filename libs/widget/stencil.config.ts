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

const libName = 'widget';
const distFolder = `../../dist/libs/${libName}`;

const copy = [
  { src: '../../../node_modules/@se/fonts', dest: 'fonts' },
  { src: '../../../node_modules/@se/icons', dest: 'icons' },
  { src: '../../../dist/libs/core', dest: 'core' },
];

export const config: Config = {
  namespace: `se-${libName}`,
  plugins: [sass({
    injectGlobalPaths: [
      // Expose all web-ui variables and mixin to each scss files
      '../core/src/theme/theme',
    ]
    }),
    inlineSvg()
  ],
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
        }
      ]
    },
    {
      type: 'docs-json',
      file: `${distFolder}/se-${libName}.json`
    },
    {
      type: 'dist-hydrate-script',
      dir: `${distFolder}/hydrate`
    },
    {
      type: 'www',
      copy,
      serviceWorker: null // disable service workers
    },
    // angularOutputTarget({
    //   componentCorePackage: `@se/web-ui-${libName}`,
    //   directivesProxyFile: '../angular/src/lib/directives/proxies.ts',
    //   directivesUtilsFile: '../angular/src/lib/directives/proxies-utils.ts',
    //   directivesArrayFile: '../angular/src/lib/directives/proxies-list.ts'
    //   //   valueAccessorConfigs: angularValueAccessorBindings,
    // }),
    // reactOutputTarget({
    //   componentCorePackage: `@se/web-ui-${libName}`,
    //   proxiesFile: '../react/src/components.ts'
    // })
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transform: {
      '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    transformIgnorePatterns: ['/node_modules/(?!@se/icons/svg)']
  },
  tsconfig: './tsconfig.json',
};
