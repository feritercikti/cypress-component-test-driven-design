module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'chai-friendly', 'no-only-tests'],
  extends: [
    // 'react-app', // error: ESLint couldn't determine the plugin "@typescript-eslint" uniquely.
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: 'true',
      },
    ],
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
