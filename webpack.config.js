'use strict';
let path = require('path'),
    webpack = require('webpack');

let config = {
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
            '$': 'jquery',
            'jQuery': 'jquery'
        })
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
};

if (process.env.NODE_ENV !== 'production') {
    config.devtool = 'source-map';
    config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
            'WEBPACK_ENV': '"dev"'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]);
} else {
    config.devtool = false;
    config.plugins = config.plugins.concat([
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

module.exports = config;
