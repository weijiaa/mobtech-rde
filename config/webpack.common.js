const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const manifest = require('../dll/manifest.json');
const DLLlBuildJSON = require('../dll/build.config.json');

const copyFilePaths = fs
  .readdirSync(path.resolve(__dirname, '../public'))
  .filter(filename => filename !== 'index.html');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    modules: [path.resolve(__dirname, '../node_modules')],
    extensions: ['.json', '.js', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'static/images'
          }
        }]
      },
      {
        test: /\.(mp3|mp4|webm|ogg|wav|flac|aac)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'static/media'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'static/font'
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, `../dll/vendor`),
          to: 'vendor'
        },
        ...copyFilePaths.map(filename => {
          return {
            from: path.resolve(__dirname, `../public/${filename}`),
            to: filename
          }
        })
      ]
    ),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      DLLlBuildJSON
    }),
    new webpack.DllReferencePlugin({ manifest })
  ]
}
