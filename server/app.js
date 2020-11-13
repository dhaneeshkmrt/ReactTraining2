const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack'); 
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = require('./webpack.index');

  const compile = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compile));
  app.use(webpackHotMiddleware(compile.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compile));  
} else {
  const serverRenderer = require('../public/js/serverRenderer').default;

  app.use(express.static('/public'));
  app.use(serverRenderer());
}

module.exports = app;
