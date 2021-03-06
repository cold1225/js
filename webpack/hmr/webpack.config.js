const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: [
        // path.resolve('./webpack-dev-server/client/index.js'),
        // path.resolve('./webpack/hot/dev-server.js'),
        './src/index.js'
    ],
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // hotUpdateGlobal: 'webpackHotUpdate'
    },
    devServer: {
        port: 9000,
        hot: true,
        // contentBase: path.resolve(__dirname, 'static'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 可写可不写 hot为true webpack-dev-server会自动引入
        new HotModuleReplacementPlugin()
    ]
}