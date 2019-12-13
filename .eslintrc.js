module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-extend-native': 'off',
        'no-new': 'off',
        camelcase: 0,
        'no-useless-escape': 'off',
        'vue/return-in-computed-property': 'off',
        'space-before-function-paren': 0,
        'no-tabs': 0,
        'new-cap': 0,
        'comma-dangle': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
