const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

process.env.NODE_ENV = 'development';

const devServer = {
  port: 3000,
  host: '0.0.0.0',
  hot: true,
  quiet: true,
  inline: true,
  noInfo: true,
  compress: true,
  clientLogLevel: 'none',
  historyApiFallback: true,
  disableHostCheck: true,
}

const webpackConfig = webpackMerge(
  webpackCommonConfig,
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'static/js/[name].js'
    },
    devServer,
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
);

module.exports = webpackConfig;
