const express = require('express');
var app = express();
const path = require('path');
app.use(require('connect-history-api-fallback')()); //node服务用来判断是不是http请求，然后来决定是否访问下面的index.html文件，否则就请求不到页面
app.use(express.static(path.join(__dirname, '/dist'))); //配置静态地址，不配置这个话，直接让端口监听下面的地址是访问不到的。

app.listen(8888, function (err) { //创建node的监听服务，配置端口
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:8888');
});
