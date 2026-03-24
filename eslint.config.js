// eslint.config.js

// Js configs
import js from '@eslint/js';

// Globals
import globals from 'globals';

// TypeScript
import tseslint from 'typescript-eslint';

// Eslint plugins
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
    // -------------------------
    // Base
    // -------------------------
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,

    // -------------------------
    // React
    // -------------------------
    react.configs.flat.recommended,
    reactHooks.configs['recommended-latest'],

    // -------------------------
    // Main Config
    // -------------------------
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        plugins: {
            import: importPlugin,
            'unused-imports': unusedImports,
        },

        rules: {
            // -------------------------
            // TypeScript (strict but practical)
            // -------------------------
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',

            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
            ],

            // -------------------------
            // React
            // -------------------------
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-no-useless-fragment': 'error',
            'react/self-closing-comp': 'warn',
            'react/jsx-curly-brace-presence': [
                'error',
                { props: 'never', children: 'never' },
            ],

            // -------------------------
            // Hooks (critical)
            // -------------------------
            'react-hooks/exhaustive-deps': 'warn',

            // -------------------------
            // Imports
            // -------------------------
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                },
            ],

            'import/no-cycle': 'error',
            'import/no-duplicates': 'error',

            // -------------------------
            // Unused
            // -------------------------
            'unused-imports/no-unused-imports': 'error',

            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // -------------------------
            // Code quality
            // -------------------------
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'prefer-template': 'error',
            'object-shorthand': 'error',
        },
    },

    // -------------------------
    // Ignore
    // -------------------------
    {
        ignores: [
            '**/node_modules/**',
            '**/vendor/**',
            '**/public/**',
            '**/build/**',
            '**/dist/**',
            '**/*.min.*',
            'vite.config.*',
            'tailwind.config.*',
        ],
    },

    // -------------------------
    // Prettier LAST
    // -------------------------
    prettier,
];
