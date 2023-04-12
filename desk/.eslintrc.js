module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    // "standard-with-typescript",
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '**/tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  ignorePatterns: ['src/commons/types/generated/types.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-new-object': 'error',
    'no-var': 'error',
    'no-array-constructor': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    'key-spacing': ['error', {beforeColon: false}]
  }
}
