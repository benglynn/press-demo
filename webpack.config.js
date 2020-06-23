const path = require('path')
const { createPressWebpack } = require('@benglynn/press')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const filters = require('./filters')

module.exports = {
    mode: 'development',
    entry: { app: './app/app.js' },
    devtool: 'source-map',
    plugins: [
        createPressWebpack({
            markdownDirectory: path.join(__dirname, './markdown'),
            templateDirectory: path.join(__dirname, './templates'),
            // extraContext:  { filters }
        }),
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep']
        }),
    ]
}