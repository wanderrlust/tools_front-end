import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-console': 'warn',
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
    },
  },
  js.configs.recommended,
  prettier,
];
