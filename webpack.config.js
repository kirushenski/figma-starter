const { resolve } = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
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
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            plugins: [PnpWebpackPlugin],
            alias: {
                '@components': resolve(__dirname, './src/client/components'),
                '@scripts': resolve(__dirname, './src/client/scripts'),
                '@images': resolve(__dirname, './src/client/images'),
                '@icons': resolve(__dirname, './src/client/images/icons'),
            },
        },
        resolveLoader: {
            plugins: [PnpWebpackPlugin.moduleLoader(module)],
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/typescript', '@emotion/babel-preset-css-prop'],
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.svg$/,
                    loader: '@svgr/webpack',
                    options: { titleProp: true },
                },
                {
                    test: /\.(jpe?g|png)$/,
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        limit: 1024,
                    },
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
            new HtmlWebpackInlineSourcePlugin(),
            new WebpackBar({
                name: `${isDev ? 'Development' : 'Production'} Build`,
                color: isDev ? 'green' : 'blue',
            }),
        ],
    };
};
