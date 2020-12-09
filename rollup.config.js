import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import path from "path";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

const getPlugins = (format) => [
  peerDepsExternal(),
  resolve({ extensions }),
  common({
    include: 'node_modules/**',
    extensions: ['.js', '.ts'],
  }),
  typescript({ 
    typescript: require('typescript'),
    ...(format === 'cjs' && { tsconfigOverride: { compilerOptions: { declaration: false } } }),
    tsconfig: './tsconfig.json', clean: true
  }),
  babel({
    extensions,
    include: ['src/**/*'],
    runtimeHelpers: true
  }),
  url(), 
  svgr(),
];

export default [
  {
    input: './src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      sourcemap: true,
    },
    plugins: getPlugins("cjs"),
  },
  {
    input: './src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      format: 'esm',
      sourcemap: true,
    },
    plugins: getPlugins("esm"),
    preserveModules: true,
  },
];