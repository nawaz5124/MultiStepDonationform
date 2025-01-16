module.exports = {
    extends: ['next/core-web-vitals', 'eslint:recommended'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '@{components,content,services,styles}/*',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  };