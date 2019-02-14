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
    { src: '../node_modules/@se/fonts', dest: 'fonts' },
    { src: '../node_modules/@se/icons', dest: 'icons' },
  ],
  plugins: [
    sass()
  ]
};
