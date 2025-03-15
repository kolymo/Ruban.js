import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: path.resolve(__dirname, 'src/main.js'), // Entry point
  output: [
    {
      file: path.resolve(__dirname, 'dist/ruban.min.js'),
      format: 'umd', // Universal Module Definition
      name: 'Ruban', // Global variable name in browser
      sourcemap: true,
      plugins: [terser()], // Minify the UMD build
    },
    {
      file: path.resolve(__dirname, 'dist/ruban.esm.js'),
      format: 'esm', // ES module build for bundlers
      sourcemap: true, // Include sourcemap for debugging
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js'], // Resolve .js files
    }),
    babel({
      exclude: 'node_modules/**', // Exclude transpiling dependencies
      presets: ['@babel/preset-env'], // Use modern JavaScript presets
    }),
  ],
  external: [], // Exclude external dependencies
};
