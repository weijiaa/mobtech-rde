const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommonConfig = require('./webpack.common');
const manifest = require('../dll/manifest.json');
const { getFiles } = require('./utils');

process.env.NODE_ENV = 'production';

const copyFilePaths = getFiles(path.resolve(__dirname, '../public'), ['index.html']);
const codeString =  `
  <% for (var js in htmlWebpackPlugin.options.DLLlBuildJSON) {
    %>
      <script src="vendor/<%= htmlWebpackPlugin.options.DLLlBuildJSON[js].js %>"></script>
    <%
  } %>
`;

const webpackConfig = {
  mode: 'production',
  performance: {
    hints: false
  },
  entry: path.resolve(__dirname, '../src/main.public.js'),
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../public_build')
  },
  resolve: webpackCommonConfig.resolve,
  module: webpackCommonConfig.module,
  plugins: [
    new webpack.DefinePlugin({
      RUNTIME_ENV: JSON.stringify(process.env.RUNTIME_ENV)
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      ...copyFilePaths.map(filename => {
        return {
          from: path.resolve(__dirname, `../public/${filename}`),
          to: filename
        }
      })
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      codeString
    }),
    new webpack.DllReferencePlugin({ manifest })
  ] 
}

module.exports = webpackConfig;
