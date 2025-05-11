module.exports = {
    presets: [
        [
            '@vue/app',
            {
                polyfills: ['es6.promise', 'es6.symbol']
            }
        ]
    ],
    plugins: [
        '@babel/transform-modules-commonjs',
        '@babel/plugin-transform-destructuring'
    ]
}
