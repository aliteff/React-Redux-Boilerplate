var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test2: /\.js$/,
                loaders: ['shebang'],
                include: '/node_modules/nodent/'
            },
            {
                test: /\.json$/,
                loaders: ['json-loader'],
                // include: '/node_modules/'
                // exclude: /node_modules/
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader',
                // include: '/node_modules/jsoneditor/'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
