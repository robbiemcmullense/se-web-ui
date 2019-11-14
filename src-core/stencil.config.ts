import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

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
    sass()
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    transform: {
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    }
  }
};
