var webpack = require('webpack');

module.exports = {
    entry: {
        index: './index.js',
        main: './main.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};
