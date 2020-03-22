const path = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { dependencies } = require('../package.json');

module.exports = {
  mode: 'production',
  performance: {
    hints: false
  },
  entry: {
    vendor: Object.keys(dependencies || {})
  },
  output: {
    path: path.resolve(__dirname, '../dll/vendor'),
    filename: '[name].dll.[contenthash:8].js',
    library: '[name]_dll_'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]_dll_',
      path: path.join(__dirname, '../dll/manifest.json')
    }),
    new AssetsWebpackPlugin({
      path: path.resolve(__dirname, '../dll'),
      filename: 'build.config.json'
    })
  ]
}
