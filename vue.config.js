const config = require('./src/helpers/config')
const path = require('path')

module.exports = {
    css: {
        sourceMap: true
    },
    transpileDependencies: ['uikit'],
    configureWebpack: {
        devServer: {
            port: config.port
        },
        devtool: 'source-map',
        plugins: [],
        output: {
            filename: '[name].[hash].js'
        }
    },
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: path.join(__dirname, 'src/helpers/serviceWorkerListener.js'),
            swDest: 'service-worker.js'
        }
    }
}
