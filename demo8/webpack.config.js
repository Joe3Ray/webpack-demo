var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};
