const { resolve } = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

const isDev = process.env.NODE_ENV === 'development';

module.exports = () => {
    return {
        mode: isDev ? 'development' : 'production',
        entry: {
            ui: './src/ui.tsx',
            code: './src/code.ts',
        },
        output: {
            path: resolve(__dirname, 'build'),
            filename: '[name].js',
            publicPath: '/',
        },
        devtool: isDev && 'inline-source-map',
        stats: { all: false, errors: true, warnings: true, logging: 'warn', colors: true },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
            plugins: [PnpWebpackPlugin],
            alias: {
                '@components': resolve(__dirname, './src/components'),
                '@utils': resolve(__dirname, './src/utils'),
                '@icons': resolve(__dirname, './src/icons'),
            },
        },
        resolveLoader: {
            plugins: [PnpWebpackPlugin.moduleLoader(module)],
        },
        optimization: {
            minimizer: [new TerserWebpackPlugin({ cache: resolve(__dirname, '.yarn/cache') })],
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/typescript', '@emotion/babel-preset-css-prop'],
                        cacheDirectory: resolve(__dirname, '.yarn/cache'),
                    },
                },
                {
                    test: /\.svg$/,
                    loader: '@svgr/webpack',
                    options: { titleProp: true },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/ui.html',
                filename: 'ui.html',
                inlineSource: '.js$',
                chunks: ['ui'],
            }),
            new CleanWebpackPlugin({
                protectWebpackAssets: false,
                cleanAfterEveryBuildPatterns: ['ui.js'],
            }),
            new HtmlWebpackInlineSourcePlugin(),
            new WebpackBar({
                name: `${isDev ? 'Development' : 'Production'} Build`,
                color: isDev ? 'green' : 'blue',
            }),
        ],
    };
};
