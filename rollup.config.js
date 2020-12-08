import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    common({
      include: 'node_modules/**'
    }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    url(), 
    svgr()
  ],
  output: [
    {
      file: pkg.main,
      format: 'es'
    }
  ]
};