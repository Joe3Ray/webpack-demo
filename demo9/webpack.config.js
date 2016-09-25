var webpack = require('webpack');
var flags = new webpack.DefinePlugin({
    __PROD__: JSON.stringify(JSON.parse(process.env.PROD || 'false'))
});

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [flags]
};
