const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.config');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge.merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevMod && 'webpack-hot-middleware/client', path.resolve(__dirname,'../src/app.js'),
  ].filter(Boolean),

  plugins: [new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
