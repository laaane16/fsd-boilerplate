module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,

    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'no-console': 'error',
    'no-alert': 'error',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/no-unused-vars': 'warn',

    'import/order': 'off',

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
