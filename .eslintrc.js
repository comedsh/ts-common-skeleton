module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    mocha: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'prettier/prettier': 'error'
  }
};
