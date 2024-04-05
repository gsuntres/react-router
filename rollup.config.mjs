import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'

export default {
  input: 'src/index.mjs',
  output: {
    file: '.dist/index.js',
    format: 'esm',
    globals: {
      react: 'React'
    }
  },
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    commonjs(),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      plugins: ['annotate-pure-calls'],
    })
  ]
}

