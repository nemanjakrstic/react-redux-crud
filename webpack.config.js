const path = require('path')

const config = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js'
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}

module.exports = config
