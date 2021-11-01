const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Not a vue app'
           //  args[0] contains the plugin's options object
          // change it to what you need it to be.
          return args
        })
    }
  }