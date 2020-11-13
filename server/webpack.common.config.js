const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // { test: /\.s[ac]ss$/i, include: '/src', use:['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(scss)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
