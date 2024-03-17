/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    '@vue/eslint-config-typescript/recommended',
    'plugin:tailwindcss/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.app.json', 'tsconfig.node.json', 'tsconfig.vitest.json'],
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js', './**/*.jsx', './**/*.cjs', './**/*.mjs'],
    },
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
  },
};
