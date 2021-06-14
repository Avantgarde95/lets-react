const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getAbsolutePath(...paths) {
    return path.resolve(__dirname, ...paths);
}

module.exports = (env, argv) => {
    const isDebugMode = !argv || argv.mode === 'development';
    const srcPath = 'src';
    const outPath = 'docs';

    return {
        mode: 'development',
        entry: getAbsolutePath(srcPath, 'Page.tsx'),
        devtool: isDebugMode ? 'inline-source-map' : false,
        target: ['web', 'es3'],
        output: {
            path: getAbsolutePath(outPath),
            filename: '[name].[contenthash].js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            modules: ['node_modules', getAbsolutePath('src')],
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                // ts-loader 대신 babel-loader + TypeScript preset으로도 가능.
                { test: /\.tsx?$/, use: 'ts-loader' },
                { test: /\.(css|scss)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
                { test: /\.svg$/, loader: '@svgr/webpack' },
                // raw-loader: Deprecated in Webpack 5.
                { test: /\.md$/, type: 'asset/source' }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: getAbsolutePath(srcPath, 'Template.html'),
                filename: getAbsolutePath(outPath, 'index.html'),
                favicon: getAbsolutePath(srcPath, 'image/PageIcon.ico')
            })
        ]
    };
};
