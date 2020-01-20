module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 120 }] // defaults in https://eslint.org/docs/rules/max-len
  }
};
