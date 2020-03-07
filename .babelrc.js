module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    "@babel/preset-env"
  ];

  const plugins = [
    ["@babel/plugin-transform-runtime", { "corejs": 2 }],
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }]
  ];

  return {
    presets,
    plugins
  };
}
