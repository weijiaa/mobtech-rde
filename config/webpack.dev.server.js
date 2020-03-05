const path = require('path');

module.exports = {
  port: 3000,
  host: '0.0.0.0',
  hot: true,
  quiet: true,
  inline: true,
  noInfo: true,
  compress: true,
  contentBase: path.resolve(__dirname, '../dist'),
  clientLogLevel: 'none',
  historyApiFallback: true
}
