import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'se-components',
  outputTargets:[
    {
      type: 'dist',
      dir: 'core'
    },
    {
      type: 'docs'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: '../node_modules/@se/fonts/css', dest: 'fonts/css' },
    { src: '../node_modules/@se/fonts/fonts', dest: 'fonts/fonts' },
    { src: '../node_modules/@se/icons/css', dest: 'icons/css' },
    { src: '../node_modules/@se/icons/fonts', dest: 'icons/fonts' },
  ],
  plugins: [
    sass()
  ],
  testing: {
    testPathIgnorePatterns: ['./demo-*']
  }
};
