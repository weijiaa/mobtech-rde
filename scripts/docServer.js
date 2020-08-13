const ora = require('ora');
const path = require('path');
const webpack = require('webpack');
const portfinder = require('portfinder');
const webpackDevServer = require('webpack-dev-server');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackDevConfig = require('../config/webpack.dev');
const { getIPAdress } = require('../utils');

const { components } = (function () {
  try {
    return require('../.docrc');
  } catch (error) {
    return {};
  }
})();


const devServer = webpackDevConfig.devServer;

const componentsPath = components && path.resolve(components);

webpackDevConfig.plugins.push(
  new webpack.DefinePlugin({
    COMPONENTS_PATHS: JSON.stringify(componentsPath)
  })
);

webpackDevConfig.plugins.push(
  new CopyWebpackPlugin(
    componentsPath
    ? [
        {
          from: componentsPath,
          to: componentsPath.split('/').pop()
        }
      ]
    : []
  )
);

webpackDevConfig.entry = {
  main: path.resolve(__dirname, '../docServer/main.js')
}

function server(port) {
  webpackDevConfig.plugins.push(new friendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        `You can now view ${path.basename(path.resolve(__dirname, '../'))} doc in the browser.

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
