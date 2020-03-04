const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

module.exports = webpackMerge(
  webpackCommonConfig
)