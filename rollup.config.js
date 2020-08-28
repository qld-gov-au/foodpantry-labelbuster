import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import multi from '@rollup/plugin-multi-entry';

const config = {
  input: 'scripts/*.js',
  output: {
    dir: 'dist',
    format: 'iife',
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    getBabelOutputPlugin({
      allowAllFormats: true,
      // ...
    }),
    multi(),
  ],
};

export default config;
