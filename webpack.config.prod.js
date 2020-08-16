const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');
// const dotenv = require('dotenv');

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
      { test: /\.(css)?$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin(['dist']),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}