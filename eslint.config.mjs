import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: [
            '.config/*',
            'webpack/*',
            'dist/*',
            'coverage/*',
            'node_modules',
        ],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react'],
                        // third-party imports
                        ['^@?\\w'],
                        // absolute imports
                        ['^'],
                        // relative imports
                        ['^\\.'],
                        // styles and types
                        ['^(styles|types)(/.*|$)'],
                        // CSS imports
                        ['^.+\\.css$'],
                    ],
                },
            ],
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'no-duplicate-imports': 'error',
            'no-redeclare': 'error',
            'react/prefer-stateless-function': 'error',
            'react/no-unused-prop-types': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-no-script-url': 'error',
            'react/no-children-prop': 'error',
            'react/no-danger': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-unstable-nested-components': [
                'error',
                { allowAsProps: true },
            ],
            'react/jsx-fragments': 'error',
            'react/destructuring-assignment': [
                'error',
                'always',
                { destructureInSignature: 'always' },
            ],
            'react/jsx-no-leaked-render': [
                'error',
                { validStrategies: ['ternary'] },
            ],
            'react/jsx-max-depth': ['error', { max: 5 }],
            'react/function-component-definition': [
                'warn',
                { namedComponents: 'arrow-function' },
            ],
            'react/jsx-key': [
                'error',
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ],
            'react/jsx-no-useless-fragment': 'warn',
            'react/jsx-curly-brace-presence': 'warn',
            'react/no-typos': 'warn',
            'react/display-name': 'warn',
            'react/self-closing-comp': 'warn',
            'react/jsx-sort-props': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/prop-types': 'off',
        },
    },
];
