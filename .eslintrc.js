module.exports = {
  extends: ['standard', 'plugin:vue/recommended'], // extending recommended config and config derived from eslint-config-prettier
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    amd: true
  },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['warn', 2],
    'vue/html-indent': ['warn', 2],
    'vue/script-indent': ['warn', 2],
    'vue/no-v-html': 'off'
  }
}
