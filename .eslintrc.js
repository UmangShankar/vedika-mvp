/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: ['@next/next'],
  extends: ['plugin:@next/next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'error',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
