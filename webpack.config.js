var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
        ]
    },

    entry: './src/js/demo.js',
    output: {
        path: __dirname + "/dist/js",
        filename: 'demo.js'
    }

};