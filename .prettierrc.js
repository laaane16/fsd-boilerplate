export default {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  tabWidth: 2,
  semi: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^@?\\w',

    '^@/app/(.*)$',
    '^@/pages/(.*)$',
    '^@/widgets/(.*)$',
    '^@/features/(.*)$',
    '^@/entities/(.*)$',
    '^@/shared/(.*)$',

    '^[./](?!.*\\.(css|scss|less)$)',

    '^.+\\.module\\.(css|scss|less)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
