const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

process.env.NODE_ENV = 'development';

module.exports = webpackMerge(
  webpackCommonConfig,
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'static/js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/,
          use: [ 'style-loader', 'css-loader', 'postcss-loader', 'less-loader' ]
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)
