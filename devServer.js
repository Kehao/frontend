'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const config = require('./config')

let port = process.env.PORT || config.dev.port

const server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
})

server.listen(port, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }
})

console.log('Listening at http://localhost:' + port + '\n')
