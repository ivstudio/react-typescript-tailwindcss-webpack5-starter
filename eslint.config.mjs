import eslintGlobals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: ['node_modules/', 'dist/'],
        languageOptions: {
            parser: tsParser,
            globals: {
                ...eslintGlobals.browser,
                ...eslintGlobals.jest,
            },
        },
        plugins: {
            js: pluginJs,
            ts: pluginTs,
            react: pluginReact,
            tailwindcss: pluginTailwindcss,
            prettier: pluginPrettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...pluginTs.configs.recommended.rules,
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginTailwindcss.configs.recommended.rules,
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
