const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = webpackMerge(
  webpackCommonConfig,
  {
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
)