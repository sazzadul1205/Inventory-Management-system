// eslint.config.js

// Js configs
import js from '@eslint/js';

// Globals

// TypeScript

// Eslint plugins
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    // -------------------------
    // Base
    // -------------------------
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx'],
    })),

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // -------------------------
    // React
    // -------------------------
    react.configs.flat.recommended,

    // -------------------------
    // Main Config (JS/JSX)
    // -------------------------
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
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
            'react-hooks': reactHooks,
        },
 
        rules: {
            // -------------------------
            // React
            // -------------------------
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-no-useless-fragment': 'error',
            'react/self-closing-comp': 'warn',
            'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
            'react/jsx-no-undef': 'error',

            // -------------------------
            // Hooks (critical)
            // -------------------------
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // -------------------------
            // Imports
            // -------------------------
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always-and-inside-groups',
                },
            ],

            'import/no-cycle': 'error',
            'import/no-duplicates': 'error',
            'import/named': 'error',
            'import/default': 'warn',
            'import/namespace': 'warn',
            'import/no-named-as-default': 'warn',
            'import/no-named-as-default-member': 'warn',
            'import/newline-after-import': 'off',

            // -------------------------
            // Unused
            // -------------------------
            'unused-imports/no-unused-imports': 'warn',

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
            'no-undef': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'prefer-template': 'error',
            'object-shorthand': 'error',
        },
    },

    // -------------------------
    // Main Config (TS/TSX)
    // -------------------------
    {
        files: ['**/*.ts', '**/*.tsx'],
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
            'react-hooks': reactHooks,
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

            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

            // -------------------------
            // React
            // -------------------------
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-no-useless-fragment': 'error',
            'react/self-closing-comp': 'warn',
            'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
            'react/jsx-no-undef': 'error',

            // -------------------------
            // Hooks (critical)
            // -------------------------
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // -------------------------
            // Imports
            // -------------------------
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always-and-inside-groups',
                },
            ],

            'import/no-cycle': 'error',
            'import/no-duplicates': 'error',
            'import/named': 'error',
            'import/default': 'warn',
            'import/namespace': 'warn',
            'import/no-named-as-default': 'warn',
            'import/no-named-as-default-member': 'warn',
            'import/newline-after-import': 'off',

            // -------------------------
            // Unused
            // -------------------------
            'unused-imports/no-unused-imports': 'warn',

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
            'no-undef': 'error',
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
