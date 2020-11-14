
const path = require("path");

// This is main configuration object that tells Webpackw what to do. 
module.exports = {
    watch: true,
    //path to entry paint
    entry: './src/Game.js',
    //path and filename of the final output
    output: {
        path:path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    devServer :{
        contentBase:path.resolve(__dirname,"dist"),
        open:true
    },
    
    //default mode is production
    mode: 'development'
}