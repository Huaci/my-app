const path = require('path');
const utils = require('./utils');
const config = require('../config');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'routes': resolve('src/routes'),
            'views': resolve('src/views'),
            '$redux': resolve('src/redux')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    // Using source maps breaks urls in the CSS loader
                    // https://github.com/webpack/css-loader/issues/232
                    // This comment solves it, but breaks testing from a local network
                    // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
                    // 'css-loader?sourceMap',
                    'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    }
};
