const config = require('./src/helpers/config')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const path = require('path');
let plugins = [];

if (config.isDev) {
    plugins = plugins.concat([
        new WebpackBuildNotifierPlugin({
            title: "Strange Build Notification",
            logo: path.join(__dirname, 'src/icons/favicon.jpg'),
            sound: false,
            suppressCompileStart: false,
        }),
    ]);
}

module.exports = {
    css: {
        sourceMap: true
    },
    transpileDependencies: ['uikit'],
    configureWebpack: {
        devServer: {
            port: config.port,
        },
        devtool: 'source-map',
        plugins,
        output: {
            filename: '[name].[hash].js',
        },
    },
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: path.join(__dirname, 'src/helpers/serviceWorkerListener.js'),
            swDest: 'service-worker.js',
        },
    },
};

