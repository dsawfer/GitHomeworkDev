export default [{
    ignores: ['**/node_modules', '**/dist', '**/public'],
    rules: {
        'no-unused-vars': 'error',
        'object-shorthand': ['error', 'always'],
        'curly': ['error', 'all'],
        'no-redeclare': 'error',
        'quotes': ['error', 'single'],
        'prefer-const': 'error',
        'eqeqeq': ['error', 'always'],
        'no-unreachable': 'error'
    }
}];