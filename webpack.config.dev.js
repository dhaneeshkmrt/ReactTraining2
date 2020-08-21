const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.(js)?$/, use: 'babel-loader' },
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}