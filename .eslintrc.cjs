module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:unicorn/all',
    ],
    root: true,
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: './',
    },
    ignorePatterns: ['dist', 'node_modules', 'src/vite-env.d.ts', 'src/example.ts'],
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        node: true,
        es6: true,
        browser: true,
        jest: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.js'],
            rules: {
                'no-console': [
                    'error',
                    {
                        allow: ['error'],
                    },
                ],
                '@typescript-eslint/no-magic-numbers': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/indent': 'off',
                'arrow-body-style': ['error', 'as-needed'],
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true,
                    },
                ],
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/consistent-type-imports': ['error'],
                'no-restricted-syntax': 'off',
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            camelCase: true,
                            pascalCase: true,
                        },
                    },
                ],
                'unicorn/prevent-abbreviations': [
                    'error',
                    {
                        ignore: ['Props', '\\.e2e.test$'],
                    },
                ],
                'unicorn/no-null': 'off',
                'unicorn/no-keyword-prefix': 'off',
                'react/jsx-filename-extension': 'off'
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
            },
        },
        {
            files: ['*.js'],
            rules: {
                'unicorn/prefer-module': 'off',
            },
        },
    ],
};
