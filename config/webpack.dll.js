const path    = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const { dependencies } = require('../package.json');

const initialToUpperCase = str => {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

const convertCamelback = string => {
  return string
    .split('-')
    .map((str, idx) => idx ? initialToUpperCase(str) : str)
    .join('')
}

const entry = (function (){
  const pageMap = {};
  Object
    .keys(dependencies || {})
    .forEach(pageName => pageMap[convertCamelback(pageName)] = [pageName]);

  return pageMap;
})();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: entry,
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
