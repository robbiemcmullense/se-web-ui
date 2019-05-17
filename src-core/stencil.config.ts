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
      dir: 'core',
      copy
    },
    {
      type: 'docs'
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
    testPathIgnorePatterns: ['./demo-*']
  }
};
