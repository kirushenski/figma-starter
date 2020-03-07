module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react-hooks'],
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        figma: 'readonly',
        __html__: 'readonly',
        parent: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
    },
};
