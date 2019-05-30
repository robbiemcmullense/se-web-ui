import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

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
      dir: 'core',
      copy
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
    sass(),
    inlineSvg()
  ],
  testing: {
    testPathIgnorePatterns: ['./demo-*'],
    transform: {
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    }
  }
};
