module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'global-require': 0,
    'comma-dangle': ['error', 'only-multiline'],
    quotes: [2, 'single', {avoidEscape: true}],
    'linebreak-style': ['error', 'windows'],
    'import/no-dynamic-require': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
