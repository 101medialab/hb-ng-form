'use strict';
const path = require('path');
const webpack = require('webpack');
const OptimizeJsPlugin = require('optimize-js-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

let configs = [{
    mode: "development",
    entry: {
        'main': './src/HbFormModule.ts',
        'demo': './demo/script/boot.ts'
    },
    context: path.join(process.cwd(), '.'),
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            use: 'html-loader?minimize=false'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(process.cwd(), '.')
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(process.cwd(), '.')
        ],
        alias: {
            'jquery': require.resolve('jquery'),
        },
        extensions: ['.ts', '.js']
    },
    stats: 'errors-only'
}, {
    name: 'styles',
    entry: {
        'main': './src/styles/main.scss',
        'demo': './demo/styles/main.scss',
    },
    output: {
        path: path.join(process.cwd(), 'dist/styles'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new LiveReloadPlugin()
    ],
}];

if (process.env.NODE_ENV !== 'production') {
    configs[0].devtool = false;
    // 'source-map';
    // config.plugins = config.plugins.concat([
    //     new webpack.DefinePlugin({
    //         'WEBPACK_ENV': '"dev"'
    //     }),
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ]);
} else {
    configs[0].devtool = false;
    configs[0].plugins = configs[0].plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false,
            },
            comments: false,
            sourceMap: false,
        }),
        new OptimizeJsPlugin({
            sourceMap: false,
        }),
        new webpack.DefinePlugin({
            WEBPACK_ENV: '"production"',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_debugger: false
            }
        })
    ]);
}

module.exports = configs;
