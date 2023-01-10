module.exports = {
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': ['off'],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true
  }
}
