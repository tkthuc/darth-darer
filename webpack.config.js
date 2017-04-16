/**
 * Created by ktran on 4/14/2017.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const out_dir = __dirname+'/dist';

module.exports = {
    entry: {
        javascript: './client/App.js',
        vendor: ['react',
            'react-dom']        
    },
    output: {
        path: out_dir+"/",
        filename: 'bundle.js',
        sourceMapFilename : "[file].map"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new HtmlWebpackPlugin({
            template:'client/index.ejs',
            inject: 'body'
        })
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
                loaders: [ 'style-loader']
            },
            {
                test: /\.css$/,
                loaders: ['css-loader'],
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
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
        contentBase: path.resolve(__dirname, '/dist')
    }
}