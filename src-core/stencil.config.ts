import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
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

const copy = [
  { src: '../node_modules/@se/fonts/css', dest: 'fonts/css' },
  { src: '../node_modules/@se/fonts/fonts', dest: 'fonts/fonts' },
  { src: '../node_modules/@se/icons/css', dest: 'icons/css' },
  { src: '../node_modules/@se/icons/fonts', dest: 'icons/fonts' },
];

export const config: Config = {
  namespace: 'se-components',
  outputTargets:[
    {
      type: 'dist',
      dir: 'core'
    },
    {
      type: 'dist-hydrate-script',
      dir: 'core/hydrate'
    },
    {
      type: 'docs-json',
      file: 'core/se-components.json'
    },
    {
      type: 'angular',
      componentCorePackage: '@se/web-ui',
      directivesProxyFile: '../src-angular/projects/frameworks/src/lib/directives/proxies.ts',
      directivesUtilsFile: '../src-angular/projects/frameworks/src/lib/directives/proxies-utils.ts',
      directivesArrayFile: '../src-angular/projects/frameworks/src/lib/directives/proxies-list.ts',
    },
    // angularOutputTarget({
    //   componentCorePackage: '@se/web-ui',
    //   directivesProxyFile: '../src-angular/projects/frameworks/src/lib/directives/proxies.ts',
    //   directivesUtilsFile: '../src-angular/projects/frameworks/src/lib/directives/proxies-utils.ts',
    //   directivesArrayFile: '../src-angular/projects/frameworks/src/lib/directives/proxies-list.ts',
    //   valueAccessorConfigs: angularValueAccessorBindings,
    // }),
    reactOutputTarget({
      componentCorePackage: '@se/web-ui',
      proxiesFile: '../src-react/src/components.ts',
    }),
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy,
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    inlineSvg()
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transform: {
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    transformIgnorePatterns: ['/node_modules/(?!@se/icons/svg)']
  }
};
