const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = webpackMerge(
  webpackCommonConfig,
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'static/js/[name].js'
    }
  }
)
