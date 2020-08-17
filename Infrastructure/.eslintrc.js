module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  rules: {}
}
