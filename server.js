const express = require('express');
var webpack = require('webpack');
        app = express();
const path = require('path');
const config = require('./config/config');
var WebpackDevServer = require('webpack-dev-server');
var webConfig = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');



app.use(require('connect-history-api-fallback')()); //node服务用来判断是不是http请求，然后来决定是否访问下面的index.html文件，否则就请求不到页面
app.use(express.static(path.join(__dirname, '/dist'))); //配置静态地址，不配置这个话，直接让端口监听下面的地址是访问不到的。
app.get(['/*'], function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
console.log('webConfig.output.path',webConfig.output.path)
new WebpackDevServer(webpack(webConfig), {
  publicPath: webConfig.output.path,
  hot: true,
  historyApiFallback: true
}).listen(config.port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:'+config.port)
});
