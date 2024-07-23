const path = require('path')

module.exports = {
    entry : './src/index.js',
    output : {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: 'index.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}