var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: './public',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.png$/,
                loader: 'file?prefix=img/'
            },
            {
                test: /\.less$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                loader: 'style!css!less'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        colors: true,
        progress: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};
