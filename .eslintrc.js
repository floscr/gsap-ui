module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  globals: { },
  rules: {
    'no-unused-vars': [1, { varsIgnorePattern: 'h' }]
  }
}
