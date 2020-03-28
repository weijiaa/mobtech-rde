const os = require('os');
const ora = require('ora');
const path = require('path');
const webpack = require('webpack');
const portfinder = require('portfinder');
const webpackDevServer = require('webpack-dev-server');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackDevConfig = require('../config/webpack.dev');
const devServer = webpackDevConfig.devServer;

function getIPAdress() {
  let address = '127.0.0.1';
  const interfaces = os.networkInterfaces();

  for (let devName in interfaces) {
    interfaces[devName].forEach((alias) => {
      if (
        alias.family === 'IPv4'
        && alias.address !== '127.0.0.1'
        && !alias.internal
      ) {
        address = alias.address;
      }
    });
  }

  return address;
}

function server(port) {
  webpackDevConfig.plugins.push(new friendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        `You can now view ${path.basename(path.resolve(__dirname, '../'))} in the browser.

        Local:            http://${'0.0.0.0'}:${port}
        On Yuer NetWork:  http://${getIPAdress()}:${port}`,
      ]
    }
  }));
  const compiler = webpack(webpackDevConfig);
  new webpackDevServer(compiler, devServer).listen(port);
}

const spinner = ora('启动中...');
spinner.start();

portfinder.basePort = devServer.port;
portfinder.getPortPromise().then(server);

spinner.stop()
