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
          dest: `styles`
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
