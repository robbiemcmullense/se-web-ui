import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssHostPolyfill from '@se/postcss-host-polyfill'; // if removed, issue with dropdown arrow to investigate

import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssRTLCSS from 'postcss-rtlcss';

const distFolder = 'stats';
const RTL_PREFIXES = {
  ltrPrefix: ':host(:not([dir="rtl"]))',
  rtlPrefix: ':host([dir="rtl"])',
};

export const config: Config = {
  namespace: 'se-components',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
  },
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        // Expose all web-ui variables and mixin to each scss files
        'src/theme/theme.scss',
      ],
    }),
    inlineSvg(),
    postcss({
      plugins: [
        autoprefixer({ grid: 'no-autoplace' }),
        postcssRTLCSS(RTL_PREFIXES),
        postcssHostPolyfill(RTL_PREFIXES)
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      dir: distFolder,
      collectionDir: `collection`,
      typesDir: `types`,
      esmLoaderPath: `loader`
    },
  ],
  rollupPlugins: {
    after: [
      // Plugins injected after rollupNodeResolve()
      visualizer({
        filename: `${distFolder}/index.html`,
        brotliSize: true,
        gzipSize: true,
        open: true,
      })
    ]
  },
  tsconfig: './tsconfig.json',
};
