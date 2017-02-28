var webpack = require('webpack');
var path = require('path');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:path.resolve( __dirname+ '/app/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline:true,
        contentBase:path.resolve(__dirname,'./app')
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    }/*,
    plugins: [new openBrowserWebpackPlugin({url: 'http://localhost:8080'})
    ]*/
};
