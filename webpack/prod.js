/**
 * Created by ktran on 4/14/2017.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const out_dir = __dirname+'/../dist';
module.exports = {
    entry: {
        javascript: './client/App.js',
        vendor: ['react',
            'react-dom'],
        html: './client/index.html'
    },
    output: {
        path: out_dir+"/",
        filename: 'bundle.js',
        sourceMapFilename : "[file].map"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
        }),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader','css-loader']
            }
        ],
        resolve: {
            modulesDirectories: [ 'node_modules' ],
            extensions: [ '', '.js', '.jsx' ]
        }
    },
    devtool: 'source-map',
    devServer: {
        inline:true,
        port: 8000,
        contentBase: path.resolve(__dirname, '../dist')
    }
}