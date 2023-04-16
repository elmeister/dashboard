// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unicorn', 'promise'],
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:unicorn/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'max-len': [2, 120],
    semi: [2, 'never'],
    'unicorn/filename-case': [
      2,
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ['^react-app-env.d.ts$'],
      },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Packages. `react` related packages come first.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^react', '^@?\\w'],
          // Absolute imports
          [
            '^pages(/.*|$)',
            '^(containers|shared|utils)(/.*|$)',
            '^assets(/.*|$)',
          ],
          // ../ imports
          [
            '^\\../',
            '^\\./Modal',
            '^\\./',
            '^\\./types',
            '^\\./constants',
            '^\\./functions',
            '^\\./use',
          ],
          // for scss imports.
          ['^[^.]'],
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    tailwindcss: {
      whitelist: ['ph', 'ph\\-.+', 'ktl\\-.+', 'border-transparent'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {},
    },
  ],
};
