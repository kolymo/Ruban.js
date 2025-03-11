// rollup.config.js
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
  input: path.resolve(__dirname, 'src/index.js'), // entry point
  output: [
    /* {
      file: path.resolve(__dirname, 'dist/ruban.esm.js'),
      format: 'esm', // ES module build for bundlers
      sourcemap: false, // Include sourcemap for debugging
    }, */
    {
      file: path.resolve(__dirname, 'dist/ruban.min.js'),
      format: 'umd', // Universal Module Definition (works with AMD, CommonJS, global)
      name: 'Ruban', // Global variable name in browser
      sourcemap: true,
      plugins: [terser()], // Minify the UMD build
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**', // Exclude transpiling dependencies
      presets: ['@babel/preset-env'], // Use modern JavaScript presets
    }),
  ],
  external: [], // Exclude external dependencies (if any, like jQuery or Lodash)
};
