const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                return [{
                    title: 'Not-vue-app',
                }]
            })
    }
}