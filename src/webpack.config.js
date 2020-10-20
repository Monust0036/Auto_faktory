var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.html',
    output: {
        path: BUILD_DIR,
        filename: 'html'
    },
    module : {
        loaders : [
            {
                test : /\.html$/,
                include : APP_DIR,
                loader : 'html'
            }
        ]
    },
    
};

module.exports = config;


