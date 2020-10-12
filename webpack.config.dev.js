const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist',
    publicPath:'/',
  },
  devtool: 'eval-source-map',
  performance: {
    maxAssetSize: 600000,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js)?$/, use: 'babel-loader', },
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}