const path = require('path');

module.exports = {
    /*devtool: "source-map",*/
    context: path.join(__dirname, "src"),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    watch: true,
    /*devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: true
    },*/
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
};