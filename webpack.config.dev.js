var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'koa-webpack-hot-middleware',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
                path.resolve(__dirname, "src"),
            ],
        }],
        loaders: [{
            test: /\.js$/,
            plugins: ['transform-runtime'],
            loaders: ['babel-loader'],
            include: [
                path.resolve(__dirname, "src")
            ],
            exclude: /node_modules/
        }]
    }
}
