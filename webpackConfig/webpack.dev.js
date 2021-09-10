const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        open: true,
        host: '0.0.0.0',
        port: 8888,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/indexDev.html',
            favicon: './public/favicon.ico',
        }),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
};

module.exports = (env) => {
    return merge(commonConfig, devConfig);
};
