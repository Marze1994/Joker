module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    amd: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  plugins: ['vue'],
  extends: ['plugin:vue/base'],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
