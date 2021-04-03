import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';
import autoprefixer from 'autoprefixer';
import bundleSize from 'rollup-plugin-bundle-size';
// import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === 'production';

const input = 'src/index.ts';

const plugins = [
  bundleSize(),
  typescript({
    clean: false,
  }),
  postcss({
    minimize: false,
    plugins: [autoprefixer],
  }),
  // terser()
];

const external = [...Object.keys(pkg.peerDependencies || {})];

const esmOutput = {
  input,
  output: {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },
  plugins,
  external,
};

const cjsOutput = {
  input,
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins,
  external,
};

export default isProd ? [cjsOutput, esmOutput] : [cjsOutput];
