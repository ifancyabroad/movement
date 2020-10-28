const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require.resolve('autoprefixer')
                            ]
                        }
                    }
                },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
};