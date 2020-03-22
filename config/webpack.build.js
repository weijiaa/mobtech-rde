const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = webpackMerge(
  webpackCommonConfig,
  {
    mode: 'production',
    performance: {
      hints: false
    },
    output: {
      filename: 'static/js/[name].[contenthash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../../'
              }
            },
            'css-loader',
            'less-loader'
          ]
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/style/[name].[contenthash:8].css',
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }
)
