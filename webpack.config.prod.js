const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { test: /\.(js)?$/, use: 'babel-loader' },
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:['/dist']}),
  ],
  performance: {
    maxAssetSize: 600000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}