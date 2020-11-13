const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.config');

// console.log(merge.merge);
module.exports = merge.merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/server-renderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
});
