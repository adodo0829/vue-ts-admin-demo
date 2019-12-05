const path = require('path')
const name = '兔兔后台管理系统'

module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    config.set('name', name)
  }
}
