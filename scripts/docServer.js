const ora = require('ora');
const path = require('path');
const webpack = require('webpack');
const portfinder = require('portfinder');
const webpackDevServer = require('webpack-dev-server');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpackDevConfig = require('../config/webpack.dev');
const docConfig = require('../doc.config');
const devServer = webpackDevConfig.devServer;
const { getIPAdress } = require('../utils');

const componentsPaths = (docConfig.components || []).map(p => path.resolve('./', p));

webpackDevConfig.plugins.push(
  new webpack.DefinePlugin({
    COMPONENTS_PATHS: JSON.stringify(componentsPaths)
  })
);

webpackDevConfig.plugins.push(
  new CopyWebpackPlugin(
    componentsPaths.map(p => (
      {
        from: p,
        to: p.split('/').pop()
      }
    ))
  )
);

console.log(docConfig.components);

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
